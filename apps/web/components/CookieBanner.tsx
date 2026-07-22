"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
  const consent = localStorage.getItem("ht_cookie_consent");

  if (!consent) {
    setShow(true);

    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }
}, []);

  const closeBanner = () => {
  setAnimate(false);

  setTimeout(() => {
    setShow(false);
  }, 250);
};

const acceptCookies = () => {
  const expire = new Date();

  expire.setDate(expire.getDate() + 180);

  localStorage.setItem("ht_cookie_consent", "accepted");
  localStorage.setItem(
    "ht_cookie_expiry",
    expire.toISOString()
  );

  closeBanner();
};

const rejectCookies = () => {
  const expire = new Date();

  expire.setDate(expire.getDate() + 180);

  localStorage.setItem("ht_cookie_consent", "rejected");
  localStorage.setItem(
    "ht_cookie_expiry",
    expire.toISOString()
  );

  closeBanner();
};
<div
  style={{
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.35)",
    backdropFilter: "blur(3px)",
    zIndex: 999998,
    opacity: animate ? 1 : 0,
    transition: "all .25s ease",
  }}
/>
  if (!show) return null;

  return (
    
    <div
      style={{
        position: "fixed",
        bottom: "25px",
        left: "25px",
        right: "25px",
        maxWidth: "520px",
        background: "#ffffff",
        borderRadius: "24px",
        padding: "24px",
        boxShadow: "0 30px 80px rgba(0,0,0,.35)",
        transition:"all .30s ease",
      transform: animate ? "translateY(0px)" : "translateY(40px)",
      opacity: animate ? 1 : 0,
        zIndex: 999999,
        border: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "15px",
        }}
      >
        <span style={{ fontSize: "34px" }}>🍪</span>

        <h3
          style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          We Value Your Privacy
        </h3>
      </div>

      <p
        style={{
          color: "#4b5563",
          lineHeight: "1.7",
          fontSize: "15px",
          marginBottom: "20px",
        }}
      >
        Hassaan Travel uses cookies to improve your browsing experience,
        analyze website traffic, and personalize content. By clicking
        <strong> Accept All</strong>, you agree to our use of cookies.
      </p>

        <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  }}
>
  <button
    onClick={acceptCookies}
    style={{
      background: "#0B6B3A",
      color: "#fff",
      padding: "14px",
      borderRadius: "12px",
      border: "none",
      cursor: "pointer",
      fontWeight: 700,
      fontSize: "15px",
    }}
  >
    ✓ Accept All
  </button>

  <button
    onClick={rejectCookies}
    style={{
      background: "#F3F4F6",
      color: "#111827",
      padding: "14px",
      borderRadius: "12px",
      border: "1px solid #d1d5db",
      cursor: "pointer",
      fontWeight: 700,
      fontSize: "15px",
    }}
  >
    ✕ Reject All
  </button>

  <button
    style={{
      background: "#fff",
      color: "#2563EB",
      padding: "14px",
      borderRadius: "12px",
      border: "1px solid #2563EB",
      cursor: "pointer",
      fontWeight: 700,
      fontSize: "15px",
    }}
  >
    ⚙ Customize
  </button>

        <a
          href="/privacy-policy"
          style={{
            padding: "12px 20px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            color: "#111827",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Privacy Policy
        </a>
      </div>
    </div>
    
  );
}
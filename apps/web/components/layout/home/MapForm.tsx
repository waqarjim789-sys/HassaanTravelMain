// components/MapForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const MapForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contact", ...data }), // ← matches route.ts
      });

      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow space-y-4"
      aria-label="Contact Form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Your Name"
            className="border-2 border-gray-300 p-3 rounded-lg text-sm w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className="p-3 rounded-lg text-sm w-full border-2 border-gray-300"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="Tell us about your travel plans..."
          className="p-3 rounded-lg text-sm w-full border-2 border-gray-300"
          rows={3}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {status === "success" && (
        <p className="text-green-600 text-sm">✅ Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm">❌ Something went wrong. Please try again.</p>
      )}

      <button
        onClick={handleSubmit(onSubmit)}
        disabled={status === "loading"}
        className="bg-[#0F91D5] text-white px-6 py-2 rounded-lg text-sm w-full sm:w-auto disabled:opacity-60 cursor-pointer"
      >
        {status === "loading" ? "Sending..." : "Send Now"}
      </button>
    </div>
  );
};

export default MapForm;
"use client";

export default function FloatingWhatsApp() {
  // Yahan apna custom message set karein
  const whatsappMessage = "Hello! I would like to book a flight or get more details about flights.";
  
  // URL encoding zaruri hai taake spaces aur special characters sahi se kaam karein
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
      }}
    >
      <a
        // Message ke sath complete link
        href={`https://wa.me/31104857673?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <img 
          src="/assets/wa.webp" 
          alt="WhatsApp" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </a>
    </div>
  );
}
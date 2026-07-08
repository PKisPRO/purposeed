"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SITE } from "@/lib/constants";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.33-1.93 1.4-.5.07-1.03.1-3.28-.72-2.68-1.06-4.42-3.83-4.55-4.01-.13-.18-1.1-1.46-1.1-2.79 0-1.32.7-1.97.94-2.24.24-.26.53-.33.7-.33.18 0 .35 0 .5.01.17.01.38-.06.6.46.24.57.8 1.98.87 2.12.07.15.12.32.02.5-.1.19-.15.3-.3.46-.15.16-.31.36-.44.48-.15.15-.3.3-.13.6.18.3.79 1.3 1.7 2.1 1.17 1.05 2.16 1.37 2.46 1.53.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.13.07.72-.16 1.4Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: [0, -6, 0],
      }}
      transition={{
        scale: { delay: 1, type: "spring", stiffness: 200 },
        opacity: { delay: 1 },
        y: { repeat: Infinity, duration: 2.4, ease: "easeInOut", delay: 1.5 },
      }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20"
    >
      <WhatsAppIcon />
      {showTooltip && (
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute left-full ml-3 whitespace-nowrap rounded-lg bg-indigo-dark px-3 py-1.5 font-heading text-xs font-medium text-cream shadow-md"
        >
          Chat on WhatsApp
        </motion.span>
      )}
    </motion.a>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import MagneticButton from "@/components/ui/MagneticButton";
import { CTA } from "@/lib/constants";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/book-consultation") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-indigo/10 bg-cream/95 px-5 py-3 shadow-[0_-8px_24px_rgba(58,46,140,0.12)] backdrop-blur-md lg:hidden"
        >
          <MagneticButton href={CTA.primary.href} variant="coral" className="w-full">
            {CTA.primary.label}
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

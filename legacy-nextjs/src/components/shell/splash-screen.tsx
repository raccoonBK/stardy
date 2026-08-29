"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const SESSION_KEY = "astro-quest-splash-shown";

/**
 * Launch splash — a solid cobalt ground with a centered bouncing mascot and
 * the app name, in the spirit of the Duolingo open screen. Plays once per
 * browser session, then fades away to reveal the app. Purely presentational.
 */
export function SplashScreen() {
  const { t } = useTranslation();
  // Decide once, lazily, whether this session should see the splash. Reading
  // sessionStorage in the initializer avoids a setState-in-effect; the effect
  // below only dismisses (setShow(false)) and records the flag.
  const [show, setShow] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.sessionStorage.getItem(SESSION_KEY) !== "1";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!show) return;
    try {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    const timer = setTimeout(() => setShow(false), 1700);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="splash"
          data-el="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 50% 38%, #3f74ff 0%, #2563EB 46%, #0E4FD4 100%)",
          }}
        >
          {/* soft star specks */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-45"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
              backgroundPosition: "6px 9px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-5 px-8 text-center">
            <motion.div
              initial={{ scale: 0.4, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 14 }}
              className="grid size-32 place-items-center rounded-[36px] bg-white p-3 shadow-[0_12px_0_rgba(0,0,0,0.14)]"
            >
              <motion.img
                src="/mascot-star.png"
                alt=""
                aria-hidden
                className="size-full object-contain"
                animate={{ rotate: [0, -8, 8, 0], y: [0, -4, 0] }}
                transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="font-heading text-3xl font-black tracking-tight text-white drop-shadow-[0_3px_0_rgba(0,0,0,0.18)]"
            >
              {t("learn.appTitle")}
            </motion.h1>

            {/* loading dots */}
            <div className="mt-1 flex gap-1.5" aria-hidden>
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="size-2.5 rounded-full bg-[var(--yellow)]"
                  animate={{ opacity: [0.35, 1, 0.35], y: [0, -3, 0] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: i * 0.16,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

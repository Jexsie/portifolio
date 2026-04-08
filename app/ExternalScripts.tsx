"use client";

import { useEffect } from "react";

export default function ExternalScripts() {
  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load plugins first (contains anime.js, Swiper, etc.), then main.js
    loadScript("/js/plugins.js")
      .then(() => loadScript("/js/main.js"))
      .catch((err) => console.error("Script loading error:", err));
  }, []);

  return null;
}

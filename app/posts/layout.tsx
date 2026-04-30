"use client";

import { useEffect } from "react";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.classList.remove("ss-preload");
    document.documentElement.classList.add("ss-loaded");
  }, []);

  return <>{children}</>;
}

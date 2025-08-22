"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const RouteChangeLoader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show spinner on route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300); // minimum spinner time
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-20 z-50">
      <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default RouteChangeLoader;

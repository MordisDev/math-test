"use client";

import { useEffect, useState, type PropsWithChildren } from "react";

export const HydrationWrapper = ({ children }: PropsWithChildren) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated ? children : null;
};

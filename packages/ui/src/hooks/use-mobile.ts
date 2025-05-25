"use client";

import * as React from "react";

const MOBILE_BREAKPOINT = 768;

type UseMobileProps = {
  breakpoint?: number;
};

export function useIsMobile({
  breakpoint = MOBILE_BREAKPOINT,
}: UseMobileProps = {}) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < breakpoint);

    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

"use client";
import { useState, useEffect, useLayoutEffect } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(window?.matchMedia(query).matches);

  useLayoutEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

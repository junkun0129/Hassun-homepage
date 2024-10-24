import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollPosition, setscrollPosition] = useState<number>(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setscrollPosition(position);
  };
  return { scrollPosition };
};

export default useScroll;

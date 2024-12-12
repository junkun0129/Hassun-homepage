import { useInView } from "framer-motion";
import React, { CSSProperties, ReactNode, useRef } from "react";

const Section = ({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        ...style,
      }}
      className={className}
      ref={ref}
    >
      {children}
    </section>
  );
};

export default Section;

import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from "react";
type Props = {
  children: ReactNode;
  style: { [key: string]: string };
};

const MainContent = ({ children, style }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  // Use React.Children.map to add props to each child
  const childrenWithProps = React.Children.map(children, (child) => {
    // Check if the child is a valid React element
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { scrollYProgress });
    }
    return child;
  });

  return (
    <div ref={ref} style={style} className={`w-full h-full relative`}>
      <div className="w-full h-full fixed">{childrenWithProps}</div>
    </div>
  );
};

export default MainContent;

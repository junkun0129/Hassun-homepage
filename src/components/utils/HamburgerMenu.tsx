import { motion } from "framer-motion";
import React from "react";

const HamburgerMenu = ({
  isOpen,
  setIsOpen,
  setisMobileMenuOpen,
  resObject,
}: {
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
  resObject: { [key: string]: React.RefObject<HTMLDivElement> };
  setisMobileMenuOpen: (e: boolean) => void;
}) => {
  // メニューの開閉を切り替える関数
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ fontSize: "1.3rem" }} className="hamburger-menu">
      <button
        className={`hamburger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          {Object.entries(resObject).map(([key, value], i) => (
            <li key={"hamburger-" + `${value}-` + i}>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!value.current) return;
                  const y =
                    value.current.getBoundingClientRect().top + window.scrollY; // 修正
                  window.scrollTo({
                    top: y,
                    behavior: "smooth",
                  });
                  setisMobileMenuOpen(false);
                }}
              >
                {key}
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;

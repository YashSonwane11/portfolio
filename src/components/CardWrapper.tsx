import React, { useRef, useEffect, useState } from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  zIndex: number;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children, zIndex }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      if (ref.current) {
        const height = ref.current.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        // If the section is taller than the viewport, stick it when the bottom
        // reaches the bottom of the viewport.
        if (height > windowHeight) {
          setTopOffset(-(height - windowHeight));
        } else {
          setTopOffset(0);
        }
      }
    };

    updateOffset();

    const observer = new ResizeObserver(updateOffset);
    if (ref.current) {
      observer.observe(ref.current);
    }
    window.addEventListener("resize", updateOffset);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="sticky w-full"
      style={{ top: topOffset, zIndex }}
    >
      {children}
    </div>
  );
};

export default CardWrapper;

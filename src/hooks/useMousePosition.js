import React, { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const set = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", set);
    return () => {
      window.removeEventListener("mousemove", set);
    };
  }, []);

  return { position };
};

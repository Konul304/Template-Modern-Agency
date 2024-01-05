'use client';
import React, { useRef, useEffect } from "react";

function Split({ children }) {
  const target = useRef();

  useEffect(() => {
    split();
  }, []);

  function split() {
    if (target.current) {
      Splitting({ target: target.current });
    }
  };

  return (
    <div ref={target}>{children}</div>
  )
}

export default Split;

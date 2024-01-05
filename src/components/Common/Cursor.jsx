'use client';
import { useEffect } from "react";
//= Scripts
import mouseEffect from "@/common/mouseEffect";

function Cursor() {
  useEffect(() => {
    mouseEffect();
  }, []);

  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
};

export default Cursor;

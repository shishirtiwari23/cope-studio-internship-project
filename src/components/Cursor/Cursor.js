import React, { useEffect, useState } from "react";
import styles from "./Cursor.module.scss";
import clsx from "clsx";

const Cursor = ({ className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <div
        id="cursor"
        className={clsx(styles.container, className)}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
    </>
  );
};

export default Cursor;

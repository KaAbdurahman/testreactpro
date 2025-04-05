import React, { useState, useRef, useEffect } from "react";
import styles from "./start.module.scss";

const Start = () => {
  const [selected, setSelected] = useState("");
  const currentDate = new Date().toLocaleDateString();
  const headerRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
  };
  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setSelected(null);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.header} ref={headerRef}>
          <span
            className={`${styles.status} ${
              selected === "status" ? styles.hovered : ""
            }`}
            onClick={() => handleSelect("status")}
          >
            {selected === "status" && (
              <span className={styles.indicator}></span>
            )}
            ON GOING
          </span>
          <span
            className={`${styles.masterFile} ${
              selected === "masterFile" ? styles.hovered : ""
            }`}
            onClick={() => handleSelect("masterFile")}
          >
            {selected === "masterFile" && (
              <span className={styles.indicator}></span>
            )}
            MASTER FILE
          </span>

          <span
            className={`${styles.date} ${
              selected === "date" ? styles.hovered : ""
            }`}
            onClick={() => handleSelect("date")}
          >
            {selected === "date" && <span className={styles.indicator}></span>}
            {currentDate}
          </span>
        </div>
        <h1 className={styles.title}>Nextwave Systems</h1>
        <p className={styles.subtitleName}>Dashboard design</p>
      </div>
    </div>
  );
};

export default Start;

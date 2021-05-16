import React from "react";
import styles from "../styles/TheBox.module.css"

export default function TheBox({ children }) {
  return <div className={styles.myBox}>{children}</div>;
}

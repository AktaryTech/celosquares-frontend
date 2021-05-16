import React from "react";
import styles from "../styles/TheBox.module.css"
import cx from "classnames"

export default function TheBox({ children, color, ...props}) {
    const colorChoices = { orange: styles.myBox_orange, grey: styles.myBox_grey , white: styles.myBox_white, clear: styles.myBox_clear}
  return <div className={cx(props.className, colorChoices[color])}>{children}</div>;
}

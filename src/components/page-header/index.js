import React from "react"
import styles from "./page-header.module.css"

export default ({ subHeader, text }) => (
  <h2 className={styles.pageHeader}>
    <span className={styles.subHeader}>{subHeader}</span>
    {text}
  </h2>
)

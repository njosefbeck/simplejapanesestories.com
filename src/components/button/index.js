import React from "react"
import styles from "./button.module.css"

export default ({ icon, link, onClick, text }) => {
  if (link && link.length) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className={styles.button}>
          {icon} {text}
        </button>
      </a>
    )
  }

  return (
    <button className={styles.button} onClick={onClick}>
      {icon} {text}
    </button>
  )
}

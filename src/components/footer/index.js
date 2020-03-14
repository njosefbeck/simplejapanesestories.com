import React from "react"
import styles from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

export default () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <div>&copy; 2019 - 2020 Simple Japanese Stories</div>
      <div>
        <a
          href="https://twitter.com/simplejapanese"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  </footer>
)

import React from "react"
import styles from "./nav.module.css"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

export default () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/stories">Stories</Link>
      </li>
      {/*<li>
        <Link to="/search">
          <FontAwesomeIcon icon={faSearch} />
        </Link>
      </li>*/}
    </ul>
  </nav>
)

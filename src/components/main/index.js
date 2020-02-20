import React from 'react'
import styles from './main.module.css'

export default ({ children }) => (
  <main className={styles.main}>
    {children}
  </main>
)

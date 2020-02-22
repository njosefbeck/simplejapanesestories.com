import React from 'react'
import styles from './actions.module.css'

export default ({ children }) => (
  <section className={styles.actions}>
    {children}
  </section>
)

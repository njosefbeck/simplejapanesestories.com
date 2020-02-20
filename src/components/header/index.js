import React from 'react'
import styles from './header.module.css'
import Nav from '../nav'

export default () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <h1 className={styles.title}>Simple Japanese Stories</h1>
      <Nav />
    </div>
  </header>
)

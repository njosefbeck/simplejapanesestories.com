import React from 'react'
import styles from './layout.module.css'
import Header from '../header'
import Main from '../main'
import Footer from '../footer'

export default ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </div>
)
import React from 'react'
import styles from './layout.module.css'
import Header from '../header'
import Main from '../main'
import Footer from '../footer'
import { Helmet } from 'react-helmet'

export default ({ children }) => (
  <div className={styles.layout}>
    <Helmet>
      <title>Simple Japanese Stories</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@simplejapanese" />
    </Helmet>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </div>
)
import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styles from './index.module.css'

export default () => {
  return (
    <Layout>
      <SEO
        title="Simple Japanese Stories"
        unbrandedTitle="Simple Japanese Stories"
        description="WIP"
      />
      <section className={styles.content}>
        Home page content!
      </section>
    </Layout>
  )
}

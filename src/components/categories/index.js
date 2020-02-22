import React from 'react'
import styles from './categories.module.css'
import { Link } from 'gatsby'

export default ({ categories }) => {
  const cats = categories.map((c, index, array) => {
    if (index === array.length - 1) {
      return <Link to={`/category/${c.slug}`}>{c.displayText}</Link>
    }

    return <Link to={`/category/${c.slug}`}>{c.displayText}, </Link>
  })
  return (
    <div className={styles.categories}>
      Categories: {cats}
    </div>
  )
}

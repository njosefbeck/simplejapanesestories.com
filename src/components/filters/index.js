import React from "react"
import styles from "./filters.module.css"

const updateFilters = (id, activeFilters, setActiveFilters) => {
  let updatedFilters = []
  if (activeFilters.includes(id)) {
    updatedFilters = [...activeFilters.filter(cId => cId !== id)]
  } else {
    updatedFilters = [...activeFilters, id]
  }
  console.log(updatedFilters)
  setActiveFilters(updatedFilters)
}

export default ({ categories, activeFilters, setActiveFilters }) => {
  const filters = categories.map(c => {
    const classes = [styles.category]
    const isActive = activeFilters.includes(c.id)

    if (isActive) {
      classes.push(styles.active)
    }

    return (
      <li key={c.id} className={classes.join(" ")}>
        <button
          className={styles.button}
          onClick={() => updateFilters(c.id, activeFilters, setActiveFilters)}
        >
          {c.displayText}
        </button>
      </li>
    )
  })
  return (
    <div className={styles.filters}>
      <h2>Filter by category</h2>
      <ul className={styles.categories}>{filters}</ul>
    </div>
  )
}

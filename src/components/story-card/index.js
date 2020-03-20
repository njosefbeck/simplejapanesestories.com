import React from 'react'
import { Furigana } from "gem-furigana"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styles from "./story-card.module.css"

export default ({ title, englishTitle, image, slug, categories }) => {
  const titleWithFurigana = new Furigana(title)
  const imageStack = [
    `linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65))`,
    image.file.fluid,
  ]
  const cats = categories.map((c, index, array) => {
    if (index === array.length - 1) {
      return (
        <span key={c.id} className="styles.category">
          {c.displayText}
        </span>
      )
    }

    return (
      <span key={c.id} className="styles.category">
        {c.displayText},{" "}
      </span>
    )
  })
  return (
    <BackgroundImage
      tag="li"
      className={styles.storyCard}
      fluid={imageStack}
      backgroundColor={`#eee`}
    >
      <Link to={`/${slug}`}>
        <div className={styles.infoWrapper}>
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: titleWithFurigana.ReadingHtml }}
          />
          <h3 className={styles.englishTitle}>{englishTitle}</h3>
          <div className={styles.categories}>{cats}</div>
        </div>
      </Link>
    </BackgroundImage>
  )
}
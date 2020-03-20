import React from "react"
import styles from "./story-cards.module.css"
import StoryCard from "../story-card"

export default ({ stories }) => {
  const storyCards = stories.map(story => (
    <StoryCard key={story.id} {...story} />
  ))
  return <ul className={styles.storyCards}>{storyCards}</ul>
}

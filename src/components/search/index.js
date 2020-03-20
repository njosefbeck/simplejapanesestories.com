import React from 'react'
import { Furigana } from "gem-furigana"
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Pagination } from 'react-instantsearch-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons"
import styles from './search.module.css'
import './algolia.css'
import { Link } from 'gatsby'

const Hit = ({ hit }) => {
  console.log(hit);
  const titleWithFurigana = new Furigana(hit.title)
  return (
    <Link to={`/${hit.slug}`}>
      <div className={styles.hit}>
        <div>
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: titleWithFurigana.ReadingHtml }}
          />
          <span className={styles.englishTitle}>
            {hit.englishTitle}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default () => {
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  return (
    <section class={styles.content}>
      <p>Enter an English or Japanese phrase below to search the stories for that phrase.</p>
      <InstantSearch searchClient={searchClient} indexName="Stories">
        <SearchBox
          searchAsYouType={false}
          submit={<FontAwesomeIcon icon={faSearch} />}
          reset={<FontAwesomeIcon icon={faTimes} />}
        />
        <Hits hitComponent={Hit} />
        <Pagination />
      </InstantSearch>
    </section>
  )
}
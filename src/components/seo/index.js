import React from "react"
import { Helmet } from "react-helmet"

const outputSlug = slug => slug ? `/${slug}` : ''

export default ({ description, slug, title, unbrandedTitle }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="og:title" content={unbrandedTitle} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="og:url" content={`https://simplejapanesestories.com${outputSlug(slug)}`} />
    </Helmet>
  )
}
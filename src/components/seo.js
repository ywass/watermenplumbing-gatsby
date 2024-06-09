/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, socialImage, children }) {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = title ? title : site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle}</title>
       <meta name="description" content={metaDescription} />
       <meta name="image" content={socialImage} />
       <meta name="og:locale" content={`en`} />
       <meta name="og:title" content={defaultTitle} />
       <meta name="og:description" content={metaDescription} />
       <meta name="og:type" content="website" />
       <meta name="og:image" content={socialImage} />
       <meta name="twitter:card" content="summary" />
       <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
       <meta name="twitter:description" content={metaDescription} />
       <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo

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

  const schemaOrgJSONLD = [{
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    itemListElement: [{
      "@type": "ListItem", 
      position: 1, 
      name: "Broward County",
      item: "https://watermenplumbing.com/about-us/areas-we-serve/broward-county/"  
    },{
      "@type": "ListItem", 
      position: 2, 
      name: "Coral Springs",
      item: "https://watermenplumbing.com/about-us/areas-we-serve/coral-springs/"  
    },{
      "@type": "ListItem", 
      position: 3, 
      name: "Hollywood",
      item: "https://watermenplumbing.com/about-us/areas-we-serve/hollywood/"  
    },{
      "@type": "ListItem", 
      position: 4, 
      name: "Plantation",
      item: "https://watermenplumbing.com/about-us/areas-we-serve/plantation/"  
    }]
  }]

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
      <script type='application/ld+json'>{JSON.stringify(schemaOrgJSONLD)}</script>
      {children}
    </>
  )
}

export default Seo

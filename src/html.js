import React from "react"
import PropTypes from "prop-types"
import { Script } from "gatsby"

export default function HTML(props) {
  const schemaOrgJSONLD = [
    {
      "@context": "https://schema.org/", 
      "@type": "BreadcrumbList", 
      "itemListElement": [{
        "@type": "ListItem", 
        "position": 1, 
        "name": "Broward County",
        "item": "https://watermenplumbing.com/about-us/areas-we-serve/broward-county/"  
      },{
        "@type": "ListItem", 
        "position": 2, 
        "name": "Coral Springs",
        "item": "https://watermenplumbing.com/about-us/areas-we-serve/coral-springs/"  
      },{
        "@type": "ListItem", 
        "position": 3, 
        "name": "Hollywood",
        "item": "https://watermenplumbing.com/about-us/areas-we-serve/hollywood/"  
      },{
        "@type": "ListItem", 
        "position": 4, 
        "name": "Plantation",
        "item": "https://watermenplumbing.com/about-us/areas-we-serve/plantation/"  
      }]
    }    
  ]
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>

        {props.headComponents}
        <script id="gtag-id" src="https://www.googletagmanager.com/gtag/js?id=G-83CCXZ2TZ6"></script>
        <Script id="gtag-config" strategy="off-main-thread" forward={[`gtag`]}>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-83CCXZ2TZ6');`}
      </Script>   
      <script type="application/ld+json">
      {
        "@context": "https://schema.org/", 
        "@type": "BreadcrumbList", 
        "itemListElement": [{
          "@type": "ListItem", 
          "position": 1, 
          "name": "Broward County",
          "item": "https://watermenplumbing.com/about-us/areas-we-serve/broward-county/"  
        },
        {
          "@type": "ListItem", 
          "position": 2, 
          "name": "Coral Springs",
          "item": "https://watermenplumbing.com/about-us/areas-we-serve/coral-springs/"  
        },
        {
          "@type": "ListItem", 
          "position": 3, 
          "name": "Hollywood",
          "item": "https://watermenplumbing.com/about-us/areas-we-serve/hollywood/"  
        },
        {
          "@type": "ListItem", 
          "position": 4, 
          "name": "Plantation",
          "item": "https://watermenplumbing.com/about-us/areas-we-serve/plantation/"  
        }]
      }
      </script>
      {schemaOrgJSONLD && <script type='application/ld+json'>{JSON.stringify(schemaOrgJSONLD)}</script>}
      </head>
      <body {...props.bodyAttributes}>
     {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}        
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

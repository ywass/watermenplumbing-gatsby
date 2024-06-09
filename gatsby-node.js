/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require("path")
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      plumbingServices: allPrismicPlumbingservices {
        edges {
          node {
            uid
            id
            type
            data {
              title {
                text
              }
              parent {
                document {
                  ... on PrismicPlumbingservices {
                    id
                  }
                }
              }
            }
          }
        }
      }
      allPrismicPages {
        edges {
          node {
            id
            type
            uid
          }
        }
      }
      areasWeServiceMain: allPrismicAreasweserve(
        filter: { id: { eq: "39574823-5a47-5fb6-9a39-b97d48c891ff" } }
      ) {
        edges {
          node {
            uid
            id
            type
          }
        }
      }
      areasWeServices: allPrismicAreasweserve(
        filter: { id: { ne: "39574823-5a47-5fb6-9a39-b97d48c891ff" } }
      ) {
        edges {
          node {
            uid
            id
            type
            data {
              title {
                text
              }
            }
          }
        }
      }
      allWaterFilterServices: allPrismicWaterfilterproducts {
        edges {
          node {
            uid
            id
            type
            data {
              title {
                text
              }
              parent {
                document {
                  ... on PrismicWaterfilterproducts {
                    id
                  }
                }
              }
            }
          }
        }
      }
      mainWaterFilterService: allPrismicWaterfilterproducts(
        filter: { id: { eq: "dfcda992-ca76-59c8-b768-b5d260cc452c" } }
      ) {
        edges {
          node {
            uid
            id
            type
            data {
              title {
                text
              }
            }
          }
        }
      }
      allPrismicGallerypages {
        edges {
          node {
            id
            uid
            type
          }
        }
      }
    }
  `)

  const mainServices = data.plumbingServices.edges.filter(item => {
    if (!item?.node?.data?.parent?.document?.id) {
      return item
    }
  })

  mainServices.forEach(({ node }) => {
    const subServices = data.plumbingServices.edges.filter(sitem => {
      if (sitem?.node?.data?.parent?.document?.id) {
        return node?.id === sitem?.node?.data?.parent?.document?.id
      }
    })

    const childServices =
      subServices && subServices.length > 0 ? subServices : mainServices

    createPage({
      path: `/plumbing-services/${node.uid}`,
      component: path.resolve(`./src/templates/${node.type}.js`),
      context: {
        id: node.id,
        services: childServices,
      },
    })
    subServices &&
      subServices.length > 0 &&
      subServices.forEach((item) => {
        if (item && item.node && item.node.uid) {
          createPage({
            path: `/plumbing-services/${item.node.uid}`,
            component: path.resolve(`./src/templates/${item.node.type}.js`),
            context: {
              id: item.node.id,
              services: mainServices,
            },
          })
        }
      })
  })

  data.allPrismicPages.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.uid}`,
      component: path.resolve(`./src/templates/${node.type}.js`),
      context: {
        id: node.id,
      },
    })
  })

  data.allPrismicGallerypages.edges.forEach(({ node }) => {
    createPage({
      path: `photo-gallery/${node.uid}`,
      component: path.resolve(`./src/templates/${node.type}.js`),
      context: {
        id: node.id,
      },
    })
  })

  data.areasWeServiceMain.edges.forEach(({ node }) => {
    createPage({
      path: `about-us/${node.uid}/`,
      component: path.resolve(`./src/templates/${node.type}.js`),
      context: {
        id: node.id,
        services: data.areasWeServices.edges,
      },
    })
  })

  data.areasWeServices.edges.forEach(({ node }) => {
    createPage({
      path: `about-us/areas-we-serve/${node.uid}/`,
      component: path.resolve(`./src/templates/${node.type}.js`),
      context: {
        id: node.id,
        services: data.areasWeServices.edges,
      },
    })
  })

  const createWaterProductPages = (node, slug, services) => {
    const childServices = data.allWaterFilterServices.edges.filter(item => {
      if (item?.node?.data?.parent) {
        return item?.node?.data?.parent?.document?.id === node.id
      }
    })
    const sideBarServices = services ? services : childServices
    createPage({
      path: `${slug}/${node.uid}/`,
      component: path.resolve(`./src/templates/${node.type}.js`),
      context: {
        id: node.id,
        services: sideBarServices,
        children: true,
      },
    })
    return childServices
  }

  data.mainWaterFilterService.edges.forEach(({ node }) => {
    const firstChildServices = createWaterProductPages(
      node,
      "plumbing-services"
    )
    firstChildServices &&
      firstChildServices.map(item => {
        const secondChildServices = createWaterProductPages(
          item.node,
          `plumbing-services/${node.uid}`
        )
        secondChildServices &&
          secondChildServices.map(sitem => {
            const thirdChildServices = createWaterProductPages(
              sitem.node,
              `plumbing-services/${node.uid}/${item.node.uid}`
            )
            thirdChildServices &&
              thirdChildServices.map(titem => {
                createPage({
                  path: `plumbing-services/${node.uid}/${item.node.uid}/${sitem.node.uid}/${titem.node.uid}`,
                  component: path.resolve(
                    `./src/templates/${item.node.type}.js`
                  ),
                  context: {
                    id: titem.node.id,
                    services: thirdChildServices,
                    children: false,
                  },
                })
              })
          })
      })
  })
}
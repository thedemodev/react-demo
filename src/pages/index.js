import React from "react"
import { graphql } from "gatsby"
import { useTipeQuery } from '@tipe/react'
import Layout from "../components/layout"
// import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  // const { content } = useTipeQuery({
  //   events: ['draft'],
  //   staticContent: document,
  //   transformEvent(d) {
  //     return {
  //       ...d.fields,
  //       meta: {
  //         createdAt: d.createdAt,
  //         id: d.id,
  //       },
  //     }
  //   },
  //   getId(d) {
  //     return d.meta.id
  //   },
  // })
  // console.log('content: ', content)
  return (
    <Layout>
      <div>
        <h1>Yolo Swag!</h1>
      </div>
    </Layout>
  )
}

export default IndexPage

// export const pageQuery = graphql`
// query HomePageQuery {
//   document: tipeHomePage {
//     id
//     meta: _xmeta {
//       createdAt
//       id
//     }
//     sections {
//       value {
//         name
//         value
//       }
//     }
//   }
// }
// `
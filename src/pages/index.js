/** @jsx jsx */
import { jsx, Styled, useColorMode } from 'theme-ui'
import { Box, Flex, Text, Input, Button } from '@theme-ui/components'
import { graphql } from "gatsby"
import { useTipeQuery } from '@tipe/react'
import Layout from "../components/layout"
// import ReactMarkdown from 'react-markdown'

const IndexPage = ({ data: {document} }) => {
  const {content} = useTipeQuery({
    events: ['draft'],
    staticContent: document,
    transformEvent(d) {
      return {
        ...d.fields,
        meta: {
          createdAt: d.createdAt,
          id: d.id,
        },
      }
    },
    getId(d) {
      return d.meta.id
    },
  })

  return (
    <Layout>
      <Box sx={{width: '100%'}}>
        <Flex variant='section.container' sx={{height: '75vh', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
          <Box>
            <h1>Hello there</h1>
            
            <p>{content.subTitle}</p>
            <Flex sx={{flexWrap: 'wrap', justifyContent: 'center'}}>
              <Box sx={{width: '60%', mr: 2}}>
                <Input type="email" placeholder="email" />
              </Box>
              <Box>
                <Button>{content.cta}</Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box variant="section.container">
        </Box>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    document: tipeHome {
      meta: _xmeta {
        createdAt
        id
      }
      subTitle
      cta
    }
  }
`

export default IndexPage

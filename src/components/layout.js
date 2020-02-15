/** @jsx jsx */
import { jsx, Styled, useColorMode } from 'theme-ui'
import { Box, Flex, Text } from '@theme-ui/components'
import {TipeQuery} from '@tipe/react'
import { Link, StaticQuery, graphql } from 'gatsby'

const Page = ({children, data}) => {
  const {menu} = data
  return (
    <TipeQuery
      events={['draft']}
      staticContent={menu}
      getId={d => d.meta.id}
      transformEvent={d => {
        return {
          ...d.fields,
          meta: {
            createdAt: d.createdAt,
            id: d.id,
          },
        }
      }}>
      {({links}) => (
        <div
          style={{
            minHeight: '100vh',
            width: '100%'
          }}
        >
          <header>
            <nav sx={{height: '65px', width: '100%', bg: 'primary'}}>
              <Flex sx={{maxWidth: '1200px', margin: '0 auto', alignItems: 'center', height: '100%', justifyContent: 'center'}}>
                {links.map(link => (
                  <Link to={link.value.url} sx={{variant: 'links.nav'}} key={link.value.name + link.value.url}>
                    {link.value.name}
                  </Link>
                ))}
              </Flex>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      )}
    </TipeQuery>
  )
}

const Layout = ({ children }) => {
  const query = graphql`
    query MainNavQuery {
      menu: tipeMenu {
        meta: _xmeta {
          createdAt
          id
        }
        links {
          name
          type
          value {
            url
            name
          }
        }
      }
    }
  `
  
  return <StaticQuery query={query} render={data => <Page data={data}>{children}</Page>}/>
}

export default Layout

/** @jsx jsx */
import { jsx, Styled, useColorMode } from 'theme-ui'
import { Box, Flex, Text } from '@theme-ui/components'
import {TipeQuery} from '@tipe/react'
import { Link, StaticQuery, graphql } from 'gatsby'



const Layout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <header>
        <nav sx={{height: '65px', width: '100%', bg: 'primary'}}>
          <Flex sx={{maxWidth: '1200px', margin: '0 auto', alignItems: 'center', height: '100%', justifyContent: 'center'}}>
              <Link to='/' sx={{variant: 'links.nav'}}>
                home
              </Link>
            
            
          </Flex>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout

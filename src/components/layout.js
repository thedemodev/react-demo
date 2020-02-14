import React from "react"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%'
      }}
    >
      <main>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout

import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Typist from 'react-typist'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div style={{width: '100vh', margin: '0 auto'}}>
        <img src="./logo.svg" style={{float: 'left'}}/>
        <div class="terminal" style={{float: 'right'}}>
          <Typist>
          <span class="dollar"/> Welcome to SMPL Cloud.<br/>
          </Typist>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

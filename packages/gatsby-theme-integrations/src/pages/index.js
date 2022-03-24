import * as React from "react"
import { Hero } from "gatsby-ui"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <Hero image={{ src: "https://picsum.photos/800/600" }}>Hero</Hero>
    <Hero image={{ src: "https://picsum.photos/801/600" }}>Hero</Hero>
    <Hero image={{ src: "https://picsum.photos/802/600" }}>Hero</Hero>
  </Layout>
)

export default IndexPage

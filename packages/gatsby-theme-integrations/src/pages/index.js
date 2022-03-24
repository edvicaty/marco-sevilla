import * as React from "react"
import { Button, Hero } from "gatsby-ui"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <Hero image={{ src: "https://picsum.photos/800/600" }}>
      <p>Hero Component</p> <Button to="/cta">Cta</Button>
    </Hero>
    <Hero image={{ src: "https://picsum.photos/800/600" }}>
      <p>Hero Component Without Cta</p>
    </Hero>
    <Hero image={{ src: "https://picsum.photos/800/600" }}>
      <Button to="/cta">Cta</Button>
    </Hero>
    <Hero image={{ src: "https://picsum.photos/801/600" }}>
      <p>Lorem ipsum dolor sit amet, consectetur </p>
      <Button to="/cta">Cta</Button>
    </Hero>
    <Hero image={{ src: "https://picsum.photos/802/600" }}>
      <p>
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit
      </p>
      <Button to="/cta">Cta</Button>
    </Hero>
  </Layout>
)

export default IndexPage

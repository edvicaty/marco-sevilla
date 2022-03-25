import * as React from "react"
import { Button, Hero, Section, RichText } from "gatsby-ui"
import Layout from "../components/Layout"

const IndexPage = () => {
  const text = `<h1>h1</h1> <h2>h2</h2> <h3>h3</h3> <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
  <ul><li>list item</li><li>list item</li><li>list item</li></ul>`
  return (
    <Layout>
      <Hero image={{ src: "https://picsum.photos/803/600" }}>
        <p>Hero Component</p> <Button to="/cta">Cta</Button>
      </Hero>
      <Hero image={{ src: "https://picsum.photos/804/600" }}>
        <p>Hero Component Without Cta</p>
      </Hero>
      <Hero image={{ src: "https://picsum.photos/805/600" }}>
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
      <Section>
        <RichText>{text}</RichText>
      </Section>
    </Layout>
  )
}

export default IndexPage

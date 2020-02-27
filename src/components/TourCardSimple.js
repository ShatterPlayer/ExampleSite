import React from "react"
import styled from "styled-components"
import Image from "gatsby-background-image"

// Components
import PriceButton from "./PriceButton"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 345px;
`

const ImageBackground = styled(Image)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
`

const BackgroundMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.3;
`

const Content = styled.div`
  flex: 1;
  background-color: white;
  padding: 0 30px;
`

const Continent = styled.span`
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`

const City = styled.span`
  color: #fbd800;
  font-size: 26px;
  line-height: 20px;
  text-transform: uppercase;
`

const Promotion = styled.div`
  width: 132px;
  height: 32px;
  background-color: #fbd700;
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 50%);
  text-align: center;
  line-height: 32px;
  font-size: 16px;
  color: #041822;
  font-weight: bold;
  text-transform: uppercase;
`

const Text = styled.div`
  height: 65px;
  font-size: 15px;
  text-align: center;
  margin: 35px 0;
`

function TourCardSimple({ tour }) {
  const {
    frontmatter: {
      continent,
      city,
      promotion,
      thumbnail: {
        childImageSharp: { fluid },
      },
    },
    excerpt,
  } = tour
  return (
    <Container>
      <ImageBackground fluid={fluid}>
        <BackgroundMask />
        <Continent>{continent}</Continent>
        <City>{city}</City>
        {promotion && <Promotion>Promocja</Promotion>}
      </ImageBackground>
      <Content>
        <Text>{excerpt}</Text>
        <PriceButton />
      </Content>
    </Container>
  )
}

export default TourCardSimple

import React from "react"
import styled from "styled-components"
import Image from "gatsby-background-image"
// Images
import plane1Img from "../../images/lastminute/airStart.png"
import plane2Img from "../../images/lastminute/airEnd.png"
import starImg from "../../images/lastminute/star.png"
import bedImg from "../../images/lastminute/bed.png"

// Components
import TourDetail from "../TourDetail"
import PriceButton from "../PriceButton"

const colors = {
  dark: "#110E20",
  yellow: "#ffd200",
  grey: "#9A9A9A",
}

const Container = styled.div`
  width: 550px;
  height: 365px;
  background-color: #110e20;
  padding: 20px;
  display: flex;
`

const ImageContainer = styled(Image)`
  height: 100%;
  width: 220px;
  position: relative;
`

const ImageTextContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  text-transform: uppercase;
`

const Country = styled.div`
  width: 100px;
  padding: 0 10px;
  background-color: ${colors.yellow};
  color: ${colors.dark};
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
`

const City = styled.div`
  padding: 0 10px;
  max-width: 185px;
  background-color: ${colors.dark};
  font-size: 17px;
  color: white;
  line-height: 35px;
`

const Content = styled.div`
  height: 100%;
  width: 275px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
  color: ${colors.grey};
  font-size: 15px;
`

const HorizontalLine = styled.div`
  height: 1px;
  width: 240px;
  background-color: #252042;
  margin: 20px 0;
`

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const PriceButtonWrapper = styled.div`
  margin-top: 30px;
`

function TourCardExtended({ tour }) {
  const {
    frontmatter: { thumbnail },
  } = tour
  return (
    <Container>
      <ImageContainer fluid={thumbnail.childImageSharp.fluid}>
        <ImageTextContainer>
          <Country>Egipt</Country>
          <City>Sharm El Sheikh</City>
        </ImageTextContainer>
      </ImageContainer>
      <Content>
        <Text>
          Cras odio diam, interdum sed magna non, ornare congue ante. Ut vel
          metus augue. Etiam sed enim ege stas, ornare lorem vitae, ultricies
          mi. Fusce eu posuere libero, eget tempor mi.
        </Text>
        <HorizontalLine />
        <DetailsContainer>
          <TourDetail image={plane1Img} name="Wylot" value="Kraków, AirPort" />
          <TourDetail image={plane2Img} name="Przylot" value="Egipt, Sharm" />
        </DetailsContainer>
        <DetailsContainer>
          <TourDetail image={starImg} name="Ocena" value="8,5 / 10" />
          <TourDetail image={bedImg} name="Hotel" value="Egipt, Sharm" />
        </DetailsContainer>
        <PriceButtonWrapper>
          <PriceButton price={899} />
        </PriceButtonWrapper>
      </Content>
    </Container>
  )
}

export default TourCardExtended

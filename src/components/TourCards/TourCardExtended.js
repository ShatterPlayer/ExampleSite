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
  padding: 0 5px;
`

const PriceButtonWrapper = styled.div`
  margin-top: 30px;
`

function TourCardExtended({ tour }) {
  const {
    frontmatter: {
      thumbnail,
      country,
      city,
      departure,
      arrival,
      rating,
      hotel,
      price,
    },
    excerpt,
  } = tour

  const tourRating = `${rating} / 10`
  return (
    <Container>
      <ImageContainer fluid={thumbnail.childImageSharp.fluid}>
        <ImageTextContainer>
          <Country>{country}</Country>
          <City>{city}</City>
        </ImageTextContainer>
      </ImageContainer>
      <Content>
        <Text>{excerpt}</Text>
        <HorizontalLine />
        <DetailsContainer>
          <TourDetail image={plane1Img} name="Wylot" value={departure} />
          <TourDetail image={plane2Img} name="Przylot" value={arrival} />
        </DetailsContainer>
        <DetailsContainer>
          <TourDetail image={starImg} name="Ocena" value={tourRating} />
          <TourDetail image={bedImg} name="Hotel" value={hotel} />
        </DetailsContainer>
        <PriceButtonWrapper>
          <PriceButton price={price} />
        </PriceButtonWrapper>
      </Content>
    </Container>
  )
}

export default TourCardExtended

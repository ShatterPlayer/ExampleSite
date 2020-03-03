import React from "react"
import styled from "styled-components"
import bgImage from "../../images/lastminute/bg.jpg"
import { useStaticQuery, graphql } from "gatsby"

// Components
import ContentWrapper from "../ContentWrapper"
import SmallHeader from "../headers/SmallHeader"
import BigHeader from "../headers/BigHeader"
import TourCardExtended from "../TourCards/TourCardExtended"

const Container = styled.div`
  width: 100%;
  background-image: url(${bgImage});
  background-size: 100% 100%;
  padding: 65px 0;
`

const ToursContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 550px);
  grid-gap: 50px;
  margin-top: 55px;
`

function LastMinute() {
  const TOURS_QUERY = graphql`
    query LastMinute {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { lastMinute: { eq: true } } }
        limit: 2
      ) {
        nodes {
          id
          excerpt
          frontmatter {
            city
            country
            departure
            arrival
            rating
            hotel
            price
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `

  const data = useStaticQuery(TOURS_QUERY)

  return (
    <Container>
      <ContentWrapper>
        <SmallHeader dark>Wycieczki</SmallHeader>
        <BigHeader>Last Minute</BigHeader>
        <ToursContainer>
          {data.allMarkdownRemark.nodes.map(node => (
            <TourCardExtended tour={node} key={node.id} />
          ))}
        </ToursContainer>
      </ContentWrapper>
    </Container>
  )
}

export default LastMinute

import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

// Components
import ContentWrapper from "./ContentWrapper"
import TourCardSimple from "./TourCardSimple"

const Container = styled.div`
  padding: 65px 0;
  background-color: white;
`

const SmallHeader = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
  color: #a1a1a1;
`

const BigHeader = styled.h2`
  font-size: 45px;
  text-transform: uppercase;
  color: #1a1a1a;
`

const ToursContainer = styled.div`
  margin: 60px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 95px;
`

function TopTours() {
  const TOURS_QUERY = graphql`
    query ToursQuery {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            price
            promotion
            continent
            city
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(pruneLength: 110)
        }
      }
    }
  `

  const data = useStaticQuery(TOURS_QUERY)

  return (
    <Container>
      <ContentWrapper>
        <SmallHeader>Nasze Topowe</SmallHeader>
        <BigHeader>Wycieczki</BigHeader>
        <ToursContainer>
          {data.allMarkdownRemark.nodes.map(node => (
            <TourCardSimple tour={node} key={node.id} />
          ))}
        </ToursContainer>
      </ContentWrapper>
    </Container>
  )
}

export default TopTours

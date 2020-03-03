import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Images
import logoImage from "../../images/logo.png"
import facebookImage from "../../images/social/facebook.png"
import youtubeImage from "../../images/social/youtube.png"
import snapImage from "../../images/social/snap.png"
import lastminuteImage from "../../images/icons/label-lastminute.png"
import promotionImage from "../../images/icons/label-promotion.png"

// Components
import ContentWrapper from "../ContentWrapper"

const activeLinkStyle = {
  color: "gold",
  fontWeight: "bold",
}

const Container = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  height: 120px;
`

const VerticalLine = styled.div`
  width: 1px;
  height: 20px;
  margin: 0 35px;
  background-color: white;
`

const Nav = styled.nav`
  display: flex;
`

const StyledLink = styled(Link)`
  padding: 0 15px;
  position: relative;

  :first-child {
    padding-left: 0;
  }

  :last-child {
    padding-right: 0;
  }
`

const Social = styled.div`
  display: flex;
  margin-left: 20px;
`

const SocialIcon = styled.a`
  display: block;
  margin: 12px;
  width: 30px;
  height: 30px;
  background-image: url(${props => props.src});
  background-size: cover;
`

const Icon = styled.img`
  position: absolute;
  top: -8px;
  right: 0;
`

function Navigation() {
  return (
    <Container>
      <img src={logoImage} alt="logo" />
      <VerticalLine />
      <Nav>
        <StyledLink to="/" activeStyle={activeLinkStyle}>
          strona główna
        </StyledLink>
        <StyledLink to="/offer" activeStyle={activeLinkStyle}>
          oferta
        </StyledLink>
        <StyledLink to="/lastminute" activeStyle={activeLinkStyle}>
          last minute
          <Icon src={lastminuteImage} alt="lastminute" />
        </StyledLink>
        <StyledLink to="/promotions" activeStyle={activeLinkStyle}>
          promocje
          <Icon src={promotionImage} alt="promotion" />
        </StyledLink>
        <StyledLink to="/news" activeStyle={activeLinkStyle}>
          aktualności
        </StyledLink>
        <StyledLink to="/about" activeStyle={activeLinkStyle}>
          o nas
        </StyledLink>
        <StyledLink to="/contact" activeStyle={activeLinkStyle}>
          kontakt
        </StyledLink>
      </Nav>
      <Social>
        <SocialIcon
          src={facebookImage}
          href="https://facebook.com"
          target="_blank"
        />
        <SocialIcon
          src={youtubeImage}
          href="https://youtube.com"
          target="_blank"
        />
        <SocialIcon
          src={snapImage}
          href="https://snapchat.com"
          target="_blank"
        />
      </Social>
    </Container>
  )
}

export default Navigation

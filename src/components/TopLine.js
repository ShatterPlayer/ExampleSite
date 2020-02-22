import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Components
import ContentWrapper from "./ContentWrapper"

// Images
import lockImage from "../images/icons/lock.png"
import phoneImage from "../images/icons/phone.png"
import placeImage from "../images/icons/placeholder.png"

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background-color: rgb(31, 31, 34, 0.8);
  color: white;
`

const Content = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SmallerPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled.img`
  padding: 0 12px;
`

const Padlock = styled.div`
  width: 45px;
  height: 45px;
  background-image: url(${lockImage});
  background-position: center;
  background-repeat: no-repeat;
  background-color: #181818;
`

const Phone = styled.div`
  margin-right: 30px;
`
function TopLine() {
  return (
    <Wrapper>
      <Content>
        <SmallerPart>
          <Padlock />
          <div>
            <Link to="/">
              <span style={{ color: "red", fontWeight: "bold" }}>
                rejestracja
              </span>
            </Link>
            {" / "}
            <Link to="">logowanie</Link>
          </div>
        </SmallerPart>
        <SmallerPart>
          <Phone>
            <Icon src={phoneImage} alt="phone" />
            +48123456789
          </Phone>
          <div>
            <Icon src={placeImage} alt="place" />
            Kraków, Kochanowskiego 21 a
          </div>
        </SmallerPart>
      </Content>
    </Wrapper>
  )
}

export default TopLine

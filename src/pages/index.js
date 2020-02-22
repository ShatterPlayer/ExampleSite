import React from "react"
import { createGlobalStyle } from "styled-components"

// Images
import background from "../images/slider/bg.jpg"

// Components
import TopLine from "../components/TopLine"
import Navigation from "../components/Navigation"
import TopArea from "../components/TopArea"
import SearchArea from "../components/SearchArea"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: white;
    text-decoration: none;
  }
`

const IndexPage = () => {
  return (
    <>
      <TopArea>
        <TopLine />
        <Navigation />
        <SearchArea />
      </TopArea>
      <GlobalStyle />
    </>
  )
}

export default IndexPage

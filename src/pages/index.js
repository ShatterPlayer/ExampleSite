import React from "react"
import { createGlobalStyle } from "styled-components"

// Components
import TopLine from "../components/TopLine"
import Navigation from "../components/Navigation"
import TopArea from "../components/TopArea"
import SearchArea from "../components/SearchArea"
import TopTours from "../components/TopTours"

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

  body {
    font-family: "Montserrat", sans-serif;
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
      <TopTours />
      <GlobalStyle />
    </>
  )
}

export default IndexPage

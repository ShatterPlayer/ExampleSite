import React from "react"
import { createGlobalStyle } from "styled-components"

// Components
import TopLine from "../components/sections/TopLine"
import Navigation from "../components/sections/Navigation"
import TopArea from "../components/sections/TopArea"
import SearchArea from "../components/sections/SearchArea"
import TopTours from "../components/sections/TopTours"
import LastMinute from "../components/sections/LastMinute"
import Footer from "../components/sections/Footer"
import CopyRight from "../components/sections/CopyRight"

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
      <LastMinute />
      <Footer />
      <CopyRight />
      <GlobalStyle />
    </>
  )
}

export default IndexPage

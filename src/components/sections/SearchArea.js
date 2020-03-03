import React from "react"
import styled from "styled-components"

// Components
import SearchBar from "../SearchBar"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 405px;
`

function SearchArea() {
  return (
    <Container>
      <SearchBar />
    </Container>
  )
}

export default SearchArea

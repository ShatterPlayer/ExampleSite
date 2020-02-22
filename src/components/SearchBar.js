import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Images
import searchImage from "../images/icons/search.png"
import gearImage from "../images/icons/gear.png"

const Container = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid grey;
  position: relative;
`

const Input = styled.input`
  height: 75px;
  width: 410px;
  border: none;
  padding: 0 25px;
`

const Button = styled.button`
  background: none;
  border: none;
  width: 100px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AdvancedSearch = styled.div`
  position: absolute;
  bottom: -30px;
  right: 30px;
  color: white;
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  padding: 5px;
`

function SearchBar() {
  return (
    <Container>
      <Input placeholder="Gdzie chcesz się udać..." />
      <Button>
        <img src={searchImage} alt="search" />
      </Button>
      <AdvancedSearch>
        <Icon src={gearImage} alt="gear" />
        <Link to="/offer">wyszukiwanie zaawansowane</Link>
      </AdvancedSearch>
    </Container>
  )
}

export default SearchBar

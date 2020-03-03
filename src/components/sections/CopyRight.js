import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b0917;
`

const Text = styled.div`
  font-size: 13px;
  color: #524f65;
`

function CopyRight() {
  const currentYear = new Date().getFullYear

  return (
    <Container>
      <Text>Projekt strona {currentYear} © / Wszystkie prawa zastrzeżone</Text>
    </Container>
  )
}

export default CopyRight

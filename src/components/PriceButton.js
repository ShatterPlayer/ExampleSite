import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 230px;
  background-color: #de1a54;
  border-bottom: 2px solid #ad0d3c;
  padding: 7px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin: 0 auto;
  text-transform: uppercase;
`

const TextContainer = styled.div`
  font-size: 11px;
`

const BiggerText = styled.span`
  font-size: 20px;
  line-height: 18px;
`

const VerticalLine = styled.div`
  width: 1px;
  height: 32px;
  background-color: #ad0d3c;
`

const More = styled.div`
  font-size: 15px;
  font-weight: bold;
`

function PriceButton() {
  return (
    <Container>
      <TextContainer>
        Dostępne od
        <br />
        <BiggerText>
          900 <b>PLN</b>
        </BiggerText>
      </TextContainer>
      <VerticalLine />
      <More>Więcej</More>
    </Container>
  )
}

export default PriceButton

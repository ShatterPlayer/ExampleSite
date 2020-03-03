import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  padding: 5px;
`

const TextContainer = styled.div`
  margin-left: 10px;
`

const Name = styled.div`
  color: #514f59;
  font-size: 12px;
`

const Value = styled.div`
  color: white;
  font-size: 13px;
`

function TourDetail({ image, name, value }) {
  return (
    <Container>
      <img src={image} alt="icon" />
      <TextContainer>
        <Name>{name}</Name>
        <Value>{value}</Value>
      </TextContainer>
    </Container>
  )
}

export default TourDetail

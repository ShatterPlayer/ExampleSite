import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 290px;
  background-color: #110e20;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
  width: 585px;
  text-align: center;
  font-size: 16px;
  color: #5a5478;
`

function Footer() {
  return (
    <Container>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
        elit bibendum, ornare est eu, mollis libero. Nunc risus sapien, sodales
        nec nisl sit amet, pellentesque porttitor ex.
      </Text>
    </Container>
  )
}

export default Footer

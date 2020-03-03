import styled from "styled-components"

const SmallHeader = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
  color: ${({ dark }) => (dark ? "#110e20" : "#a1a1a1")};
`

export default SmallHeader

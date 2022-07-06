import React from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>
}
export default Content

import React from 'react'
import styled from 'styled-components'
const Header = () => {
  const StyledHeader = styled.header`
    padding: 15px 50px;
    height: 100px;
    width: 100%;
    background-color: #fbfbfb;
    border-bottom: 1px solid #f5f5f5;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
  `
  return (
    <StyledHeader>
      <h1>Product Validator</h1>
    </StyledHeader>
  )
}
export default Header

import styled from 'styled-components'

export const StyledButton = styled.button`
  font-size: 18px;
  margin-top: 20px;
  padding: 10px 0px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 100%;
  background-color: #fbfbfb;
  transition: all 0.1s ease-in-out;

  &:hover:not(:disabled) {
    cursor: pointer;
    box-shadow: none;
  }
`

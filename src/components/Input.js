import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.label`
  width:100%;
  display: inline-flex;
  background: white;
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
  border-radius: 5px;
  height: 50px;
  input{
    outline: 0;
    border: none;
    color: hsl(0, 0%, 52%);
    &::-webkit-input-placeholder{
      color: #C4C4C4;
    }
  }
  i{
    margin: 0 20px;
    color: #C4C4C4;
  }
`

const Input = () => {

  return (
    <InputStyled>
      <i className="fas fa-search"></i>
      <input type="text" placeholder="Search for a country..." />
    </InputStyled>
  )
}
export default Input
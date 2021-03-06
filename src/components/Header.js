import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  color: hsl(200, 15%, 8%);
  padding: 0 10px;
  height: 80px;
  background:white;
  h1{
    font-size: 16px;
    display: inherit;
    margin: 0;
    align-items: center;
  }
  a{
    align-self:center;
  }

  label{
    font-size: 14px;
    display: inherit;
    align-items: center;
    font-weight: 600;
    & p{
      margin:0;
      padding: 0 7px
    }
    
  }
`


const Header = () => {

  return (
    <HeaderStyled>
      <Link to="/">
        <h1>Were in the world?</h1>
      </Link>
      <label>
        <i className="far fa-moon"></i>
        <p>Dark mode</p>
      </label>

    </HeaderStyled>
  )
}
export default Header
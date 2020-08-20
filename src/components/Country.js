import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const CountryStyled = styled.div`
  width:270px;  
  box-shadow: 0 2px 9px 0 rgba(0,0,0,.1);
  border-radius: 5px;
  overflow: hidden;
  background: white;
  text-decoration: none;
  
  .details{
    text-align: left;
    padding: 20px;
    & p{
      margin: 0;
      margin-bottom: .3em;
    }
    & strong{
      font-weight: 600;
    }
  }
  img{
    width: 100%;
    height: auto;
  }
  h3{
    margin:0;
    padding-bottom: 20px;
    text-decoration:none;
  }
  
`


const Country = ({ flag, name, population, region, capital }) => {
  const history= useHistory()
  const handleClick=()=>{
    history.push('/country')
  }
  return (
    <CountryStyled onClick={handleClick}>
      <img loading="lazy" src={flag} alt="flag" />
      <div className="details">
        <h3>{name}</h3>
        <p><strong>Population: </strong>{population}</p>
        <p><strong>Region: </strong>{region}</p>
        <p><strong>Capital: </strong>{capital}</p>
      </div>
    </CountryStyled>
  )

}
export default Country
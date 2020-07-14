import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Country from './Country'

const CountryListStyled= styled.div`
  display: flex;
  padding: 40px;
  justify-content: center;
  flex-direction: column;
`

const CountryList=()=>{
  const API="https://restcountries.eu/rest/v2/all"
  const [countries, setContries]= useState([])
  useEffect(
    ()=>{
      fetch(API)
      .then(resolve=> resolve.json())
      .then(data=> setContries(data))
      .catch(err=> console.log('Error: ', err))
    }
    , []
  )
  return(
    <CountryListStyled>

      {
        countries.map((item)=>(
          <Country
            key={item.name}
            flag= {item.flag}
            name={item.name}
            population= {item.population}
            region= {item.region}
            capital= {item.capital}
          />

        ))
      }


    </CountryListStyled>
  )

}
export default CountryList
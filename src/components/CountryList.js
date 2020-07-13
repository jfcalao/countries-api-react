import React, {useEffect} from 'react'
import styled from 'styled-components'
import Country from './Country'

const CountryListStyled= styled.div`
  display: flex;
  padding: 40px;
  justify-content: center;
`

const CountryList=()=>{
  const API="https://restcountries.eu/rest/v2/all"
  useEffect(
    ()=>{
      fetch(API)
      .then(resolve=> resolve.json())
      .then(data=>console.log(data.length))
      .catch(err=> console.log('Error: ', err))
    }
    , []
  )
  return(
    <CountryListStyled>
      <Country
        flag= 'https://restcountries.eu/data/deu.svg'
        name='Germany'
        population= {81770900}
        region= 'Europe'
        capital= 'Berlin'
      />

    </CountryListStyled>
  )

}
export default CountryList
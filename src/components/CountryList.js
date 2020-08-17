import React, { useEffect } from 'react'
import styled from 'styled-components'
import { setCountries } from '../actions'
import { connect } from 'react-redux'
import Country from './Country'

const CountryListStyled = styled.div`
  display: flex;
  padding: 40px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const CountryList = (props) => {
  const API = "https://restcountries.eu/rest/v2/all"
  const setCountries = props.setCountries

  useEffect(
    () => {
      fetch(API)
        .then(resolve => resolve.json())
        .then(data => setCountries(data))
        .catch(err => console.log('Error: ', err))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , []
  )
  return (
    <CountryListStyled>
      {
        props.countryFilter.map((item) => (
          <Country
            key={item.name}
            flag={item.flag}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        ))
      }
    </CountryListStyled>
  )
}
const mapDispatchToProps = {
  setCountries
}
const mapStateToProps = (state) => (
  {
    countries: state.countries,
    countryFilter: state.countryFilter
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(CountryList)
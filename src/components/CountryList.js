import React, {useEffect} from 'react'
import styled from 'styled-components'
import { fetchCountries } from '../actions'
import { connect } from 'react-redux'
import Country from './Country'

const CountryListStyled = styled.div`
  display: flex;
  padding: 40px;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  a{
    text-decoration:none;
    color:initial;
  }
`

const CountryList = (props) => {
  const {fetchCountries, isLoading, isError, countryFilter} = props

  useEffect(() => {
    if(countryFilter.length===0){
      fetchCountries()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CountryListStyled >
      {
        isLoading
        ? <p>Loading</p>
        : isError
          ? <p>Error</p>
          : countryFilter.map((item) => (
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
  fetchCountries
}
const mapStateToProps = (state) => (
  {
    isLoading: state.isLoading,
    isError: state.isError,
    countries: state.countries,
    countryFilter: state.countryFilter
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(CountryList)
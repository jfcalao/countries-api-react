import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import MatchedCountry from '../components/MatchedCountry'
import { fetchCountries } from '../actions'

const CountryDetailsStyled = styled.div`
  padding: 0 1.5em;
  .button-wrapper{
    padding: 50px 0;
  }
  .button{
    font-weight: 300;
    color: hsl(200, 15%, 8%);
    background: white;
    outline: 0;  
    box-shadow: 0 2px 9px 0 rgba(0,0,0,.3);
    border: none;
    display: flex;
    padding: .7em 2.3em;
    border-radius: .2em;
    i{
      margin-right: .7em;
    }
  }
  
`

const CountryDetails = () => {
  const { id } = useParams()
  const { goBack } = useHistory()
  const dispatch = useDispatch()
  const country = useSelector(state => state.countries.find(item => item.name === id))
  const { isLoading, isError } = useSelector(state => state)
  useEffect(() => {
    if (!country) {
      dispatch(fetchCountries())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = () => {
    goBack()
  }
  return (
    <CountryDetailsStyled>
      <div className="button-wrapper">
        <button className="button" onClick={handleClick}>
          <i className="fas fa-long-arrow-alt-left"></i>
          <p >Back</p>
        </button>
      </div>
      {
        isLoading
          ? <p>Loading</p>
          : isError
            ? <p>Error</p>
            : country
            &&<MatchedCountry
              name={country.name}
              nativeName={country.nativeName}
              population={country.population}
              region={country.region}
              subregion={country.subregion}
              capital={country.capital}
              topLevelDomain={country.topLevelDomain}
              currencies={country.currencies[0].name}
              languages={country.languages.map(item => `${item.name} `)}
              flag={country.flag}
              borderCountries={country.borders}
            />
      }

    </CountryDetailsStyled>
  )
}
export default CountryDetails
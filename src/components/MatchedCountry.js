import React from 'react'
import styled from 'styled-components'
const MatchedCountryStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .flag{
    width: 100%;
    max-width: 350px;
    height: 200px;
    margin-bottom: 20px;
    img{
      width: 100%;
      max-height: 100%;

    }
  }
  h1{
    font-size: 1.5em;
    margin: 30px 0;
  }
  .country-description{
    text-align: left;
    width: 100%;
  }
  .country-details{
    margin-bottom: 45px;
    p{
      margin-bottom: 10px;
      
    }
  }
  .border-countries{
    margin-bottom:30px;
    h2{
      font-size: 1.2em;
      margin-bottom: 20px;
    }
  }
  .border-countries-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    div{
      background: white;
      padding: 5px 35px;
      margin-bottom: 10px;
      border-radius: 5px;    
      box-shadow: 0 2px 9px 0 rgba(0,0,0,.1);

    }
  }
`
const MatchedCountry = ({
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  name,
  flag,
  borderCountries
}) => {

  return (
    <MatchedCountryStyled>
      <div className="flag">
        <img src={flag} alt="flag"/>
      </div>
      <div className="country-description">
        <h1 className="country-title">{name}</h1>
        <div className="country-details">
          <p><b>Native Name: </b>{nativeName}</p>
          <p><b>Population: </b>{population}</p>
          <p><b>Region: </b>{region}</p>
          <p><b>Sub Region: </b>{subregion}</p>
          <p><b>Capital: </b>{capital}</p>
        </div>
        <div className="country-details">
          <p><b>Top Level Domain: </b>{topLevelDomain}</p>
          <p><b>Currencies: </b>{currencies}</p>
          <p><b>Languages: </b>{languages}</p>
        </div>
        <div className="border-countries">
          <h2>Border Countries:</h2>
          <div className="border-countries-list">
            {
              borderCountries.map(item => (
                <div>
                  {item}
                </div>
              )
              )
            }
          </div>

        </div>
      </div>
    </MatchedCountryStyled>
  )

}
export default MatchedCountry
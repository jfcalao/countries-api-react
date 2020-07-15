import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { countryFilter } from '../actions'

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

const Input = (props) => {
  const handleInput = (ev) => {
    const inputValue = ev.target.value.toLowerCase()
    if (inputValue === "") {
      props.countryFilter([])
    } else {
      const matchedCountries = props.countries.filter(
        item => item.name.toLowerCase().includes(inputValue)
        )
        props.countryFilter(matchedCountries)
      }

  }
  return (
    <InputStyled>
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleInput}
      />
    </InputStyled>
  )
}

const mapStateToProps = (state) => ({
  countries: state.countries,
})
const mapDispatchToProps = {
  countryFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
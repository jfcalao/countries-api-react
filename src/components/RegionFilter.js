import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { countryFilter, setRegion } from '../actions'

const RegionFilterStyled = styled.div`
    width: 65%;
    margin-top: 40px;
    position: relative;
`

const RegionSelectorStyled = styled.div`
  height: 50px;
  background: white;
  color: hsl(200, 15%, 8%);
  font-size: .9em;
  font-weight:300;
  display: flex;
  align-items: center;
  padding: 0 25px;
  justify-content: space-between;
  box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
  border-radius: 5px;
`

const RegionListStyled = styled.ul`
  display: ${({ open }) => open ? 'block' : 'none'};
  text-align: left;
  margin-top: .5em;
  right: 0;
  left: 0;
  padding: .7em 1em;
  list-style: none;
  background: white;
  border-radius: 5px;
  position: absolute;
  box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
  & li{
    cursor: pointer;
    padding: .3em 0;
    font-size: .9em;
  }
`
const RegionFilter = (props) => {
  const [open, setOpen] = React.useState(false)
  const [filterBy, setFilterBy] = React.useState('Filter by Region')

  const showRegionList = () => {
    setOpen(!open)
  }

  const handlerClickedRegion = region => {
    props.setRegion(region)
    console.log(props.region)
    setOpen(false)
    setFilterBy(region)
    if (region === 'Filter by Region') {
      props.countryFilter(props.countries)
    } else {
      console.log(props.countryFilterVector.length)
      const matchedCountries = props.countries.filter(item => item.region === region).filter(item => item.name.toLowerCase().includes(props.input))
      props.countryFilter(matchedCountries)
    }

  }
  return (
    <RegionFilterStyled >
      <RegionSelectorStyled onClick={showRegionList}>
        <p>
          {filterBy}
        </p>
        <i className="fas fa-chevron-down"></i>

      </RegionSelectorStyled>

      <RegionListStyled open={open}>
        <li onClick={() => handlerClickedRegion('Filter by Region')}>Todo</li>
        <li onClick={() => handlerClickedRegion('Africa')}>Africa</li>
        <li onClick={() => handlerClickedRegion('Americas')}>Americas</li>
        <li onClick={() => handlerClickedRegion('Asia')}>Asia</li>
        <li onClick={() => handlerClickedRegion('Europe')}>Europe</li>
        <li onClick={() => handlerClickedRegion('Oceania')}>Oceania</li>
      </RegionListStyled>
    </RegionFilterStyled>
  )
}
const mapStateToProps = state => ({
  countries: state.countries,
  countryFilterVector: state.countryFilter,
  region: state.region,
  input: state.input
})
const mapDispatchToProps = {
  countryFilter,
  setRegion
}

export default connect(mapStateToProps, mapDispatchToProps)(RegionFilter)
import React from 'react'
import styled from 'styled-components'

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
  display: ${({open}) => open ? 'block' : 'none'};
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
const RegionFilter = () => {
  const [open, setOpen] = React.useState(false)

  const showRegionList= () => {
    setOpen(!open)
  }
  return (
    <RegionFilterStyled >
      <RegionSelectorStyled onClick={showRegionList}>
        <p>
          Filter by Region
        </p>
        <i className="fas fa-chevron-down"></i>

      </RegionSelectorStyled>

      <RegionListStyled open={open}>
        <li>Africa</li>
        <li>America</li>
        <li>Asia</li>
        <li>Europe</li>
        <li>Oceania</li>
      </RegionListStyled>
    </RegionFilterStyled>
  )
}
export default RegionFilter
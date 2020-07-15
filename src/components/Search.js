import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import RegionFilter from './RegionFilter'

const SearchStyled= styled.div`
  padding: 20px;
`

const Search= ()=>{
  
  return(
    <SearchStyled>
      <Input/>
      <RegionFilter/>
    </SearchStyled>
  )
}
export default Search
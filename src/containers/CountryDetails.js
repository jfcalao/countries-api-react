import React from 'react'
import { useHistory } from 'react-router-dom'




const CountryDetails = () => {
  const history = useHistory()
  const handleClick = () => {
    history.goBack()
  }
  return (
    <>
      <h1>ESTÁ VIVOOOO!!!</h1>
      <button onClick={handleClick}>Go back</button>
    </>
  )
}
export default CountryDetails
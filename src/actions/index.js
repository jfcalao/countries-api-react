const API = "https://restcountries.eu/rest/v2/all"

const fetchCountriesPending = () => ({
  type: 'FETCH_COUNTRIES_PENDING'
})

const fetchCountriesSuccess = payload => ({
  type: 'FETCH_COUNTRIES_SUCCESS',
  payload
})

const fetchCountriesError = () => ({
  type: 'FETCH_COUNTRIES_ERROR'
})

export const fetchCountries = () => (dispatch) => {
  dispatch(fetchCountriesPending())
  fetch(API)
    .then(resolve => resolve.json())
    .then(data => dispatch(fetchCountriesSuccess(data)))
    .catch(() => dispatch(fetchCountriesError()))
}


export const countryFilter=payload=>({
  type: 'COUNTRY_FILTER',
  payload
})
export const setRegion=payload=>({
  type: 'SET_REGION',
  payload
})
export const setInput=payload=>({
  type: 'SET_INPUT',
  payload
})
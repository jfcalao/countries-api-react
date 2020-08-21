const reducer = (state, action) => {
  switch(action.type){
    case 'FETCH_COUNTRIES_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'FETCH_COUNTRIES_SUCCESS':
      return {
        ...state,
        countries: action.payload,
        countryFilter: action.payload,
        isLoading: false,
        isError: false
      }
    case 'FETCH_COUNTRIES_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case 'COUNTRY_FILTER':
      return{
        ...state,
        countryFilter: action.payload
      }
    case 'SET_REGION':
      return{
        ...state,
        region: action.payload
      }
    case 'SET_INPUT':
      return{
        ...state,
        input: action.payload
      }
    default:
        return state
  }
}
export default reducer
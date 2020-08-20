const reducer = (state, action) => {
  switch(action.type){
    case 'SET_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
        countryFilter: action.payload
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
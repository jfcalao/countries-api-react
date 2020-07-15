const reducer = (state, action) => {
  switch(action.type){
    case 'SET_COUNTRIES':
      return {
        ...state,
        countries: action.payload
      }
    case 'COUNTRY_FILTER':
      return{
        ...state,
        countryFilter: action.payload
      }
    default:
        return state
  }
}
export default reducer
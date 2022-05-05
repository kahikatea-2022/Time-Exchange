// TODO: import actions here, replace hardcoded "SET_WAITING"/"UNSET_WAITING" cases
// eg CREATING_PROFILE

const reducer = (state = false, action) => {
  switch (action.type) {
    case "SET_WAITING":
      return true
    case "UNSET_WAITING":
      return false  
    default:
      return state  
  }
}

export default reducer
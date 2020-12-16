const museumReducer = (state=[], action) => {

    switch(action.type){
      case "SET_MUSEUMS":
        return [...action.payload]
      case "ADD_MUSEUM":
        return [...state, action.payload]
      case "REMOVE_MUSEUM":
        let newMuseums = state.filter(museum => museum.id !== action.payload)
        return [...newMuseums]
      default:
        return state
    }
  }

  export default museumReducer;
export default(state=[], action) => {

    switch(action.type){
      case "SET_PAINTINGS":
        return [...action.payload]
      case "ADD_PAINTING":
        return [...state, action.payload]
      case "REMOVE_PAINTING":
        let newPainting = state.filter(painting => painting.id !== action.payload)
        return [...newPainting]
      default:
        return state
    }
  }
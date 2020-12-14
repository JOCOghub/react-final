export const fetchMuseums = () => {
    return(dispatch) => {
      return fetch('http://localhost:3000/museums')
      .then(resp => resp.json())
      .then(museums => {
        dispatch({ type: "SET_MUSEUMS", payload: museums })
      })
    }
  }
  //check for bugs
  //add  thunk loading
  
  export const addMuseum = museum => {
    return(dispatch) => {
      return fetch('http://localhost:3000/museums', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({museum:museum})
      })
      .then(resp => resp.json())
      .then(museum => {
        dispatch({ type: "ADD_MUSEUM", payload: museum })
      })
    } 
  }
  
  export const removeMuseum = museumId => {
    return(dispatch) => {
      return fetch(`http://localhost:3000/museums/${museumId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(museum => {
        dispatch({ type: "REMOVE_MUSEUM", payload: museumId })
      })
    } 
  }
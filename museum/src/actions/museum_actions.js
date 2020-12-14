export const fetchPaintings = () => {
    return(dispatch) => {
      return fetch('http://localhost:3000/paintings')
      .then(resp => resp.json())
      .then(paintings => {
        dispatch({ type: "SET_PAINTINGS", payload: paintings })
      })
    }
  }
  
  
  export const addPainting = painting => {
    return(dispatch) => {
      return fetch('http://localhost:3000/paintings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({painting:painting})
      })
      .then(resp => resp.json())
      .then(painting => {
        dispatch({ type: "ADD_PAINTING", payload: painting })
      })
    } 
  }
  
  export const removePainting = paintingId => {
    return(dispatch) => {
      return fetch(`http://localhost:3000/paintings/${paintingId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(painting => {
        dispatch({ type: "REMOVE_PAINTING", payload: paintingId })
      })
    } 
  }
  
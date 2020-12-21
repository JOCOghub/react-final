export const fetchPaintings = () => {
    return(dispatch) => {
      return fetch(`http://localhost:3000/paintings`)
      .then(resp => resp.json())
      .then(paintings => {
        dispatch({ type: "SET_PAINTINGS", payload: paintings })
      })
    }
  }
  
  export const addPainting = (painting, museumId) => {
    const p = {painting: {name: painting.name, museum_id: museumId}}
    return(dispatch) => {
      return fetch(`http://localhost:3000/museums/${museumId}/paintings`, { //HERE
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(p)//HERE
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
  
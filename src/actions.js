import {
  FETCH_DETAIL,
  IS_LOADING,
  LOADED,
  FETCH_CARDS
} from "./constants";

export const fetchData = (url, id) => {
  return dispatch => {
    dispatch({ type: IS_LOADING })
    fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: FETCH_DETAIL, payload: json.articles[0] })
        localStorage.setItem(id, JSON.stringify(json.articles[0]))
        dispatch({ type: LOADED })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: LOADED })
      })
  }
}

export const fetchDataAll = url => {
  return dispatch => {
    dispatch({ type: IS_LOADING })
    fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: FETCH_CARDS, payload: json })
        dispatch({ type: LOADED })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: LOADED })
      })
  }
}
// actions and reducer for auth
import client from 'client'

export const API_REQUEST = 'API_REQUEST'
export const GET_CART_SUCCESS = 'GET_USER_SUCCESS'
export const GET_CART_FAILURE = 'GET_USER_FAILURE'

export const getCartSuccess = (response) => {
  return {
    type: GET_CART_SUCCESS,
    response
  }
}

export const getCartFailure = (response) => {
  return {
    type: GET_CART_FAILURE,
    response
  }
}

export const requestCart = () => {
  return dispatch => {
    dispatch({ type: API_REQUEST })
    return client.get('cart')
      .then(response => {
        if ([2, 3].indexOf(response.status[0]) !== -1) {
          dispatch(getCartSuccess(response.body))
        } else {
          dispatch(getCartFailure())
        }
      })
  }
}

const defaultCart = {
  loading: false,
  apiError: false,
  items: []
}

export default (state = defaultCart, action) => {
  switch (action.type) {
    case API_REQUEST: {
      return { ...state, loading: true }
    }
    case GET_CART_SUCCESS: {
      return { ...state, items: action.response.items, loading: false
      }
    }
    case GET_CART_FAILURE: {
      return { ...state, loading: false, apiError: true }
    }
    default: {
      return state
    }
  }
}

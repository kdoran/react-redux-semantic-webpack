// all server communication functions

import fetch from 'isomorphic-fetch'
import config from 'config'

export default {

  get (url) {
    return fetch(config.backendUrl + url, { credentials: 'include' })
    .then(parseJSON)
    .catch(parseError)
  },

  destroy (url) {
    return fetch(config.backendUrl + url, {
      method: 'DELETE',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(parseJSON)
    .catch(parseError)
  },

  post (url, data = {}) {
    return fetch(config.backendUrl + url, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(parseJSON)
    .catch(parseError)
  }

}

function parseJSON (httpResponse) {
  return httpResponse.json().then((response) => {
    return {
      status: httpResponse.status,
      statusText: httpResponse.status,
      body: response
    }
  })
}

function parseError (error) {
  return {
    status: 500,
    statusText: error.message,
    body: { error: error.message }
  }
}

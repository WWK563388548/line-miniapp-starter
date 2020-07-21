import 'whatwg-fetch';

function parseJSON(response) {
  return response.json()
}

/**
 * Get request
 * @param {*} url 
 * @param {*} data 
 */
export const get = (url, data) => {
  return fetch(url, {
        cache: 'no-cache',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'GET',
      })
      .then(parseJSON);
}

/**
* Post request
* @param {*} url 
* @param {*} data 
*/
export const post = (url, data) => {
  return fetch(url, {
    body: JSON.stringify(data), 
    cache: 'no-cache',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: 'POST',
  })
  .then(parseJSON) // parses response to JSON
};
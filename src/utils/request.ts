import 'whatwg-fetch';

function parseJSON(response: any) {
  return response.json()
}

/**
 * Get request
 * @param {*} url 
 */
export const get = (url: string): Promise<any> => {
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
export const post = (url: string, data: object): Promise<any> => {
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
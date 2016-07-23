const GET_EMAIL = 'GET_EMAIL'

export function getEmail () {
  // you can dispatch a ADDING_TODO action here
  console.log('doing actions');

  return (dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch({
            type: GET_EMAIL,
            emails: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });

  }
}

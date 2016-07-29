const GET_PROJECTS = 'GET_PROJECTS'
const GET_SPRINTS = 'GET_SPRINTS'
const GET_APIS = 'GET_APIS'
const GET_SCENES = 'GET_SCENES'

export function getProjects () {
  // you can dispatch a ADDING_TODO action here
  console.log('fetching projects');

  return (dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch({
            type: GET_PROJECTS,
            projects: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });

  }
}

export function getSprints() {

    // you can dispatch a ADDING_TODO action here
    console.log('fetching sprints');

    return (dispatch) => {

      return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((responseJson) => {
          dispatch({
              type: GET_SPRINTS,
              sprints: responseJson
          })
        })
        .catch((error) => {
          console.error(error);
        });

    }

}

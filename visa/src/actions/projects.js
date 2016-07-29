const GET_PROJECTS = 'GET_PROJECTS'
const GET_SPRINTS = 'GET_SPRINTS'
const GET_APIS = 'GET_APIS'
const GET_SCENES = 'GET_SCENES'


const INSERT_PROJECT = 'INSERT_PROJECT'


export function getProjects () {
  // you can dispatch a ADDING_TODO action here
  console.log('fetching projects');

  return (dispatch) => {

    return fetch('http://localhost/api/projects')
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

export function insertProject(options) {

    return (dispatch) => {

      return fetch('http://localhost/api/projects/' + options.newProject)
        .then((response) => response.json())
        .then((responseJson) => {

            if (responseJson.success) {

                dispatch({
                    type: INSERT_PROJECT,
                    newProject: '',
                    alert: '插入' + options.newProject+ '项目成功'
                })

            }

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

const data =  {
    newProject: '',
    newSprint: '',
    newApi: '',
    newScene: '',

    currentProjectId: '',
    currentSprintId: '',
    currentApiId: '',
    currentSceneId: '',

    alert: '暂无消息',
    // 首列
    projects : [
        {
            name: '行程助手',
            active: false
        }
    ],
    // 第二列迭代
    sprints : [

        {
            projectId: 1,
            sprintId: 1,
            sprintName: '8.1.1',
            active: false,
        },

        {
            projectId: 1,
            sprintId: 2,
            sprintName: '8.1.2',
            active: false,
        },

        {
            projectId: 1,
            sprintId: 3,
            sprintName: '8.1.3',
            active: false,
        },

        {
            projectId: 1,
            sprintId: 4,
            sprintName: '8.1.4',
            active: false,
        }
    ],
    // 第三列接口
    apis : [

        {
            projectId: 1,
            sprintId: 1,
            apiId: 1,
            apiName: '获取行程列表',
            apiPath: 'http://api.tuniu.com/journey/api/getBeforeInItineraryList',
            active: false,

        },
        {
            projectId: 1,
            sprintId: 2,
            apiId: 2,
            apiName: '获取行程列表',
            apiPath: 'http://api.tuniu.com/journey/api/getBeforeInItineraryList',
            active: false,

        },
        {
            projectId: 1,
            sprintId: 3,
            apiId: 3,
            apiName: '获取行程列表',
            apiPath: 'http://api.tuniu.com/journey/api/getBeforeInItineraryList',
            active: false,

        },
    ],
    // 第四列场景
    scenes: [
        {
            projectId: 1,
            sprintId: 1,
            apiId: 1,
            sceneId: 1,
            active: false,
            sceneName: '获取酒店详情'
        },
        {
            projectId: 1,
            sprintId: 1,
            apiId: 1,
            sceneId: 2,
            active: false,
            sceneName: '获取门票详情'
        },
        {
            projectId: 1,
            sprintId: 1,
            apiId: 1,
            sceneId: 3,
            active: false,
            sceneName: '获取机票详情'
        },
        {
            projectId: 1,
            sprintId: 1,
            apiId: 1,
            sceneId: 4,
            active: false,
            sceneName: '获取当地玩乐详情'
        },
    ]

}

export default function todos(state = data, action) {

  switch (action.type) {

      case 'GET_PROJECTS':

        return {

            ...state,

            projects: [

                ...action.projects

            ]

        }

    case 'GET_SPRINTS':

      return {

          ...state,

          sprints: [

              ...action.sprints

          ]

      }

    case 'INSERT_PROJECT':

        return {

            ...state,

            newProject: action.newProject,
            alert: action.alert,

        }

    default:
      return state
  }
}

<template>

    <div class="row">

        <div class="col-sm-3">

            <h3>项目名称</h3>
            <ul class="projects list-group" v-if="projects.projects && projects.projects.length > 0">
              <project v-for="project in projects.projects" track-by="$index" :index="$index" :store="store" :project-data="project"></project>
            </ul>

        </div>

        <div class="col-sm-3">

            <h3>迭代</h3>
            <ul class="sprints list-group" v-if="projects.sprints && projects.sprints.length > 0">
              <li class="sprint list-group-item" :class="{ acitve: sprint.active}" v-for="sprint in projects.sprints" track-by="$index">
                  <a href="#" v-text="sprint.sprintName || sprint.name"></a>
              </li>
            </ul>

        </div>

        <div class="col-sm-3">

            <h3>接口</h3>
            <ul class="apis list-group" v-if="projects.apis && projects.apis.length > 0">
              <li class="api list-group-item" :class="{active: api.active}" v-for="api in projects.apis" track-by="$index">
                  <a href="#" v-text="api.apiName"></a>
              </li>
            </ul>

        </div>

        <div class="col-sm-3">
            <h3>场景</h3>
            <ul class="scenes list-group" v-if="projects.scenes && projects.scenes.length > 0">
              <li class="scene list-group-item" :class="{active: scene.active}" v-for="scene in projects.scenes" track-by="$index">
                  <a href="#" v-on:click="getAgain" v-text="scene.sceneName"></a>
              </li>
            </ul>

        </div>

    </div>

</template>

<script>

import store from '../store'
import project from '../components/project'

export default {

    components: {
        project,
    },

    created() {
        console.log('获取数据库数据');
        //store.actions.getEmail();
        store.dispatch(store.actions.getProjects());

    },

    beforeCompile() {
        console.log('beforeCompile');
    },

    compiled() {
        console.log('compiled');
    },

    ready() {
        console.log('ready');
    },

    attached() {
        console.log('attached');
    },

    detached() {
        console.log('detached');
    },

    destroyed() {
        console.log('destroyed');
    },



    data() {
        // 默认数据
        return {

            projects: this.$select('projects'),
            store: store
        }

    },

    methods: {

        getAgain() {

            store.dispatch(store.actions.getProjects());

        },
    },

}

</script>

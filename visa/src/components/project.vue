<template>

    <li class="list-group-item project" :class="{active: projectData.active}">
        <a href="#" v-text="projectData.name || projectData.title"></a>
    </li>

</template>


<script>
export default {

    props: ['projectData','store','index'],

    components: {

    },

    created() {

        this.index == 1 && this.store.dispatch(this.store.actions.getSprints({

            // projectId: this.projectData.projectId

        }))

    },


}
</script>

<style lang="scss">


</style>

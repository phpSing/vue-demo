<template>
    <div class="am-g">

        <div class="am-u-lg-12">

            <h2>Read only emails</h2>
            <ul class="emails am-list" v-if="emails.emails && emails.emails.length > 0">
              <li class="email" :class="{del: email.done}" v-for="email in emails.emails" track-by="$index">
                  <a href="#" v-text="email.title"></a>
              </li>
            </ul>

        </div>

    </div>

</template>

<script>
import store from '../store'

export default {

    components: {

    },

    created() {

        console.log('tim is created');
        console.log('now getting new emails');
        console.log(store.actions);
        //store.actions.getEmail();
        store.dispatch(store.actions.getEmail());

    },

    data() {

        return {

            emails: this.$select('emails')

        }

    }

}

</script>

import Vue from 'vue';
import Router from 'vue-router';
import ModerationList from './components/ModerationList.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: ModerationList,
        },
    ],
});
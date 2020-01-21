import 'bootstrap';
import './main.scss';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';

import Avatars from './components/Avatars.vue';

Vue.component('my-avatars', Avatars);

// This imports all the layout components such as <b-container>, <b-row>, <b-col>:
import { LayoutPlugin } from 'bootstrap-vue';
Vue.use(LayoutPlugin);

window.Vue = Vue;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

window.$ = window.jQuery = require('jquery');

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
];

const router = new VueRouter({
    routes,
});

new Vue({

    el: '#app',
    router,


    methods: {
        activeLink(name) {
            return name === this.$router.name;
        },
    },

});

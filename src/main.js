// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

// require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
// require('../node_modules/font-awesome/css/font-awesome.min.css')
// require('../node_modules/simple-line-icons/css/simple-line-icons.css')
// require('../node_modules/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css')


Vue.mixin({
    // Global variables that are read-only
    data() {
        return {
            get labelClass() {
                return 'col-12 col-sm-4 col-form-label text-left text-sm-right';
            },
            get inputWrapper() {
                return 'col-12 col-sm-8 col-lg-6';
            },
        };
    },
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {
        App,
    },
    template: '<App/>',
});

import Vue from 'vue';
import Options from './options.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(Options)
}).$mount('#app');

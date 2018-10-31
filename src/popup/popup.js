import Vue from 'vue';
import Options from './popup.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Options)
}).$mount('#app');

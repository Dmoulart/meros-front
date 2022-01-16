import Vue from 'vue'
import { MerosVue } from '~/mixins/meros-vue'
export default (context, inject) => {
  // Todo: is this the best place to do this ?
  Vue.mixin(MerosVue)
  inject('context', context)
}

import { Context } from '@nuxt/types';
import Vue from 'vue'
import { MerosVue } from '~/mixins/meros-vue'

export default (context: Context, inject: (pluginName: string, object: Context) => void) => {
  // Todo: is this the best place to do this ?
  Vue.mixin(MerosVue)
  inject('context', context)
}
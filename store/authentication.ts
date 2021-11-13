import {Module, VuexModule} from "vuex-module-decorators";

@Module({
  name: 'authentication',
  stateFactory: true,
  namespaced: true
})
export default class Authentication extends VuexModule {

}

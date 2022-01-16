import { Module, VuexModule } from 'vuex-module-decorators'
@Module({
  name: 'authentication',
  stateFactory: true,
  namespaced: true
})
export class Authentication extends VuexModule {
  // Require to active store and assure $auth module works well
}

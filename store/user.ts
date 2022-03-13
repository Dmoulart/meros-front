import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { User } from '~/bo/user'
@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true
})
export class UserStore extends VuexModule {
  instance: User | null = null

  @Mutation
  login(user: User) {
    this.instance = user
  }
}

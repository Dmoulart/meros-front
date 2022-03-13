import {
  Component,
  Vue
} from 'nuxt-property-decorator'
import { ownerData } from '~/owner'
import { OwnerData } from '~/types/owner'
import * as Auth from '~/types/user'
import { User } from '~/bo/user'

/**
 * Global mixin
 */
@Component({})
export class MerosVue extends Vue {
  // All the site owner data as JSON file
  owner: OwnerData = ownerData

  /**
   * Get the current user
   * @return {User} - The current user
   */
  get user(): User {
    return this.$auth.user as unknown as User
  }
}

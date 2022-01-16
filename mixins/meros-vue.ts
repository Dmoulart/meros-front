import {
  Component,
  Vue
} from 'nuxt-property-decorator'
import { ownerData } from '~/owner'
import { OwnerData } from '~/types/owner'
import { User } from '~/types/user'

/**
 * Global mixin
 */
@Component({})
export class MerosVue extends Vue {
  // All the owner data as JSON file
  owner: OwnerData = ownerData

  // The used layout
  layout: string | null = 'main'

  /**
   * Get the current user
   * @return {User} - The current user
   */
  get user (): User {
    return this.$auth.$state.user
  }
}

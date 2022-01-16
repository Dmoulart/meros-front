import {
  Component,
  Vue
} from 'nuxt-property-decorator'
import { ownerData } from '~/owner'
import { OwnerData } from '~/types/owner'

/**
 * Global mixin
 */
@Component({})
export class MerosVue extends Vue {
  // All the owner data as JSON file
  owner: OwnerData = ownerData
}

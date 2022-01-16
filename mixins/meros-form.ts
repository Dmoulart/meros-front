import {
  Component,
  Vue
} from 'nuxt-property-decorator'
import { rules } from '~/validation/rules'

@Component({})
export class MerosFormVue extends Vue {
  // All the validations rules
  rules = rules

  errors: string = ''

  errorMessages: Record<string, string> = {
    'Error: Request failed with status code 401': "Oups, identifiants non reconnus. Etes-vous sûr d'avoir saisis les bons ?",
    'Error: Request failed with status code 400': 'Oups, il y a eu un problème ! Veuillez réessayer plus tard.',
    'Error: Request failed with status code 500': 'Oups, il y a eu un problème ! Veuillez réessayer plus tard.'
  }

  setErrors (error: string): void {
    this.errors = this.errorMessages[error]
  }
}

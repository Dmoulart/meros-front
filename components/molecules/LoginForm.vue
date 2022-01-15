<template>
  <m-panel class="login">
    <header class="login__header">
      <img src="/img/logo.svg" class="login__logo" :alt="owner.name">
      <h2 class="login__title">
        {{ message }}
      </h2>
    </header>

    <m-form id="login" class="login__form" @submit="login">
      <template #fields>
        <m-input-group class="login__input">
          <m-input icon="user" :field="fields.email" :rules="rules.email" :display-error="true" />
        </m-input-group>

        <m-input-group class="login__input">
          <m-input
            :field="fields.password"
            icon="password"
            :is-password="true"
            :rules="rules.min(6)"
            :display-error="true"
          />
        </m-input-group>
      </template>
      <template #errors>
        {{ errors }}
      </template>
      <template #submit>
        <m-button class="login__submit">
          Se connecter
        </m-button>
      </template>
    </m-form>
  </m-panel>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from 'nuxt-property-decorator'
import { ownerData } from '../../owner'
import { Submission } from '~/types/form'
import { rules } from '~/validation/rules'
@Component({})
export default class Login extends Vue {
  @Prop({ type: String })
    message !: string

  owner = ownerData

  rules = rules

  errors: string = ''

  fields: Record<string, string> = {
    email: 'Email',
    password: 'Mot de passe'
  }

  errorMessages: Record<string, string> = {
    'Error: Request failed with status code 401': "Oups, identifiants non reconnus. Etes-vous sûr d'avoir saisis les bons ?",
    'Error: Request failed with status code 400': 'Oups, il y a eu un problème ! Veuillez réessayer plus tard.',
    'Error: Request failed with status code 500': 'Oups, il y a eu un problème ! Veuillez réessayer plus tard.'
  }

  beforeMount () {
    this.$auth.onError((error, name, endpoint) => {
      console.log(error, name, endpoint)
      this.errors = (this.$auth.error) as unknown as string
    })
  }

  async login ({ isValid, data }: Submission): Promise<void> {
    if (!isValid) { return }
    const credentials = { username: data[this.fields.email], password: data[this.fields.password] }
    try {
      await this.$auth.loginWith('local', credentials)
    } catch (error) {
      this.errors = this.errorMessages[error as string]
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  min-width: max(280px, 25vw);
  width: 25vw;

  &__header {
    position: relative;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__title{
    margin-right: auto;
    margin-left: auto;
  }

  &__logo {
    display:none;
    position: absolute;
    width: 100px;
    height: auto;
  }
}
</style>

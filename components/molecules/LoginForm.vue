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
          <m-input icon="user" label="Email" field="username" :rules="rules.email" display-errors />
        </m-input-group>
        <m-input-group class="login__input">
          <m-input
            label="Mot de passe"
            field="password"
            icon="password"
            :is-password="true"
            :rules="rules.min(6)"
            display-errors
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

  errorMessages: Record<string, string> = {
    'Error: Request failed with status code 401': "Oups, identifiants non reconnus. Etes-vous sûr d'avoir saisis les bons ?",
    'Error: Request failed with status code 400': 'Oups, il y a eu un problème ! Veuillez réessayer plus tard.',
    'Error: Request failed with status code 500': 'Oups, il y a eu un problème ! Veuillez réessayer plus tard.'
  }

  async login ({ errors, data }: Submission): Promise<void> {
    if (errors) { return }
    await this.$auth.loginWith('local', { data }).catch(this.setErrors)
  }

  setErrors (error: string): void {
    this.errors = this.errorMessages[error]
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

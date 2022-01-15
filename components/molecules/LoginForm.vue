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
          <m-input v-model="form.email" icon="user" field="Email" :rules="rules.email" :display-error="true" />
        </m-input-group>

        <m-input-group class="login__input">
          <m-input
            v-model="form.password"
            field="Mot de passe"
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
import { rules } from '@/validation/rules'
@Component({})
export default class Login extends Vue {
  @Prop({ type: String })
    message !: string

  owner = ownerData

  rules = rules

  form = {
    email: '',
    password: ''
  }

  errors: string = ''

  errorMessages: Record<string, string> = {
    'Error: Request failed with status code 401': "Oups, identifiants non reconnus. Etes-vous sûr d'avoir saisis les bons ?"
  }

  beforeMount () {
    this.$auth.onError(() => {
      this.errors = (this.$auth.error) as unknown as string
    })
  }

  async login (submission: Record<string, unknown>): Promise<void> {
    console.log('form is valid', submission)
    if (!submission.isValid) { return }
    const data = { username: this.form.email, password: this.form.password }
    try {
      await this.$auth.loginWith('local', { data })
    } catch (err) {
      this.errors = this.errorMessages[err as string]
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

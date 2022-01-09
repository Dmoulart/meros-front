<template>
  <m-panel class="login">
    <header class="login__header">
      <img src="/img/logo.svg" class="login__logo" :alt="owner.name">
      <h2 class="login__title">
        {{ message }}
      </h2>
    </header>

    <m-form id="login" class="login__form">
      <template #fields>
        <m-input-group class="login__input">
          <m-input v-model="form.email" icon="user" field="Email" :validation="rules.email" :display-error="true" />
        </m-input-group>

        <m-input-group class="login__input">
          <m-input
            v-model="form.password"
            field="Mot de passe"
            icon="password"
            :is-password="true"
            :validation="rules.min(6)"
            :display-error="true"
          />
        </m-input-group>
      </template>

      <template #submit>
        <m-button class="login__submit" message="Se connecter" @click="submit()">
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

  async submit () {
    const data = { username: this.form.email, password: this.form.password }
    this.$auth.onError(() => {
      console.log('wololo')
      console.log(this.$auth.error)
    })
    try {
      await this.$auth.loginWith('local', { data })
    } catch (err) {
      console.warn(err)
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  min-width: max(280px, 25vw);

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

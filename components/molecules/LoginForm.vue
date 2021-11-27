<template>
  <m-panel class="login">
    <img src="/img/logo.svg" class="login__logo" :alt="owner.name">
    <form id="login" class="login__form">
      <m-input-group class="login__form__input">
        <m-input v-model="form.email" field="Email" icon="user" />
      </m-input-group>

      <m-input-group class="login__form__input">
        <m-input v-model="form.password" field="Mot de passe" icon="password" :is-password="true" />
      </m-input-group>
    </form>
    <m-button class="login__form__submit" message="Se connecter" @click="submit()" />
  </m-panel>
</template>

<script lang="ts">
import {
  Component, On,
  Vue
} from 'nuxt-property-decorator'
import * as owner from '../../owner/owner.json'
@Component({})
export default class Login extends Vue {
  owner = owner

  form = {
    email: '',
    password: ''
  }

  rules = {}

  async submit () {
    const data = { username: this.form.email, password: this.form.password }
    this.$auth.onError(() => {
      console.log('wololo')
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
  height: 45vh;
  max-width: 50vw;
  @include sm{
    max-width: 35vw;
  }

  @include md{
    min-width: 18vw;
  }

  @include lg{
    max-width: 18vw;
  }

  &__logo {
    align-self: flex-start;
    width: 100px;
    height: auto;
  }

  &__form{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow:1;
    margin-top: 14px;
    width:100%;

    &__input{
      // margin-block: 48px;
    }

    &__submit{
      margin-block-start: 24px;
      justify-self: flex-end;
      height:48px;
    }
   }
}
</style>

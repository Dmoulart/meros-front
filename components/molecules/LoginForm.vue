<template>
  <m-panel class="login">
    <header class="login__header">
      <img src="/img/logo.svg" class="login__logo" :alt="owner.name">
      <h2 class="login__title">
        {{ message }}
      </h2>
    </header>

    <form id="login" class="login__form">
      <m-input-group class="login__input">
        <m-input v-model="form.email" icon="user" field="Email" />
      </m-input-group>

      <m-input-group class="login__input">
        <m-input v-model="form.password" field="Mot de passe" icon="password" :is-password="true" />
      </m-input-group>
    </form>
    <m-button class="login__submit" message="Se connecter" @click="submit()" />
  </m-panel>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from 'nuxt-property-decorator'
import { ownerData } from '../../owner'

@Component({})
export default class Login extends Vue {
  owner = ownerData

  @Prop({ type: String })
    message !: string

  form = {
    email: '',
    password: ''
  }

  rules = {}

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
  // height: 65vh;
  // max-width: 400px;
  //max-width: 50vw;
  // min-width: 280px;
  // max-height: 568px;
  height: 45vh;

  min-width: 280px;
  aspect-ratio: 1/2;
  @include sm{
    //max-width: 35vw;
  }

  @include md{
    //min-width: 18vw;
  }

  @include lg{
    //max-width: 18vw;
  }
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
    position: absolute;
    width: 100px;
    height: auto;
    display:none;
  }

  &__form{
    display: flex;
    flex-direction: column;
    //justify-content: space-evenly;
    //flex-grow:1;
    margin-top: 14px;
    width:100%;
  }

    &__submit{
      justify-self: flex-end;
      height:48px;
    }
}
</style>

<template>
  <div style="width:100vw;height:100vh;display:flex;justify-content:center;align-items:center">
    <m-panel class="login">
      <form class="login__form">
        <m-input-group class="login__form__input">
          <m-input field="Email" icon="user" />
        </m-input-group>

        <m-input-group class="login__form__input">
          <m-input field="Mot de passe" icon="password" :is-password="true" />
        </m-input-group>

        <m-button class="login__form__submit" message="Se connecter" />
      </form>
    </m-panel>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'
@Component({})
export default class Login extends Vue {
  form = {
    email: '',
    password: ''
  }

  rules = {}

  async submit () {
    try {
      const data = { username: this.form.email, password: this.form.password }
      await this.$auth.loginWith('local', { data })
    } catch (err) {
      console.warn(err)
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  width: 60%;

  @include sm{
    width: 50%;
  }

  @include md{
    width:35%;
  }

  @include lg{
    width:20%;
  }

  &__form{
    width:100%;

    &__input{
      margin-block: 48px;
    }

    &__submit{
      justify-self: flex-end;
    }
   }
}
</style>

<template>
  <div style="width:100vw;height:100vh;display:flex;justify-content:center;align-items:center">
    <form>
      <m-input field="Email" icon="user" />
      <br>
      <br>
      <m-input field="Mot de passe" icon="password" :is-password="true" />
    </form>
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

<style scoped>

</style>

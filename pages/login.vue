<template>
  <LoginForm />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({})
export default class Login extends Vue {
  name = 'Login'
  asyncData (context:any) {
    console.log('router')
    console.log(context)
    return {
      wololo: 'wololo'
    }
  }
}
</script>

<style scoped>

</style>

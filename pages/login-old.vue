<template>
  <div class="login-page">
    <div class="login-page__presentation">
      <h1>{{ owner.name }}</h1>
      <img
        src="/img/logo.svg"
        class="login-page__presentation__logo"
        :alt="owner.name"
      >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        vestibulum nisl dui, et vehicula sapien suscipit id. Sed pretium felis
        nec est luctus pharetra. Aliquam dolor ligula, mollis sed enim at,
        lacinia blandit nunc. In commodo semper ligula at sollicitudin. Cras
        fringilla tristique leo ut tempus. Maecenas suscipit auctor mi. Proin ut
        turpis nec metus fringilla pharetra sit amet non nibh. Nulla sed posuere
        metus, id elementum leo.
      </p>
    </div>
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ownerData } from '@/owner'
@Component({})
export default class Login extends Vue {
  owner = ownerData
  name = 'Login'

  created () {
    console.log(this.owner)
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;

  &__presentation {
    display: none;

    @include md {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: center;
      max-width: 50%;
    }

    &__logo {
      height: 50vh;
      width: auto;
    }
  }
}
</style>

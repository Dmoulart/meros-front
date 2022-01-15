<template>
  <div class="login-page">
    <LoginForm class="login-page__form" message="Bienvenue !" />
    <div class="login-page__presentation">
      <h1>{{ owner.name }}</h1>
      <img
        src="/img/logo.svg"
        class="login-page__logo"
        :alt="owner.name"
      >
      <p class="login-page__description">
        {{ owner.introduction }}
      </p>
    </div>
    <img
      src="/img/logo.svg"
      class="login-page__logo--mobile"
      :alt="owner.name"
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ownerData } from '@/owner'
import { OwnerData } from '~/types/owner'
@Component({})
export default class Login extends Vue {
  owner : OwnerData = ownerData
  name = 'Login'
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @include tablet-portrait {
    flex-flow: row nowrap;
  }

  &__form {
    height: 50%;
  }

  &__presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    order: -1;
    max-width: none;
    height: auto;

    @include tablet-portrait {
      order: 0;
      max-width: 50%;
      height: 50%;
    }
  }
  &__description {
    display:none;
    text-align: center;
      @include tablet-portrait {
        display:block;
      }
  }
  &__logo {
      display:none;
      height: 20vh;
      width: auto;
      @include tablet-portrait {
        display:block;
      }
      &--mobile {
        display: block;
        height: 20vh;
        width: auto;
        @include tablet-portrait {
          display: none;
        }
      }
  }
}
</style>

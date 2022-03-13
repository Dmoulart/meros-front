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
          <m-input icon="users/user" label="Email" field="username" :rules="rules.email" display-errors />
        </m-input-group>
        <m-input-group class="login__input">
          <m-input
            label="Mot de passe"
            field="password"
            icon="users/password"
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
  mixins,
  Prop, 
} from 'nuxt-property-decorator'
import { MVue } from '@/mixins/m-vue'
import { MerosFormVue } from '@/mixins/meros-form'
import { Submission } from '~/types/form'
import { User } from '~/bo/user'
@Component({
  mixins: [MerosFormVue]
})
export default class Login extends mixins(MVue, MerosFormVue) {
  /**
   * The message in the header of the forms
   */
  @Prop({ type: String })
    message !: string

  /**
   * Login the user with the submitted credentials
   * 
   * @param {Submission} submission
   * @returns {Promise<void>}
   */
  async login ({ errors, data }: Submission): Promise<void> {
    if (errors) { return }

    await this.$auth
    .loginWith('local', { data })
    .catch(this.setErrors)
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

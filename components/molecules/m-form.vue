<template>
  <form class="form" @submit.prevent>
    <div class="form__fields">
      <slot name="fields" />
    </div>
    <slot name="error" />
    <div class="form__submit">
      <slot name="submit" />
    </div>
  </form>
</template>

<script lang="ts">

import {
  Component,
  On,
  Vue
} from 'nuxt-property-decorator'

@Component({})
export default class MForm extends Vue {
  name = 'm-form'

    @On('error')
  onError (error: any) {
    console.log('hello from form')
    console.error(error)
  }
}

</script>

<style lang="scss">
.form {
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    &__fields {
        display:flex;
        flex-flow: column nowrap;
        margin-top:auto;
        gap: 12px;
    }
    &__submit {
        margin-top: auto;
    }
}
</style>

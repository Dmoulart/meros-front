<template>
  <form class="form" @submit.prevent @submit="submit">
    <div class="form__fields">
      <slot name="fields" />
    </div>

    <div class="form__errors">
      <slot name="errors" />
    </div>

    <div class="form__submit">
      <slot name="submit" />
    </div>

    <div class="form__actions">
      <slot name="actions" />
    </div>
  </form>
</template>

<script lang="ts">

import {
  Component,
  Emit,
  On,
  Vue
} from 'nuxt-property-decorator'
import MInput from '../atoms/m-input.vue'
import { Submission } from '../../types/form'
@Component({})
export default class MForm extends Vue {
  name = 'm-form'

  get inputs (): Array<MInput> {
    const isInput = (component: Vue) => (component as any).name === 'm-input'
    const childrenInputs = (component: Vue): Array<MInput> => component.$children.filter(isInput) as Array<MInput>
    const allChildrenInputs = (component: Vue): Array<MInput> => {
      const fields = []
      fields.push(...childrenInputs(component))
      if (component.$children.length) {
        fields.push(...component.$children.flatMap(allChildrenInputs))
      }
      return fields
    }

    return allChildrenInputs(this)
  }

  get formData (): Record<string, any> {
    return this.inputs.reduce((prev, input) => {
      return { ...prev, [input.field]: input.value }
    }, {})
  }

  get errors (): Record<string, string>|null {
    const errors = this.inputs.reduce((prev, input) => {
      const error = input.validateInput()
      return error ? { ...prev, [input.field]: error } : { ...prev }
    }, {})
    return Object.keys(errors).length ? errors : null
  }

  @Emit('submit')
  submit (): Submission {
    return { errors: this.errors, data: this.formData, isValid: this.errors === null }
  }

  @On('error')
  onError (_: any) {
    // Do something on errors
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

    &__errors {
      color:$danger;
    }
}
</style>

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

  /**
   * Register all children inputs.
   * @todo: do it only once ?
   * @returns {Array<MInput>} - The list of all children inputs
   */
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

  /**
   * Returns the form data as key value pairs.
   * @return {Record<string, any>} - The form fields and corresponding data
   */
  get formData (): Record<string, any> {
    return this.inputs.reduce((prev, input) => {
      return { ...prev, [input.field]: input.value }
    }, {})
  }

  /**
   * Returns the form error as key value pairs or as null if none.
   * @return {Record<string, string>|null} - The form fields and corresponding errors
   */
  get errors (): Record<string, string>|null {
    const errors = this.inputs.reduce((prev, input) => {
      const error = input.validateInput()
      return error ? { ...prev, [input.field]: error } : { ...prev }
    }, {})
    return Object.keys(errors).length ? errors : null
  }

  /**
   * Emit the submit event with the form data.
   * @return {Submission} - The form data
   */
  @Emit('submit')
  submit (): Submission {
    return { errors: this.errors, data: this.formData, isValid: this.errors === null }
  }

  /**
   * Emit the error event.
   * @return {void}
   */
  @On('error')
  onError (_: any): void {
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

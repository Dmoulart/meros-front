<template>
  <div>
    <div :id="`input-${field}`" class="input">
      <svg-icon v-if="icon" class="input__icon" :name="icon" />
      <input
        :id="`input-field-${field}`"
        class="input__field"
        :class="icon ? 'input__field--icon' : ''"
        :name="`input-field-${field}`"
        :type="isPassword ? 'password' : 'text'"
        placeholder="  "
        @input="input"
      >
      <label
        class="input__label"
        :class="icon ? 'input__label--icon' : ''"
        :for="`input-field-${field}`"
      >
        {{ field }}</label>
    </div>
    <div v-show="error" class="input__error">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator'
import { validate } from '@/validation/rules'
@Component({})
export default class MInput extends Vue {
  @Prop({ type: String, default: '' })
    field!: string

  @Prop({ type: Boolean, default: false })
    isPassword!: boolean

  @Prop({ type: String, default: null })
    icon!: string | null

  @Prop({ type: String, default: 'medium' })
    size!: 'small' | 'medium' | 'big'

  @Prop({ type: Function, default: null })
    rules! : ((...args: any) => boolean|string) | null

  @Prop({ type: Boolean, default: false })
    displayError! : boolean

  name = 'm-input'

  inputElement!: HTMLInputElement

  error : string = ''

  value: string = ''

  mounted () {
    this.inputElement = document.getElementById(
      `input-field-${this.field}`
    ) as HTMLInputElement
  }

  @Emit()
  input ({ target: { value } }: { target: { value: string } }) {
    this.validateInput(value)
    return (this.value = value)
  }

  validateInput (value:string = this.inputElement.value): string|null {
    if (!this.rules) { return null }

    this.error = validate(this.rules)(value).error ?? ''
    console.log(this.error)
    this.error ? this.emitError() : this.clearError()

    return this.error
  }

  emitError (): string | boolean {
    this.$parent.$emit('error', {
      error: this.error,
      displayError: this.displayError,
      input: this
    })
    return this.error
  }

  clearError (): void {
    this.error = ''
  }
}
</script>

<style lang="scss">
$background-color: $grey-400;
$font-color-error: $danger;
$font-color-input: $text-regular-color;
$border-color: darken($background-color, 10%);
$font-size-input: $font-size;
$letter-spacing: 2px;
$border-radius: 14px;
$icon-width: 20px;
$icon-height: 20px;
$field-offset-when-icon: $icon-width + 8px;
$input-outline-width-when-icon: calc(100% - #{$field-offset-when-icon} - 8px);
$label-scale-factor: 0.7;

.input {
  position: relative;
  font-size: $font-size-input;
  font-weight: 200;
  color: $font-color-input;

  &__label,
  &__label:placeholder-shown {
    position: absolute;
    left: 0;
    top: 0;
    padding: 2px 4px;
    line-height: 18px; //Temporary ?
    font-weight: 400;
    font-variant-caps: small-caps;
    letter-spacing: $letter-spacing;
    color: darken($border-color, 10%);

    // Bring the scaled label on top left
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    transform-origin: 0 0;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently*/

    cursor: text;

    transition: all 0.25s ease-out;
  }

  &__field {
    position: relative;
    width: 100%;
    padding: 4px 4px;
    padding-bottom: 12px;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid $border-color;
    background-color: transparent;
    color: $font-color-input;
    letter-spacing: $letter-spacing * 0.6;
    transition: all 0.25s ease-in;
    cursor: text;

      &:focus,
      &:active,
      &:not(:placeholder-shown),// Do not show the animation if the field is filled
      &:optional:not(:placeholder-shown) {
        outline: none;
        border-bottom: 1px solid darken($border-color, 20%);
        animation: outline 0.75s;
        @keyframes outline {
          0% {
            width: 0;
          }
          100% {
            //width: calc(100% - 8px);
            width: 100%;
          }
        }
      }

    &--icon {
      // Avoid the overflowing when an icon is attached
      //width: calc(100% - (#{$field-offset-when-icon} + 8px));
      // width: calc(100% - (#{$field-offset-when-icon}));
      &:focus,
      &:active,
      &:not(:placeholder-shown),// Do not show the animation if the field is filled
      &:optional:not(:placeholder-shown) {
        outline: none;
        border-bottom: 1px solid darken($border-color, 20%);
        animation: outline-with-icon 0.75s;
        @keyframes outline-with-icon {
          0% {
            width: 0;
          }
          100% {
            width: 100%; //$input-outline-width-when-icon;
          }
        }
      }
    }

    &:focus,
    &:active,
    &:not(:placeholder-shown),
    &:optional:not(:placeholder-shown),
    & .input__label:focus,
    & .input__label:active {
      cursor: text;
      & ~ .input__label {
        transform: translateY(-$font-size-input) scale($label-scale-factor);
        color: darken($font-color-input, 40%);
        opacity: 1;
        &--icon {
          // Move label top left when icon
          transform: translateY(-$font-size-input)
            translateX(-$field-offset-when-icon) scale($label-scale-factor);
        }
      }
    }
  }
  &__label--icon,
  &__field--icon {
    padding-left: $field-offset-when-icon;
    transform-origin: $field-offset-when-icon 0;
  }
  &__icon {
    position: absolute;
    left: 0;
    width: $icon-width;
    height: $icon-height;
    z-index: 1;
  }
  &__error{
    position: absolute;
    color: $font-color-error;
  }

}
//Required to remove the background color browser autofill
input:-internal-autofill-selected {
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0),
    inset 0 0 0 100px rgba(255, 255, 255, 1);
}
</style>

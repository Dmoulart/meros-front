<template>
  <div :id="`input-${field}`" class="input" @change="trim()">
    <svg-icon v-if="icon" class="input__icon" :name="icon" />
    <input
      :id="`input-field-${field}`"
      class="input__field"
      :class="icon ? 'input__field--icon' : ''"
      :name="`input-field-${field}`"
      :type="isPassword
        ?
          'password'
        :
          'text'"
      placeholder="  "
    >
    <label
      class="input__label"
      :class="icon ? 'input__label--icon' : ''"
      :for="`input-field-${field}`"
    > {{ field }}</label>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop,
  Vue
} from 'nuxt-property-decorator'
@Component({})
export default class MInput extends Vue {
  name = 'm-input'

  inputElement!: HTMLInputElement

  @Prop({ default: '' })
    field!:string

  @Prop({ default: false })
    isPassword!:boolean

  @Prop({ default: null })
    icon!:string | null

  @Prop({ default: 'medium' })
    size!: 'small' | 'medium' | 'big'

  mounted () {
    this.inputElement = document.getElementById(`input-field-${this.field}`) as HTMLInputElement
  }

  trim (): void {
    // We trim the fields that are not passwords
    this.inputElement.value = this.isPassword ? this.inputElement.value : this.inputElement.value.trim()
  }
}
</script>

<style lang="scss">
$background-color : $grey-400;
$font-color-input : $text-regular-color;
$border-color: darken($background-color, 10%);
$font-size-input: $font-size;
$letter-spacing: 2px;
$border-radius : 15px;
$icon-width: 16px;
$icon-height: 20px;
$field-offset-when-icon: $icon-width + 8px;
$label-scale-factor: 0.7;

.input{
  position:relative;
  font-size: $font-size-input;
  font-weight: 200;
  color: $font-color-input;

  &__label, &__label:placeholder-shown{
    position:absolute;
    left:0;
    top: 0;
    padding: 2px 4px;
    font-weight: 400;
    font-variant-caps: small-caps;
    letter-spacing: $letter-spacing;
    color: darken($border-color,10%);

    // Bring the scaled label on top left
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    transform-origin: 0 0;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;/* Non-prefixed version, currently*/

    cursor: pointer;

    transition: all .25s ease-out;
  }

  &__field{
    position:relative;
    width: 100%;
    padding: 4px 4px;
    border-radius: 0;
    border:none;
    border-bottom: 1px solid $border-color;
    background-color: transparent;
    color: $font-color-input;
    letter-spacing: $letter-spacing*.6;
    transition: all .25s ease-in;
    cursor: pointer;

    &:focus,
    &:active,
    &:not(:placeholder-shown),// Do not show the animation if the field is filled
    &:optional:not(:placeholder-shown){
      outline:none;
      border-bottom: 1px solid darken($border-color, 20%);
      animation: move .75s;
      @keyframes move {
        0% {
          width: 0;
        }
        100% {
          width: calc(100% - #{$field-offset-when-icon});
        }
      }
    }

    &--icon{
      // Avoid the overflowing when an icon is attached
      width: calc(100% - (#{$field-offset-when-icon} + 8px));
    }

    &:focus,
    &:active,
    &:not(:placeholder-shown),
    &:optional:not(:placeholder-shown),
    & .input__label:focus, & .input__label:active{
      cursor: text;
      &~.input__label{
        transform: translateY(-$font-size-input) scale($label-scale-factor);
        color: darken($font-color-input,40%);
        opacity:1;
        &--icon{
          // Move label top left when icon
          transform: translateY(-$font-size-input) translateX(-$field-offset-when-icon) scale($label-scale-factor);
        }
      }
    }

  }
  &__label--icon, &__field--icon{
    padding-left: $field-offset-when-icon;
    transform-origin: $field-offset-when-icon 0;
  }
  &__icon{
    position: absolute;
    left:0;
    width: $icon-width;
    height: $icon-height;
    z-index:1;
  }
}
//Required to remove the background color browser autofill
input:-internal-autofill-selected{
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px rgba(255, 255, 255,1);
}
</style>

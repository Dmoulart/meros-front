<template>
  <button class="button" @click="$emit('click')">
    {{ message }}
  </button>
</template>

<script lang="ts">

import {
  Component, Emit, Prop,
  Vue
} from 'nuxt-property-decorator'

@Component({})
export default class MButton extends Vue {
  name = 'm-button'
  @Prop({ default: 'Valider' })
    message!:string
}
</script>

<style lang="scss">
$button-font-family: $font-family;
$button-color: $button-primary-color;
$button-radius: 12px;
$button-font-color: $white;
$button-font-size: $font-size;

.button{
  font-family: $button-font-family;
  width:100%;
  height:32px;
  border-radius: $button-radius;
  background-color: $button-color;
  color: $button-font-color;
  border: none;
  box-shadow: 2px 0px 2px 2px rgba(96, 96, 96, 0.05) inset;
  font-weight: 500;
  //font-variant-caps: all-small-caps;
  font-size: $button-font-size;
  cursor:pointer;
}

</style>

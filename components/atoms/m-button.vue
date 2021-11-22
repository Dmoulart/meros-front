<template>
  <button class="button">
    {{ message }}
  </button>
</template>

<script lang="ts">

import {
  Component, Prop,
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
$button-radius: 8px;
$button-font-color: $white;

.button{
  font-family: $button-font-family;
  width:100%;
  height:28px;
  border-radius: $button-radius;
  background-color: $button-color;
  color: $button-font-color;
  border: none;
  //box-shadow: 1px 1px 1px 1px #cbcbcb;
  cursor:pointer;
}

</style>

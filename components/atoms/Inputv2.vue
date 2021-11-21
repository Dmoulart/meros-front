<template>
  <input id="lol" class="input">
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'
@Component({})
export default class InputV2 extends Vue {

}
</script>

<style lang="scss" scoped>
$border-radius : 15px;
$background-color : #EDEDED;
$border-color: darken($background-color, 10%);

input{
  padding: 4px 12px;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background-color: $background-color;

  &:focus, &:active{
    outline: 1px solid darken($border-color, 10%);
  }
}
</style>

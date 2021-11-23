<template>
  <div class="input-group">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue
} from 'nuxt-property-decorator'
    @Component({})
export default class MInputGroup extends Vue {
  name = 'm-input-group'
}
</script>

<style lang="scss">
$input-group-margin-block: $input-margin-block * 1.80;
  .input-group{
    margin-block: $input-group-margin-block;
  }
</style>

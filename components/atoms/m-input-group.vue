<template>
  <div class="input-group">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  Component, Vue
} from 'nuxt-property-decorator'
    @Component({})
export default class MInputGroup extends Vue {
  name = 'm-input-group'
}
</script>

<style lang="scss">
$input-group-margin-block: $input-margin-block;
  .input-group{
    margin-block-end: $input-group-margin-block;
  }
</style>

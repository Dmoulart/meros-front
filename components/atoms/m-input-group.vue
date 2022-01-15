<template>
  <div class="input-group">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  Component, On, Vue
} from 'nuxt-property-decorator'

@Component({})
export default class MInputGroup extends Vue {
  name = 'm-input-group'

  @On('error')
  error (validation: string | boolean): string | boolean {
    this.$parent.$emit('error', validation)
    console.log(this.$parent)
    console.log(validation)
    return validation
  }
}
</script>

<style lang="scss">
$input-group-margin-block: 24px;
  .input-group{
    margin-block-end: $input-group-margin-block;
  }
</style>

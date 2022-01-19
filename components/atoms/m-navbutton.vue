<template>
  <div class="nav-button" @mouseenter="mouseEnter">
    <!--Todo: use svg-icon component -->
    <img class="nav-button__icon" :src="`svg/${icon}.svg`">
    <slot />
  </div>
</template>

<script lang="ts">

import {
  Component,
  Emit,
  Prop,
  Vue
} from 'nuxt-property-decorator'

@Component({})
export default class MNavbutton extends Vue {
  name = 'm-navbutton'

  @Prop({ type: String, required: true }) icon!:string

  /**
   * Emit hover event
   */
  @Emit('hover')
  mouseEnter () {
    return true
  }
}
</script>

<style lang="scss">
$nav-btn-dimensions: 24px;
.nav-button{
  padding:8px;
  cursor: pointer;
  &__icon{
    height: $nav-btn-dimensions;
    width: $nav-btn-dimensions;
  }
}

</style>

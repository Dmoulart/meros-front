<template>
  <div class="nav-button" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
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

  hover: boolean = false

  /**
   * Emit hover event
   */
  @Emit('hover')
  mouseEnter () {
    this.hover = true
  }

  mouseLeave () {
    this.hover = false
  }
}
</script>

<style lang="scss">
$nav-btn-dimensions: 32px;
.nav-button{
  cursor: pointer;
  &__icon{
    height: $nav-btn-dimensions;
    width: $nav-btn-dimensions;
  }
}

</style>

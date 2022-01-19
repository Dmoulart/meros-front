<template>
  <m-navbar class="main-navbar" :class="{'navbar--extends': isHovered}" @hover="slide">
    <m-navbutton icon="nav/home" />
    <m-navbutton icon="nav/booking" />
    <m-navbutton icon="nav/activity" />
    <m-navbutton icon="nav/vehicle" />
    <m-navbutton icon="nav/expanse" />
    <div v-if="!$device.isMobile" class="main-navbar__panel" :class="{'main-navbar__panel--slidein': isHovered, 'main-navbar__panel--slideout': mustSlideout}" />
  </m-navbar>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { MVue } from '~/mixins/m-vue'

@Component({})
export default class NavBar extends MVue {
  isHovered: boolean = false
  mustSlideout: boolean = false

  slide (isHovered: boolean) {
    this.mustSlideout = this.isHovered && !isHovered
    this.isHovered = isHovered
  }
}
</script>

<style lang="scss" scoped>
$developedSideBarWidth: 320px;
.main-navbar{
    &__panel{
        position: absolute;
        left: -$developedSideBarWidth;
        top: 0;
        z-index: -1;
        height: 100%;
        width: $developedSideBarWidth;
        background-color: $white;
        &--slidein{
            animation: 0.3s slidein ease-out;
            left:0;
        }
        &--slideout{
            animation: 0.3s slideout ease-in;
            left:-$developedSideBarWidth;
        }
    }
}
@keyframes slidein {
    from { left:-$developedSideBarWidth; } to { left: 0; }
}
@keyframes slideout {
    from { left: 0; } to { left:-$developedSideBarWidth; }
}
</style>

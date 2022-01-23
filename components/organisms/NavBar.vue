<template>
  <m-navbar class="main-navbar" :class="{'navbar--extends': isHovered}" @hover="slide">
    <m-navbutton class="main-navbar__button" icon="nav/home">
      <span
        class="main-navbar__item"
        :class="{
          'main-navbar__item--fadein': isHovered,
          'main-navbar__item--fadeout': mustSlideout
        }"
      >
        Accueil
      </span>
    </m-navbutton>
    <m-navbutton class="main-navbar__button" icon="nav/booking">
      <span
        class="main-navbar__item"
        :class="{
          'main-navbar__item--fadein': isHovered,
          'main-navbar__item--fadeout': mustSlideout
        }"
      >
        Réservations
      </span>
    </m-navbutton>
    <m-navbutton class="main-navbar__button" icon="nav/activity">
      <span
        class="main-navbar__item"
        :class="{
          'main-navbar__item--fadein': isHovered,
          'main-navbar__item--fadeout': mustSlideout
        }"
      >
        Activités
      </span>
    </m-navbutton>
    <m-navbutton class="main-navbar__button" icon="nav/vehicle">
      <span
        class="main-navbar__item"
        :class="{
          'main-navbar__item--fadein': isHovered,
          'main-navbar__item--fadeout': mustSlideout
        }"
      >
        Véhicules
      </span>
    </m-navbutton>
    <m-navbutton class="main-navbar__button" icon="nav/expanse">
      <span
        class="main-navbar__item"
        :class="{
          'main-navbar__item--fadein': isHovered,
          'main-navbar__item--fadeout': mustSlideout
        }"
      >
        Dépenses
      </span>
    </m-navbutton>
    <div
      v-if="!$device.isMobile"
      class="main-navbar__panel"
      :class="{
        'main-navbar__panel--slidein': isHovered,
        'main-navbar__panel--slideout': mustSlideout
      }"
    />
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
$developedSideBarWidth: 200px;
$slideTime : 0.3s;
$nav-item-text-margin: 24px;

.main-navbar{
  position: relative;
    &__panel{
      position: absolute;
      left: -$developedSideBarWidth;
      top: 0;
      z-index: -1;
      height: 100%;
      width: $developedSideBarWidth;
      background-color: $white;
      &--slidein{
          animation: $slideTime slidein ease-out;
          left:0;
      }
      &--slideout{
          animation: $slideTime slideout ease-in ;
          left:-$developedSideBarWidth;
      }
    }
    &__button{
      position: relative;
      display:flex;
      align-items: center;
    }
    &__item{
      display:none;
      @include tablet-portrait {
        display: block;
        opacity: 0;
        position:absolute;
        padding: 8px;
        text-align: center;
        font-size: 1.2rem;
        margin-left: $nav-item-text-margin;
        &:hover{
          color: $black;
        }
        &--fadein{
          opacity: 1;
          animation: $slideTime*2 fadein ease-out;
        }
        &--fadeout{
          opacity: 0;
          animation: $slideTime fadeout ease-in;
        }
      }
    }
}
// Todo : refactor by reversing animations
@keyframes slidein {
    from { left:-$developedSideBarWidth; } to { left: 0; }
}
@keyframes slideout {
    from { left: 0; } to { left:-$developedSideBarWidth; }
}
@keyframes fadein {
    from { opacity: 0; } to { opacity: 1; }
}
@keyframes fadeout {
    from { opacity: 1; } to { opacity: 0; }
}
</style>

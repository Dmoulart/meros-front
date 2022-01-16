<template>
  <nav class="navbar">
    <header class="navbar__header">
      <svg-icon
        v-if="!$device.isMobile"
        name="owner/logo"
        class="navbar__logo"
      />
    </header>
    <div class="navbar__items">
      <slot @hover="slide" />
    </div>
    <footer class="navbar__footer" />
  </nav>
</template>

<script lang="ts">

import {
  Component
} from 'nuxt-property-decorator'
import { MVue } from '~/mixins/m-vue'
@Component({})
export default class MNavbar extends MVue {
  name = 'm-navbar'

  /**
   * Slide the menu
   * @returns void
   */
  slide (): void {
    console.log('slide')
  }
}

</script>

<style lang="scss">
$navbar-height: 80px;
$nav-shadow: $component-shadow;
.navbar {
  position:fixed;
  display:flex;
  align-items: center;
  justify-content: center;
  bottom:0;
  width:100%;
  height: $navbar-height;
  background-color: white;
  filter: $nav-shadow;

  @include tablet-portrait{
    position:static;
    flex-direction: column;
    justify-content: flex-start;
    width: 80px;
    height: auto;
  }

  @include tablet-portrait{
    padding: 24px 0;
    &__header{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70%;
      height:10%;
    }
    &__footer{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height:10%;
    }
    &__logo{
      width: auto;
      height: 100%;
    }
  }
  &__items{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    @include tablet-portrait{
      justify-content: space-evenly;
      flex-direction: column;
      align-items: flex-start;
      flex-grow: 1;
    }
  }
}
</style>

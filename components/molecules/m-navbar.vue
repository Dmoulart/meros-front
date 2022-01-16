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
      <slot />
    </div>
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
}

</script>

<style lang="scss">
$navbar-height: 80px;
$nav-shadow: $component-shadow;
.navbar {
  position:fixed;
  display:flex;
  flex-direction: column;
  align-items: center;
  bottom:0;
  width:100%;
  height: $navbar-height;
  background-color: white;
  filter: $nav-shadow;

  @include tablet-portrait{
    position:static;
    width: 20%;
    height: auto;
  }

  @include tablet-portrait{
    &__header{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    &__logo{
      width: 70%;
      height: auto;
    }
  }
  &__items{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>

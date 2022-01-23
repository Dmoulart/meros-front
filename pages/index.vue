<template>
  <main class="home">
    <m-panel class="home__reservations">
      //
    </m-panel>
    <m-panel />
    <m-panel />
    <m-panel />
  </main>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { MVue } from '~/mixins/m-vue'
import { Booking } from '~/bo/booking'
import { Context } from '@nuxt/types'
@Component({})
export default class Home extends MVue {
  layout = 'Main'
  bookings!: Array<Booking>

  /**
   * Method called before loading the vue instance
   */
  async asyncData ({ $bookings } : Context) {
    const bookings = await $bookings.get()
    return {
      bookings
    }
  }

  mounted () {
  }
}
</script>
<style lang="scss">
.home {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 12px;
  padding: 24px;
  z-index: -3;
  @include tablet-portrait {
    margin-left: 200px; // Sidebar size
  }

}
</style>

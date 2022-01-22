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
import { MContext } from '~/types/context'
import { MVue } from '~/mixins/m-vue'
import { Api } from '~/webservices/api'
@Component({})
export default class Home extends MVue {
  layout = 'Main'
  bookings!: Object

  /**
   * Method called before loading the vue instance
   */
  async asyncData (context : MContext) {
    const api = new Api(context)
    const bookings = await api.getBookings()
    console.log(bookings)
    return {
      bookings
    }
  }

  mounted () {
    // const bookings = {}

    // console.log(bookings.data)
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

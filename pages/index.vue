<template>
  <main class="home">
    <m-panel class="home__reservations">
      <h3>Mes réservations</h3>
        <ReservationView v-for="booking in userBookings" :booking="booking" :key="booking.id"/>
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
import { List } from 'immutable'
import { dayJS } from '~/utils/time-utils'
@Component({})
export default class Home extends MVue {
  layout = 'Main'
  userBookings: List<Booking> = List()

  async asyncData ({ $bookings, $auth } : Context) {
    //const userBookings = await $bookings.getForUser($auth.$state.user)
    const userBookings = List($auth.$state.user.bookings).slice(0, 3)

    return {
      userBookings
    }
  }

  mounted(){
    console.log(dayJS)
  }
}
</script>
<style lang="scss">
.home {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: 1fr;
  grid-gap: 12px;
  padding: 24px;
  z-index: -3;
  @include tablet-portrait {
    margin-left: 200px; // Sidebar size
  }

}
</style>

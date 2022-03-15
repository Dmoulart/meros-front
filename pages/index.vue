<template>
  <main class="home">
    <m-panel class="home__white-board"/>
    <m-panel class="home__car">
      <div v-for="(vehicle,i) in vehicles.slice(3)" v-bind:key="i">
        {{vehicle.name}}
      </div>
    </m-panel>
    <m-panel class="home__reservations">
      <h3>Mes réservations</h3>
        <ReservationView v-for="booking in user.bookings.slice(0,3)" :booking="booking" :key="booking.id"/>
    </m-panel>
    <m-panel class="home__kilometers"/>
  </main>
</template>

<script lang="ts">
import { Component, Getter } from 'nuxt-property-decorator'
import { MVue } from '~/mixins/m-vue'
import { Stores } from '~/utils/store/store-accessor'
import VehiclesStore from '~/store/vehicles'
@Component({})
export default class Home extends MVue {
  /**
   * The layout file we use for this page. We'll use the main layout which include the sidebar.
   */
  layout = 'Main'

  /**
   * Get all vehicles
   */
  @Getter('all', { namespace: 'vehicles' })
  vehicles!: VehiclesStore['all']

  async asyncData () {
    await Stores.vehicles.fetchAll()
  }
}
</script>
<style lang="scss">
.home {
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
  .panel {
    width: 90%;
  }

  @include tablet-portrait {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 48px;
    padding: 24px;
    z-index: -3;
    width: 100%;
    margin-left: 140px; // Sidebar size

    &__white-board{
      grid-area: 1 / 1 / 3 / 6;
    }

    &__car{
      grid-area: 3 / 1 / 6 / 3;
    }

    &__reservations{
      grid-area: 3 / 3 / 6 / 5;
    }

    &__kilometers{
      grid-area: 3 / 5 / 6 / 6;
    }
  }

}
</style>

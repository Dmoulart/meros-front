<template>
  <div class="reservation-view">
      <span class="reservation-view__vehicle">
        {{booking.vehicle.name}}
      </span>
      <span class="reservation-view__date">
        {{startDateMessage}}
      </span>
  </div>
</template>

<script lang="ts">
import {dayJS} from '~/utils/time-utils'
import {
  Component,
  Prop,
  Vue
} from 'nuxt-property-decorator'
import { Booking } from '~/bo/booking'


@Component({})
export default class ReservationView extends Vue {
  name = 'ReservationView'

  @Prop({required: true, type: Object})
  booking!: Booking
  
  get isPassed(): boolean{
    return dayJS(this.booking.startDate).isBefore(dayJS())
  }

    
  get startDateMessage(): string{
    return dayJS(this.booking.startDate).locale('fr').calendar(null, {
      sameDay: '[Aujourd\'hui à] h:m',
      nextDay: '[Demain à] h:mm A',
      nextWeek: 'dddd [prochain à] h:m',
      lastDay: '[Hier à] h:mm A',
      lastWeek: 'dddd [dernier à] h:m',
      sameElse: 'LL'
    })
  }
}
</script>

<style lang="scss">

.reservation-view{
  display:flex;
  flex-direction: column;
  height: 60px;
  justify-content: space-evenly;
  margin: 16px 0;

  &__vehicle{
    font-weight: bold;
    font-variant-caps: all-petite-caps;
  }
}

</style>

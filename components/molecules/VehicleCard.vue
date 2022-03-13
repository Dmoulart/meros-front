<template>
    <div v-if="vehicle" class="car-card">
        <div class="car-card__image">
            <img v-if="vehicle.imageUrl" :src="vehicle.imageUrl" />
        </div>
        <div  v-if="vehicle.name" class="car-card__content">
            <div class="car-card__name">
                {{vehicle.name}}
            </div>
            <div v-if="vehicle.city" class="car-card__location">
                {{vehicle.city}}
            </div>
        </div>
        <div class="car-card__actions">
          <m-button>Réserver</m-button>
        </div>
    </div>
</template>

<script lang="ts">
import {
  Prop, 
} from 'nuxt-property-decorator'
import { MVue } from '@/mixins/m-vue'
import { Submission } from '~/types/form'
import { Vehicle } from '~/bo/vehicle'


export default class VehicleCard extends MVue {
    /**
     * The vehicle we must display
     */
    @Prop({ type: Object })
      vehicle !: Vehicle
}
</script>

<style lang="scss" scoped>
.car-card{

}
</style>

<template>
    <div v-if="vehicle" class="car-card">

        <div v-if="vehicle.name" class="car-card__content">
            <span class="car-card__name">
                {{vehicle.name}}
            </span>
            <span v-if="vehicle.city" class="car-card__location">
                {{vehicle.city}}
            </span>
        </div>
        <div class="car-card__actions">
            <m-button>Réserver</m-button>
        </div>
    </div>
</template>

<script lang="ts">
import {
  Component,
  Prop, 
} from 'nuxt-property-decorator'
import { MVue } from '@/mixins/m-vue'
import { Vehicle } from '~/bo/vehicle'
@Component({})
export default class VehicleCard extends MVue {
    /**
     * The vehicle we must display
     */
    @Prop({ required: true, type: Object })
    vehicle !: Vehicle
}
</script>

<style lang="scss" scoped>
.car-card{

}
</style>

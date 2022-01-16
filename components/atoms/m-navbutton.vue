<template>
  <div class="nav-button">
    <svg-icon class="nav-button__icon" :name="icon" :width="24" :height="24" />
    <slot />
  </div>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue
} from 'nuxt-property-decorator'

@Component({})
export default class MNavbutton extends Vue {
  name = 'm-navbutton'

  @Prop({ type: String, required: true }) icon!:string
}
</script>

<style lang="scss">

.nav-button{
}

</style>

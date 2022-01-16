<template>
  <div class="app">
    <m-navbar>
      <m-navbutton icon="nav/home" />
      <m-navbutton icon="nav/booking" />
      <m-navbutton icon="nav/activity" />
      <m-navbutton icon="nav/vehicle" />
      <m-navbutton icon="nav/expanse" />
    </m-navbar>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {
}
</script>

<style lang="scss" scoped>
.app{
  display: flex;
  min-height: 100vh;
  width: 100vw;
}
</style>

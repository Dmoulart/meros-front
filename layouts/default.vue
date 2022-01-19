<template>
  <div class="app">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { MVue } from '~/mixins/m-vue'

@Component({})
export default class Default extends MVue {
}
</script>

<style lang="scss" scoped>
.app{
  display: flex;
  min-height: 100vh;
  width: 100vw;
}
</style>

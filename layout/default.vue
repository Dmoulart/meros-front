<template>
  <div style="width:100vw;height:100vh;display:flex;justify-content:center;align-items:center">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {
  name = 'Default'
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div id="main">
    WOLOLO
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Main extends Vue {
  name = 'main'
  mounted () {
    console.log('mounted')
  }
}
</script>

<style lang="scss" scoped>
</style>

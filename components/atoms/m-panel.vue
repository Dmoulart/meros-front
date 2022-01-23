<template>
  <div class="panel">
    <slot />
  </div>
</template>

<script lang="ts">

import {
  Component,
  Vue
} from 'nuxt-property-decorator'

@Component({})
export default class MPanel extends Vue {
  name = 'm-panel'
}
</script>

<style lang="scss">
$panel-border-radius: 29px;
$panel-background-color: $white;
$panel-padding-x: 32px;
$panel-padding-y: 32px;
$panel-shadow: $component-shadow;
.panel{
  display:flex;
  flex-flow: column;
  padding: $panel-padding-y $panel-padding-x;
  border-radius: $panel-border-radius;
  background-color: $panel-background-color;
  filter: $panel-shadow;
}

</style>

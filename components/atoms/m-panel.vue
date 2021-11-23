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
$panel-padding-y: $panel-padding-x / 2;

.panel{
  display:flex;
  justify-content:center;
  align-items:center;
  padding: $panel-padding-y $panel-padding-x;
  border-radius: $panel-border-radius;
  background-color: $panel-background-color;
  filter: drop-shadow(2px 2px 60px rgba(171, 171, 171, 0.2));
}

</style>

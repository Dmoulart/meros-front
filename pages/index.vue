<template>
  <div v-if="user">
    {{ user.email }}
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { MVue } from '~/mixins/m-vue'
@Component({})
export default class Home extends MVue {
}
</script>

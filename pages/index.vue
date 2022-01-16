<template>
  <div v-if="$auth.$state.user">
    {{ $auth.$state.user.email }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class Home extends Vue {
}
</script>

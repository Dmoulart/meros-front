<template />
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({})
export default class Logout extends Vue {
  beforeCreate () {
    this.$auth.logout()
  }
}
</script>

<template>
  <div id="app">
    <Navigation></Navigation>
    <Header></Header>
  </div>
</template>

<script lang="ts">
import Navigation from '@/components/Navigation.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    Navigation,
    Header
  }
}
</script>

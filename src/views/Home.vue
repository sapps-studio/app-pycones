<template>
  <div class="home">
    <Days></Days>
    <Navigation></Navigation>
  </div>
</template>

<script lang="ts">
  import Navigation from '@/components/Navigation.vue'
  import Days from '@/components/Days.vue'

  export default {
    name: 'home',
    components: {
      Navigation,
      Days
    }
  }
</script>

<template>
  <router-link class="backward" :to="{ name: 'home'}">
    <p>
      &lt;-
    </p>
  </router-link>
</template>

<script lang="ts">
  export default {
    name: 'Return'
  }
</script>
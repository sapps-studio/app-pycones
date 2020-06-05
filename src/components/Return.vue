<template>
  <router-link class="return border-shadow-y" :to="{ name: 'home'}">
    <div class="backward border-shadow-right">
      <p>
        &lt;-
      </p>
    </div>
    <p>
      _return
    </p>
  </router-link>
</template>

<script lang="ts">
  export default {
    name: 'Return'
  }
</script>
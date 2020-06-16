<template>
  <router-link class="backward-text" :to="{ name: 'home'}">
    <div class="backward border-shadow-right">
      <p>
        &lt;-
      </p>
    </div>
    <p>
      _volver
    </p>
  </router-link>
</template>

<script lang="ts">
  export default {
    name: 'ReturnText'
  }
</script>
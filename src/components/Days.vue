<template>
  <ul class="days border-shadow-y bg-main">
    <li class="backward border-shadow-right">
      <router-link :to="{ name: 'home'}">
        &lt;-
      </router-link>
    </li>
    <li class="days__date">
      <p>
        Sábado_10/10/2020
      </p>
    </li>
    <li class="forward border-shadow-left">
      <router-link :to="{ name: 'home'}">
        -&gt;
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
  export default {
    name: 'Days'
  }
</script>
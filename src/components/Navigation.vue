<template>
  <div class="nav">
    <nav class="nav__config">
      <ul>
        <li>
          <!-- when active add .nav__menu--active -->
          <router-link :to="{ name: 'config'}">
            _config
          </router-link>
        </li>
      </ul>
    </nav>
    <nav class="nav__menu">
      <ul>
        <li>
          <!-- when active add .nav__menu--active -->
          <router-link :to="{ name: 'home'}">
            _main
          </router-link>
        </li>
        <li class="nav__menu--favs">
          <!-- when active add .nav__menu--active -->
          <router-link :to="{ name: 'favs'}">
            <span>, ,</span>
            <span>,,,,</span>
            <span>,,,</span>
            <span>,,</span>
            <span>,</span>
          </router-link>
        </li>
        <li>
          <!-- when active add .nav__menu--active -->
          <router-link :to="{ name: 'map'}">
            _map
          </router-link>
        </li>
        <li>
          <!-- when active add .nav__menu--active -->
          <router-link :to="{ name: 'info'}">
            _info
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Navigation'
}
</script>
<template>
  <div class="nav">
    <nav class="nav__config">
      <ul>
        <li>
          <router-link :to="{ name: 'config'}">
            _config
          </router-link>
        </li>
      </ul>
    </nav>
    <nav class="nav__menu">
      <ul>
        <li>
          <router-link :to="{ name: 'home'}">
            _main
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'favs'}" class="nav__menu--favs">
            <span>* *</span>
            <span>****</span>
            <span>***</span>
            <span>**</span>
            <span>*</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'map'}">
            _map
          </router-link>
        </li>
        <li>
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
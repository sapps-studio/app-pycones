<template>
  <div class="welcome">
    <nav>
        <ul>
            <li>
                <router-link :to="{ name: 'home'}">
                    &gt;&gt;&gt; Bienvenido
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'home'}">
                    &gt;&gt;&gt; Welcome
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'home'}">
                    &gt;&gt;&gt; Willkommen
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'home'}">
                    &gt;&gt;&gt; Добро пожаловать
                </router-link>
            </li>
        </ul>
    </nav>
  </div>
</template>

<script lang="ts">

export default {
  name: 'welcome'
}
</script>

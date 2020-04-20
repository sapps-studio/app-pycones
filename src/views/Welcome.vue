<template>
  <div class="welcome">
    <nav>
        <ul class="welcome__list">
            <li class="welcome__list-item">
                <router-link :to="{ name: 'home'}">
                    &gt;&gt;&gt; Bienvenido
                    <Forward></Forward>
                </router-link>
            </li>
            <li class="welcome__list-item">
                <router-link :to="{ name: 'home'}">
                    &gt;&gt;&gt; Welcome
                    <Forward></Forward>
                </router-link>
            </li>
            <li class="welcome__list-item">
                <router-link :to="{ name: 'home'}">
                    &gt;&gt;&gt; Willkommen
                    <Forward></Forward>
                </router-link>
            </li>
            <li class="welcome__list-item">
                <router-link :to="{ name: 'home'}">
                    &gt;&gt;&gt; Добро пожаловать
                    <Forward></Forward>
                </router-link>
            </li>
        </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Forward from "@/components/Forward.vue"

export default {
  name: 'welcome',
  components: {
    Forward
  }
}
</script>

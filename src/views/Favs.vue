<template>
  <div class="favs">
    <Navigation></Navigation>
    <Days></Days>
    <div class="container">
      <!-- if no favs added -->
      <section  class="favs__empty">
        <p>
        &gt;&gt;&gt; <span class="func-text">len(</span>misFavoritos<span class="func-text">)</span>
        </p>
        <p>
          0
        </p>
      </section>
      <!-- .if no favs added -->
      <!-- favs list -->
      <ul hidden class="favs__list">
        <li>
          <p class="favs__list--time">
            10:30_11:00
          </p>
          <router-link :to="{ name: 'home'}" class="favs__array bg-favs border-shadow-y-left">
            <p>
              Charla1 = [
            </p>
            <ul class="favs__array--list favs-text">
              <li>
                "Título de la charla",
              </li>
              <li>
                "Nombre del poniente",
              </li>
              <li>
                "Lugar de la charla"
              </li>
            </ul>
            <p>
              ]
            </p>
          </router-link>
          <router-link :to="{ name: 'home'}" class="favs__array bg-favs border-shadow-y-left">
            <p>
              Charla1 = [
            </p>
            <ul class="favs__array--list favs-text">
              <li>
                "Título de la charla",
              </li>
              <li>
                "Nombre del poniente",
              </li>
              <li>
                "Lugar de la charla"
              </li>
            </ul>
            <p>
              ]
            </p>
          </router-link>
        </li>
        <li>
          <p class="favs__list--time">
            10:30_11:00
          </p>
          <router-link :to="{ name: 'home'}" class="favs__array bg-favs border-shadow-y-left">
            <p>
              Charla1 = [
            </p>
            <ul class="favs__array--list favs-text">
              <li>
                "Título de la charla",
              </li>
              <li>
                "Nombre del poniente",
              </li>
              <li>
                "Lugar de la charla"
              </li>
            </ul>
            <p>
              ]
            </p>
          </router-link>
        </li>
      </ul>
      <!-- .favs list -->
    </div>
  </div>
</template>

<script lang="ts">
  import Navigation from '@/components/Navigation.vue'
  import Days from '@/components/Days.vue'

  export default {
    name: 'favs',
    components: {
      Navigation,
      Days
    }
  }
</script>

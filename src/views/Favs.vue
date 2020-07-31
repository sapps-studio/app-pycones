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
          <ul>
            <li class="favs__array">
              <router-link :to="{ name: 'event'}" class="bg-favs border-shadow-y-left">
                <p>
                  Charla1 = [
                </p>
                <ul class="favs__array--list">
                  <li>
                    <span class="favs-text">"Título de la charla"</span><span>,</span>
                  </li>
                  <li>
                    <span class="favs-text">"Nombre del poniente"</span><span>,</span>
                  </li>
                  <li>
                    <span class="favs-text">"Lugar de la charla"</span><span>,</span>
                  </li>
                </ul>
                <p>
                  ]
                </p>
              </router-link>
            </li>
            <li class="favs__array">
              <router-link :to="{ name: 'event'}" class="bg-favs border-shadow-y-left">
                <p>
                  Charla1 = [
                </p>
                <ul class="favs__array--list">
                  <li>
                    <span class="favs-text">"Título de la charla"</span><span>,</span>
                  </li>
                  <li>
                    <span class="favs-text">"Nombre del poniente"</span><span>,</span>
                  </li>
                  <li>
                    <span class="favs-text">"Lugar de la charla"</span><span>,</span>
                  </li>
                </ul>
                <p>
                  ]
                </p>
              </router-link>
            </li>
          </ul>
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

<template>
  <div class="event">
    <Navigation></Navigation>
    <div class="event__header">
      <div class="event__header--date border-shadow-y bg-main">
        <Return></Return>
        <div class="event__header--date-day border-shadow-left">
          <p class="title-regular">
            Sábado_10/10/2020
          </p>
        </div>
      </div>
      <div class="event__header--time border-shadow-bottom-left bg-main">
        <p class="title-regular">
          10:00_10:30
        </p>
      </div>
    </div>
    <div class="event__content">
      <div class="event__content--title">
        <h1 class="title-main">
          Título del evento
        </h1>
        <h2 class="text-main">
          &gt;&gt;&gt; Nombre del poniente
        </h2>
      </div>
      <div class="event__content--description">
        <p>
          Descripción del evento.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi corporis fugiat impedit odit officia optio
          placeat tempore, temporibus ut! Culpa dolor eaque eligendi, eum expedita, harum laudantium molestias nam nobis
          numquam, omnis possimus quidem similique ullam voluptatem. Adipisci fugit maxime qui! Cum ea facere magni
          maiores nulla, obcaecati ut!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at aut beatae dignissimos dolor dolorem
          ea illum, impedit necessitatibus nulla, quas quod repellat repellendus sequi temporibus tenetur unde vel
          veniam!
        </p>
      </div>
      <label class="event__fav">
        <input name="fav" type="checkbox" class="event__fav--check">
        <div class="event__fav--content border-shadow-y-left">
          <p>
            misFavoritos.<span class="func-text">pop(</span><span class="func-text">append(</span>charla<span class="func-text">)</span>
          </p>
        </div>
      </label>
      <router-link :to="{ name: 'map' }" class="event__map border-shadow-y-left">
        <p>
          Lugar del evento
        </p>
        <p class="func-text">
          verMapa()
        </p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import Navigation from '@/components/Navigation.vue'
  import Return from '@/components/Return.vue'

  export default {
    name: 'event',
    components: {
      Navigation,
      Return
    }
  }
</script>

<template>
  <div class="day-detailed">
    <ul class="day-detailed__header bg-main border-shadow-y">
      <li>
        <Return></Return>
      </li>
      <li class="border-shadow-left">
        <p>
          Sábado_10/10/2020
        </p>
      </li>
    </ul>
    <div class="day-detailed__content">
      <ul>
        <li>
          <p class="day-detailed__content--hour">
            10:30_11:15
          </p>
          <ul>
            <li class="day-detailed__array border-shadow-y-left bg-favs">
              <router-link :to="{ name: 'event' }"  >
                <p>
                  Charla = [
                </p>
                <ul class="day-detailed__array--list">
                  <li>
                    <span class="func-text"> "Título de la charla"</span><span>,</span>
                  </li>
                  <li>
                    <span class="func-text">"Nombre del poniente"</span><span>,</span>
                  </li>
                  <li>
                    <span class="func-text">"Lugar de la charla"</span><span>,</span>
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
    </div>
    <Navigation></Navigation>
  </div>
</template>

<script lang="ts">
  import Navigation from '@/components/Navigation.vue'
  import Return from '@/components/Return.vue'

  export default {
    name: 'dayDetailed',
    components: {
      Navigation,
      Return
    }
  }
</script>

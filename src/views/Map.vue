<template>
  <div class="map">
    <div class="map__wrapper border-top">
      <l-map
        class="map__map"
        :zoom="zoom"
        :center="center"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        />
        <l-marker :lat-lng="withPopup">
          <l-tooltip
            :options="{
              permanent: true,
              direction: 'center'
            }"
          >
            <div class="map__tooltip">
              <p>
                0
              </p>
            </div>
          </l-tooltip>
        </l-marker>
      </l-map>
    </div>
    <div class="map__legend bg-main">
      <button
        class="map__legend--header border-shadow-top bg-main"
        @click="mapOpen = !mapOpen"
      >
        <p>
          Leyenda
        </p>
        <div class="border-shadow-left">
          <!-- .arrow-closed .arrow-open -->
          <p
            :class="[ mapOpen ? 'arrow-open' : 'arrow-closed' ]"
          >
            &lt;
          </p>
        </div>
      </button>
      <!-- .legend-opened .legend-closed -->
      <div
        class="map__legend--list-wrapper border-shadow-top"
        :class="[ mapOpen ? 'legend-opened' : 'legend-closed' ]"
      >
        <ul class="map__legend--list">
          <li>
            0: Cafetria
          </li>
          <li>
            1: Sala
          </li>
          <li>
            3: Estadio
          </li>
          <li>
            4: Clase 4B
          </li>
          <li>
            5: Estudio
          </li>
        </ul>
      </div>
    </div>
    <Navigation></Navigation>
  </div>
</template>

<script lang="ts">
  import Navigation from '@/components/Navigation.vue'

  import { latLng } from 'leaflet';
  import { LMap, LTileLayer, LMarker, LTooltip } from 'vue2-leaflet';
  import 'leaflet/dist/leaflet.css';

  export default {
    name: 'map',
    components: {
      Navigation,
      LMap,
      LTileLayer,
      LMarker,
      LTooltip
    },
    data () {
      return {
        // leaflet parameters
        url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
        zoom: 19,
        center: latLng(37.1881700, -3.6066700),
        attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia maps</a> | Map data © <a href="http://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        withPopup: latLng(37.1881700, -3.6066700),
        // map
        mapOpen: false
      }
    },
    methods: {

    }
  }
</script>

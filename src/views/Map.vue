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
        <l-marker></l-marker>
      </l-map>
    </div>
    <div class="map__legend bg-main">
      <button class="map__legend--button border-shadow-top">
        <p>
          Leyenda
        </p>
        <div class="border-shadow-left">
          <p>
            &lt;
          </p>
        </div>
      </button>

    </div>
    <Navigation></Navigation>
  </div>
</template>

<script lang="ts">
  import Navigation from '@/components/Navigation.vue'

  import { latLng } from 'leaflet';
  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
  import 'leaflet/dist/leaflet.css';

  export default {
    name: 'map',
    components: {
      Navigation,
      LMap,
      LTileLayer,
      LMarker
    },
    data () {
      return {
        url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
        zoom: 19,
        center: latLng(37.1881700, -3.6066700),
        attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia maps</a> | Map data © <a href="http://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      }
    }
  }
</script>

<template>
  <div class="config">
    <Navigation></Navigation>
    <div class="config__return border-shadow-y">
      <ReturnText></ReturnText>
    </div>
    
    <section class="config__mode border-bottom">
      <label class="config__mode--dark">
        <input type="radio">
        <span>
          _modoOscuro
        </span>
      </label>
      <label class="config__mode--light">
        <input type="radio">
        <span>
          _modoClaro
        </span>
      </label>
    </section>
    <section class="config__lang">
      <label class="border-shadow-y-left">
        <input type="radio">
        <span>
          _castellano
        </span>
      </label>
      <label class="border-shadow-y-left">
        <input type="radio">
        <span>
          _english
        </span>
      </label>
      <label class="border-shadow-y-left">
        <input type="radio">
        <span>
          _deutsch
        </span>
      </label>
      <label class="border-shadow-y-left">
        <input type="radio">
        <span>
          _русский
        </span>
      </label>
    </section>
  </div>
</template>

<script lang="ts">
  import Navigation from '@/components/Navigation.vue'
  import ReturnText from '@/components/ReturnText.vue'

  export default {
    name: 'home',
    components: {
      Navigation,
      ReturnText
    }
  }
</script>

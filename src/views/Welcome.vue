<template>
  <div class="welcome">
    <nav>
      <!-- welcome - language select -->
      <ul class="border-shadow-top">
        <li class="welcome__lang border-shadow-bottom">
          <label>
            <input type="radio" name="lang" value="es">
            <div>
              <span>
                &gt;&gt;&gt; Bienvenido
              </span>
              <div class="forward border-shadow-left">
                <p>
                  -&gt;
                </p>
              </div>
            </div>
          </label>
        </li>
        <li class="welcome__lang border-shadow-bottom">
          <label>
            <input type="radio" name="lang" value="en">
            <div>
              <span>
                &gt;&gt;&gt; Welcome
              </span>
              <div class="forward border-shadow-left">
                <p>
                  -&gt;
                </p>
              </div>
            </div>
          </label>
        </li>
        <li class="welcome__lang border-shadow-bottom">
          <label>
            <input type="radio" name="lang" value="de">
            <div>
              <span>
                &gt;&gt;&gt; Willkommen
              </span>
              <div class="forward border-shadow-left">
                <p>
                  -&gt;
                </p>
              </div>
            </div>
          </label>
        </li>
        <li class="welcome__lang border-shadow-bottom">
          <label>
            <input type="radio" name="lang" value="ru">
            <div>
              <span>
                &gt;&gt;&gt; Добро пожаловать
              </span>
              <div class="forward border-shadow-left">
                <p>
                  -&gt;
                </p>
              </div>
            </div>
          </label>
        </li>
      </ul>
      <!-- .welcome - language select -->

        <div hidden>
          <!-- welcome - theme select -->
          <ul class="welcome__mode border-y">
            <li class="welcome__mode--item">
              <label class="welcome__mode--dark">
                <input type="radio" name="mode" value="dark">
                <span>
                  _modoOscuro
                </span>
              </label>
            </li>
            <li class="welcome__mode--item">
              <label class="welcome__mode--light">
                <input type="radio" name="mode" value="light">
                <span>
                  _modoClaro
                </span>
              </label>
            </li>
          </ul>
          <!-- .welcome - theme select -->

          <!-- welcome forward / backward -->
          <ul>
            <li class="welcome__confirm border-shadow-bottom">
              <router-link :to="{ name: 'home'}">
                <span>
                  Empezar
                </span>
                <Forward></Forward>
              </router-link>
            </li>
            <li class="welcome__confirm border-shadow-bottom">
              <!-- back to choose language -->
              <router-link :to="{ name: 'home'}">
                <Backward></Backward>
                <span>
                  Volver
                </span>
              </router-link>
              <!-- .back to choose language -->
            </li>
          </ul>
          <!-- .welcome forward / backward -->
        </div>
    </nav>
  </div>
</template>

<script lang="ts">
  import Forward from "@/components/Forward.vue"
  import Backward from "@/components/Backward.vue"

  export default {
    name: 'welcome',
    components: {
      Forward,
      Backward
    }
  }
</script>

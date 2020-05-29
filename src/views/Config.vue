<template>
    <div class="config">
        <Navigation></Navigation>
        <main>
            <section class="config__mode">
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
                <label>
                    <input type="radio">
                    <span>
                        _castellano
                    </span>
                </label>
                <label>
                    <input type="radio">
                    <span>
                        _english
                    </span>
                </label>
                <label>
                    <input type="radio">
                    <span>
                        _deutsch
                    </span>
                </label>
                <label>
                    <input type="radio">
                    <span>
                        _русский
                    </span>
                </label>
            </section>
        </main>
    </div>
</template>

<script lang="ts">
    import Navigation from '@/components/Navigation.vue'

    export default {
        name: 'home',
        components: {
            Navigation
        }
    }
</script>

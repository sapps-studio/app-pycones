<template>
    <div class="favs">
        <Navigation></Navigation>
        <Days></Days>
    </div>
</template>

<script lang="ts">
    import Days from '@/components/Days.vue'

    export default {
        name: 'favs',
        components: {
            Days
        }
    }
</script>

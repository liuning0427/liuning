<template>
  <div id="app">
    <common></common>
    <router-view/>
  </div>
</template>

<script>
    import Common from '@/components/Common.vue';
    export default {
        components:{
            Common
        }
    }
</script>

<style>

</style>

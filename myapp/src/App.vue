<template>
  <div id="app">
    <common-header></common-header>
    <div id="content">
      <router-view />
    </div>
    <common-footer></common-footer>
    <router-view/>
  </div>
</template>

<script>
    import CommonHeader from '@/components/CommonHeader.vue'
    import CommonFooter from '@/components/CommonFooter.vue'
    export default {
        components:{
            CommonHeader,
            CommonFooter
        }
    }
</script>

<style>

</style>

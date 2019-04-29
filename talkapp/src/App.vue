<template>
  <div id="app">
      <router-view></router-view>
      <footer></footer>
  </div>
</template>

<script>
    import Footer from '@/components/Footer.vue'
    export default {
      components:{
        Footer
      },
      data() {
        return {
          list:[
            {
              name:'消息',
              path:'/message'
            },{
              name:'联系人',
              path:'/people'
            }
          ]
        }
      },
    }
</script>
<style>
  #app{
    height: 200px;
  }
</style>

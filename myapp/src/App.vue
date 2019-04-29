<template>
  <div id="app">
    <common-header :seachList="seachList"></common-header>
    <div id="content">
      <router-view />
    </div>
    <common-footer :list="list" :seachList="seachList" @click="fn"></common-footer>
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
        },
        data() {
          return {
            list:[
              {
                name:'电影',
                path:'/movie',
                bg:'#00a862'
              },{
                name:'音乐',
                path:'/music',
                bg:'#0012aa'
              },{
                name:'书籍',
                path:'/book',
                bg:'#dd14cc'
              },{
                name:'图片',
                path:'/pic',
                bg:'#aacc31'
              }
            ],
            seachList:{
              name:'电影',
              path:'/movie',
              bg:'#00a862'            
            }
          }
        },
        methods: {
          fn(index){
            this.seachList = this.list[index];
          }
        },
        created() {
          this.list.forEach((obj,index) => {
            if(obj.path == this.$route.path){
              this.seachList = obj;
            }
          })
        },
    }
</script>

<style>
  #content{
    margin:0;
  }
</style>

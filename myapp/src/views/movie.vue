<template>
    <div class="movie-contanie">
        <ul>
            <li class="movie-content" v-for="(obj,index) in List" :key="index">
                <img :src="obj.images.medium" class="movie-img">
                <div class="movie-txt">
                    <h4>{{obj.title}}</h4>
                    <p>主创</p>
                    <p>年份</p>
                    <p>类型</p>
                </div>
            </li>
        </ul>
        <div class="loading" v-show="isShow">
            <img src="@/assets/imgs/loading.gif" /> 
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            List:[],
            isShow:true
        }
    },
    created() {
       this.getMovie();
       window.onscroll = () =>{
           let scrollTop = document.documentElement.scrollTop;
           let clinetHeight = document.documentElement.clientHeight;
           let height = document.documentElement.scrollHeight;
           console.log(scrollTop,clinetHeight,height);
           if(scrollTop + clinetHeight == height){
               this.getMovie();
           }
       }
    },
    methods: {
        getMovie(){
            axios.get('/data/movie0.json')
            .then((result)=>{
            this.List = result.data.subjects;
            // console.log(this.List);
            isShow:false;
        })
        }
    },
}
</script>

<style>
    .movie-contanie{
        padding:5px 10px;
    }
    .movie-content{
        display:flex;
        border-bottom:1px solid #000;
    }
    .movie-img{
        width:2rem;
        height:3rem;
        flex:1;
    }
    .movie-txt{
        flex:3;
        margin-left:0.2rem;
    }
    .loding{
        margin:50% 50%;
    }
</style>
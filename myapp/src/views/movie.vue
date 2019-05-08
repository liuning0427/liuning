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
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            List:[]
        }
    },
    created() {
        axios.get('/data/movie0.json')
        .then((result)=>{
            this.List = result.data.subjects;
            console.log(this.List);
        })
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
</style>
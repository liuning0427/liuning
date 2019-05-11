<template>
    <div>
        <img :src="obj.src" v-for="(obj,index) in photoData" :key="index" />
    </div>
</template>

<script>
import axios from 'axios';
export default {
    created() {
        axios.get('/data/photodata.json')
        .then((result)=>{
            this.photoData = result.data.photoData;
            console.log(result);
        })
    },
    data() {
        return {
            photoData:[]
        }
    },
}
</script>

<style>
    img{
        width:50%;
        height: 5rem;
    }
</style>
<template>
    <div>
        {{$route.params.id}}
        {{list.title}}
        <img :src="list.images.medium" v-if="isShow"/>
        
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        created() {
            axios.get('/data/moviedetail.json')
            .then((result)=>{
                this.list = result.data;
                this.isShow=true;
            })
        },
        data() {
            return {
                list:{},
                isShow:false
            }
        },
    }
</script>

<style scoped>

</style>
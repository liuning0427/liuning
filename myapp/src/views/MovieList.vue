<template>
    <div>
        {{$route.params.id}}
        {{list.title}}
        <img :src="list.images.medium" />
        
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        created() {
            axios.get('/data/moviedetail.json')
            .then((result)=>{
                this.list = result.data
            })
        },
        data() {
            return {
                list:{}
            }
        },
    }
</script>

<style scoped>

</style>
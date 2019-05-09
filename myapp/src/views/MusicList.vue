<template>
    <div>
        <h1>播放列表</h1>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                musicData:[]
            }
        },
        created() {
            axios.get('/data/musicdata.json')
            .then((result)=>{
                let obj1 = {
                    title:"obj.title",
                    author:"obj.author",
                    src:"obj.src",
                    musicImgSrc:"obj.musicImgSrc",
                    Irc:"obj.Irc"
                }
            })
        },
    }
</script>

<style scoped>

</style>
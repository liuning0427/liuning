<template>
    <div>
        <ul class="footer">
            <li v-for="(obj,index) in list" :key="index">
                <router-link to="obj.path">{{obj.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['list']
}
</script>

<style lang="">
    
</style>
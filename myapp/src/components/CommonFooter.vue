<template>
    <div class="footer">
        <ul :style="{background:seachList.bg}" class="footer-ul">
            <li v-for="(obj,index) in list" :key="index" class="footer-li" @click="$emit('click',index)">
                <router-link :to="obj.path">{{ obj.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:["list","seachList"]
    }
</script>

<style scoped>
    .footer{
        height: 1rem;
        background: #00a861;
        color:#fff;
        position: fixed;
        bottom:0;
        width:100%;
    }
    .footer-ul{
        display:flex;
    }
    .footer-li{
        flex:1;
        text-align: center;
        line-height: 1rem;  
        border:1px solid;
        border-color:transparent #ccc transparent transparent; 
    }
    .footer-li a.router-link-active{
        color:#fff;
        outline:none;
    }
</style>
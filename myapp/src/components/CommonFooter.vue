<template>
    <div class="footer">
        <ul>
            <li>
                <router-link to="/movie">电影</router-link>
            </li>
            <li>
                <router-link to="/music">音乐</router-link>
            </li>
            <li>
                <router-link to="/book">书籍</router-link>
            </li>
            <li>
                <router-link to="/pic">图片</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer{
        height: 1rem;
        background: #00a862;
        color:#fff;
        position: fixed;
        bottom:0;
        width:100%;
    }
    ul{
        display:flex;
    }
    li{
        flex:1;
        text-align: center;
        line-height: 1rem;
    }
</style>
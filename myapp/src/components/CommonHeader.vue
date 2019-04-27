<template>
    <div class="header">
        <div>
            <span class="header-left">首页</span>
            <span class="header-title">电影</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .header{
        height: 1rem;
        background: #00a862;
        color:#fff;
        position: fixed;
        top:0;
        width:100%;
    }
    .header-left{
        line-height:1rem;
        margin-left:0.15rem;
    }
    .header-title{
        position:absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        font-size:0.4rem;
    }
</style>
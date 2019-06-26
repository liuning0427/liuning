<template>
    <div>
        <el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
</el-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .el-col {
    border-radius: 4px;
    height:200px;
  }
  .bg-purple {
    background: #d3dce6;
  }
</style>
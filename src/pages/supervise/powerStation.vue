<template>
  <div class="dist">
    <div class="top-r">
        <el-select class="tableSearchInput" value="实时仿真监测" placeholder="请选择" style="width:140px" size="small">
            <el-option value='实时仿真监测'></el-option>
        </el-select>
    </div>
    <div class="dist-c"></div>
  </div>
</template>
<script>
export default {
    components: {},
    data: () => ({

    }),
    mounted: function() {

    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.top-r {
    padding-top: 10px;
    text-align: right;
}
.dist-c {
  height: 716px;
  background: url(../../assets/images/supervise/distribution01.png);
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: 100% auto;
}
</style>
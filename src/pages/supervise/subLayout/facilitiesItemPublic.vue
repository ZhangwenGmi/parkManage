<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="container-left">
        <div class="title-font">
          <span class="c_darkgray">设施分项筛选</span>
        </div>
        <el-tree :data="data" node-key="id" :default-expanded-keys="[15]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
      </div>
      <div class="container-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
  .views-container{
    display:flex;
    padding:0 20px 20px 20px; 
    width: 100%;
  }
  .container-left{
    .title-font{
      background: #e9e9e9;
      width: 100%;
      font-size: 16px;
      padding: 10px  0 10px 20px;
    }
    margin-top: 20px;
    border:1px solid #e2e2e2;
    border-radius: 3px;
    width: 320px;
    .el-tree{
      border:none;
      margin:10px 20px;
    }
  }
  .container-right{
    width: 100%;
    margin-left: 20px
  }
  .tableSearchInput{
    width: 250px;
    margin: 15px 0 ;
  }
</style>
<script>
  export default {
    data() {
      return {
        input:'',
        data: [{
          id: 1,
          label: '公共WIFI',
          children: [
            {
              label: 'A区'
            },{
              label: 'B区'
            },{
              label: 'C区'
            } 
          ]
        },{
          id: 2,
          label: '路灯',
          children: [
            {
              label: 'A区'
            },{
              label: 'B区'
            },{
              label: 'C区'
            } 
          ]
        },{
          id: 3,
          label: '地下管网',
          children: [
            {
              label: 'A区'
            },{
              label: 'B区'
            },{
              label: 'C区'
            } 
          ]
        },{
          id: 4,
          label: '垃圾桶',
          children: [
            {
              label: 'A区'
            },{
              label: 'B区'
            },{
              label: 'C区'
            } 
          ]
        },{
          id: 5,
          label: '井盖',
          children: [
            {
              label: 'A区'
            },{
              label: 'B区'
            },{
              label: 'C区'
            } 
          ]
        },{
          id: 6,
          label: '车位',
          children: [
            {
              label: 'A区'
            },{
              label: 'B区'
            },{
              label: 'C区'
            } 
          ]
        }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        if (data.router) {
          this.$router.push({ path: data.router });
        }
      }
    }
  };
</script>
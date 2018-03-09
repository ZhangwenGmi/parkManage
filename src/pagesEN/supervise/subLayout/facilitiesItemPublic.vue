<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="container-left">
        <div class="title-font">
          <span class="c_darkgray">Facility separation screening</span>
        </div>
        <el-tree :data="data" node-key="id" :default-expanded-keys="[7]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
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
          label: 'WIFI',
          children: [
            {
              id: 7,
              label: 'Area A'
            },{
              label: 'Area B'
            },{
              label: 'Area C'
            } 
          ]
        },{
          id: 2,
          label: 'Street lamp',
          children: [
            {
              label: 'Area A'
            },{
              label: 'Area B'
            },{
              label: 'Area C'
            } 
          ]
        },{
          id: 3,
          label: 'Underground pipe network',
          children: [
            {
              label: 'Area A'
            },{
              label: 'Area B'
            },{
              label: 'Area C'
            } 
          ]
        },{
          id: 4,
          label: 'Garbage can',
          children: [
            {
              label: 'Area A'
            },{
              label: 'Area B'
            },{
              label: 'Area C'
            } 
          ]
        },{
          id: 5,
          label: 'Manhole cover',
          children: [
            {
              label: 'Area A'
            },{
              label: 'Area B'
            },{
              label: 'Area C'
            } 
          ]
        },{
          id: 6,
          label: 'Parking space',
          children: [
            {
              label: 'Area A'
            },{
              label: 'Area B'
            },{
              label: 'Area C'
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
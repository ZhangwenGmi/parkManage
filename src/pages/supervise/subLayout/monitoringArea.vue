<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="container-left">
        <div class="title-font">
          <span class="c_darkgray">监控区域筛选</span>
        </div>
        <el-tree :data="data" node-key="id" :default-expanded-keys="[1]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
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
          label: '建筑',
          children: [{
              id: 5,
              label: 'A1楼',
              children:[
                {
                  id:1,
                  label:"F1",
                  router: '/supervise/parkSecurity'
                },
                {
                  id:1,
                  label:"F2",
                  router: '/supervise/parkSecurity'
                },
                {
                  id:1,
                  label:"F3",
                  router: '/supervise/parkSecurity'
                },
                {
                  id:1,
                  label:"停车场",
                  router: '/supervise/parkSecurity'
                },
                {
                  id:1,
                  label:"电梯",
                  router: '/supervise/parkSecurity'
                }
              ]
            },{
              id: 6,
              label: 'A2楼'
            },{
              id: 7,
              label: 'A3楼'
            },{
              id: 8,
              label: 'A4楼'
            }
          ]
        }, {
          id: 2,
          label: '室外',
          children: [{
              id: 9,
              label: 'A1楼'
            },{
              id: 10,
              label: 'A1楼'
            },{
              id: 11,
              label: 'A1楼'
            },{
              id: 12,
              label: 'A1楼'
            }
          ]
        }, {
          id: 3,
          label: '出入口'
        }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
        
      };
    }
  };
</script>
<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="container-left">
        <div class="title-font">
          <span class="c_darkgray">Monitoring area screening</span>
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
          label: 'Building',
          children: [{
              id: 5,
              label: 'Building A1',
              children:[
                {
                  id:1,
                  label:"F1",
                  router: '/EN/supervise/parkSecurity'
                },
                {
                  id:1,
                  label:"F2",
                  router: '/EN/supervise/parkSecurity'
                },
                {
                  id:1,
                  label:"F3",
                  router: '/EN/supervise/parkSecurity'
                },
                {
                  id:1,
                  label:"Park",
                  router: '/EN/supervise/parkSecurity'
                },
                {
                  id:1,
                  label:"Elevator",
                  router: '/EN/supervise/parkSecurity'
                }
              ]
            },{
              id: 6,
              label: 'Building A2'
            },{
              id: 7,
              label: 'Building A3'
            },{
              id: 8,
              label: 'Building A4'
            }
          ]
        }, {
          id: 2,
          label: 'Outdoor',
          children: [{
              id: 9,
              label: 'Building A1'
            },{
              id: 10,
              label: 'Building A2'
            },{
              id: 11,
              label: 'Building A3'
            },{
              id: 12,
              label: 'Building A4'
            }
          ]
        }, {
          id: 3,
          label: 'Entrance'
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
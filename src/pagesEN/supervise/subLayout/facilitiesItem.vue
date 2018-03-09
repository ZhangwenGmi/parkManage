<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="container-left">
        <div class="title-font">
          <span class="c_darkgray">Facility separation screening</span>
        </div>
        <el-tree :data="data" node-key="id" :default-expanded-keys="[14]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
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
    width: calc(100% - 20px);
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
          label: 'Screen displays information',
          children: [{
              id: 5,
              label: 'Screen inside the building',
              children: [{
                  id: 14,
                  label: 'A1',
                  router: '/EN/supervise/information/infoList'
                },{
                  id: 13,
                  label: 'A2',
                  router: '/EN/supervise/information/infoList'
                },{
                  id: 13,
                  label: 'A3',
                  router: '/EN/supervise/information/infoList'
                }
              ]
            },{
              id: 6,
              label: 'Outdoor screen',
              children: [{
                  id: 15,
                  label: 'A1',
                  router: '/EN/supervise/information/infoList'
                },{
                  id: 13,
                  label: 'A2',
                  router: '/EN/supervise/information/infoList'
                },{
                  id: 13,
                  label: 'A3',
                  router: '/EN/supervise/information/infoList'
                }
              ]
            },{
              id: 7,
              label: 'Street light screen',
              children: [{
                  id: 15,
                  label: 'A1',
                  router: '/EN/supervise/information/infoList'
                },{
                  id: 13,
                  label: 'A2',
                  router: '/EN/supervise/information/infoList'
                },{
                  id: 13,
                  label: 'A3',
                  router: '/EN/supervise/information/infoList'
                }
              ]
            }
          ]
        }, {
          id: 2,
          label: 'Broadcasting',
          children: [{
              id: 5,
              label: 'Screen inside the building',
              children: [{
                  id: 13,
                  label: 'A1',
                  router: '/EN/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A2',
                  router: '/EN/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A3',
                  router: '/EN/supervise/parkSecurity'
                }
              ]
            },{
              id: 6,
              label: 'Outdoor screen',
              children: [{
                  id: 13,
                  label: 'A1',
                  router: '/EN/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A2',
                  router: '/EN/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A3',
                  router: '/EN/supervise/parkSecurity'
                }
              ]
            },{
              id: 7,
              label: 'Street light screen',
              children: [{
                  id: 13,
                  label: 'A1',
                  router: '/EN/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A2',
                  router: '/EN/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A3',
                  router: '/EN/supervise/parkSecurity'
                }
              ]
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
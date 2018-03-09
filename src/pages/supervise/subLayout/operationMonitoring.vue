<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="container-left">
        <div class="title-font">
          <span class="c_darkgray">运行监测分项</span>
        </div>
        
        <el-tree :data="data" node-key="id" :highlight-current="true" @node-click="handleNodeClick" :default-expanded-keys="[1]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
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
    margin-left: 30px
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
          label: 'A区',
          children: [{
              id: 5,
              label: 'A1楼',
              router: '/supervise/building',
              children: [{
                  id: 13,
                  label: '配电所监测',
                  router: '/supervise/building/powerStation'
              },{
                  id: 14,
                  label: '用电能耗',
                  router: '/supervise/building/powerConsumption'
              }]
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
          label: 'B区',
          children: [{
              id: 9,
              label: 'A1楼'
            },{
              id: 10,
              label: 'A2楼'
            },{
              id: 11,
              label: 'A3楼'
            },{
              id: 12,
              label: 'A4楼'
            }
          ]
        }, {
          id: 3,
          label: 'C区',
          children: [{
              id: 9,
              label: 'A1楼'
            },{
              id: 10,
              label: 'A2楼'
            },{
              id: 11,
              label: 'A3楼'
            },{
              id: 12,
              label: 'A4楼'
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
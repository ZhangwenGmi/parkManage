<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="container-left">
         <div class="title-font">
          <span class="c_darkgray">Run the monitoring sub-item</span>
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
          label: 'Area A',
          children: [{
              id: 5,
              label: 'Building A1',
              router: '/EN/supervise/building',
              children: [{
                  id: 13,
                  label: 'Distribution monitoring',
                  router: '/EN/supervise/building/powerStation'
              },{
                  id: 14,
                  label: 'Energy consumption',
                  router: '/EN/supervise/building/powerConsumption'
              }]
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
          label: 'Area B',
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
          label: 'Area C',
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
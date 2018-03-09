<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="container-left">
        <div class="title-font">
          <span class="c_darkgray">Resource classification</span>
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
          label: 'Municipal infrastructure',
          children: [{
              id: 5,
              label: 'Street lamp'
            },{
              id: 6,
              label: 'AP'
            },{
              id: 7,
              label: 'Garbage can'
            },{
            	label:'Manhole cover'
            },{
							label: 'Geomagnetism',
						},{
							label: 'Underground network',
						},{
							label: 'Environmental sensor',
						},{
							label: 'Camera',
						},{
							label: 'LED',
						},{
							label: 'Digital broadcasting',
						}
          ]
        }, {
          id: 2,
          label: 'Building equipment',
          children: [{
              id: 5,
              label: 'Screen inside',
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
        },{
        	label:'Traffic facilities',
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
        	label:'Entry facility',
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
        	label:'Park facilities',
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
        	label:'Fire control facilities',
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
        	label:'Communication facilities',
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
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>
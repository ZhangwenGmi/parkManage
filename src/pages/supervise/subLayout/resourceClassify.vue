<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="container-left">
        <div class="title-font">
          <span class="c_darkgray">资源分类</span>
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
          label: '市政基础设施',
          children: [{
              id: 5,
              label: '路灯'
            },{
              id: 6,
              label: 'AP'
            },{
              id: 7,
              label: '垃圾桶'
            },{
            	label:'井盖'
            },{
							label: '地磁',
						},{
							label: '地下管网',
						},{
							label: '环境传感器',
						},{
							label: '摄像头',
						},{
							label: 'LED大屏',
						},{
							label: '数字广播',
						}
          ]
        }, {
          id: 2,
          label: '楼宇设施',
          children: [{
              id: 5,
              label: '楼内大屏',
              children: [{
                  id: 13,
                  label: 'A1',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A2',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A3',
                  router: '/supervise/parkSecurity'
                }
              ]
            },{
              id: 6,
              label: '室外大屏',
              children: [{
                  id: 13,
                  label: 'A1',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A2',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A3',
                  router: '/supervise/parkSecurity'
                }
              ]
            },{
              id: 7,
              label: '路灯大屏',
              children: [{
                  id: 13,
                  label: 'A1',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A2',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A3',
                  router: '/supervise/parkSecurity'
                }
              ]
            }
          ]
        },{
        	label:'交通设施',
           children: [{
                  id: 13,
                  label: 'A1',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A2',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A3',
                  router: '/supervise/parkSecurity'
                }
              ]
        },{
        	label:'出入口设施',
           children: [{
                  id: 13,
                  label: 'A1',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A2',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A3',
                  router: '/supervise/parkSecurity'
                }
              ]
        },{
        	label:'停车场设施',
           children: [{
                  id: 13,
                  label: 'A1',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A2',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A3',
                  router: '/supervise/parkSecurity'
                }
              ]
        },{
        	label:'消费设施',
           children: [{
                  id: 13,
                  label: 'A1',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A2',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A3',
                  router: '/supervise/parkSecurity'
                }
              ]
        },{
        	label:'通信设施',
           children: [{
                  id: 13,
                  label: 'A1',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A2',
                  router: '/supervise/parkSecurity'
                },{
                  id: 13,
                  label: 'A3',
                  router: '/supervise/parkSecurity'
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
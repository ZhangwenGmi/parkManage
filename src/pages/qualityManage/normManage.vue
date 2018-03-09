<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="container-left">
        <el-input v-model="input" placeholder="请输入内容" icon="search" size="small"></el-input>
        <el-tree :data="data" node-key="id" :default-expanded-keys="[1,88]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
      </div>
      <div class="container-right">
        <div class="views-title">
          <ul class="clearfix">
            <li class="active">规范管理</li>
          </ul>
        </div>
        <el-table class="mt20" ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="规范名称" align="center"></el-table-column>
          <el-table-column prop="name" label="规范总分" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button type="primary" icon="plus" size="small">添加</el-button>
          <el-button type="primary" icon="edit" class="el-button--edit" size="small">编辑</el-button>
          <el-button type="danger" icon="close" size="small">删除</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        input:'',
        data: [{
          id: 1,
          label: '全部',
          children: [{
              id: 5,
              label: '品质计划'
            },{
              id: 6,
              label: '品质工作内容和要求'
            },{
              id: 7,
              label: '日常运作'
            },{
              id: 88,
              label: '服务运作专项考核',
              children:[
                {
                  id: 7,
                  label: '公用设备运行和维修'
                },{
                  id: 7,
                  label: '消防及应急处理'
                },{
                  id: 7,
                  label: '安全秩序管理服务'
                },{
                  id: 7,
                  label: '停车场服务'
                },{
                  id: 7,
                  label: '环境卫生服务'
                },{
                  id: 7,
                  label: '园林绿化服务'
                },{
                  id: 7,
                  label: '公用设施及建筑管理'
                },{
                  id: 7,
                  label: '社区文化'
                }
              ]
            },{
              id: 8,
              label: '客户满意度调查'
            },{
              id: 8,
              label: '管理内审核评审'
            },{
              id: 8,
              label: '安全生产'
            }
          ]
        }, {
          id: 2,
          label: '住宅类'
        }, {
          id: 3,
          label: '写字楼类'
        }, {
          id: 4,
          label: '政府机关类'
        }, {
          id: 4,
          label: '物流园区类'
        }, {
          id: 4,
          label: '公共场馆类'
        }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData3: [{
          order: '1',
          code: '消防管理',
          name: '15%'
        }, {
          order: '2',
          code: '应急管理',
          name: '15%'
        }],
        multipleSelection: []
      };
    }
  };
</script>
<style lang="scss" scoped>
  .views-container{
    display:flex;
    padding:0 20px 20px 20px; 
    width: 100%;
  }
  .container-left{
    padding:10px;
    margin-top: 10px;
    border:1px solid #e2e2e2;
    border-radius: 3px;
    width: 320px;
    .el-tree{
      border:none;
      margin: 20px
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
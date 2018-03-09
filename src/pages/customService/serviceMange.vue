<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="container-left">
        <el-input v-model="input" size="small" placeholder="请输入内容" icon="search"></el-input>
        <el-tree :data="data" node-key="id" :default-expanded-keys="[1]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
      </div>
      <div class="container-right">
        <div class="views-title">
          <ul class="clearfix">
            <li class="active">客服1组</li>
          </ul>
        </div>
        <span class="gray">关键词：</span><el-input size="small" class='tableSearchInput'  placeholder="" icon="search"></el-input>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="客服编码" align="center"></el-table-column>
          <el-table-column prop="name" label="客服名称" align="center"></el-table-column>
          <el-table-column prop="phone" label="联系电话" align="center"></el-table-column>
          <el-table-column prop="type" label="类别" align="center"></el-table-column>
          <el-table-column prop="score" label="积分" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button size="small" type="primary" icon="plus">添加</el-button>
          <el-button size="small" type="danger" icon="close">删除</el-button>
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
          label: '普通客服',
          children: [{
              id: 5,
              label: '客服1组'
            },{
              id: 6,
              label: '客服2组'
            },{
              id: 7,
              label: '客服3组'
            },{
              id: 8,
              label: '客服4组'
            }
          ]
        }, {
          id: 2,
          label: '工单客服',
          children: [{
              id: 9,
              label: '客服1组'
            },{
              id: 10,
              label: '客服2组'
            },{
              id: 11,
              label: '客服3组'
            },{
              id: 12,
              label: '客服4组'
            }
          ]
        }, {
          id: 3,
          label: '管理员'
        }, {
          id: 4,
          label: '超级管理员'
        }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData3: [{
          order: '1',
          code: 'KF001',
          name: '张琳',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
        }, {
          order: '2',
          code: 'KF002',
          name: '李林',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
        }, {
          order: '3',
          code: 'KF003',
          name: '张玲玲',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
        }, {
          order: '4',
          code: 'KF004',
          name: '林花花',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
        }, {
          order: '5',
          code: 'KF005',
          name: '柳青青',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
        }, {
          order: '6',
          code: 'KF006',
          name: '李凯琪',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
        }, {
          order: '7',
          code: 'KF007',
          name: '冯翠桦',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
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
    
    .tableSearchInput{
	    width: 150px;
	    margin: 15px 0 ;
	  }
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
  
</style>
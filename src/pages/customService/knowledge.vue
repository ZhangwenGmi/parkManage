<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="container-left">
        <el-input size="small" v-model="input" placeholder="请输入内容" icon="search"></el-input>
        <el-tree :data="data" node-key="id" :default-expanded-keys="[1]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
      </div>
      <div class="container-right">
        <div class="views-title">
          <ul class="clearfix">
            <li class="active">采购类报表</li>
          </ul>
        </div>
        <span class="gray">关键词：</span><el-input size="small" class='tableSearchInput'  placeholder="" icon="search"></el-input>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="name" label="模板" align="center"></el-table-column>
          <el-table-column label="操作" width="120">
            <template scope="scope">
              <el-button  type="text" size="small"> 详情 </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
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
          label: '报表模板',
          children: [{
              id: 5,
              label: '采购类报表'
            },{
              id: 6,
              label: '仓库类报表'
            },{
              id: 7,
              label: '供应商报表'
            },{
              id: 8,
              label: '合同类报表'
            }
          ]
        }, {
          id: 2,
          label: '咨询问答'
        }, {
          id: 3,
          label: '业务流程'
        }, {
          id: 4,
          label: '常用语'
        }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData3: [{
          name: '采购申请表',
        }, {
          name: '询价单',
        }, {
          name: '采购合同',
        }, {
          name: '采购订单',
        }, {
          name: '催货单',
        }, {
          name: '到货通知单',
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
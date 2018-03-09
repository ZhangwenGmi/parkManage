<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="container-left">
        <el-input size="small" v-model="input" placeholder="Please enter content" icon="search"></el-input>
        <el-tree :data="data" node-key="id" :default-expanded-keys="[1]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
      </div>
      <div class="container-right">
        <div class="views-title">
          <ul class="clearfix">
            <li class="active">Procurement Report</li>
          </ul>
        </div>
        <span class="gray">Key：</span><el-input size="small" class='tableSearchInput'  placeholder="" icon="search"></el-input>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="name" label="Template" align="center"></el-table-column>
          <el-table-column label="Operation" width="120">
            <template scope="scope">
              <el-button  type="text" size="small"> Detail </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button size="small" type="danger" icon="close">Delete</el-button>
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
          label: 'Report Template',
          children: [{
              id: 5,
              label: 'Procurement report'
            },{
              id: 6,
              label: 'Warehouse report'
            },{
              id: 7,
              label: 'Supplier report'
            },{
              id: 8,
              label: 'Contract report'
            }
          ]
        }, {
          id: 2,
          label: 'Consulting Q&A'
        }, {
          id: 3,
          label: 'Service process'
        }, {
          id: 4,
          label: 'Common phrase'
        }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData3: [{
          name: 'Procurement report',
        }, {
          name: 'Inquiry sheet',
        }, {
          name: 'Procurement contract',
        }, {
          name: 'Purchase order',
        }, {
          name: 'Expediting order',
        }, {
          name: 'Arrival notice',
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
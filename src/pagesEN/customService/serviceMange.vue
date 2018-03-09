<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="container-left">
        <el-input v-model="input" size="small" placeholder="Please enter content" icon="search"></el-input>
        <el-tree :data="data" node-key="id" :default-expanded-keys="[1]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
      </div>
      <div class="container-right">
        <div class="views-title">
          <ul class="clearfix">
            <li class="active">Customer service group 1</li>
          </ul>
        </div>
        <span class="gray">Key：</span><el-input size="small" class='tableSearchInput'  placeholder="" icon="search"></el-input>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="code" label="Service ID" align="center"></el-table-column>
          <el-table-column prop="name" label="Name" align="center"></el-table-column>
          <el-table-column prop="phone" label="Tel" align="center"></el-table-column>
          <el-table-column prop="type" label="Type" align="center"></el-table-column>
          <el-table-column prop="score" label="Score" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button size="small" type="primary" icon="plus">Add</el-button>
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
          label: 'General customer service',
          children: [{
              id: 5,
              label: 'Customer service group 1'
            },{
              id: 6,
              label: 'Customer service group 2'
            },{
              id: 7,
              label: 'Customer service group 3'
            },{
              id: 8,
              label: 'Customer service group 4'
            }
          ]
        }, {
          id: 2,
          label: 'Order customer service',
          children: [{
              id: 9,
              label: 'Customer service group 1'
            },{
              id: 10,
              label: 'Customer service group 2'
            },{
              id: 11,
              label: 'Customer service group 3'
            },{
              id: 12,
              label: 'Customer service group 4'
            }
          ]
        }, {
          id: 3,
          label: 'Administrator'
        }, {
          id: 4,
          label: 'Super administrator'
        }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData3: [{
          order: '1',
          code: 'KF001',
          name: 'Cristina Zhang',
          phone: '18285697412',
          type: 'General',
          score: '100'
        }, {
          order: '2',
          code: 'KF002',
          name: 'Line Lee',
          phone: '18285697412',
          type: 'General',
          score: '100'
        }, {
          order: '3',
          code: 'KF003',
          name: 'Jack Zhang',
          phone: '18285697412',
          type: 'General',
          score: '100'
        }, {
          order: '4',
          code: 'KF004',
          name: 'Daniel Lin',
          phone: '18285697412',
          type: 'General',
          score: '100'
        }, {
          order: '5',
          code: 'KF005',
          name: 'Elena Liu',
          phone: '18285697412',
          type: 'General',
          score: '100'
        }, {
          order: '6',
          code: 'KF006',
          name: 'Fiona Lee',
          phone: '18285697412',
          type: 'General',
          score: '100'
        }, {
          order: '7',
          code: 'KF007',
          name: 'Fiona Fung',
          phone: '18285697412',
          type: 'General',
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
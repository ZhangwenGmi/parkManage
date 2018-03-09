<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="container-left">
        <el-tree :data="data" node-key="id" :default-expanded-keys="[2,3]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
      </div>
      <div class="container-right">
        <div class="views-title">
          <ul class="clearfix">
            <li class="active">Warehouse Type</li>
          </ul>
        </div>
        <div>
        	<span class="gray">Type：</span>
        	<el-select size="small"  class='tableSearchInput' value="All" placeholder="Please Select" ><el-option value='All'></el-option></el-select>
        	<div class="fr mt15">
        		<el-button class="el-button--upload" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
        		<button size="small" class="export"><i class="icon_export"></i>Export</button>
        	</div>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="code" label="Warehouse Type" align="center"></el-table-column>
          <el-table-column prop="name" label="Description" align="center"></el-table-column>
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
          label: 'Data Dictionary Maintenance',
          children: [{
              id: 2,
              label: 'Warehouse Basic Information',
              children:[
                {
                  id: 4,
                  label: 'Warehouse type'
                },{
                  id: 5,
                  label: 'Inbound type'
                },{
                  id: 6,
                  label: 'Outbound type'
                },{
                  id: 7,
                  label: 'Transfer reason'
                },{
                  id: 8,
                  label: 'Landing mode'
                },{
                  id: 9,
                  label: 'Material type'
                }
              ]
            },{
              id: 3,
              label: 'Basic personnel information',
              children:[
                {
                  id: 10,
                  label: 'Department'
                },{
                  id: 11,
                  label: 'Job level'
                },{
                  id: 12,
                  label: 'Group'
                }
              ]
            },{
              id: 13,
              label: 'Role management'
            }
          ]
        }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData3: [{
          order: '1',
          code: 'Raw material warehouse',
          name: 'This kind of warehouse is usually large for storing raw materials used for production',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
        }, {
          order: '2',
          code: 'Product warehouse',
          name: 'Store the finished products, but these products have not yet entered the circulation area',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
        }, {
          order: '3',
          code: 'Cold store',
          name: 'Used to store those that need to be refrigerated',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
        }, {
          order: '4',
          code: 'Constant temperature warehouse',
          name: 'Used to store products that are required for storage temperature',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
        }, {
          order: '5',
          code: 'Dangerous goods warehouse',
          name: 'Used for storing dangerous goods',
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
    width: 150px;
    margin: 15px 0 ;
  }
</style>
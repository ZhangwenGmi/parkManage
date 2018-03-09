<template lang="html">
      <div class="container-right">
        <div>
          <span class="gray">Key：</span>
          <el-input  size="small" class='tableSearchInput' icon="search"></el-input>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="code" label="Area" align="center"></el-table-column>
          <el-table-column prop="name" label="Facial Recognition Device" align="center"></el-table-column>
          <el-table-column prop="property" label="QR Code" align="center"></el-table-column>
          <el-table-column prop="type" label="Bluetooth Device" align="center"></el-table-column>
          <el-table-column prop="manager" label="Created By" align="center"></el-table-column>
          <el-table-column prop="capacity" label="Creation Date" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <div style="text-align:center">
              <el-pagination
                :page-sizes="[10]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="9">
              </el-pagination>
          </div>
          <el-button size="small"  type="primary" icon="plus">Add</el-button>
          <el-button size="small" class="el-button--edit" type="primary" icon="edit">Edit</el-button>
          <el-button size="small" type="danger" icon="close">Delete</el-button>
        </div>
      </div>
</template>
<script>
  export default {
    data() {
      return {
        input:'',
        tableData3: [{
          order: '1',
          code: 'Floor 1,Building 1',
          name: '48',
          property: '48',
          type: '30',
          manager: 'Xiaoming Li',
          capacity: '2017-09-21'
        }, {
          order: '2',
          code: 'Floor 1,Building 1',
          name: '48',
          property: '48',
          type: '30',
          manager: 'Xiaoming Li',
          capacity: '2017-09-21'
        }, {
          order: '3',
          code: 'Floor 1,Building 1',
          name: '48',
          property: '48',
          type: '30',
          manager: 'Xiaoming Li',
          capacity: '2017-09-21'
        }, {
          order: '4',
          code: 'Floor 1,Building 1',
          name: '48',
          property: '48',
          type: '30',
          manager: 'Xiaoming Li',
          capacity: '2017-09-21'
        }, {
          order: '5',
          code: 'Floor 1,Building 1',
          name: '48',
          property: '48',
          type: '30',
          manager: 'Xiaoming Li',
          capacity: '2017-09-21'
        }, {
          order: '6',
          code: 'Floor 1,Building 1',
          name: '48',
          property: '48',
          type: '30',
          manager: 'Xiaoming Li',
          capacity: '2017-09-21'
        }, {
          order: '7',
          code: 'Floor 1,Building 1',
          name: '48',
          property: '48',
          type: '30',
          manager: 'Xiaoming Li',
          capacity: '2017-09-21'
        }],
        multipleSelection: []
      };
    }
  };
</script>
<style lang="scss" scoped>
  .views-container{
    width: 100%;
    
    .tableSearchInput{
	    width: 150px;
	    margin: 15px 0 ;
	  }
  }
  .container-right{
    padding:0 20px
  }
 
</style>
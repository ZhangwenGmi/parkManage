<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">Warehouse Information</li>
          <li>Material Information</li>
          <li>Employee Information</li>
        </ul>
      </div>
      <div class="container-right">
        <div>
          <span class="gray">Warehouse No：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20 gray">Warehouse name：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20 gray">Warehouse type：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20 gray">Administrator：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <el-button type="text" class="ml20">More screen</el-button>
          <div class="fr mt15">
            <button class="export" size="small"><i class="icon_export"></i>Export</button>
          </div>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="code" label="Warehouse No" align="center"></el-table-column>
          <el-table-column prop="name" label="Warehouse Name" align="center"></el-table-column>
          <el-table-column prop="property" label="Warehouse Type" align="center"></el-table-column>
          <el-table-column prop="type" label="Stored Material Category" align="center"></el-table-column>
          <el-table-column prop="manager" label="Administrator" align="center"></el-table-column>
          <el-table-column prop="capacity" label="Total Capacity" align="center"></el-table-column>
          <el-table-column prop="leftcapacity" label="Idle Capacity" align="center"></el-table-column>
          <el-table-column label="Status" width="120">
            <template scope="scope">
              <el-button type="text" size="small"> Start using </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button size="small" type="primary" icon="plus">Add</el-button>
          <el-button size="small" class="el-button--edit" type="primary" icon="edit">Edit</el-button>
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
        tableData3: [{
          order: '1',
          code: 'CK001',
          name: 'Logistics A1',
          property: 'Cold storage library',
          type: 'Fresh, drink',
          manager: 'Xiaoming Li',
          capacity: '200m³',
          leftcapacity: '105m³'
        }, {
          order: '2',
          code: 'CK001',
          name: 'Logistics A1',
          property: 'Cold storage library',
          type: 'Fresh, drink',
          manager: 'Xiaoming Li',
          capacity: '200m³',
          leftcapacity: '105m³'
        }, {
          order: '3',
          code: 'CK001',
          name: 'Logistics A1',
          property: 'Cold storage library',
          type: 'Fresh, drink',
          manager: 'Xiaoming Li',
          capacity: '200m³',
          leftcapacity: '105m³'
        }, {
          order: '4',
          code: 'CK001',
          name: 'Logistics A1',
          property: 'Cold storage library',
          type: 'Fresh, drink',
          manager: 'Xiaoming Li',
          capacity: '200m³',
          leftcapacity: '105m³'
        }, {
          order: '5',
          code: 'CK001',
          name: 'Logistics A1',
          property: 'Cold storage library',
          type: 'Fresh, drink',
          manager: 'Xiaoming Li',
          capacity: '200m³',
          leftcapacity: '105m³'
        }, {
          order: '6',
          code: 'CK001',
          name: 'Logistics A1',
          property: 'Cold storage library',
          type: 'Fresh, drink',
          manager: 'Xiaoming Li',
          capacity: '200m³',
          leftcapacity: '105m³'
        }, {
          order: '7',
          code: 'CK001',
          name: 'Logistics A1',
          property: 'Cold storage library',
          type: 'Fresh, drink',
          manager: 'Xiaoming Li',
          capacity: '200m³',
          leftcapacity: '105m³'
        }],
        multipleSelection: []
      };
    }
  };
</script>
<style lang="scss" scoped>
  .views-container{
    width: 100%;
  }
  .container-right{
    padding:0 20px
  }
  .tableSearchInput{
    width: 150px;
    margin: 15px 0 ;
  }
</style>
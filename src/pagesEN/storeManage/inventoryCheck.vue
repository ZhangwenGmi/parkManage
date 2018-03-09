<template lang="html">
      <div class="container-right">
        <div class="search-div">
          <span>Count sheet No：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">Count warehouse：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">Handled by：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">Count operation：</span>
      		<el-select value="All" placeholder="Please Select" size="small"><el-option value='All'></el-option></el-select>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="code" label="Material Code" align="center"></el-table-column>
          <el-table-column prop="name" label="Material Name" align="center"></el-table-column>
          <el-table-column prop="property" label="Unit" align="center"></el-table-column>
          <el-table-column prop="type" label="Inventory Quantity" align="center"></el-table-column>
          <el-table-column prop="manager" label="Count Quantity" align="center"></el-table-column>
          <el-table-column prop="capacity" label="Profit and Loss Quantity" align="center"></el-table-column>
          <el-table-column prop="leftcapacity" label="Cost Unit Price" align="center"></el-table-column>
          <el-table-column prop="mark" label="Profit and Loss Amount" align="center"></el-table-column>
        </el-table>
        <div>
          <div>
            <span class="gray">Scan barcode：</span>
            <el-input class='tableSearchInput' size="small"></el-input>
            <div class="fr mt10">
              <el-button type="primary" size="small">View Inventory</el-button>
              <el-button type="primary" size="small">Print Barcode</el-button>
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
          code: 'WL00021',
          name: 'Notebook',
          property: 'Book',
          type: '30',
          manager: '30',
          capacity: '0',
          leftcapacity: '2',
          mark:'0'
        }, {
          order: '2',
          code: 'WL00021',
          name: 'Notebook',
          property: 'Book',
          type: '30',
          manager: '30',
          capacity: '0',
          leftcapacity: '2',
          mark:'0'
        }, {
          order: '3',
          code: 'WL00021',
          name: 'Notebook',
          property: 'Book',
          type: '30',
          manager: '30',
          capacity: '0',
          leftcapacity: '2',
          mark:'0'
        }, {
          order: '4',
          code: 'WL00021',
          name: 'Notebook',
          property: 'Book',
          type: '30',
          manager: '30',
          capacity: '0',
          leftcapacity: '2',
          mark:'0'
        }, {
          order: '5',
          code: 'WL00021',
          name: 'Notebook',
          property: 'Book',
          type: '30',
          manager: '30',
          capacity: '0',
          leftcapacity: '2',
          mark:'0'
        }, {
          order: '6',
          code: 'WL00021',
          name: 'Notebook',
          property: 'Book',
          type: '30',
          manager: '30',
          capacity: '0',
          leftcapacity: '2',
          mark:'0'
        }, {
          order: '7',
          code: 'WL00021',
          name: 'Notebook',
          property: 'Book',
          type: '30',
          manager: '30',
          capacity: '0',
          leftcapacity: '2',
          mark:'0'
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
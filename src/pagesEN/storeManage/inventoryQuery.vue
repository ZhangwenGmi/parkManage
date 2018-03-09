<template lang="html">
  <div class="container-right">
    <div class="search-div">
      <span>Material type：</span>
      <el-select value="All" placeholder="Please Select" size="small"><el-option value='All'></el-option></el-select>
      <span class="ml5">Material code：</span>
      <el-input class='tableSearchInput' size="small"></el-input>
      <span class="ml5">Material name：</span>
      <el-input class='tableSearchInput' size="small"></el-input>
      <span class="ml5">Supplier：</span>
      <el-select value="All" placeholder="Please Select" size="small"><el-option value='All'></el-option></el-select>
      <span class="ml5">Department：</span>
      <el-select value="All" placeholder="Please Select" size="small"><el-option value='All'></el-option></el-select>
      <span class="ml5">Warehouse：</span>
      <el-select value="All" placeholder="Please Select" size="small"><el-option value='All'></el-option></el-select>
    </div>
    <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="order" label="Order" align="center"></el-table-column>
      <el-table-column prop="code" label="Material Code" align="center"></el-table-column>
      <el-table-column prop="name" label="Material Name" align="center"></el-table-column>
      <el-table-column prop="property" label="Material Type" align="center"></el-table-column>
      <el-table-column prop="type" label="Supplier" align="center"></el-table-column>
      <el-table-column prop="manager" label="Department" align="center"></el-table-column>
      <el-table-column prop="capacity" label="Warehouse" align="center"></el-table-column>
      <el-table-column prop="leftcapacity" label="Quantity" align="center"></el-table-column>
      <el-table-column prop="mark" label="Amount" align="center"></el-table-column>
    </el-table>
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
          name: 'Office supplies',
          property: 'Notebook',
          type: 'Deli',
          manager: 'Property service',
          capacity: 'Property C4',
          leftcapacity: '30',
          mark:'50000'
        }, {
          order: '2',
          code: 'WL00021',
          name: 'Office supplies',
          property: 'Notebook',
          type: 'Deli',
          manager: 'Property service',
          capacity: 'Property C4',
          leftcapacity: '30',
          mark:'50000'
        }, {
          order: '3',
          code: 'WL00021',
          name: 'Office supplies',
          property: 'Notebook',
          type: 'Deli',
          manager: 'Property service',
          capacity: 'Property C4',
          leftcapacity: '30',
          mark:'50000'
        }, {
          order: '4',
          code: 'WL00021',
          name: 'Office supplies',
          property: 'Notebook',
          type: 'Deli',
          manager: 'Property service',
          capacity: 'Property C4',
          leftcapacity: '30',
          mark:'50000'
        }, {
          order: '5',
          code: 'WL00021',
          name: 'Office supplies',
          property: 'Notebook',
          type: 'Deli',
          manager: 'Property service',
          capacity: 'Property C4',
          leftcapacity: '30',
          mark:'50000'
        }, {
          order: '6',
          code: 'WL00021',
          name: 'Office supplies',
          property: 'Notebook',
          type: 'Deli',
          manager: 'Property service',
          capacity: 'Property C4',
          leftcapacity: '30',
          mark:'50000'
        }, {
          order: '7',
          code: 'WL00021',
          name: 'Office supplies',
          property: 'Notebook',
          type: 'Deli',
          manager: 'Property service',
          capacity: 'Property C4',
          leftcapacity: '30',
          mark:'50000'
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
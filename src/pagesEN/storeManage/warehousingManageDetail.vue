<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">New Inbound Bill</li>
          <li>Reviewing Inbound Bill</li>
          <li>History Inbound Bill</li>
          <li style="float:right"><a href="javascript:history.go(-1)" class="icon-close"><i class="el-icon-circle-cross"></i></a></li>
        </ul>
      </div>
      <div class="container-right">
        <div class="search-div">
          <span>Bill ID：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">Business date：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">Department：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">Delivery personnel：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
        </div>
        <div class="search-div">
          <span>Supplier：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">Inbound type：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">Inbound warehouse：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">Handled by：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="code" label="Material Code" align="center"></el-table-column>
          <el-table-column prop="name" label="Material Name" align="center"></el-table-column>
          <el-table-column prop="property" label="Model" align="center"></el-table-column>
          <el-table-column prop="type" label="Package Specifications" align="center"></el-table-column>
          <el-table-column prop="manager" label="Unit" align="center"></el-table-column>
          <el-table-column prop="capacity" label="Quantity" align="center"></el-table-column>
          <el-table-column prop="leftcapacity" label="Price" align="center"></el-table-column>
          <el-table-column prop="mark" label="Amount" align="center"></el-table-column>
          <el-table-column prop="mark" label="Maintenance Date" align="center"></el-table-column>
          <el-table-column prop="mark" label="Remarks" align="center"></el-table-column>
        </el-table>
        <div>
          <div>
            <span class="gray">Scan barcode：</span>
            <el-input class='tableSearchInput' size="small"></el-input>
            <el-button type="text" class="fr mt10">More screen</el-button>
          </div>
          <div>
            <span class="gray">Total amount：</span>
            <el-input class='tableSearchInput' size="small"></el-input>
            <span class="ml20 gray">Total quantity：</span>
            <el-input class='tableSearchInput' size="small"></el-input>
            <div class="fr mt10">
              <el-button type="primary" size="small">Save</el-button>
              <el-button type="primary" size="small">Review</el-button>
              <el-button type="primary" size="small">Print</el-button>
              <el-button type="primary" size="small">Export</el-button>
              <el-button type="primary" size="small">QR Code</el-button>
            </div>
          </div>
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
          code: '',
          name: '',
          property: '',
          type: '',
          manager: '',
          capacity: '',
          leftcapacity: '',
          mark:''
        }, {
          order: '2',
          code: '',
          name: '',
          property: '',
          type: '',
          manager: '',
          capacity: '',
          leftcapacity: '',
          mark:''
        }, {
          order: '3',
          code: '',
          name: '',
          property: '',
          type: '',
          manager: '',
          capacity: '',
          leftcapacity: '',
          mark:''
        }, {
          order: '4',
          code: '',
          name: '',
          property: '',
          type: '',
          manager: '',
          capacity: '',
          leftcapacity: '',
          mark:''
        }, {
          order: '5',
          code: '',
          name: '',
          property: '',
          type: '',
          manager: '',
          capacity: '',
          leftcapacity: '',
          mark:''
        }, {
          order: '6',
          code: '',
          name: '',
          property: '',
          type: '',
          manager: '',
          capacity: '',
          leftcapacity: '',
          mark:''
        }, {
          order: '7',
          code: '',
          name: '',
          property: '',
          type: '',
          manager: '',
          capacity: '',
          leftcapacity: '',
          mark:''
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
    width: 250px;
    margin: 15px 0 ;
  }
</style>
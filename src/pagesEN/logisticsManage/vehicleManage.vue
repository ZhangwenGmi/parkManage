<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">Reservation Management</li>
        </ul>
      </div>
      <div class="container-right">
        <div class="search-div">
          <span>Associated：</span>
          <el-select size="small" value="All" placeholder="Please Select"><el-option value='All'></el-option></el-select>
          <span class="ml20">Gender：</span>
          <el-select size="small" value="All" placeholder="Please Select"><el-option value='All'></el-option></el-select>
          <span class="ml20">Keyword：</span>
			<el-input size="small" class='tableSearchInput' placeholder=""  style="width: 150px!important;" icon="search"></el-input>
          
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="No." align="center"></el-table-column>
          <el-table-column prop="code" label="Subject" align="center"></el-table-column>
          <el-table-column prop="name" label="Conference Creator" align="center"></el-table-column>
          <el-table-column prop="property" label="Status" align="center"></el-table-column>
          <el-table-column prop="type" label="Time" align="center"></el-table-column>
          <el-table-column prop="manager" label="Conference Room" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button size="small" type="primary" icon="plus">Add</el-button>
          <el-button size="small" type="primary" icon="edit" class="el-button--edit">Edit</el-button>
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
          code: 'Conference on cleaning work in the park',
          name: 'Xiaoli Liu',
          property: 'PASS',
          type: '2017-09-22 14:30-16:00',
          manager: 'Conference Room'
        }, {
          order: '2',
          code: 'Conference on cleaning work in the park',
          name: 'Xiaoli Liu',
          property: 'PASS',
          type: '2017-09-22 14:30-16:00',
          manager: 'Conference Room'
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
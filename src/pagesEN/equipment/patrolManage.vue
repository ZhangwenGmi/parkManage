<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">Management List</li>
        </ul>
      </div>
      <div class="container-right">
        <div>
          <span class="gray">Current status：</span>
      		<el-select value="All" size="small" placeholder="Please Select"><el-option value='All'></el-option></el-select>
          <span class="ml10 gray">Association status：</span>
      		<el-select value="All" size="small" placeholder="Please Select"><el-option value='All'></el-option></el-select>
          <span class="ml10 gray">Type：</span>
      		<el-select value="All" size="small" placeholder="Please Select"><el-option value='All'></el-option></el-select>
          <span class="ml10 gray">Key：</span><el-input size="small" class='tableSearchInput' style="width: 150px!important;" placeholder="" icon="search"></el-input>
          <div class="fr mt10">
            <el-button type="text">Temp</el-button>
            <el-button class="el-button--upload" size="small" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <button class="export" size="small"><i class="icon_export"></i>Export</button>
          </div>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="name" label="Inspection Group Name" align="center"></el-table-column>
          <el-table-column prop="time" label="Created" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
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
          name: 'Elevator inspection  machine room',
          time: '2017-09-21 19:00'
        }, {
          order: '2',
          name: 'Elevator inspection  machine room',
          time: '2017-09-21 19:00'
        }, {
          order: '3',
          name: 'Elevator inspection  machine room',
          time: '2017-09-21 19:00'
        }, {
          order: '4',
          name: 'Elevator inspection  machine room',
          time: '2017-09-21 19:00'
        }, {
          order: '5',
          name: 'Elevator inspection  machine room',
          time: '2017-09-21 19:00'
        }, {
          order: '6',
          name: 'Elevator inspection  machine room',
          time: '2017-09-21 19:00'
        }, {
          order: '7',
          name: 'Elevator inspection  machine room',
          time: '2017-09-21 19:00'
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
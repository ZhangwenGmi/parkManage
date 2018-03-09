<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="views-title">
        <ul class="clearfix">
          <li class="active">Task List</li>
        </ul>
      </div>
      <div class="container-right">
      	<div class="search-div">
      		<span>Task status：</span>
      		<el-select value="All" size="small" placeholder="Please Select"><el-option value='All'></el-option></el-select>
      		<span class="ml20">Review status：</span>
      		<el-select value="All" size="small" placeholder="Please Select"><el-option value='All'></el-option></el-select>
      		<span class="ml20">Type：</span>
      		<el-select value="All" size="small" placeholder="Please Select"><el-option value='All'></el-option></el-select>
      		<span class="ml20">Key：</span><el-input size="small" class='tableSearchInput' style="width: 150px!important;"  placeholder="" icon="search"></el-input>
      		<div class="fr mt15">
      			<button size="small" class="export"><i class="icon_export"></i>Export</button>
      		</div>
      	</div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="name" label="Task Name" align="center"></el-table-column>
          <el-table-column prop="obj" label="Inspection Object" align="center"></el-table-column>
          <el-table-column prop="startTime" label="Start Time" align="center"></el-table-column>
          <el-table-column prop="endTime" label="End Time" align="center"></el-table-column>
          <el-table-column prop="adress" label="Location" align="center"></el-table-column>
          <el-table-column prop="type" label="Type" align="center"></el-table-column>
          <el-table-column prop="state" label="Task Status" align="center"></el-table-column>
          <el-table-column label="Review Status" width="120">
            <template scope="scope">
              <span class="c_red"> Incomplete </span>
            </template>
          </el-table-column>
          <el-table-column prop="result" label="Task Result" align="center"></el-table-column>
          <el-table-column prop="doneTime" label="Completion Time" align="center"></el-table-column>
          <el-table-column prop="person" label="Executed By" align="center"></el-table-column>
        </el-table>
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
          name: 'Telephone inspection 116110',
          obj: 'Technology dept',
          startTime: '2017-09-22 10:34',
          endTime: '2017-09-22 10:34',
          adress: '-',
          type: 'Inspection',
          state: 'Out of date',
          result: '-',
          doneTime: '2017-09-22 10:34',
          person: 'Xiaoliang Ma',
        }, {
          order: '1',
          name: 'Telephone inspection 116110',
          obj: 'Technology dept',
          startTime: '2017-09-22 10:34',
          endTime: '2017-09-22 10:34',
          adress: '-',
          type: 'Inspection',
          state: 'Out of date',
          result: '-',
          doneTime: '2017-09-22 10:34',
          person: 'Xiaoliang Ma',
        }, {
          order: '1',
          name: 'Telephone inspection 116110',
          obj: 'Technology dept',
          startTime: '2017-09-22 10:34',
          endTime: '2017-09-22 10:34',
          adress: '-',
          type: 'Inspection',
          state: 'Out of date',
          result: '-',
          doneTime: '2017-09-22 10:34',
          person: 'Xiaoliang Ma',
        }, {
          order: '1',
          name: 'Telephone inspection 116110',
          obj: 'Technology dept',
          startTime: '2017-09-22 10:34',
          endTime: '2017-09-22 10:34',
          adress: '-',
          type: 'Inspection',
          state: 'Out of date',
          result: '-',
          doneTime: '2017-09-22 10:34',
          person: 'Xiaoliang Ma',
        }, {
          order: '1',
          name: 'Telephone inspection 116110',
          obj: 'Technology dept',
          startTime: '2017-09-22 10:34',
          endTime: '2017-09-22 10:34',
          adress: '-',
          type: 'Inspection',
          state: 'Out of date',
          result: '-',
          doneTime: '2017-09-22 10:34',
          person: 'Xiaoliang Ma',
        }, {
          order: '1',
          name: 'Telephone inspection 116110',
          obj: 'Technology dept',
          startTime: '2017-09-22 10:34',
          endTime: '2017-09-22 10:34',
          adress: '-',
          type: 'Inspection',
          state: 'Out of date',
          result: '-',
          doneTime: '2017-09-22 10:34',
          person: 'Xiaoliang Ma',
        }, {
          order: '1',
          name: 'Telephone inspection 116110',
          obj: 'Technology dept',
          startTime: '2017-09-22 10:34',
          endTime: '2017-09-22 10:34',
          adress: '-',
          type: 'Inspection',
          state: 'Out of date',
          result: '-',
          doneTime: '2017-09-22 10:34',
          person: 'Xiaoliang Ma',
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
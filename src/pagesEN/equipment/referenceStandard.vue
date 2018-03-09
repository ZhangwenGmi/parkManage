<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="views-title">
        <ul class="clearfix">
          <li class="active">Standard List</li>
        </ul>
      </div>
      <div class="container-right">
      	<div>
      		<span class="gray">Category：</span>
      		<el-select value="All" size="small" placeholder="Please Select"><el-option value='All'></el-option></el-select>
      		<span class="ml20 gray">Status：</span>
      		<el-select value="All" size="small" placeholder="Please Select"><el-option value='All'></el-option></el-select>
      		<span class="ml20 gray">Key：</span><el-input size="small" class='tableSearchInput'  placeholder="" icon="search"></el-input>
      		<div class="fr mt10">
      			<el-button type="text">Temp</el-button>
      			<el-button class="el-button--upload" type="primary" size="small">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
      			<button class="export" size="small"><i class="icon_export" ></i>Export</button>
      		</div>
      	</div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="code" label="Standard Order" align="center"></el-table-column>
          <el-table-column prop="name" label="Name" align="center"></el-table-column>
          <el-table-column prop="type" label="Category" align="center"></el-table-column>
          <el-table-column prop="time" label="Time Restriction" align="center"></el-table-column>
          <el-table-column prop="startTime" label="Start Time" align="center"></el-table-column>
          <el-table-column prop="rate" label="Execution Frequency" align="center"></el-table-column>
          <el-table-column prop="lastTime" label="Last Updated" align="center"></el-table-column>
          <el-table-column prop="resource" label="Standard Source" align="center"></el-table-column>
          <el-table-column label="Status" width="120">
            <template scope="scope">
              <el-button type="text" size="small"> Normal </el-button>
            </template>
          </el-table-column>
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
          code: 'QP31',
          name: 'Elevator inspection',
          type: 'Inspection',
          time: '7 days',
          startTime: 'Every Monday',
          lastTime: '2017-09-22 10:34',
          rate: 'Once a week',
          resource: 'Management system',
        }, {
          order: '2',
          code: 'QP31',
          name: 'Elevator inspection',
          type: 'Inspection',
          time: '7 days',
          startTime: 'Every Monday',
          lastTime: '2017-09-22 10:34',
          rate: 'Once a week',
          resource: 'Management system',
        }, {
          order: '3',
          code: 'QP31',
          name: 'Elevator inspection',
          type: 'Inspection',
          time: '7 days',
          startTime: 'Every Monday',
          lastTime: '2017-09-22 10:34',
          rate: 'Once a week',
          resource: 'Management system',
        }, {
          order: '4',
          code: 'QP31',
          name: 'Elevator inspection',
          type: 'Inspection',
          time: '7 days',
          startTime: 'Every Monday',
          lastTime: '2017-09-22 10:34',
          rate: 'Once a week',
          resource: 'Management system',
        }, {
          order: '5',
          code: 'QP31',
          name: 'Elevator inspection',
          type: 'Inspection',
          time: '7 days',
          startTime: 'Every Monday',
          lastTime: '2017-09-22 10:34',
          rate: 'Once a week',
          resource: 'Management system',
        }, {
          order: '6',
          code: 'QP31',
          name: 'Elevator inspection',
          type: 'Inspection',
          time: '7 days',
          startTime: 'Every Monday',
          lastTime: '2017-09-22 10:34',
          rate: 'Once a week',
          resource: 'Management system',
        }, {
          order: '7',
          code: 'QP31',
          name: 'Elevator inspection',
          type: 'Inspection',
          time: '7 days',
          startTime: 'Every Monday',
          lastTime: '2017-09-22 10:34',
          rate: 'Once a week',
          resource: 'Management system',
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
    }
  }
  .container-right{
  	padding:0 20px
  }
  .tableSearchInput{
    width: 150px;
    margin: 15px 0 ;
  }
</style>
<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="views-title">
        <ul class="clearfix">
          <li class="active">Device List</li>
        </ul>
      </div>
      <div class="container-right">
      	<div>
      		<span class="gray">Current status：</span>
      		<el-select value="All" size="small" placeholder="Please Select"><el-option value='All'></el-option></el-select>
      		<span class="ml15 gray">Association status：</span>
      		<el-select value="All" size="small" placeholder="Please Select"><el-option value='All'></el-option></el-select>
      		<span class="ml15 gray">Type：</span>
      		<el-select value="All" size="small" placeholder="Please Select"><el-option value='All'></el-option></el-select>
      		<span class="ml15 gray">Key：</span><el-input  size="small" class='tableSearchInput'  placeholder="" icon="search"></el-input>
      		<div class="fr mt10">
      			<el-button type="text">Temp</el-button>
      			<el-button class="el-button--upload"  size="small" type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
      			<button class="export"  size="small"><i class="icon_export"></i>Export</button>
      		</div>
      	</div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="code" label="Device ID" align="center"></el-table-column>
          <el-table-column prop="firm" label="Vendor" align="center"></el-table-column>
          <el-table-column prop="name" label="Name" align="center"></el-table-column>
          <el-table-column prop="outTime" label="Delivery Date" align="center"></el-table-column>
          <el-table-column prop="productTime" label="Use Date" align="center"></el-table-column>
          <el-table-column prop="type" label="Type" align="center"></el-table-column>
          <el-table-column label="Current Status" width="120">
            <template scope="scope">
              <span class="c_red">Incomplete </span>
            </template>
          </el-table-column>
          <el-table-column label="Association Status" width="120">
            <template scope="scope">
              <el-button type="text" size="small"> Intact </el-button>
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
          code: 'XF/JL-001-22',
          firm: 'New Way Valve',
          name: 'Fire shutter',
          outTime: 'In September 2014',
          productTime: 'In September 2014',
          type: 'Fire fighting',
        }, {
          order: '2',
          code: 'XF/JL-001-22',
          firm: 'New Way Valve',
          name: 'Fire shutter',
          outTime: 'In September 2014',
          productTime: 'In September 2014',
          type: 'Fire fighting',
        }, {
          order: '3',
          code: 'XF/JL-001-22',
          firm: 'New Way Valve',
          name: 'Fire shutter',
          outTime: 'In September 2014',
          productTime: 'In September 2014',
          type: 'Fire fighting',
        }, {
          order: '4',
          code: 'XF/JL-001-22',
          firm: 'New Way Valve',
          name: 'Fire shutter',
          outTime: 'In September 2014',
          productTime: 'In September 2014',
          type: 'Fire fighting',
        }, {
          order: '5',
          code: 'XF/JL-001-22',
          firm: 'New Way Valve',
          name: 'Fire shutter',
          outTime: 'In September 2014',
          productTime: 'In September 2014',
          type: 'Fire fighting',
        }, {
          order: '6',
          code: 'XF/JL-001-22',
          firm: 'New Way Valve',
          name: 'Fire shutter',
          outTime: 'In September 2014',
          productTime: 'In September 2014',
          type: 'Fire fighting',
        }, {
          order: '7',
          code: 'XF/JL-001-22',
          firm: 'New Way Valve',
          name: 'Fire shutter',
          outTime: 'In September 2014',
          productTime: 'In September 2014',
          type: 'Fire fighting',
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
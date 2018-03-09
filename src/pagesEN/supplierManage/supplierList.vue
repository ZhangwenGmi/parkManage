<template lang="html">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">Supplier List</li>
        </ul>
      </div>
      <div class="container-right">
        <div class="search-div">
          <span class="gray">Type：</span>
          <el-select value="All" placeholder="Please Select" size="small"><el-option value="All"></el-option></el-select>
          <span class="ml5 gray">Industries：</span>
          <el-select value="All" placeholder="Please Select" size="small"><el-option value="All"></el-option></el-select>
          <span class="ml5 gray">Range：</span>
          <el-select value="All" placeholder="Please Select" size="small"><el-option value="All"></el-option></el-select>
          <span class="ml5 gray">Audit：</span>
          <el-select value="All" placeholder="Please Select" size="small"><el-option value="All"></el-option></el-select>
          <span class="ml5 gray">State：</span>
          <el-select value="All" placeholder="Please Select" size="small"><el-option value="All"></el-option></el-select>

          <span class="ml5">Key：</span><el-input class='tableSearchInput tableSearchInput-mini' placeholder="" icon="search" size="small"></el-input>
          <div class="fr mt10">
            <el-button class="dowload" type="text">Temp</el-button>
            <el-button class="el-button--upload" type="primary" size="small">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            <button class="export" size="small"><i class="icon_export"></i>Export</button>
          </div>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column label="LOGO" align="center">
            <template scope="scope">
            	<router-link to="/EN/supplierManage/supplierInfo/supplierInfoDetail">
              		<img class="logo" src="../../assets/images/common/logo.png">
             	</router-link>
            </template>
          </el-table-column>
          <el-table-column prop="supplier" label="Supplier" align="center"></el-table-column>
          <el-table-column prop="type" label="Type" align="center"></el-table-column>
          <el-table-column prop="ctype" label="Industries" align="center"></el-table-column>
          <el-table-column prop="level" label="Range" align="center"></el-table-column>
          <el-table-column prop="audit" label="Audit State" width="130" align="center">
            <template scope="scope">
            	<div v-if="scope.row.audit == 'Refused'">
            		<span class="red">{{scope.row.audit}}</span>
            		<label class="red">{{scope.row.cause}}</label>
            	</div>
            	<span v-else :class="(scope.row.audit === 'Passed') ? 'green' : scope.row.audit == 'Unreviewed' ? 'red' : 'blue'">{{scope.row.audit}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="Operation State" align="center"></el-table-column>
          <el-table-column prop="score" label="Score" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button type="primary" icon="plus" size="small">Add</el-button>
          <el-button class="el-button--edit" type="primary" icon="edit" size="small">Edit</el-button>
          <el-button type="danger" icon="close" size="small">Delete</el-button>
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
          supplier: 'Deli',
          type: ' Rent holder',
          ctype: 'Dining',
          level: 'A',
          state: 'Operating',
          score: '88',
          audit:'Passed',
        }, {
          order: '2',
          supplier: 'Deli',
          type: ' Rent holder',
          ctype: 'Dining',
          level: 'A',
          state: 'Operating',
          score: '88',
          audit:'Reviewing'
        }, {
          order: '3',
          supplier: 'Deli',
          type: ' Rent holder',
          ctype: 'Dining',
          level: 'A',
          state: 'Operating',
          score: '88',
          audit:'Refused',
          cause:'Reason:It does not up to standard'
        }, {
          order: '4',
          supplier: 'Deli',
          type: ' Rent holder',
          ctype: 'Dining',
          level: 'A',
          state: 'Operating',
          score: '88',
          audit:'Unreviewed'
        }, {
          order: '5',
          supplier: 'Deli',
          type: ' Rent holder',
          ctype: 'Dining',
          level: 'A',
          state: 'Operating',
          score: '88',
          audit:'Reviewing'
        }, {
          order: '6',
          supplier: 'Deli',
          type: ' Rent holder',
          ctype: 'Dining',
          level: 'A',
          state: 'Operating',
          score: '88',
          audit:'Reviewing'
        }, {
          order: '7',
          supplier: 'Deli',
          type: ' Rent holder',
          ctype: 'Dining',
          level: 'A',
          state: 'Operating',
          score: '88',
          audit:'Reviewing'
        }]
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
  .el-table tr{
  	label{
  		font-weight: normal;
  		font-size: 12px;
  	}
  	a{
  		display: inline-block;
  		width: 30px;
  		height: 30px;
  		cursor: pointer;
  	}
  }
  .logo{
  	width: 30px;
  	height: 30px;
  }
  .red{
  	color: #d9514e;
  }
  .greed{
  	color: #32c6b8;
  }
</style>
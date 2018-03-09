<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="container-left">
        <el-input v-model="input" placeholder="Please enter content" icon="search" size="small"></el-input>
        <el-tree :data="data" node-key="id" :default-expanded-keys="[1,88]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
      </div>
      <div class="container-right">
        <div class="views-title">
          <ul class="clearfix">
            <li class="active">Standard Approval</li>
          </ul>
        </div>
        <span class="gray">Date range：</span>
          <el-date-picker  class='tableSearchInput' size="small" v-model="value7" type="daterange" align="left" placeholder="Select date range" :picker-options="pickerOptions2"></el-date-picker>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="code" label="Project Name" align="center"></el-table-column>
          <el-table-column prop="name" label="Type and Score" align="left" width="380">
            <template scope="scope">
              <div v-for="item in scope.row.name">{{ item }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="aaa" label="Weighted Score" align="center"></el-table-column>
          <el-table-column prop="bbb" label="Weighted Deduction" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button type="primary" icon="plus" size="small" >Add</el-button>
          <el-button type="primary" icon="edit" class="el-button--edit" size="small" >Edit</el-button>
          <el-button type="danger" icon="close" size="small" >Delete</el-button>
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
        value7: '',
        pickerOptions2: {
          shortcuts: [{
            text: 'Last a week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last a month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        data: [{
          id: 1,
          label: 'All',
          children: [{
            id: 2,
            label: 'Residential buildings',
            children: [{
              id: 21,
              label: 'Shenye Garden'
            }, {
              id: 22,
              label: 'Ling Xiu Ming Yuan'
            }, {
              id: 24,
              label: 'New Star Garden'
            }]
          }, {
            id: 3,
            label: 'Office buildings',
            children: [{
              id: 31,
              label: 'Center Building'
            }]
          }, {
            id: 4,
            label: 'Government agencies',
            children: [{
              id: 41,
              label: 'District Government Center'
            },{
              id: 42,
              label: 'Changsha Garrison District'
            },{
              id: 43,
              label: 'Shining-star Customs office'
            }]
          }, {
            id: 5,
            label: 'Logistics campuses',
            children: [{
              id: 51,
              label: 'Logistics Building'
            }]
          }, {
            id: 6,
            label: 'Public stadiums',
            children: [{
              id: 61,
              label: 'Star Badminton hall'
            }]
          }]
      }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData3: [{
          order: '1',
          code: 'Star Badminton hall',
          name: [
            '1、quality plan（15%） 15',
            '2、Content and requirements of quality rules（15%） 15',
            '3、Routine operations（30%） 30',
            '4、Service operations special appraisal（40%） 40',
            '5、Customer service satisfaction survey（0%） 0',
            '6、Internal review（0%） 0分',
            ],
          aaa: '100',
          bbb: '0'
        }, {
          order: '2',
          code: 'Changsha Garrison District',
          name: [
            '1、quality plan（15%） 15',
            '2、Content and requirements of quality rules（15%） 15',
            '3、Routine operations（30%） 30',
            '4、Service operations special appraisal（40%） 40',
            '5、Customer service satisfaction survey（0%） 0',
            '6、Internal review（0%） 0',
            ],
          aaa: '100',
          bbb: '0'
        }, {
          order: '3',
          code: 'Shining-star Customs office',
          name: [
            '1、quality plan（15%） 15',
            '2、Content and requirements of quality rules（15%） 15',
            '3、Routine operations（30%） 30',
            '4、Service operations special appraisal（40%） 40',
            '5、Customer service satisfaction survey（0%） 0',
            '6、Internal review（0%） 0',
            ],
          aaa: '100',
          bbb: '0'
        }],
        multipleSelection: []
      };
    }, mounted:function(){
    	this.$nextTick(function() {
	        this.doRandom();
	    })
    },
    methods:{
    	doRandom(){
    		const that = this,
              end = new Date(),
              start = end.getTime() - 3600 * 1000 * 24 * 7;
        that.value7 = [start,end];      
    	}
    }
  };
</script>
<style lang="scss" scoped>
  .views-container{
    display:flex;
    padding:0 20px 20px 20px; 
    width: 100%;
  }
  .container-left{
    padding:10px;
    margin-top: 10px;
    border:1px solid #e2e2e2;
    border-radius: 3px;
    width: 320px;
    .el-tree{
      border:none;
      margin: 20px
    }
  }
  .container-right{
    width: 100%;
    margin-left: 30px
  }
  .tableSearchInput{
    width: 250px;
    margin: 15px 0 ;
  }
</style>
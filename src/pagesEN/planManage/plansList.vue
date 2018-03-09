<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">Weekly Plan</li>
          <li>Monthly Plan</li>
          <li>Yearly Plan</li>
        </ul>
      </div>
      <div class="container-right">
        <div class="search-div">
          <span>Status：</span>
          <el-select class="tableSearchInput" value="All" placeholder="Please select" size="small"><el-option value='All'></el-option></el-select>
          <span class="ml20"> Date range：</span>
          <el-date-picker v-model="value7" type="daterange" align="left" placeholder="Select date range" :picker-options="pickerOptions2" size="small">
          </el-date-picker>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="code" label="Project Name" align="center"></el-table-column>
          <el-table-column prop="name" label="Planned Project Duration" align="center"></el-table-column>
          <el-table-column prop="property" label="Owner" align="center"></el-table-column>
          <el-table-column prop="type" label="Description" align="center"></el-table-column>
          <el-table-column prop="manager" label="Progress" align="center"></el-table-column>
          <el-table-column label="Operation" width="120">
            <template scope="scope">
              <el-button type="text" size="small"> in progress </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button class="el-button--edit" type="primary" icon="edit" size="small">Edit</el-button>
          <el-button type="danger" icon="close" size="small">Delete</el-button>
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
        value7:[new Date(2000, 10, 10), new Date(2000, 10, 18)],
        pickerOptions2: {
          shortcuts: [{
            text: 'Last a week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
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
        tableData3: [{
          order: '1',
          code: 'Park service planning',
          name: '5 days',
          property: 'Lin Lee',
          type: 'Implementation of the park construction service implementation',
          manager: '60%'
        }, {
          order: '2',
          code: 'Park service planning',
          name: '5 days',
          property: 'Lin Lee',
          type: 'Implementation of the park construction service implementation',
          manager: '60%'
        }, {
          code: 'Park service planning',
          name: '5 days',
          property: 'Lin Lee',
          type: 'Implementation of the park construction service implementation',
          manager: '60%'
        }, {
          order: '4',
          code: 'Park service planning',
          name: '5 days',
          property: 'Lin Lee',
          type: 'Implementation of the park construction service implementation',
          manager: '60%'
        }, {
          order: '5',
          code: 'Park service planning',
          name: '5 days',
          property: 'Lin Lee',
          type: 'Implementation of the park construction service implementation',
          manager: '60%'
        }, {
          order: '6',
          code: 'Park service planning',
          name: '5 days',
          property: 'Lin Lee',
          type: 'Implementation of the park construction service implementation',
          manager: '60%'
        }, {
          order: '7',
          code: 'Park service planning',
          name: '5 days',
          property: 'Lin Lee',
          type: 'Implementation of the park construction service implementation',
          manager: '60%'
        }],
        multipleSelection: []
      };
    },
    mounted:function(){
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
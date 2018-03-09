<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">Vehicle list</li>
        </ul>
      </div>
      <div class="container-right">
        <div class="search-div">
          <span>Key:</span>
          <el-input class='tableSearchInput'  placeholder="" icon="search" size="small"></el-input>
          <span class="ml20">Date range:</span>
          <el-date-picker v-model="value7" type="daterange" align="left" placeholder="Select date range" :picker-options="pickerOptions2" size="small"></el-date-picker>
          <div class="fr mt15">
            <button class="export" size="small"><i class="icon_export"></i>Export</button>
          </div>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="code" label="License Plate" align="center"></el-table-column>
          <el-table-column prop="name" label="Models" align="center"></el-table-column>
          <el-table-column prop="property" label="Fleet" align="center"></el-table-column>
          <el-table-column prop="type" label="Owner" align="center"></el-table-column>
          <el-table-column prop="manager" label="Park" align="center"></el-table-column>
          <el-table-column prop="aaa" label="Stopping Time" align="center"></el-table-column>
          <el-table-column prop="bbb" label="Common" align="center"></el-table-column>
          <el-table-column prop="ccc" label="VIP" align="center"></el-table-column>
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
        value7: '',
        pickerOptions2: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last three week',
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
          code: '京A30872',
          name: 'VW',
          property: 'Standard',
          type: 'Mingyang Lee',
          manager: 'Multistory Parking B1',
          aaa: '30 mins',
          bbb: '50/80',
          ccc: '10/20'
        }, {
          order: '2',
          code: '京A88888',
          name: 'Benz',
          property: 'Standard',
          type: 'Sandy Zhang',
          manager: 'Basement Parking A1',
          aaa: '60 mins',
          bbb: '50/90',
          ccc: '10/20'
        },{
          order: '3',
          code: '粤A11111',
          name: 'BMW',
          property: 'Standard',
          type: 'Eris Li',
          manager: 'Basement Parking A1',
          aaa: '2 hours',
          bbb: '10/80',
          ccc: '2/20'
        },{
          order: '4',
          code: '粤B88888',
          name: 'Rolls-Royce Ghost',
          property: 'Standard',
          type: 'Darren Wang',
          manager: 'Outdoor Parking A3',
          aaa: '10 hours',
          bbb: '1/10',
          ccc: '2/20'
        }],
        multipleSelection: []
      };
    },mounted:function(){
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
    
    .tableSearchInput{
    	width: 150px;
    }
  }
  .container-right{
    padding:0 20px
  }
  .tableSearchInput{
    width: 250px;
    margin: 15px 0 ;
  }
</style>
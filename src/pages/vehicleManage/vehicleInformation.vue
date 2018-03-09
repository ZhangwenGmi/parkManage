<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">车辆列表</li>
        </ul>
      </div>
      <div class="container-right">
        <div class="search-div">
          <span>关键词：</span>
          <el-input class='tableSearchInput'  placeholder="" icon="search" size="small"></el-input>
          <span class="ml20">日期查询：</span>
          <el-date-picker v-model="value7" type="daterange" align="left" placeholder="选择日期范围" :picker-options="pickerOptions2" size="small"></el-date-picker>
          <div class="fr mt15">
            <button class="export" size="small"><i class="icon_export"></i>导出</button>
          </div>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="车牌号" align="center"></el-table-column>
          <el-table-column prop="name" label="车型" align="center"></el-table-column>
          <el-table-column prop="property" label="车种" align="center"></el-table-column>
          <el-table-column prop="type" label="车主" align="center"></el-table-column>
          <el-table-column prop="manager" label="停车场" align="center"></el-table-column>
          <el-table-column prop="aaa" label="停车时长" align="center"></el-table-column>
          <el-table-column prop="bbb" label="普通车位（已用/总）" align="center"></el-table-column>
          <el-table-column prop="ccc" label="VIP车位（已用/总）" align="center"></el-table-column>
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
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
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
          name: '大众',
          property: '标准型轿车',
          type: '李明洋',
          manager: '地下A3停车场',
          aaa: '30分钟',
          bbb: '50/80',
          ccc: '10/20'
        }, {
          order: '2',
          code: '京A88888',
          name: '奔驰',
          property: '标准型轿车',
          type: '张三',
          manager: '地下A3停车场',
          aaa: '30分钟',
          bbb: '50/80',
          ccc: '10/20'
        },{
          order: '3',
          code: '粤A11111',
          name: '宝马',
          property: '标准型轿车',
          type: '李耳',
          manager: '地下A1停车场',
          aaa: '2小时',
          bbb: '10/80',
          ccc: '2/20'
        },{
          order: '4',
          code: '粤B88888',
          name: '劳斯莱斯',
          property: '标准型轿车',
          type: '王飞',
          manager: '露天A3停车场',
          aaa: '10小时',
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
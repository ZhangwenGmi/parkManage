<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">周计划</li>
          <li>月计划</li>
          <li>年计划</li>
        </ul>
      </div>
      <div class="container-right">
        <div class="search-div">
          <span>状态：</span>
          <el-select class="tableSearchInput" value="全部" placeholder="请选择" size="small"><el-option value='全部'></el-option></el-select>
          <span class="ml20">日期查询：</span>
          <el-date-picker v-model="value7" type="daterange" align="left" placeholder="选择日期范围" :picker-options="pickerOptions2" size="small">
          </el-date-picker>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="项目名称" align="center"></el-table-column>
          <el-table-column prop="name" label="计划工期" align="center"></el-table-column>
          <el-table-column prop="property" label="责任人" align="center"></el-table-column>
          <el-table-column prop="type" label="项目描述" align="center"></el-table-column>
          <el-table-column prop="manager" label="完成进度" align="center"></el-table-column>
          <el-table-column label="操作" width="120">
            <template scope="scope">
              <el-button type="text" size="small"> 进行中 </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button class="el-button--edit" type="primary" icon="edit" size="small">编辑</el-button>
          <el-button type="danger" icon="close" size="small">删除</el-button>
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
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
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
          code: '园区服务规划',
          name: '5天',
          property: '李林',
          type: '园区建安服务实施落地',
          manager: '60%'
        }, {
          order: '2',
          code: '园区服务规划',
          name: '5天',
          property: '李林',
          type: '园区建安服务实施落地',
          manager: '60%'
        }, {
          code: '园区服务规划',
          name: '5天',
          property: '李林',
          type: '园区建安服务实施落地',
          manager: '60%'
        }, {
          order: '4',
          code: '园区服务规划',
          name: '5天',
          property: '李林',
          type: '园区建安服务实施落地',
          manager: '60%'
        }, {
          order: '5',
          code: '园区服务规划',
          name: '5天',
          property: '李林',
          type: '园区建安服务实施落地',
          manager: '60%'
        }, {
          order: '6',
          code: '园区服务规划',
          name: '5天',
          property: '李林',
          type: '园区建安服务实施落地',
          manager: '60%'
        }, {
          order: '7',
          code: '园区服务规划',
          name: '5天',
          property: '李林',
          type: '园区建安服务实施落地',
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
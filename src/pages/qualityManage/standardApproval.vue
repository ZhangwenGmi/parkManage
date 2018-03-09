<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="container-left">
        <el-input v-model="input" placeholder="请输入内容" icon="search" size="small"></el-input>
        <el-tree :data="data" node-key="id" :default-expanded-keys="[1,88]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
      </div>
      <div class="container-right">
        <div class="views-title">
          <ul class="clearfix">
            <li class="active">标准审批</li>
          </ul>
        </div>
        <span class="gray">日期查询：</span>
          <el-date-picker  class='tableSearchInput' size="small" v-model="value7" type="daterange" align="left" placeholder="选择日期范围" :picker-options="pickerOptions2"></el-date-picker>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="项目名称" align="center"></el-table-column>
          <el-table-column prop="name" label="类型" align="left" width="380">
            <template scope="scope">
              <div v-for="item in scope.row.name">{{ item }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="aaa" label="加权得分" align="center"></el-table-column>
          <el-table-column prop="bbb" label="加权扣分" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button type="primary" icon="plus" size="small" >添加</el-button>
          <el-button type="primary" icon="edit" class="el-button--edit" size="small" >编辑</el-button>
          <el-button type="danger" icon="close" size="small" >删除</el-button>
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
        data: [{
        id: 1,
        label: '全部',
        children: [{
          id: 2,
          label: '住宅类',
          children: [{
            id: 21,
            label: '深业花园'
          }, {
            id: 22,
            label: '领秀名苑'
          }, {
            id: 24,
            label: '兴新名苑'
          }]
        }, {
          id: 3,
          label: '写字楼类',
          children: [{
            id: 31,
            label: '中心大厦'
          }]
        }, {
          id: 4,
          label: '政府机关类',
          children: [{
            id: 41,
            label: '区委政府中心'
          },{
            id: 42,
            label: '长沙市警备区'
          },{
            id: 43,
            label: '星沙海关管理处'
          }]
        }, {
          id: 5,
          label: '物流园区类',
          children: [{
            id: 51,
            label: '物流大厦'
          }]
        }, {
          id: 6,
          label: '公共场馆类',
          children: [{
            id: 61,
            label: '星星羽毛球馆'
          }]
        }]
      }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData3: [{
          order: '1',
          code: '星星羽毛球馆',
          name: [
            '1、品质计划（15%） 15分',
            '2、品质规则内容和要求（15%） 15分',
            '3、日常运作（30%） 30分',
            '4、服务运作专项考核（40%） 40分',
            '5、客户满意度调查（0%） 0分',
            '6、管理内部评审（0%） 0分',
            ],
          aaa: '100分',
          bbb: '0分'
        }, {
          order: '2',
          code: '长沙市警备区',
          name: [
            '1、品质计划（15%） 15分',
            '2、品质规则内容和要求（15%） 15分',
            '3、日常运作（30%） 30分',
            '4、服务运作专项考核（40%） 40分',
            '5、客户满意度调查（0%） 0分',
            '6、管理内部评审（0%） 0分',
            ],
          aaa: '100分',
          bbb: '0分'
        }, {
          order: '3',
          code: '星沙海关管理处',
          name: [
            '1、品质计划（15%） 15分',
            '2、品质规则内容和要求（15%） 15分',
            '3、日常运作（30%） 30分',
            '4、服务运作专项考核（40%） 40分',
            '5、客户满意度调查（0%） 0分',
            '6、管理内部评审（0%） 0分',
            ],
          aaa: '100分',
          bbb: '0分'
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
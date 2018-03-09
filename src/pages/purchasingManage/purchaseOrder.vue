<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">采购订单</li>
        </ul>
      </div>
      <div class="container-right">
        <div class="search-div">
          <span>ABC类型：</span>
          <el-select size="small" class="tableSearchInput" value="全部" placeholder="请选择"><el-option value='全部'></el-option></el-select>
          <span class="ml20">关键词：</span>
          <el-input size="small" class='tableSearchInput'  placeholder="" icon="search"></el-input>
          <span class="ml20">日期查询：</span>
          <el-date-picker size="small" v-model="value7" type="daterange" align="left" placeholder="选择日期范围" :picker-options="pickerOptions2"></el-date-picker>
          <div class="fr mt15">
            <button class="export" size="small"><i class="icon_export"></i>导出</button>
          </div>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="订单编号" align="center"></el-table-column>
          <el-table-column prop="name" label="物料名称" align="center"></el-table-column>
          <el-table-column prop="property" label="ABC类型" align="center"></el-table-column>
          <el-table-column prop="types" label="型号" align="center"></el-table-column>
          <el-table-column prop="type" label="规格" align="center"></el-table-column>
          <el-table-column prop="manager" label="数量" align="center"></el-table-column>
          <el-table-column prop="aaa" label="单价" align="center"></el-table-column>
          <el-table-column prop="bbb" label="金额" align="center"></el-table-column>
          <el-table-column prop="ccc" label="参考价" align="center"></el-table-column>
          <el-table-column prop="ddd" label="折后" align="center"></el-table-column>
          <el-table-column prop="eee" label="变动" align="center"></el-table-column>
          <el-table-column prop="fff" label="固定提前期" align="center"></el-table-column>
          <el-table-column prop="ggg" label="这单日期" align="center"></el-table-column>
          <el-table-column prop="hhh" label="采购人" align="center"></el-table-column>
          <el-table-column prop="iii" label="订单状态" align="center">
            <template scope="scope">
              <span class="c_green">{{scope.row.iii}}</span>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button size="small" type="primary" icon="plus">添加</el-button>
          <el-button size="small" type="primary" icon="edit" class="el-button--edit">编辑</el-button>
          <el-button size="small" type="danger" icon="close">删除</el-button>
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
          code: 'DQ-JS0087',
          name: '充电板',
          property: 'A类',
          type: 'A8/70g',
          types: 'A8',
          manager: '30',
          aaa: '50.00',
          bbb: '1500.00',
          ccc: '-',
          ddd: '-',
          eee: '-',
          fff: '-',
          ggg: '09-22 15:07',
          hhh: '项少',
          iii: '未处理',
        }, {
          order: '2',
          code: 'DQ-JS0087',
          name: '充电板',
          property: 'A类',
          type: 'A8/70g',
          types: 'A8',
          manager: '30',
          aaa: '50.00',
          bbb: '1500.00',
          ccc: '-',
          ddd: '-',
          eee: '-',
          fff: '-',
          ggg: '09-22 15:07',
          hhh: '项少',
          iii: '未处理',
        }, {
          order: '3',
          code: 'DQ-JS0087',
          name: '充电板',
          property: 'A类',
          type: 'A8/70g',
          types: 'A8',
          manager: '30',
          aaa: '50.00',
          bbb: '1500.00',
          ccc: '-',
          ddd: '-',
          eee: '-',
          fff: '-',
          ggg: '09-22 15:07',
          hhh: '项少',
          iii: '未处理',
        }, {
          order: '4',
          code: 'DQ-JS0087',
          name: '充电板',
          property: 'A类',
          type: 'A8/70g',
          types: 'A8',
          manager: '30',
          aaa: '50.00',
          bbb: '1500.00',
          ccc: '-',
          ddd: '-',
          eee: '-',
          fff: '-',
          ggg: '09-22 15:07',
          hhh: '项少',
          iii: '未处理',
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
    
    .tableSearchInput{
	    width: 150px;
	    margin: 15px 0 ;
	  }
  }
  .container-right{
    padding:0 20px
  }
  
  
</style>
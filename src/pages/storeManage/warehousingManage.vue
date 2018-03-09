<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">
            <router-link to="/storeManage/warehousingManageDetail"><i class="el-icon-plus"></i> 新开单</router-link>
          </li>
          <li><i class="el-icon-edit"></i> 修改</li>
          <li><i class="el-icon-check"></i> 刷新</li>
          <li><i class="el-icon-search"></i> 查看</li>
          <li><i class="el-icon-more"></i> 审核</li>
          <li><i class="el-icon-minus"></i> 去审</li>
        </ul>
      </div>
      <div class="container-right">
        <div>
          <span class="gray">日期查询：</span>
          <el-date-picker size="small" v-model="value7" type="daterange" align="left"  start-placeholder="开始日期"
      end-placeholder="结束日期" :picker-options="pickerOptions2"></el-date-picker>
          <span class="ml20 gray">关键词：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="单据编号" align="center"></el-table-column>
          <el-table-column prop="name" label="业务日期" align="center"></el-table-column>
          <el-table-column prop="property" label="所属部门" align="center"></el-table-column>
          <el-table-column prop="type" label="经手人" align="center"></el-table-column>
          <el-table-column prop="manager" label="审核状态" align="center"></el-table-column>
          <el-table-column prop="capacity" label="入库仓库" align="center"></el-table-column>
          <el-table-column prop="leftcapacity" label="最后修改日期" align="center"></el-table-column>
          <el-table-column prop="mark" label="备注" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <div class="pages text-center">
              <el-pagination
                :page-sizes="[10]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="8">
              </el-pagination>
          </div>
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
          code: 'LK00021',
          name: '2017-09-10',
          property: '后勤部',
          type: '汪洋',
          manager: '部门已审',
          capacity: '后勤A1',
          leftcapacity: '2017-09-10',
          mark:'--'
        }, {
          order: '2',
          code: 'LK00021',
          name: '2017-09-10',
          property: '后勤部',
          type: '汪洋',
          manager: '部门已审',
          capacity: '后勤A1',
          leftcapacity: '2017-09-10',
          mark:'--'
        }, {
          order: '3',
          code: 'LK00021',
          name: '2017-09-10',
          property: '后勤部',
          type: '汪洋',
          manager: '部门已审',
          capacity: '后勤A1',
          leftcapacity: '2017-09-10',
          mark:'--'
        }, {
          order: '4',
          code: 'LK00021',
          name: '2017-09-10',
          property: '后勤部',
          type: '汪洋',
          manager: '部门已审',
          capacity: '后勤A1',
          leftcapacity: '2017-09-10',
          mark:'--'
        }, {
          order: '5',
          code: 'LK00021',
          name: '2017-09-10',
          property: '后勤部',
          type: '汪洋',
          manager: '部门已审',
          capacity: '后勤A1',
          leftcapacity: '2017-09-10',
          mark:'--'
        }, {
          order: '6',
          code: 'LK00021',
          name: '2017-09-10',
          property: '后勤部',
          type: '汪洋',
          manager: '部门已审',
          capacity: '后勤A1',
          leftcapacity: '2017-09-10',
          mark:'--'
        }, {
          order: '7',
          code: 'LK00021',
          name: '2017-09-10',
          property: '后勤部',
          type: '汪洋',
          manager: '部门已审',
          capacity: '后勤A1',
          leftcapacity: '2017-09-10',
          mark:'--'
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
	.views-title{
		
	}
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
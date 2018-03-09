<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">新入库开单</li>
          <li>审核中入库单</li>
          <li>历史入库单</li>
          <li style="float:right"><a href="javascript:history.go(-1)" class="icon-close"><i class="el-icon-circle-cross"></i></a></li>
        </ul>
      </div>
      <div class="container-right">
        <div class="search-div">
          <span>单据编号：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">业务日期：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">所属部门：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">送货人：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
        </div>
        <div class="search-div">
          <span>供 应 商 ：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">入库性质：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">入库仓库：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">经手人：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="物料编码" align="center"></el-table-column>
          <el-table-column prop="name" label="物料名称" align="center"></el-table-column>
          <el-table-column prop="property" label="规格类型" align="center"></el-table-column>
          <el-table-column prop="type" label="包装规格" align="center"></el-table-column>
          <el-table-column prop="manager" label="单位" align="center"></el-table-column>
          <el-table-column prop="capacity" label="数量" align="center"></el-table-column>
          <el-table-column prop="leftcapacity" label="单价" align="center"></el-table-column>
          <el-table-column prop="mark" label="金额" align="center"></el-table-column>
          <el-table-column prop="mark" label="维保日期" align="center"></el-table-column>
          <el-table-column prop="mark" label="备注" align="center"></el-table-column>
        </el-table>
        <div>
          <div>
            <span class="gray">扫描条形码：</span>
            <el-input class='tableSearchInput' size="small"></el-input>
            <el-button type="text" class="fr mt10">更多筛选</el-button>
          </div>
          <div>
            <span class="gray">合 计 金 额：</span>
            <el-input class='tableSearchInput' size="small"></el-input>
            <span class="ml20 gray">合计数量：</span>
            <el-input class='tableSearchInput' size="small"></el-input>
            <div class="fr mt10">
              <el-button type="primary" size="small">保存</el-button>
              <el-button type="primary" size="small">审核</el-button>
              <el-button type="primary" size="small">打印</el-button>
              <el-button type="primary" size="small">导出</el-button>
              <el-button type="primary" size="small">二维码</el-button>
            </div>
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
        tableData3: [{
          order: '1',
          code: '',
          name: '',
          property: '',
          type: '',
          manager: '',
          capacity: '',
          leftcapacity: '',
          mark:''
        }, {
          order: '2',
          code: '',
          name: '',
          property: '',
          type: '',
          manager: '',
          capacity: '',
          leftcapacity: '',
          mark:''
        }, {
          order: '3',
          code: '',
          name: '',
          property: '',
          type: '',
          manager: '',
          capacity: '',
          leftcapacity: '',
          mark:''
        }, {
          order: '4',
          code: '',
          name: '',
          property: '',
          type: '',
          manager: '',
          capacity: '',
          leftcapacity: '',
          mark:''
        }, {
          order: '5',
          code: '',
          name: '',
          property: '',
          type: '',
          manager: '',
          capacity: '',
          leftcapacity: '',
          mark:''
        }, {
          order: '6',
          code: '',
          name: '',
          property: '',
          type: '',
          manager: '',
          capacity: '',
          leftcapacity: '',
          mark:''
        }, {
          order: '7',
          code: '',
          name: '',
          property: '',
          type: '',
          manager: '',
          capacity: '',
          leftcapacity: '',
          mark:''
        }],
        multipleSelection: []
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
    width: 250px;
    margin: 15px 0 ;
  }
</style>
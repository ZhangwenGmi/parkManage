<template lang="html">
      <div class="container-right">
        <div class="search-div">
          <span>盘点单编号：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">盘点仓库：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">经手人：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20">盘点操作：</span>
          <el-select value="全部" placeholder="请选择" size="small"><el-option value='全部'></el-option></el-select>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="物料编码" align="center"></el-table-column>
          <el-table-column prop="name" label="物料名称" align="center"></el-table-column>
          <el-table-column prop="property" label="单位" align="center"></el-table-column>
          <el-table-column prop="type" label="库存数量" align="center"></el-table-column>
          <el-table-column prop="manager" label="盘点数量" align="center"></el-table-column>
          <el-table-column prop="capacity" label="盈亏数量" align="center"></el-table-column>
          <el-table-column prop="leftcapacity" label="成本单价" align="center"></el-table-column>
          <el-table-column prop="mark" label="盈亏金额" align="center"></el-table-column>
        </el-table>
        <div>
          <div>
            <span class="gray">扫描条形码：</span>
            <el-input class='tableSearchInput' size="small"></el-input>
            <div class="fr mt10">
              <el-button type="primary" size="small">查看库存</el-button>
              <el-button type="primary" size="small">打印条码</el-button>
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
          code: 'WL00021',
          name: '笔记本',
          property: '本',
          type: '30',
          manager: '30',
          capacity: '0',
          leftcapacity: '2',
          mark:'0'
        }, {
          order: '2',
          code: 'WL00021',
          name: '笔记本',
          property: '本',
          type: '30',
          manager: '30',
          capacity: '0',
          leftcapacity: '2',
          mark:'0'
        }, {
          order: '3',
          code: 'WL00021',
          name: '笔记本',
          property: '本',
          type: '30',
          manager: '30',
          capacity: '0',
          leftcapacity: '2',
          mark:'0'
        }, {
          order: '4',
          code: 'WL00021',
          name: '笔记本',
          property: '本',
          type: '30',
          manager: '30',
          capacity: '0',
          leftcapacity: '2',
          mark:'0'
        }, {
          order: '5',
          code: 'WL00021',
          name: '笔记本',
          property: '本',
          type: '30',
          manager: '30',
          capacity: '0',
          leftcapacity: '2',
          mark:'0'
        }, {
          order: '6',
          code: 'WL00021',
          name: '笔记本',
          property: '本',
          type: '30',
          manager: '30',
          capacity: '0',
          leftcapacity: '2',
          mark:'0'
        }, {
          order: '7',
          code: 'WL00021',
          name: '笔记本',
          property: '本',
          type: '30',
          manager: '30',
          capacity: '0',
          leftcapacity: '2',
          mark:'0'
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
    width: 150px;
    margin: 15px 0 ;
  }
</style>
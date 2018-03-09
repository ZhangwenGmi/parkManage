<template lang="html">
  <div class="container-right">
    <div class="search-div">
      <span>物料类别：</span>
      <el-select value="全部" placeholder="请选择" size="small"><el-option value='全部'></el-option></el-select>
      <span class="ml20">物料编码：</span>
      <el-input class='tableSearchInput' size="small"></el-input>
      <span class="ml20">物料名称：</span>
      <el-input class='tableSearchInput' size="small"></el-input>
      <span class="ml20">供应商：</span>
      <el-select value="全部" placeholder="请选择" size="small"><el-option value='全部'></el-option></el-select>
      <span class="ml20">所属部门：</span>
      <el-select value="全部" placeholder="请选择" size="small"><el-option value='全部'></el-option></el-select>
      <span class="ml20">所在仓库：</span>
      <el-select value="全部" placeholder="请选择" size="small"><el-option value='全部'></el-option></el-select>
    </div>
    <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="order" label="序号" align="center"></el-table-column>
      <el-table-column prop="code" label="物料编码" align="center"></el-table-column>
      <el-table-column prop="name" label="物料名称" align="center"></el-table-column>
      <el-table-column prop="property" label="物料类型" align="center"></el-table-column>
      <el-table-column prop="type" label="供应商" align="center"></el-table-column>
      <el-table-column prop="manager" label="所属部门" align="center"></el-table-column>
      <el-table-column prop="capacity" label="所在仓库" align="center"></el-table-column>
      <el-table-column prop="leftcapacity" label="数量" align="center"></el-table-column>
      <el-table-column prop="mark" label="金额" align="center"></el-table-column>
    </el-table>
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
          name: '办公用品',
          property: '笔记本',
          type: '得力',
          manager: '物业服务部',
          capacity: '物业C4',
          leftcapacity: '30',
          mark:'50000'
        }, {
          order: '2',
          code: 'WL00021',
          name: '办公用品',
          property: '笔记本',
          type: '得力',
          manager: '物业服务部',
          capacity: '物业C4',
          leftcapacity: '30',
          mark:'50000'
        }, {
          order: '3',
          code: 'WL00021',
          name: '办公用品',
          property: '笔记本',
          type: '得力',
          manager: '物业服务部',
          capacity: '物业C4',
          leftcapacity: '30',
          mark:'50000'
        }, {
          order: '4',
          code: 'WL00021',
          name: '办公用品',
          property: '笔记本',
          type: '得力',
          manager: '物业服务部',
          capacity: '物业C4',
          leftcapacity: '30',
          mark:'50000'
        }, {
          order: '5',
          code: 'WL00021',
          name: '办公用品',
          property: '笔记本',
          type: '得力',
          manager: '物业服务部',
          capacity: '物业C4',
          leftcapacity: '30',
          mark:'50000'
        }, {
          order: '6',
          code: 'WL00021',
          name: '办公用品',
          property: '笔记本',
          type: '得力',
          manager: '物业服务部',
          capacity: '物业C4',
          leftcapacity: '30',
          mark:'50000'
        }, {
          order: '7',
          code: 'WL00021',
          name: '办公用品',
          property: '笔记本',
          type: '得力',
          manager: '物业服务部',
          capacity: '物业C4',
          leftcapacity: '30',
          mark:'50000'
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
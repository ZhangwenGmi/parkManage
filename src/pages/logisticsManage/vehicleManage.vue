<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">预约管理</li>
        </ul>
      </div>
      <div class="container-right">
        <div class="search-div">
          <span>相关联：</span>
          <el-select size="small" value="全部" placeholder="请选择"><el-option value='全部'></el-option></el-select>
          <span class="ml20">性别：</span>
          <el-select size="small" value="全部" placeholder="请选择"><el-option value='全部'></el-option></el-select>
          <span class="ml20">关键词：</span>
			<el-input size="small" class='tableSearchInput' placeholder=""  style="width: 150px!important;" icon="search"></el-input>
          
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="主题" align="center"></el-table-column>
          <el-table-column prop="name" label="预订人" align="center"></el-table-column>
          <el-table-column prop="property" label="状态" align="center"></el-table-column>
          <el-table-column prop="type" label="时间" align="center"></el-table-column>
          <el-table-column prop="manager" label="会议室" align="center"></el-table-column>
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
        tableData3: [{
          order: '1',
          code: '园区清洁工作会议',
          name: '刘晓丽',
          property: '已审批',
          type: '2017-09-22 14:30-16:00',
          manager: '会议室'
        }, {
          order: '2',
          code: '园区清洁工作会议',
          name: '刘晓丽',
          property: '已审批',
          type: '2017-09-22 14:30-16:00',
          manager: '会议室'
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
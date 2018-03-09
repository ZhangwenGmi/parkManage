<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">管理列表</li>
        </ul>
      </div>
      <div class="container-right">
        <div>
          <span class="gray">当前状态：</span>
          <el-select value="全部" size="small" placeholder="请选择"><el-option value='全部'></el-option></el-select>
          <span class="ml20 gray">关联状态：</span>
          <el-select value="全部" size="small" placeholder="请选择"><el-option value='全部'></el-option></el-select>
          <span class="ml20 gray">类型：</span>
          <el-select value="全部" size="small" placeholder="请选择"><el-option value='全部'></el-option></el-select>
          <span class="ml20 gray">关键词：</span><el-input size="small" class='tableSearchInput' style="width: 150px!important;" placeholder="" icon="search"></el-input>
          <div class="fr mt10">
            <el-button type="text">下载模板</el-button>
            <el-button class="el-button--upload" size="small" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
            <button class="export" size="small"><i class="icon_export"></i>导出</button>
          </div>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="name" label="巡检组名称" align="center"></el-table-column>
          <el-table-column prop="time" label="添加日期" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button size="small" class="el-button--edit" type="primary" icon="edit">编辑</el-button>
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
          name: '电梯巡检-机房',
          time: '2017-09-21 19:00'
        }, {
          order: '2',
          name: '电梯巡检-机房',
          time: '2017-09-21 19:00'
        }, {
          order: '3',
          name: '电梯巡检-机房',
          time: '2017-09-21 19:00'
        }, {
          order: '4',
          name: '电梯巡检-机房',
          time: '2017-09-21 19:00'
        }, {
          order: '5',
          name: '电梯巡检-机房',
          time: '2017-09-21 19:00'
        }, {
          order: '6',
          name: '电梯巡检-机房',
          time: '2017-09-21 19:00'
        }, {
          order: '7',
          name: '电梯巡检-机房',
          time: '2017-09-21 19:00'
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
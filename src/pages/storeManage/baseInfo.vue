<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">仓库信息</li>
          <li>物料信息</li>
          <li>员工信息</li>
        </ul>
      </div>
      <div class="container-right">
        <div>
          <span class="gray">仓库编码：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20 gray">仓库名称：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20 gray">仓库性质：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <span class="ml20 gray">管理员：</span>
          <el-input class='tableSearchInput' size="small"></el-input>
          <el-button type="text" class="ml20">更多筛选</el-button>
          <div class="fr mt15">
            <button class="export" size="small"><i class="icon_export"></i>导出</button>
          </div>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="仓库编码" align="center"></el-table-column>
          <el-table-column prop="name" label="仓库名称" align="center"></el-table-column>
          <el-table-column prop="property" label="仓库性质" align="center"></el-table-column>
          <el-table-column prop="type" label="存储物料类别" align="center"></el-table-column>
          <el-table-column prop="manager" label="管理员" align="center"></el-table-column>
          <el-table-column prop="capacity" label="总容量" align="center"></el-table-column>
          <el-table-column prop="leftcapacity" label="空闲容量" align="center"></el-table-column>
          <el-table-column label="状态" width="120">
            <template scope="scope">
              <el-button type="text" size="small"> 启用 </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button size="small" type="primary" icon="plus">添加</el-button>
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
          code: 'CK001',
          name: '后勤A1',
          property: '冷藏仓库',
          type: '生鲜、饮料',
          manager: '李尔',
          capacity: '200m³',
          leftcapacity: '105m³'
        }, {
          order: '2',
          code: 'CK001',
          name: '后勤A1',
          property: '冷藏仓库',
          type: '生鲜、饮料',
          manager: '李尔',
          capacity: '200m³',
          leftcapacity: '105m³'
        }, {
          order: '3',
          code: 'CK001',
          name: '后勤A1',
          property: '冷藏仓库',
          type: '生鲜、饮料',
          manager: '李尔',
          capacity: '200m³',
          leftcapacity: '105m³'
        }, {
          order: '4',
          code: 'CK001',
          name: '后勤A1',
          property: '冷藏仓库',
          type: '生鲜、饮料',
          manager: '李尔',
          capacity: '200m³',
          leftcapacity: '105m³'
        }, {
          order: '5',
          code: 'CK001',
          name: '后勤A1',
          property: '冷藏仓库',
          type: '生鲜、饮料',
          manager: '李尔',
          capacity: '200m³',
          leftcapacity: '105m³'
        }, {
          order: '6',
          code: 'CK001',
          name: '后勤A1',
          property: '冷藏仓库',
          type: '生鲜、饮料',
          manager: '李尔',
          capacity: '200m³',
          leftcapacity: '105m³'
        }, {
          order: '7',
          code: 'CK001',
          name: '后勤A1',
          property: '冷藏仓库',
          type: '生鲜、饮料',
          manager: '李尔',
          capacity: '200m³',
          leftcapacity: '105m³'
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
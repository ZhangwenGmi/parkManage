<template lang="html">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">供应商列表</li>
        </ul>
      </div>
      <div class="container-right">
        <div class="search-div">
          <span class="gray">店型：</span>
          <el-select value="全部" placeholder="请选择" size="small"><el-option value='全部'></el-option></el-select>
          <span class="ml5 gray">业态：</span>
          <el-select value="全部" placeholder="请选择" size="small"><el-option value='全部'></el-option></el-select>
          <span class="ml5 gray">等级：</span>
          <el-select value="全部" placeholder="请选择" size="small"><el-option value='全部'></el-option></el-select>
          <span class="ml5 gray">审核状态：</span>
          <el-select value="全部" placeholder="请选择" size="small"><el-option value='全部'></el-option></el-select>
          <span class="ml5 gray">运营状态：</span>
          <el-select value="全部" placeholder="请选择" size="small"><el-option value='全部'></el-option></el-select>

          <span class="ml5">关键词：</span><el-input class='tableSearchInput tableSearchInput-mini' placeholder="" icon="search" size="small"></el-input>
          <div class="fr mt10">
            <el-button class="dowload" type="text">下载模板</el-button>
            <el-button class="el-button--upload" type="primary" size="small">上传<i class="el-icon-upload el-icon--right"></i></el-button>
            <button class="export" size="small"><i class="icon_export"></i>导出</button>
          </div>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column label="品牌LOGO" align="center">
            <template scope="scope">
            	<router-link to="/supplierManage/supplierInfo/supplierInfoDetail">
              		<img class="logo" src="../../assets/images/common/logo.png">
             	</router-link>
            </template>
          </el-table-column>
          <el-table-column prop="supplier" label="供应商" align="center"></el-table-column>
          <el-table-column prop="type" label="店型" align="center"></el-table-column>
          <el-table-column prop="ctype" label="业态" align="center"></el-table-column>
          <el-table-column prop="level" label="等级" align="center"></el-table-column>
          <el-table-column prop="audit" label="审核状态" width="130" align="center">
            <template scope="scope">
            	<div v-if="scope.row.audit == '已拒绝'">
            		<span class="red">{{scope.row.audit}}</span>
            		<label class="red">{{scope.row.cause}}</label>
            	</div>
            	<span v-else :class="(scope.row.audit === '已通过') ? 'green' : scope.row.audit == '未审核' ? 'red' : 'blue'">{{scope.row.audit}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="运营状态" align="center"></el-table-column>
          <el-table-column prop="score" label="评分" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button type="primary" icon="plus" size="small">添加</el-button>
          <el-button class="el-button--edit" type="primary" icon="edit" size="small">编辑</el-button>
          <el-button type="danger" icon="close" size="small">删除</el-button>
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
          supplier: '得力',
          type: '大租户',
          ctype: '餐饮',
          level: 'A',
          state: '运营中',
          score: '88',
          audit:'已通过',
        }, {
          order: '2',
          supplier: '得力',
          type: '大租户',
          ctype: '餐饮',
          level: 'A',
          state: '运营中',
          score: '88',
          audit:'审核中'
        }, {
          order: '3',
          supplier: '得力',
          type: '大租户',
          ctype: '餐饮',
          level: 'A',
          state: '运营中',
          score: '88',
          audit:'已拒绝',
          cause:'原因：不符合标准'
        }, {
          order: '4',
          supplier: '得力',
          type: '大租户',
          ctype: '餐饮',
          level: 'A',
          state: '运营中',
          score: '88',
          audit:'未审核'
        }, {
          order: '5',
          supplier: '得力',
          type: '大租户',
          ctype: '餐饮',
          level: 'A',
          state: '运营中',
          score: '88',
          audit:'审核中'
        }, {
          order: '6',
          supplier: '得力',
          type: '大租户',
          ctype: '餐饮',
          level: 'A',
          state: '运营中',
          score: '88',
          audit:'审核中'
        }, {
          order: '7',
          supplier: '得力',
          type: '大租户',
          ctype: '餐饮',
          level: 'A',
          state: '运营中',
          score: '88',
          audit:'审核中'
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
  .el-table tr{
  	label{
  		font-weight: normal;
  		font-size: 12px;
  	}
  	a{
  		display: inline-block;
  		width: 30px;
  		height: 30px;
  		cursor: pointer;
  	}
  }
  .logo{
  	width: 30px;
  	height: 30px;
  }
  .red{
  	color: #d9514e;
  }
  .greed{
  	color: #32c6b8;
  }
</style>
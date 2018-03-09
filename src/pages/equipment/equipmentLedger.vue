<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="views-title">
        <ul class="clearfix">
          <li class="active">设备列表</li>
        </ul>
      </div>
      <div class="container-right">
      	<div>
      		<span class="gray">当前状态：</span>
      		<el-select value="全部" size="small" placeholder="请选择"><el-option value='全部'></el-option></el-select>
      		<span class="ml20 gray">关联状态：</span>
      		<el-select value="全部"  size="small"  placeholder="请选择"><el-option value='全部'></el-option></el-select>
      		<span class="ml20 gray">类型：</span>
      		<el-select value="全部"  size="small" placeholder="请选择"><el-option value='全部'></el-option></el-select>
      		<span class="ml20 gray">关键词：</span><el-input  size="small" class='tableSearchInput'  placeholder="" icon="search"></el-input>
      		<div class="fr mt10">
      			<el-button type="text">下载模板</el-button>
      			<el-button class="el-button--upload"  size="small" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      			<button class="export"  size="small"><i class="icon_export"></i>导出</button>
      		</div>
      	</div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="设备编号" align="center"></el-table-column>
          <el-table-column prop="firm" label="设备厂商" align="center"></el-table-column>
          <el-table-column prop="name" label="名称" align="center"></el-table-column>
          <el-table-column prop="outTime" label="出厂时间" align="center"></el-table-column>
          <el-table-column prop="productTime" label="投产时间" align="center"></el-table-column>
          <el-table-column prop="type" label="类型" align="center"></el-table-column>
          <el-table-column label="当前状态" width="120">
            <template scope="scope">
              <span class="c_red"> 不完整 </span>
            </template>
          </el-table-column>
          <el-table-column label="关联状态" width="120">
            <template scope="scope">
              <el-button type="text" size="small"> 完整 </el-button>
            </template>
          </el-table-column>
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
          code: 'XF/JL-001-22',
          firm: '纽威阀门有限公司',
          name: '防火卷帘',
          outTime: '2014年9月',
          productTime: '2014年9月',
          type: '消防',
        }, {
          order: '2',
          code: 'XF/JL-001-22',
          firm: '纽威阀门有限公司',
          name: '防火卷帘',
          outTime: '2014年9月',
          productTime: '2014年9月',
          type: '消防',
        }, {
          order: '3',
          code: 'XF/JL-001-22',
          firm: '纽威阀门有限公司',
          name: '防火卷帘',
          outTime: '2014年9月',
          productTime: '2014年9月',
          type: '消防',
        }, {
          order: '4',
          code: 'XF/JL-001-22',
          firm: '纽威阀门有限公司',
          name: '防火卷帘',
          outTime: '2014年9月',
          productTime: '2014年9月',
          type: '消防',
        }, {
          order: '5',
          code: 'XF/JL-001-22',
          firm: '纽威阀门有限公司',
          name: '防火卷帘',
          outTime: '2014年9月',
          productTime: '2014年9月',
          type: '消防',
        }, {
          order: '6',
          code: 'XF/JL-001-22',
          firm: '纽威阀门有限公司',
          name: '防火卷帘',
          outTime: '2014年9月',
          productTime: '2014年9月',
          type: '消防',
        }, {
          order: '7',
          code: 'XF/JL-001-22',
          firm: '纽威阀门有限公司',
          name: '防火卷帘',
          outTime: '2014年9月',
          productTime: '2014年9月',
          type: '消防',
        }],
        multipleSelection: []
      };
    }
  };
</script>
<style lang="scss" scoped>
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
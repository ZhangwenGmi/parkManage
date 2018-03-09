<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="views-title">
        <ul class="clearfix">
          <li class="active">标准列表</li>
        </ul>
      </div>
      <div class="container-right">
      	<div>
      		<span class="gray">标准类别：</span>
      		<el-select value="全部" size="small" placeholder="请选择"><el-option value='全部'></el-option></el-select>
      		<span class="ml20 gray">状态：</span>
      		<el-select value="全部" size="small" placeholder="请选择"><el-option value='全部'></el-option></el-select>
      		<span class="ml20 gray">关键词：</span><el-input size="small" class='tableSearchInput'  placeholder="" icon="search"></el-input>
      		<div class="fr mt10">
      			<el-button type="text">下载模板</el-button>
      			<el-button class="el-button--upload" type="primary" size="small">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      			<button class="export" size="small"><i class="icon_export" ></i>导出</button>
      		</div>
      	</div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="标准编号" align="center"></el-table-column>
          <el-table-column prop="name" label="标准名称" align="center"></el-table-column>
          <el-table-column prop="type" label="标准类别" align="center"></el-table-column>
          <el-table-column prop="time" label="时间限制" align="center"></el-table-column>
          <el-table-column prop="startTime" label="开始执行时间" align="center"></el-table-column>
          <el-table-column prop="rate" label="执行频率" align="center"></el-table-column>
          <el-table-column prop="lastTime" label="最近更新" align="center"></el-table-column>
          <el-table-column prop="resource" label="标准来源" align="center"></el-table-column>
          <el-table-column label="状态" width="120">
            <template scope="scope">
              <el-button type="text" size="small"> 正常 </el-button>
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
          code: 'QP31',
          name: '电梯巡检(路桥)',
          type: '巡检',
          time: '7天',
          startTime: '每周一',
          lastTime: '2017-09-22 10:34',
          rate: '每周1次',
          resource: '管理体系',
        }, {
          order: '2',
          code: 'QP31',
          name: '电梯巡检(路桥)',
          type: '巡检',
          time: '7天',
          startTime: '每周一',
          lastTime: '2017-09-22 10:34',
          rate: '每周1次',
          resource: '管理体系',
        }, {
          order: '3',
          code: 'QP31',
          name: '电梯巡检(路桥)',
          type: '巡检',
          time: '7天',
          startTime: '每周一',
          lastTime: '2017-09-22 10:34',
          rate: '每周1次',
          resource: '管理体系',
        }, {
          order: '4',
          code: 'QP31',
          name: '电梯巡检(路桥)',
          type: '巡检',
          time: '7天',
          startTime: '每周一',
          lastTime: '2017-09-22 10:34',
          rate: '每周1次',
          resource: '管理体系',
        }, {
          order: '5',
          code: 'QP31',
          name: '电梯巡检(路桥)',
          type: '巡检',
          time: '7天',
          startTime: '每周一',
          lastTime: '2017-09-22 10:34',
          rate: '每周1次',
          resource: '管理体系',
        }, {
          order: '6',
          code: 'QP31',
          name: '电梯巡检(路桥)',
          type: '巡检',
          time: '7天',
          startTime: '每周一',
          lastTime: '2017-09-22 10:34',
          rate: '每周1次',
          resource: '管理体系',
        }, {
          order: '7',
          code: 'QP31',
          name: '电梯巡检(路桥)',
          type: '巡检',
          time: '7天',
          startTime: '每周一',
          lastTime: '2017-09-22 10:34',
          rate: '每周1次',
          resource: '管理体系',
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
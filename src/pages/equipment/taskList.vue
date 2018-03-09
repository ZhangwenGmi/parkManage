<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="views-title">
        <ul class="clearfix">
          <li class="active">任务列表</li>
        </ul>
      </div>
      <div class="container-right">
      	<div class="search-div">
      		<span>任务状态：</span>
      		<el-select size="small" value="全部" placeholder="请选择"><el-option value='全部'></el-option></el-select>
      		<span class="ml20">审核状态：</span>
      		<el-select size="small" value="全部" placeholder="请选择"><el-option value='全部'></el-option></el-select>
      		<span class="ml20">类型：</span>
      		<el-select size="small" value="全部" placeholder="请选择"><el-option value='全部'></el-option></el-select>
      		<span class="ml20">关键词：</span><el-input size="small" class='tableSearchInput' style="width: 150px!important;"  placeholder="" icon="search"></el-input>
      		<div class="fr mt15">
      			<button size="small" class="export"><i class="icon_export"></i>导出</button>
      		</div>
      	</div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="name" label="任务名称" align="center"></el-table-column>
          <el-table-column prop="obj" label="巡视对象" align="center"></el-table-column>
          <el-table-column prop="startTime" label="开始时间" align="center"></el-table-column>
          <el-table-column prop="endTime" label="截止时间" align="center"></el-table-column>
          <el-table-column prop="adress" label="位置" align="center"></el-table-column>
          <el-table-column prop="type" label="类型" align="center"></el-table-column>
          <el-table-column prop="state" label="任务状态" align="center"></el-table-column>
          <el-table-column label="审核状态" width="120">
            <template scope="scope">
              <span class="c_red"> 不完整 </span>
            </template>
          </el-table-column>
          <el-table-column prop="result" label="任务结果" align="center"></el-table-column>
          <el-table-column prop="doneTime" label="完成时间" align="center"></el-table-column>
          <el-table-column prop="person" label="执行人" align="center"></el-table-column>
        </el-table>
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
          name: '电话巡检116110',
          obj: '技术部',
          startTime: '2017-09-22 10:34',
          endTime: '2017-09-22 10:34',
          adress: '-',
          type: '巡检',
          state: '已过期',
          result: '-',
          doneTime: '2017-09-22 10:34',
          person: '马小亮',
        }, {
          order: '1',
          name: '电话巡检116110',
          obj: '技术部',
          startTime: '2017-09-22 10:34',
          endTime: '2017-09-22 10:34',
          adress: '-',
          type: '巡检',
          state: '已过期',
          result: '-',
          doneTime: '2017-09-22 10:34',
          person: '马小亮',
        }, {
          order: '1',
          name: '电话巡检116110',
          obj: '技术部',
          startTime: '2017-09-22 10:34',
          endTime: '2017-09-22 10:34',
          adress: '-',
          type: '巡检',
          state: '已过期',
          result: '-',
          doneTime: '2017-09-22 10:34',
          person: '马小亮',
        }, {
          order: '1',
          name: '电话巡检116110',
          obj: '技术部',
          startTime: '2017-09-22 10:34',
          endTime: '2017-09-22 10:34',
          adress: '-',
          type: '巡检',
          state: '已过期',
          result: '-',
          doneTime: '2017-09-22 10:34',
          person: '马小亮',
        }, {
          order: '1',
          name: '电话巡检116110',
          obj: '技术部',
          startTime: '2017-09-22 10:34',
          endTime: '2017-09-22 10:34',
          adress: '-',
          type: '巡检',
          state: '已过期',
          result: '-',
          doneTime: '2017-09-22 10:34',
          person: '马小亮',
        }, {
          order: '1',
          name: '电话巡检116110',
          obj: '技术部',
          startTime: '2017-09-22 10:34',
          endTime: '2017-09-22 10:34',
          adress: '-',
          type: '巡检',
          state: '已过期',
          result: '-',
          doneTime: '2017-09-22 10:34',
          person: '马小亮',
        }, {
          order: '1',
          name: '电话巡检116110',
          obj: '技术部',
          startTime: '2017-09-22 10:34',
          endTime: '2017-09-22 10:34',
          adress: '-',
          type: '巡检',
          state: '已过期',
          result: '-',
          doneTime: '2017-09-22 10:34',
          person: '马小亮',
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
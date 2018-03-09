<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">登录日志</li>
          <li>操作日志</li>
          <li>错误日志</li>
        </ul>
      </div>
      <div class="container-right">
        <div>
          <span class="gray">关键字：</span>
          <el-input size="small" class='tableSearchInput' icon="search"></el-input>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="操作时间" align="center"></el-table-column>
          <el-table-column prop="name" label="IP地址" align="center"></el-table-column>
          <el-table-column prop="property" label="用户名" align="center"></el-table-column>
          <el-table-column prop="type" label="日志类型" align="center"></el-table-column>
          <el-table-column prop="manager" label="日志内容" align="center"></el-table-column>
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
          code: '2017-09-21 16:10',
          name: '192.168.0.1',
          property: 'admin',
          type: '退出',
          manager: '退出登录'
        }, {
          order: '2',
          code: '2017-09-21 16:10',
          name: '192.168.0.1',
          property: 'admin',
          type: '退出',
          manager: '退出登录'
        }, {
          order: '3',
          code: '2017-09-21 16:10',
          name: '192.168.0.1',
          property: 'admin',
          type: '退出',
          manager: '退出登录'
        }, {
          order: '4',
          code: '2017-09-21 16:10',
          name: '192.168.0.1',
          property: 'admin',
          type: '退出',
          manager: '退出登录'
        }, {
          order: '5',
          code: '2017-09-21 16:10',
          name: '192.168.0.1',
          property: 'admin',
          type: '退出',
          manager: '退出登录'
        }, {
          order: '6',
          code: '2017-09-21 16:10',
          name: '192.168.0.1',
          property: 'admin',
          type: '退出',
          manager: '退出登录'
        }, {
          order: '7',
          code: '2017-09-21 16:10',
          name: '192.168.0.1',
          property: 'admin',
          type: '退出',
          manager: '退出登录'
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
	    margin: 15px 0 ;
	  }
  }
  .container-right{
    padding:0 20px
  }
  
</style>
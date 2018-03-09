<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">Login Log</li>
          <li>Operation Log</li>
          <li>Error Log</li>
        </ul>
      </div>
      <div class="container-right">
        <div>
          <span class="gray">key：</span>
          <el-input size="small" class='tableSearchInput' icon="search"></el-input>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="code" label="Operation Time" align="center"></el-table-column>
          <el-table-column prop="name" label="IP Address" align="center"></el-table-column>
          <el-table-column prop="property" label="User Name" align="center"></el-table-column>
          <el-table-column prop="type" label="Log Type" align="center"></el-table-column>
          <el-table-column prop="manager" label="Log Content" align="center"></el-table-column>
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
          type: 'Exit',
          manager: 'Log out'
        }, {
          order: '2',
          code: '2017-09-21 16:10',
          name: '192.168.0.1',
          property: 'admin',
          type: 'Exit',
          manager: 'Log out'
        }, {
          order: '3',
          code: '2017-09-21 16:10',
          name: '192.168.0.1',
          property: 'admin',
          type: 'Exit',
          manager: 'Log out'
        }, {
          order: '4',
          code: '2017-09-21 16:10',
          name: '192.168.0.1',
          property: 'admin',
          type: 'Exit',
          manager: 'Log out'
        }, {
          order: '5',
          code: '2017-09-21 16:10',
          name: '192.168.0.1',
          property: 'admin',
          type: 'Exit',
          manager: 'Log out'
        }, {
          order: '6',
          code: '2017-09-21 16:10',
          name: '192.168.0.1',
          property: 'admin',
          type: 'Exit',
          manager: 'Log out'
        }, {
          order: '7',
          code: '2017-09-21 16:10',
          name: '192.168.0.1',
          property: 'admin',
          type: 'Exit',
          manager: 'Log out'
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
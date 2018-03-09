<template>
  <div class="views-sub-container mt10">
    <div class="eq-table">
      <el-table ref="multipleTable"  :data="tableData3" stripe>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="Name">
                <span>{{ props.row.code }}</span>
              </el-form-item>
              <el-form-item label="Wide">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="High">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="Format">
                <span>{{ props.row.type }}</span>
              </el-form-item>
              <el-form-item label="State">
                <span>{{ props.row.score }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="order" label="Order" align="center"></el-table-column>
        <el-table-column prop="name" label="Task code" align="center"></el-table-column>
        <el-table-column prop="code" label="Program name" align="center"></el-table-column>
        <el-table-column prop="score" label="State" align="center">
          <template slot-scope="props">
            <span class="c_green">{{props.row.score}}</span>
          </template>
        </el-table-column>
        <el-table-column label="Operation" width="120">
          <template slot-scope="scope">
            <el-button  @click="dialogVisible = true" type="text" size="small"> Preview </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
          <el-button type="primary" icon="plus">Creating programs</el-button>
        </div>
      <el-dialog title="Video preview" :visible.sync="dialogVisible" width="48%" >
        <div class="videoDialog">
          <video :src="videoIp+'v1.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">Close</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .views-sub-container{
    display: flex;
    width: 100%;
  }
  .views-content{
    padding: 20px 10px;
    .tableSearchInput{
      width: 150px;
    }
  }
  .eq-table{
    width: 100%;
    .demo-table-expand {
      font-size: 0;
    }
    .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
  }
  .videoDialog{
    width: 500px;
    margin:0 auto
  }
</style>


<style lang="scss">
  .eq-table{
    .demo-table-expand label {
        width: 100px;
        color: #99a9bf;
        font-weight: normal;
    }
    .el-button--blue{
       background-color: #4296d2;
       color: #fff; 
       border-color: #4296d2;
    
       &:hover,&:focus{
        background-color: #4296d2;
        color: #fff; 
        border-color: #4296d2;
       }
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        videoWidth: 500,
        videoHeight: 300,
        videoIp: 'http://192.168.49.10:82/video/',
        tableData3: [{
          order: '1',
          code: 'National Constitution Day',
          name: 'pw001',
          phone: '768',
          type: 'MP4',
          score: 'Audited'
        }, {
          order: '2',
          code: 'China',
          name: 'pw002',
          phone: '768',
          type: 'MP4',
          score: 'Audited'
        }, {
          order: '3',
          code: 'Fire control',
          name: 'pw003',
          phone: '768',
          type: 'MP4',
          score: 'Audited'
        }, {
          order: '4',
          code: 'Serve the people',
          name: 'pw004',
          phone: '768',
          type: 'MP4',
          score: 'Audited'
        }, {
          order: '5',
          code: 'Stye',
          name: 'pw001',
          phone: '768',
          type: 'MP4',
          score: 'Audited'
        }, {
          order: '6',
          code: 'Public Security',
          name: 'pw001',
          phone: '768',
          type: 'MP4',
          score: 'Audited'
        }, {
          order: '7',
          code: 'Public Security',
          name: 'pw001',
          phone: '768',
          type: 'MP4',
          score: 'Audited'
        }],
        multipleSelection: []
      };
    }
  };
</script>
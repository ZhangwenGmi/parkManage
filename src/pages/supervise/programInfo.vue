<template>
  <div class="views-sub-container mt10">
    <div class="eq-table">
      <el-table ref="multipleTable"  :data="tableData3" stripe>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="节目名">
                <span>{{ props.row.code }}</span>
              </el-form-item>
              <el-form-item label="宽">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="高">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="格式">
                <span>{{ props.row.type }}</span>
              </el-form-item>
              <el-form-item label="状态">
                <span>{{ props.row.score }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="order" label="序号" align="center"></el-table-column>
        <el-table-column prop="code" label="节目名" align="center"></el-table-column>
        <el-table-column prop="name" label="宽" align="center"></el-table-column>
        <el-table-column prop="phone" label="高" align="center"></el-table-column>
        <el-table-column prop="type" label="格式" align="center"></el-table-column>
        <el-table-column prop="score" label="状态" align="center">
          <template slot-scope="props">
            <span class="c_green">{{props.row.score}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button  @click="dialogVisible = true" type="text" size="small"> 预览 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
          <el-button type="primary" icon="plus">创建节目</el-button>
        </div>
      <el-dialog title="视频预览" :visible.sync="dialogVisible" width="48%" >
        <div class="videoDialog">
          <video :src="videoIp+'v1.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">关 闭</el-button>
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
          code: '国家宪法日',
          name: '1024',
          phone: '768',
          type: 'MP4',
          score: '已审核'
        }, {
          order: '2',
          code: '中国',
          name: '1024',
          phone: '768',
          type: 'MP4',
          score: '已审核'
        }, {
          order: '3',
          code: '消防',
          name: '1024',
          phone: '768',
          type: 'MP4',
          score: '已审核'
        }, {
          order: '4',
          code: '为人民服务',
          name: '1024',
          phone: '768',
          type: 'MP4',
          score: '已审核'
        }, {
          order: '5',
          code: '作风',
          name: '1024',
          phone: '768',
          type: 'MP4',
          score: '已审核'
        }, {
          order: '6',
          code: '公安',
          name: '1024',
          phone: '768',
          type: 'MP4',
          score: '已审核'
        }, {
          order: '7',
          code: '公安',
          name: '1024',
          phone: '768',
          type: 'MP4',
          score: '已审核'
        }],
        multipleSelection: []
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
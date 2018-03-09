<template lang="html">
<div id="container">
  <div class="views-container">
    <div class="container-left">
      <el-input v-model="input" placeholder="请输入内容" icon="search" size="small"></el-input>
      <el-tree :data="data" node-key="id" :default-expanded-keys="[1,88]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
    </div>
    <div class="container-right">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">标准管理</li>
        </ul>
      </div>
      <el-table class="mt20" ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="order" label="序号" align="center"></el-table-column>
        <el-table-column prop="code" label="标准名称" align="center"></el-table-column>
        <el-table-column prop="number" label="标准编号" align="center"></el-table-column>
        <el-table-column prop="project" label="所属项目" align="center"></el-table-column>
        <el-table-column prop="type" label="所属类型" align="center"></el-table-column>
        <el-table-column prop="execution" label="执行频率" align="center"></el-table-column>
        <el-table-column prop="delay" label="执行延期时间" align="center"></el-table-column>
        <el-table-column prop="status" label="标准状态" align="center"></el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button type="primary" icon="plus" size="small">添加</el-button>
        <el-button type="primary" icon="edit" class="el-button--edit" size="small">编辑</el-button>
        <el-button type="danger" icon="close" size="small">删除</el-button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      data: [{
        id: 1,
        label: '全部',
        children: [{
          id: 2,
          label: '住宅类',
          children: [{
            id: 21,
            label: '深业花园'
          }, {
            id: 22,
            label: '领秀名苑'
          }, {
            id: 24,
            label: '兴新名苑'
          }]
        }, {
          id: 3,
          label: '写字楼类',
          children: [{
            id: 31,
            label: '中心大厦'
          }]
        }, {
          id: 4,
          label: '政府机关类',
          children: [{
            id: 41,
            label: '区委政府中心'
          },{
            id: 42,
            label: '长沙市警备区'
          },{
            id: 43,
            label: '星沙海关管理处'
          }]
        }, {
          id: 5,
          label: '物流园区类',
          children: [{
            id: 51,
            label: '物流大厦'
          }]
        }, {
          id: 6,
          label: '公共场馆类',
          children: [{
            id: 61,
            label: '星星羽毛球馆'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData3: [{
        order: '1',
        code: '安全管理夜查(安管负责人)',
        number: 'WI-QP45-1',
        project: '深业花园',
        type: '日常运作/安全管理夜查与检查',
        execution: '每周一天',
        delay: '7天',
        status: '未审核'
      }, {
        order: '2',
        code: '安全管理夜查(安管负责人)',
        number: 'WI-QP45-2',
        project: '兴新名苑',
        type: '日常运作/安全管理夜查与检查',
        execution: '每周一天',
        delay: '7天',
        status: '未审核'
      }, {
        order: '3',
        code: '安全管理夜查(安管负责人)',
        number: 'WI-QP45-3',
        project: '领秀名苑',
        type: '日常运作/安全管理夜查与检查',
        execution: '每周一天',
        delay: '7天',
        status: '未审核'
      }, {
        order: '4',
        code: '安全管理夜查(安管负责人)',
        number: 'WI-QP45-4',
        project: '中心大厦',
        type: '日常运作/安全管理夜查与检查',
        execution: '每天三次',
        delay: '7天',
        status: '未审核'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.views-container {
  display: flex;
  padding: 0 20px 20px 20px;
  width: 100%;
}

.container-left {
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  width: 320px;
  .el-tree {
    border: none;
    margin: 20px
  }
}

.container-right {
  width: 100%;
  margin-left: 30px
}

.tableSearchInput {
  width: 250px;
  margin: 15px 0;
}
</style>
<template lang="html">
<div id="container">
  <div class="views-container">
    <div class="container-left">
      <el-input v-model="input" placeholder="Please enter content" icon="search" size="small"></el-input>
      <el-tree :data="data" node-key="id" :default-expanded-keys="[1,88]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
    </div>
    <div class="container-right">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">Standards Management</li>
        </ul>
      </div>
      <el-table class="mt20" ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="order" label="Order" align="center"></el-table-column>
        <el-table-column prop="code" label="Name" align="center"></el-table-column>
        <el-table-column prop="number" label="Standard Code" align="center"></el-table-column>
        <el-table-column prop="project" label="by Project" align="center"></el-table-column>
        <el-table-column prop="type" label="Type" align="center"></el-table-column>
        <el-table-column prop="execution" label="Execution Frequency" align="center"></el-table-column>
        <el-table-column prop="delay" label="Delay Time" align="center"></el-table-column>
        <el-table-column prop="status" label="State" align="center"></el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button type="primary" icon="plus" size="small">Add</el-button>
        <el-button type="primary" icon="edit" class="el-button--edit" size="small">Edit</el-button>
        <el-button type="danger" icon="close" size="small">Delete</el-button>
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
          label: 'All',
          children: [{
            id: 2,
            label: 'Residential buildings',
            children: [{
              id: 21,
              label: 'Shenye Garden'
            }, {
              id: 22,
              label: 'Ling Xiu Ming Yuan'
            }, {
              id: 24,
              label: 'New Star Garden'
            }]
          }, {
            id: 3,
            label: 'Office buildings',
            children: [{
              id: 31,
              label: 'Center Building'
            }]
          }, {
            id: 4,
            label: 'Government agencies',
            children: [{
              id: 41,
              label: 'District Government Center'
            },{
              id: 42,
              label: 'Changsha Garrison District'
            },{
              id: 43,
              label: 'Shining-star Customs office'
            }]
          }, {
            id: 5,
            label: 'Logistics campuses',
            children: [{
              id: 51,
              label: 'Logistics Building'
            }]
          }, {
            id: 6,
            label: 'Public stadiums',
            children: [{
              id: 61,
              label: 'Star Badminton hall'
            }]
          }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData3: [{
        order: '1',
        code: 'Security management night check (director)',
        number: 'WI-QP45-1',
        project: 'Shenye Garden',
        type: 'Routine operations/Security check',
        execution: '1 day a week',
        delay: '7 days',
        status: 'Unreviewed'
      }, {
        order: '2',
        code: 'Security management night check (director)',
        number: 'WI-QP45-2',
        project: 'New Star Garden',
        type: 'Routine operations/Security check',
        execution: '1 day a week',
        delay: '7 days',
        status: 'Unreviewed'
      }, {
        order: '3',
        code: 'Security management night check (director)',
        number: 'WI-QP45-3',
        project: 'Ling Xiu Ming Yuan',
        type: 'Routine operations/Security check',
        execution: '1 day a week',
        delay: '7 days',
        status: 'Unreviewed'
      }, {
        order: '4',
        code: 'Security management night check (director)',
        number: 'WI-QP45-4',
        project: 'Center Building',
        type: 'Routine operations/Security check',
        execution: '3 times a day',
        delay: '7 days',
        status: 'Unreviewed'
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
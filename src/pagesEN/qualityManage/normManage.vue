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
            <li class="active">Specifications Management</li>
          </ul>
        </div>
        <el-table class="mt20" ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="code" label="Specification Name" align="center"></el-table-column>
          <el-table-column prop="name" label="Specification Score" align="center"></el-table-column>
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
        input:'',
        data: [{
            id: 1,
            label: 'All',
            children: [{
                id: 5,
                label: 'Quality plan'
              },{
                id: 6,
                label: 'Quality work'
              },{
                id: 7,
                label: 'Daily operation'
              },{
                id: 88,
                label: 'Service examine',
                children:[
                  {
                    id: 7,
                    label: 'Operation and maintenance'
                  },{
                    id: 7,
                    label: 'Fire and emergency'
                  },{
                    id: 7,
                    label: 'Security'
                  },{
                    id: 7,
                    label: 'Parking'
                  },{
                    id: 7,
                    label: 'Environmental hygiene'
                  },{
                    id: 7,
                    label: 'Landscaping'
                  },{
                    id: 7,
                    label: 'Public facilities and construction'
                  },{
                    id: 7,
                    label: 'Community culture'
                  }
                ]
              },{
                id: 8,
                label: 'Research customer'
              },{
                id: 8,
                label: 'Audit and Internal review'
              },{
                id: 8,
                label: 'Production safety'
              }
            ]
          }, {
            id: 2,
            label: 'Residential'
          }, {
            id: 3,
            label: 'Office building'
          }, {
            id: 4,
            label: 'Government departments'
          }, {
            id: 4,
            label: 'Logistics park class'
          }, {
            id: 4,
            label: 'Public venues'
          }
          ],
          defaultProps: {
            children: 'children',
            label: 'label'
          },
          tableData3: [{
            order: '1',
            code: 'Quality plan',
            name: '15%'
          }, {
            order: '2',
            code: 'Quality work',
            name: '15%'
          }, {
            order: '3',
            code: 'Daily operation',
            name: '15%'
          }, {
            order: '4',
            code: 'Service examine',
            name: '15%'
          }, {
            order: '5',
            code: 'Research customer',
            name: '15%'
          }, {
            order: '6',
            code: 'Audit and Internal review',
            name: '15%'
          }, {
            order: '7',
            code: 'Production safety',
            name: '15%'
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData3: [{
          order: '1',
          code: 'Fire management',
          name: '15%'
        }, {
          order: '2',
          code: 'Emergency management',
          name: '15%'
        }],
        multipleSelection: []
      };
    }
  };
</script>
<style lang="scss" scoped>
  .views-container{
    display:flex;
    padding:0 20px 20px 20px; 
    width: 100%;
  }
  .container-left{
    padding:10px;
    margin-top: 10px;
    border:1px solid #e2e2e2;
    border-radius: 3px;
    width: 320px;
    .el-tree{
      border:none;
      margin: 20px
    }
  }
  .container-right{
    width: 100%;
    margin-left: 30px
  }
  .tableSearchInput{
    width: 250px;
    margin: 15px 0 ;
  }
</style>
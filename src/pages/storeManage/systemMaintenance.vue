<template lang="html">
  <div id="container">
  	<div class="views-container">
  		<div class="container-left">
        <el-tree :data="data" node-key="id" :default-expanded-keys="[2,3]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
      </div>
      <div class="container-right">
        <div class="views-title">
          <ul class="clearfix">
            <li class="active">仓库性质</li>
          </ul>
        </div>
        <div>
        	<span class="gray">分类：</span><el-select size="small"  class='tableSearchInput' value="全部" placeholder="请选择"><el-option value='全部'></el-option></el-select>
        	<div class="fr mt15">
        		  <el-button class="el-button--upload" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        		  <button size="small" class="export"><i class="icon_export"></i>导出</button>
        	</div>
        </div>

        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="仓库性质" align="center"></el-table-column>
          <el-table-column prop="name" label="性质描述" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button size="small" type="primary" icon="plus">添加</el-button>
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
        data: [{
          id: 1,
          label: '数字字典维护',
          children: [{
              id: 2,
              label: '仓库基本信息',
              children:[
                {
                  id: 4,
                  label: '仓库性质'
                },{
                  id: 5,
                  label: '入库性质'
                },{
                  id: 6,
                  label: '出库性质'
                },{
                  id: 7,
                  label: '调拨原因'
                },{
                  id: 8,
                  label: '卸货方式'
                },{
                  id: 9,
                  label: '物料类别'
                }
              ]
            },{
              id: 3,
              label: '人员基本信息',
              children:[
                {
                  id: 10,
                  label: '部门'
                },{
                  id: 11,
                  label: '职级'
                },{
                  id: 12,
                  label: '组别'
                }
              ]
            },{
              id: 13,
              label: '角色管理'
            }
          ]
        }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData3: [{
          order: '1',
          code: '原料仓库',
          name: '用来储存生产所用的原材料的，这类仓库一般比较大',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
        }, {
          order: '2',
          code: '产品仓库',
          name: '存放已经完成的产品，但这些产品还没有进入流通区域',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
        }, {
          order: '3',
          code: '冷藏仓库',
          name: '用来储藏那些需要进行冷藏储存',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
        }, {
          order: '4',
          code: '恒温仓库',
          name: '用来储存对于储藏温度有要求的产品',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
        }, {
          order: '5',
          code: '危险品仓库',
          name: '用于储存危险品的',
          phone: '18285697412',
          type: '普通客服',
          score: '100'
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
    width: 150px;
    margin: 15px 0 ;
  }
</style>
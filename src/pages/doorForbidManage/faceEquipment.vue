<template lang="html">
  <div class="container-right">
  	<div class="eqs">
  		<ul class="clearfix">
  			<li class="active">
  				<dl>
  					<dt>人脸设备</dt>
  					<dd>
  						<div>
  							<span>130</span>
  							<span>正常</span>
  						</div>
  						<div>
  							<span>4</span>
  							<span>故障</span>
  						</div>
  					</dd>
  				</dl>
  			</li>
  			<li>
  				<dl>
  					<dt>蓝牙设备</dt>
  					<dd>
  						<div>
  							<span>220</span>
  							<span>正常</span>
  						</div>
  						<div>
  							<span>12</span>
  							<span>故障</span>
  						</div>
  					</dd>
  				</dl>
  			</li>
  			<li>
  				<dl>
  					<dt>二维码</dt>
  					<dd>
  						<div>
  							<span>827</span>
  							<span>固定</span>
  						</div>
  						<div>
  							<span>341</span>
  							<span>临时</span>
  						</div>
  					</dd>
  				</dl>
  			</li>
  		</ul>
  	</div>
  	
    <div>
      <span class="gray">关键字：</span>
      <el-input size="small" class='tableSearchInput' icon="search"></el-input>
    </div>
    <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="order" label="序号" align="center"></el-table-column>
      <el-table-column prop="code" label="设备名称" align="center"></el-table-column>
      <el-table-column prop="name" label="设备编号" align="center"></el-table-column>
      <el-table-column prop="property" label="安装位置" align="center"></el-table-column>
      <el-table-column label="设备状态" width="120">
        <template scope="scope">
          <el-button type="text" size="small"> 正常 </el-button>
        </template>
      </el-table-column> 
      <el-table-column prop="manager" label="运维人员" align="center"></el-table-column>
      <el-table-column prop="capacity" label="安装时间" align="center"></el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <div style="text-align:center">
          <el-pagination
            :page-sizes="[10]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="9">
          </el-pagination>
      </div>
      <el-button size="small" type="primary" icon="plus">添加</el-button>
      <el-button size="small" class="el-button--edit" type="primary" icon="edit">编辑</el-button>
      <el-button size="small" type="danger" icon="close">删除</el-button>
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
          code: '人脸摄像机01',
          name: 'JB793572420',
          property: '1栋1楼',
          type: '30',
          manager: '李林',
          capacity: '2017-09-21'
        }, {
          order: '2',
          code: '人脸摄像机01',
          name: 'JB793572420',
          property: '1栋1楼',
          type: '30',
          manager: '李林',
          capacity: '2017-09-21'
        }, {
          order: '3',
          code: '人脸摄像机01',
          name: 'JB793572420',
          property: '1栋1楼',
          type: '30',
          manager: '李林',
          capacity: '2017-09-21'
        }, {
          order: '4',
          code: '人脸摄像机01',
          name: 'JB793572420',
          property: '1栋1楼',
          type: '30',
          manager: '李林',
          capacity: '2017-09-21'
        }, {
          order: '5',
          code: '人脸摄像机01',
          name: 'JB793572420',
          property: '1栋1楼',
          type: '30',
          manager: '李林',
          capacity: '2017-09-21'
        }, {
          order: '6',
          code: '人脸摄像机01',
          name: 'JB793572420',
          property: '1栋1楼',
          type: '30',
          manager: '李林',
          capacity: '2017-09-21'
        }, {
          order: '7',
          code: '人脸摄像机01',
          name: 'JB793572420',
          property: '1栋1楼',
          type: '30',
          manager: '李林',
          capacity: '2017-09-21'
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
    padding:0 20px;
    .tableSearchInput{
	    width: 150px;
	    margin: 15px 0 ;
	  }
  }
  
  .eqs{
  	padding-top: 25px;
  	ul{
  		display: flex;
  		flex-flow: row wrap;
  		justify-content: space-between;
  		li{
  			width: 20%;
  			background-color: #fbfbfb;
  			color:#808080;
  			padding: 12px;

  			
  			dt,dd{
  				font-weight: normal;
  			}
  			dl{
  				margin-bottom: 0;
  			}
  			
  			dt{
  				text-align: left;
  			}
  			dd{
  				display: flex;
  				margin-top: 25px;
  				
  				div{
  					flex: 1;
  					text-align: center;
  					
  					span{
  						display: block;
  						line-height: 24px;
  						
  						&:first-child{
  							font-size: 20px;
								margin-bottom: 5px;
  						}
  					}
  				}
  			}
  			&.active{
  				background-color: #4296d2;
  				color: #fff;
  			}
  		}
  	}
  }
</style>
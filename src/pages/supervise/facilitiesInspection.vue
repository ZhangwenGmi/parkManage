<template>
  <div class="views-content">
  	<div class="search-div">
  		<span>分组：</span>
  		<el-select value="全部" placeholder="请选择" size="small">
		    <el-option value="全部"> </el-option>
		  </el-select>
		  <span class="ml10">状态：</span>
  		<el-select value="全部" placeholder="请选择" size="small">
		    <el-option value="全部"> </el-option>
		  </el-select>
		  <span class="ml10">关键词：</span>
      <el-input class='tableSearchInput'  placeholder="" icon="search" size="small"></el-input>
      <div class="fr">
  			   <button class="refresh" size="small"><i class="icon_refresh"></i>刷新</button>
  			   <button class="export" size="small"><i class="icon_export"></i>导出</button>
  		</div>
  	</div>
  	
  	<div class="table-div eq-table mt15">
  		<el-table :data="tableData4" style="width: 100%" stripe>
				<el-table-column type="expand">
					<template slot-scope="props">
						<el-form label-position="left" inline class="demo-table-expand">
							<el-form-item label="资产编号">
								<span>{{ props.row.num }}</span>
							</el-form-item>
							<el-form-item label="资产类别">
								<span>{{ props.row.type }}</span>
							</el-form-item>
							<el-form-item label="状态">
								<span>{{ props.row.status }}</span>
							</el-form-item>
						</el-form>
					</template>
				</el-table-column>
				<el-table-column label="序号" align="center" prop="order"></el-table-column>
				<el-table-column label="资产编号" align="center" prop="num"></el-table-column>
				<el-table-column label="资产类别" align="center" prop="type"></el-table-column>
				<el-table-column align="center" label="状态">
					<template scope="scope">
						<span class="green">{{scope.row.status}}</span>
					</template>
				</el-table-column>
				<el-table-column label="上次点检时间" align="center" prop="time"></el-table-column>
				<el-table-column label="上次点检负责人" align="center" prop="resMan"></el-table-column>
				<el-table-column label="操作" align="center">
					<template slot-scope="scope">
						<el-button size="mini" class="el-button--blue">点检</el-button>
					</template>
				</el-table-column>
			</el-table>
  	</div>
  	
  	<div class="pages mt20">
  		<el-pagination
	      :page-sizes="[10]"
	      :page-size="100"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="8">
	    </el-pagination>
  	</div>
  </div>
</template>


<script>
	export default{
		data(){
			return{
				tableData4:[{
					order:'1',
					num:'LD001',
					type:'路灯',
					status:'在线',
					time:'2017-09-21',
					resMan:'张鹏'
				},{
					order:'2',
					num:'LD002',
					type:'路灯',
					status:'在线',
					time:'2017-09-21',
					resMan:'张鹏'
				},{
					order:'3',
					num:'LD003',
					type:'路灯',
					status:'在线',
					time:'2017-09-21',
					resMan:'张鹏'
				},{
					order:'3',
					num:'LD003',
					type:'路灯',
					status:'在线',
					time:'2017-09-21',
					resMan:'张鹏'
				},{
					order:'4',
					num:'LD004',
					type:'路灯',
					status:'在线',
					time:'2017-09-21',
					resMan:'张鹏'
				},{
					order:'5',
					num:'LD005',
					type:'路灯',
					status:'在线',
					time:'2017-09-21',
					resMan:'张鹏'
				},{
					order:'6',
					num:'LD006',
					type:'路灯',
					status:'在线',
					time:'2017-09-21',
					resMan:'张鹏'
				},{
					order:'7',
					num:'LD007',
					type:'路灯',
					status:'在线',
					time:'2017-09-21',
					resMan:'张鹏'
				},{
					order:'8',
					num:'LD008',
					type:'路灯',
					status:'在线',
					time:'2017-09-21',
					resMan:'张鹏'
				}],
				tableData5: [{
					id: 'A1.F1.风机',
					name: '主动关闭风机',
					desc: '2017.09.22 16:28',
					status: '运行中',
					brands: '华为',
					voltage: '220v',
					category: '5k',
					address: '55/48W',
					shop: '4-60',
					shopId: '离心式'
				}, {
					id: 'A1.F1.风机',
					name: '主动关闭风机',
					desc: '2017.09.22 16:28',
					status: '成功',
					brands: '华为',
					voltage: '220v',
					category: '8k',
					address: '50/48W',
					shop: '4-68',
					shopId: '轴流式'
				}, {
					id: 'A1.F1.插座',
					name: '主动关闭插座',
					desc: '2017.09.22 16:28',
					status: '成功',
					brands: '华为',
					voltage: '220v',
					category: '180g',
					address: '2000W',
					shop: '4-72',
					shopId: '一位单控'
				}, {
					id: 'A1.F1.风机',
					name: '主动关闭风机',
					desc: '2017.09.22 16:28',
					status: '成功',
					brands: '华为',
					voltage: '220v',
					category: '7k',
					address: '55/48W',
					shop: '6-52',
					shopId: '柜式离心风机箱'
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.views-content{
		padding: 20px 10px;
		.tableSearchInput{
			width: 150px;
		}
	}
	.eq-table{
		.el-button{
			padding: 5px;
		}
		
		.demo-table-expand {
			font-size: 0;
		}
		.demo-table-expand .el-form-item {
			margin-right: 0;
			margin-bottom: 0;
			width: 50%;
		}
	}
</style>


<style lang="scss">
	.eq-table{
		.demo-table-expand label {
		    width: 80px;
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



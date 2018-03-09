<template>
  <div class="views-content">
  	<div class="search-div">
  		<span>Grouping:</span>
  		<el-select value="All" placeholder="Please select" size="small">
		    <el-option value="All"> </el-option>
		  </el-select>
		  <span class="ml10">State:</span>
  		<el-select value="All" placeholder="Please select" size="small">
		    <el-option value="All"> </el-option>
		  </el-select>
		  <span class="ml10">Key:</span>
      <el-input class='tableSearchInput'  placeholder="" icon="search" size="small"></el-input>
      <div class="fr">
  			   <button class="refresh" size="small"><i class="icon_refresh"></i>Refresh</button>
  			   <button class="export" size="small"><i class="icon_export"></i>Export</button>
  		</div>
  	</div>
  	
  	<div class="table-div eq-table mt15">
  		<el-table :data="tableData4" style="width: 100%" stripe>
				<el-table-column type="expand">
					<template slot-scope="props">
						<el-form label-position="left" inline class="demo-table-expand">
							<el-form-item label="Asset">
								<span>No.{{ props.row.num }}</span>
							</el-form-item>
							<el-form-item label="Type">
								<span>{{ props.row.type }}</span>
							</el-form-item>
							<el-form-item label="State">
								<span>{{ props.row.status }}</span>
							</el-form-item>
						</el-form>
					</template>
				</el-table-column>
				<el-table-column label="Order" align="center" prop="order"></el-table-column>
				<el-table-column label="Asset Numbers" align="center" prop="num"></el-table-column>
				<el-table-column label="Asset classes" align="center" prop="type"></el-table-column>
				<el-table-column align="center" label="State">
					<template scope="scope">
						<span class="green">{{scope.row.status}}</span>
					</template>
				</el-table-column>
				<el-table-column label="Last time checked" align="center" prop="time"></el-table-column>
				<el-table-column label="Last time checked person" align="center" prop="resMan"></el-table-column>
				<el-table-column label="Operation" align="center">
					<template slot-scope="scope">
						<el-button size="mini" class="el-button--blue">Check</el-button>
					</template>
				</el-table-column>
			</el-table>
  	</div>
  	
  	<div class="pages mt20">
  		<!--<el-pagination
	      :page-sizes="[10]"
	      :page-size="100"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="8">
	    </el-pagination>-->
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
					type:'Street lamp',
					status:'Online',
					time:'2017-09-21',
					resMan:'Zhangpeng'
				},{
					order:'2',
					num:'LD002',
					type:'Street lamp',
					status:'Online',
					time:'2017-09-21',
					resMan:'Zhangpeng'
				},{
					order:'3',
					num:'LD003',
					type:'Street lamp',
					status:'Online',
					time:'2017-09-21',
					resMan:'Zhangpeng'
				},{
					order:'3',
					num:'LD003',
					type:'Street lamp',
					status:'Online',
					time:'2017-09-21',
					resMan:'Zhangpeng'
				},{
					order:'4',
					num:'LD004',
					type:'Street lamp',
					status:'Online',
					time:'2017-09-21',
					resMan:'Zhangpeng'
				},{
					order:'5',
					num:'LD005',
					type:'Street lamp',
					status:'Online',
					time:'2017-09-21',
					resMan:'Zhangpeng'
				},{
					order:'6',
					num:'LD006',
					type:'Street lamp',
					status:'Online',
					time:'2017-09-21',
					resMan:'Zhangpeng'
				},{
					order:'7',
					num:'LD007',
					type:'Street lamp',
					status:'Online',
					time:'2017-09-21',
					resMan:'Zhangpeng'
				},{
					order:'8',
					num:'LD008',
					type:'Street lamp',
					status:'Online',
					time:'2017-09-21',
					resMan:'Zhangpeng'
				}],
				tableData5: [{
					id: 'A1.F1.Fan',
					name: 'Active closing fan',
					desc: '2017.09.22 16:28',
					status: 'Running',
					brands: 'Huawei',
					voltage: '220v',
					category: '5k',
					address: '55/48W',
					shop: '4-60',
					shopId: 'Centrifugal type'
				}, {
					id: 'A1.F1.Fan',
					name: 'Active closing fan',
					desc: '2017.09.22 16:28',
					status: 'Success',
					brands: 'Huawei',
					voltage: '220v',
					category: '8k',
					address: '50/48W',
					shop: '4-68',
					shopId: 'Axial flow type'
				}, {
					id: 'A1.F1.Socket',
					name: 'Active shut-down receptacle',
					desc: '2017.09.22 16:28',
					status: 'Success',
					brands: 'Huawei',
					voltage: '220v',
					category: '180g',
					address: '2000W',
					shop: '4-72',
					shopId: 'A single control'
				}, {
					id: 'A1.F1.Fan',
					name: 'Active closing fan',
					desc: '2017.09.22 16:28',
					status: 'Success',
					brands: 'Huawei',
					voltage: '220v',
					category: '7k',
					address: '55/48W',
					shop: '6-52',
					shopId: 'Cabinet type centrifugal wind case'
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



<template>
	<div class="views-container">
		<div class="topNav clearfix">
			<div class="icon-div">
            	<router-link to="/EN/supplierManage/supplierInfo/supplierList">
            		<span></span>
				</router-link>
			</div>
			<div class="views-title">
				<ul class="clearfix">
					<li class="active">Delivery Record-Deli</li>
				</ul>
			</div>
		</div>
		
		<div class="views-content">
        	<el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          		<el-table-column type="selection" width="55" align="center"></el-table-column>
          		<el-table-column prop="order" label="Order" align="center"></el-table-column>
          		<el-table-column prop="type" label="Material Type" align="center"></el-table-column>
          		<el-table-column prop="name" label="Material Name" align="center"></el-table-column>
          		<el-table-column prop="depart" label="user department" align="center"></el-table-column>
          		<el-table-column prop="factory" label="Factory Library" align="center"></el-table-column>
          		<el-table-column prop="num" label="Count" align="center"></el-table-column>
          		<el-table-column prop="amount" label="Price" align="center"></el-table-column>
          		<el-table-column prop="buyDate" label="Purchase Date" align="center"></el-table-column>
          		<el-table-column prop="resMan" label="Principal" align="center"></el-table-column>
        	</el-table>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				tableData3:[{
					order:'1',
					code:'WL00021',
					type:'Office Supplies',
					name:'NoteBook',
					depart:'Property Services',
					factory:'Property C4',
					num:'30',
					amount:'60',
					buyDate:'2017-9-12',
					resMan:'Lin Lee'
				},{
					order:'2',
					code:'WL00011',
					type:'Office Supplies',
					name:'NoteBook',
					depart:'General Management Department',
					factory:'Property C1',
					num:'60',
					amount:'120',
					buyDate:'2017-9-12',
					resMan:'Lin Lee'
				},{
					order:'3',
					code:'WL00031',
					type:'Office Supplies',
					name:'ball-point pen',
					depart:'Property Services',
					factory:'Property C4',
					num:'100',
					amount:'120',
					buyDate:'2017-9-12',
					resMan:'Lin Lee'
				},{
					order:'4',
					code:'WL00041',
					type:'Office Supplies',
					name:'NoteBook',
					depart:'Logistics department ',
					factory:'Property C4',
					num:'200',
					amount:'200',
					buyDate:'2017-9-12',
					resMan:'Lin Lee'
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.views-container{
		padding: 20px;
		padding-top: 0;
		
		.topNav{
			.icon-div,.views-title{
				float: left;
			}
			.icon-div{
				height: 50px;
				line-height: 50px;
				margin-right: 10px;
				
				a{
					cursor: pointer;
					display: inline-block;


					span{
						display: inline-block;
						vertical-align: middle;
						width: 24px;
						height: 24px;
						background: url(../../assets/images/common/back2-normal.png) no-repeat center;
						background-size: cover;
						
						&:hover{
							background: url(../../assets/images/common/back2-hover.png) no-repeat center;
						}
					}
				}
			}
		}
		
		.views-content{
			padding-top: 20px;
		}
	}
</style>
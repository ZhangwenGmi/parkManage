<template>
	<div class="views-container">
		<div class="topNav clearfix">
			<div class="icon-div">
            	<router-link to="/supplierManage/supplierInfo/supplierList">
            		<span></span>
				</router-link>
			</div>
			<div class="views-title">
				<ul class="clearfix">
					<li class="active">供货记录-得力</li>
				</ul>
			</div>
		</div>
		
		<div class="views-content">
        	<el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          		<el-table-column type="selection" width="55" align="center"></el-table-column>
          		<el-table-column prop="order" label="序号" align="center"></el-table-column>
          		<el-table-column prop="type" label="物料类别" align="center"></el-table-column>
          		<el-table-column prop="name" label="物料名称" align="center"></el-table-column>
          		<el-table-column prop="depart" label="使用部门" align="center"></el-table-column>
          		<el-table-column prop="factory" label="所在厂库" align="center"></el-table-column>
          		<el-table-column prop="num" label="数量" align="center"></el-table-column>
          		<el-table-column prop="amount" label="金额" align="center"></el-table-column>
          		<el-table-column prop="buyDate" label="采购日期" align="center"></el-table-column>
          		<el-table-column prop="resMan" label="负责人" align="center"></el-table-column>
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
					type:'办公用品',
					name:'笔记本',
					depart:'物业服务部',
					factory:'物业C4',
					num:'30',
					amount:'60',
					buyDate:'2017-9-12',
					resMan:'李林'
				},{
					order:'2',
					code:'WL00011',
					type:'办公用品',
					name:'笔记本',
					depart:'综合管理部',
					factory:'物业C1',
					num:'60',
					amount:'120',
					buyDate:'2017-9-12',
					resMan:'李林'
				},{
					order:'3',
					code:'WL00031',
					type:'办公用品',
					name:'圆珠笔',
					depart:'物业服务部',
					factory:'物业C4',
					num:'100',
					amount:'120',
					buyDate:'2017-9-12',
					resMan:'李林'
				},{
					order:'4',
					code:'WL00041',
					type:'办公用品',
					name:'笔记本',
					depart:'后勤保障部',
					factory:'物业C4',
					num:'200',
					amount:'200',
					buyDate:'2017-9-12',
					resMan:'李林'
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
<template>
  <div class="views-content">
  	<div class="nav-list">
  		<ul>
  			<li>
  				<h3>设备总量</h3>
  				<div class="number">178</div>
  			</li>
  			<li>
  				<h3>在线数量</h3>
  				<div class="number">154</div>
  			</li>
  			<li>
  				<h3>故障数量</h3>
  				<div class="number">9</div>
  			</li>
  			<li>
  				<h3>维保数量</h3>
  				<div class="number">15</div>
  			</li>
  		</ul>
  	</div>
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
  			   <button class="export"  size="small"><i class="icon_export"></i>导出</button>
  		</div>
  	</div>
  	
  	<div class="table-div res-table mt15">
  		<el-table
		    :data="tableData4"
		    style="width: 100%" stripe>
		    <el-table-column type="expand">
		      <template slot-scope="props">
		        <el-form label-position="left" inline class="demo-table-expand">
		          <el-form-item label="资产编号" >
		            <span>{{ props.row.num }}</span>
		          </el-form-item>
		          <el-form-item label="资产名称">
		            <span>{{ props.row.name }}</span>
		          </el-form-item>
		          <el-form-item label="资产类别">
		            <span>{{ props.row.type }}</span>
		          </el-form-item>
		          <el-form-item label="状态">
		            <span>{{ props.row.status }}</span>
		          </el-form-item>
		          <el-form-item label="所属分组">
		            <span>{{ props.row.group }}</span>
		          </el-form-item>
		        </el-form>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="序号"
		      align="center"
		      prop="order">
		    </el-table-column>
		    <el-table-column
		      label="资产编号"
		      align="center"
		      prop="num">
		    </el-table-column>
		    <el-table-column
		      label="资产名称"
		      align="center"
		      prop="name">
		    </el-table-column>
		    <el-table-column
		      label="资产类别"
		      align="center"
		      prop="type">
		    </el-table-column>
		    <el-table-column
		      label="状态"
		      align="center"
		      >
		      <template slot-scope="props">
		      	<span class="green">{{ props.row.status }}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="所属分组"
		      align="center"
		      prop="group">
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
				tableData4:[
					{
						order:'1',
						num:'LD001',
						name:'7G路灯',
						type:'路灯',
						status:'在线',
						group:'嘉宾路'
					},{
						order:'2',
						num:'LD002',
						name:'7G路灯',
						type:'路灯',
						status:'在线',
						group:'嘉宾路'
					},{
						order:'3',
						num:'LD003',
						name:'7G路灯',
						type:'路灯',
						status:'在线',
						group:'嘉宾路'
					},{
						order:'4',
						num:'LD004',
						name:'7G路灯',
						type:'路灯',
						status:'在线',
						group:'嘉宾路'
					},{
						order:'5',
						num:'LD005',
						name:'7G路灯',
						type:'路灯',
						status:'在线',
						group:'嘉宾路'
					},{
						order:'6',
						num:'LD006',
						name:'7G路灯',
						type:'路灯',
						status:'在线',
						group:'嘉宾路'
					},{
						order:'7',
						num:'LD007',
						name:'7G路灯',
						type:'路灯',
						status:'在线',
						group:'嘉宾路'
					},{
						order:'8',
						num:'LD008',
						name:'7G路灯',
						type:'路灯',
						status:'在线',
						group:'嘉宾路'
					}
				]
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
		.nav-list{
			ul{
				display: flex;
				flex-flow: row wrap;
				justify-content: space-around;
				
				li{
					width:23%;
					padding: 10px;
					color: #fff;
					text-align: center;
					
					&:nth-child(1){
						background-color: #509ce7;
						h3{
					    border-bottom: 1px solid #488bcf;
						}
					}
					&:nth-child(2){
						background-color: #7788e8;
						h3{
					    border-bottom: 1px solid #6979cf;
						}
					}
					&:nth-child(3){
						background-color: #73c3a3;
						h3{
					    border-bottom: 1px solid #63a88d;
						}
					}
					&:nth-child(4){
						background-color: #6e7c99;
						h3{
					    border-bottom: 1px solid #5c6880;
						}
					}
					
					h3 {
					    font-size: 14px;
					    line-height: 30px;
					    padding-bottom: 6px;
					    margin: 0;
					    font-weight: 400;
					    margin-bottom: 20px;
					}
					.number{
						height: 45px;
    				font-size: 40px;
    				line-height: 45px;
					}
				}
			}
		}
		
		
		.search-div{
			padding-top: 20px;
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
	.res-table{
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



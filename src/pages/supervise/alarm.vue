<template>
  <div id="container">
  	<div class="views-container">
  		<div class="searchTab mb20">
				<span class="gray">关键词：</span>
				<el-input class='tableSearchInput' placeholder="" icon="search" size="small"></el-input>
			</div>
			
			<div class="views-content">
				<div class="table-div alarm-table">
					<el-table :data="tableData4" style="width: 100%" stripe>
							<el-table-column type="expand">
								<template slot-scope="props">
									<el-form label-position="left" inline class="demo-table-expand">
										<el-form-item label="报警来源">
											<span>{{ props.row.alarmSource }}</span>
										</el-form-item>
										<el-form-item label="报警内容">
											<span>{{ props.row.alarmContent }}</span>
										</el-form-item>
										<el-form-item label="报警时间">
											<span>{{ props.row.alarmContent }}</span>
										</el-form-item>
										<el-form-item label="报警类别">
											<span>{{ props.row.alarmType }}</span>
										</el-form-item>
									</el-form>
								</template>
							</el-table-column>
							<el-table-column label="报警来源" align="center" prop="alarmSource">
							</el-table-column>
							<el-table-column label="报警内容" align="center" prop="alarmContent">
							</el-table-column>
							<el-table-column label="报警时间" align="center" prop="alarmContent">
							</el-table-column>
							<el-table-column align="center" label="操作类别">
								<template scope="scope">
									<span :class="scope.row.alarmType === '待处置' ? 'red' :  scope.row.alarmType === '处置中' ? 'blue' : 'green' ">{{scope.row.alarmType}}</span>
								</template>
							</el-table-column>
	
							<el-table-column label="操作" align="center">
								<template slot-scope="scope">
									<el-button size="mini" class="el-button--blue">消警</el-button>
									<el-button size="mini" class="el-button--green" type="danger">转发</el-button>
								</template>
							</el-table-column>
						</el-table>
				</div>
				
				<div class="set-btn mt20">
						<button class="export" @click="dialogVisible = true"  size="small"><i class="icon_export"></i>配置</button>
				</div>
			</div>
			
			<el-dialog
			  title="报警配置"
			  :visible.sync="dialogVisible"
			  width="50%"
			  class="dialog-alarm"
			  >
			 <div class="dialog-content">
			 		<div class="list-b">
			 			<h3 class="mb15">报警员列表</h3>
			 			<el-input  placeholder="搜索接警员"></el-input>
			 		</div>
			 		<div class="list-b">
			 			<h3 class="mb15">选择报警类型</h3>
			 			<ul class="type-list">
			 				<li>
			 					<el-checkbox>建筑待机功耗检测</el-checkbox>
								<el-select placeholder="请选择" value='所有信息' style="width:110px;"  size="small">
									<el-option value='所有信息'></el-option>
								</el-select>
			 				</li>
			 				<li>
			 					<el-checkbox>建筑官网漏水检测</el-checkbox>
								<el-select placeholder="请选择" value='所有信息' style="width:110px;"  size="small">
									<el-option value='所有信息'></el-option>
								</el-select>
			 				</li>
			 				<li>
			 					<el-checkbox>配电所故障检测</el-checkbox>
								<el-select placeholder="请选择" value='所有信息' style="width:110px;"  size="small">
									<el-option value='所有信息'></el-option>
								</el-select>
			 				</li>
			 				<li>
			 					<el-checkbox>空调系统故障检测</el-checkbox>
								<el-select placeholder="请选择" value='所有信息' style="width:110px;"  size="small">
									<el-option value='所有信息'></el-option>
								</el-select>
			 				</li>
			 			</ul>
			 		</div>
			 		
			 		<div class="list-b">
			 			<h3 class="mb15">选择接警时间</h3>
			 			<div class="checked-div">
			 				<el-checkbox>周一</el-checkbox>
			 				<el-checkbox>周二</el-checkbox>
			 				<el-checkbox>周三</el-checkbox>
			 				<el-checkbox>周四</el-checkbox>
			 				<el-checkbox>周五</el-checkbox>
			 				<el-checkbox>周六</el-checkbox>
			 				<el-checkbox>周日</el-checkbox>
			 			</div>
			 			<div class="time-div mt20">
			 				<span>时间选择：</span>
			 				<el-time-picker
						    is-range
						    v-model="value4"
						    start-placeholder="开始时间"
						    end-placeholder="结束时间"
						    placeholder="选择时间范围" size="small">
						  </el-time-picker>
			 			</div>
			 		</div>
			 </div>
			  <span slot="footer" class="dialog-footer">
			    <el-button type="primary" @click="dialogVisible = false" size="small">保 存</el-button>
			    <el-button @click="dialogVisible = false" size="small">取 消</el-button>
			  </span>
			</el-dialog>
			
  	</div>
  </div>
</template>
<script>
	export default{
		data(){
			return{
				dialogVisible:false,
				value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
				tableData4:[{
					alarmSource:'A1.F1',
					alarmContent:'电能浪费',
					alarmTime:'2017-9-22 16:28',
					alarmType:'待处置'
				},{
					alarmSource:'A1.F2机房',
					alarmContent:'温度过高',
					alarmTime:'2017-9-22 16:28',
					alarmType:'处置中'
				},{
					alarmSource:'A1.F2水管',
					alarmContent:'漏水',
					alarmTime:'2017-9-22 16:28',
					alarmType:'已消警'
				},{
					alarmSource:'A区LD001',
					alarmContent:'离线',
					alarmTime:'2017-9-22 16:28',
					alarmType:'已消警'
				},{
					alarmSource:'A1.F3水管',
					alarmContent:'漏水',
					alarmTime:'2017-9-22 16:28',
					alarmType:'已消警'
				},{
					alarmSource:'A1.F2配电所',
					alarmContent:'负荷过高',
					alarmTime:'2017-9-22 16:28',
					alarmType:'已消警'
				},{
					alarmSource:'A1.F3',
					alarmContent:'电能浪费',
					alarmTime:'2017-9-22 16:28',
					alarmType:'已消警'
				},{
					alarmSource:'A1.F2配电所',
					alarmContent:'负荷过高',
					alarmTime:'2017-9-22 16:28',
					alarmType:'已消警'
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.views-container{
		padding: 20px;
		.views-content {
			padding: 0;
		}
		.tableSearchInput {
			width: 150px;
		}
		.set-btn{
			.export {
				background-color: #1199ec;
				color: #fff;
				.icon_export{
					background-image: url(../../assets/images/supervise/dispose.png);
				}
			}
		}
		
		.demo-table-expand {
			font-size: 0;
		}
		.demo-table-expand .el-form-item {
			margin-right: 0;
			margin-bottom: 0;
			width: 50%;
		}
		table .el-button {
			padding: 5px;
		}
		
	}
	
	.dialog-alarm{
		.dialog-content{
			padding: 0 20px 20px 20px;
		}
		
		.list-b{
			border:1px solid #e9e9e9;
			padding: 15px;
			margin-bottom: 10px;
			
			
			&:last-child{
				margin-bottom: 0;
			}

		}
		
		
		.type-list{
			margin-bottom: 0;
			li{
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 15px;
				
				&:last-child{
					margin-bottom: 0;
				}
			}
		}
		
		.checked-div{
			display: flex;
			flex-flow: row wrap;
			justify-content:space-around;
		}
		
		.time-div{
			
		}
		
	}
</style>

<style lang="scss">
	.alarm-table{
		.demo-table-expand label {
		    width: 80px;
		    color: #99a9bf;
		    font-weight: normal;
		}
	}
</style>



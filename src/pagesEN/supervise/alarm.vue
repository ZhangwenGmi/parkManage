<template>
  <div id="container">
  	<div class="views-container">
  		<div class="searchTab mb20">
				<span class="gray">Key:</span>
				<el-input class='tableSearchInput' placeholder="" icon="search" size="small"></el-input>
			</div>
			
			<div class="views-content">
				<div class="table-div alarm-table">
					<el-table :data="tableData4" style="width: 100%" stripe>
							<el-table-column type="expand">
								<template slot-scope="props">
									<el-form label-position="left" inline class="demo-table-expand">
										<el-form-item label="Source">
											<span>{{ props.row.alarmSource }}</span>
										</el-form-item>
										<el-form-item label="Content">
											<span>{{ props.row.alarmContent }}</span>
										</el-form-item>
										<el-form-item label="Time">
											<span>{{ props.row.alarmContent }}</span>
										</el-form-item>
										<el-form-item label="Category">
											<span>{{ props.row.alarmType }}</span>
										</el-form-item>
									</el-form>
								</template>
							</el-table-column>
							<el-table-column label="Alarm source" align="center" prop="alarmSource">
							</el-table-column>
							<el-table-column label="Alarm content" align="center" prop="alarmContent">
							</el-table-column>
							<el-table-column label="Alarm time" align="center" prop="alarmContent">
							</el-table-column>
							<el-table-column align="center" label="Operation category">
								<template scope="scope">
									<span :class="scope.row.alarmType === 'Pending disposal' ? 'red' :  scope.row.alarmType === 'Disposal' ? 'blue' : 'green' ">{{scope.row.alarmType}}</span>
								</template>
							</el-table-column>
	
							<el-table-column label="operation" align="center">
								<template slot-scope="scope">
									<el-button size="mini" class="el-button--blue">Remove</el-button>
									<el-button size="mini" class="el-button--green" type="danger">Forward</el-button>
								</template>
							</el-table-column>
						</el-table>
				</div>
				
				<div class="set-btn mt20">
						<button class="export" @click="dialogVisible = true"  size="small"><i class="icon_export"></i>configure</button>
				</div>
			</div>
			
			<el-dialog
			  title="Alarm configuration"
			  :visible.sync="dialogVisible"
			  width="50%"
			  class="dialog-alarm"
			  >
			 <div class="dialog-content">
			 		<div class="list-b">
			 			<h3 class="mb15">Alarm list</h3>
			 			<el-input  placeholder="Search"></el-input>
			 		</div>
			 		<div class="list-b">
			 			<h3 class="mb15">Select alarm type</h3>
			 			<ul class="type-list">
			 				<li>
			 					<el-checkbox>Building detection</el-checkbox>
								<el-select placeholder="Please select" value='All' style="width:110px;"  size="small">
									<el-option value='AllAll'></el-option>
								</el-select>
			 				</li>
			 				<li>
			 					<el-checkbox>Leakage detection</el-checkbox>
								<el-select placeholder="Please select" value='All' style="width:110px;"  size="small">
									<el-option value='All'></el-option>
								</el-select>
			 				</li>
			 				<li>
			 					<el-checkbox>Fault detection</el-checkbox>
								<el-select placeholder="Please select" value='All' style="width:110px;"  size="small">
									<el-option value='All'></el-option>
								</el-select>
			 				</li>
			 				<li>
			 					<el-checkbox>Air conditioner detection</el-checkbox>
								<el-select placeholder="Please select" value='All' style="width:110px;"  size="small">
									<el-option value='All'></el-option>
								</el-select>
			 				</li>
			 			</ul>
			 		</div>
			 		
			 		<div class="list-b">
			 			<h3 class="mb15">Select alarm time</h3>
			 			<div class="checked-div">
			 				<el-checkbox>Mon</el-checkbox>
			 				<el-checkbox>Tues</el-checkbox>
			 				<el-checkbox>Wed</el-checkbox>
			 				<el-checkbox>Thur</el-checkbox>
			 				<el-checkbox>Fri</el-checkbox>
			 				<el-checkbox>Sat</el-checkbox>
			 				<el-checkbox>Sun</el-checkbox>
			 			</div>
			 			<div class="time-div mt20">
			 				<span>Time choice:</span>
			 				<el-time-picker
						    is-range
						    v-model="value4"
						    start-placeholder="Start time"
						    end-placeholder="End time"
						    placeholder="选择时Select time range间范围" size="small">
						  </el-time-picker>
			 			</div>
			 		</div>
			 </div>
			  <span slot="footer" class="dialog-footer">
			    <el-button type="primary" @click="dialogVisible = false" size="small">Save</el-button>
			    <el-button @click="dialogVisible = false" size="small">Cancel</el-button>
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
					alarmContent:'Power waste',
					alarmTime:'2017-9-22 16:28',
					alarmType:'Pending disposal'
				},{
					alarmSource:'A1.F2 Computer room',
					alarmContent:'high temperature',
					alarmTime:'2017-9-22 16:28',
					alarmType:'Disposal'
				},{
					alarmSource:'A1.F2 Water pipe',
					alarmContent:'Water leakage',
					alarmTime:'2017-9-22 16:28',
					alarmType:'cancelled'
				},{
					alarmSource:'A1.LD001',
					alarmContent:'Off-line',
					alarmTime:'2017-9-22 16:28',
					alarmType:'cancelled'
				},{
					alarmSource:'A1.F3 Water pipe',
					alarmContent:'Water leakage',
					alarmTime:'2017-9-22 16:28',
					alarmType:'cancelled'
				},{
					alarmSource:'A1.F2 Power distribution station',
					alarmContent:'Overload',
					alarmTime:'2017-9-22 16:28',
					alarmType:'cancelled'
				},{
					alarmSource:'A1.F3',
					alarmContent:'Power waste',
					alarmTime:'2017-9-22 16:28',
					alarmType:'cancelled'
				},{
					alarmSource:'A1.F2 Power distribution station',
					alarmContent:'Overload',
					alarmTime:'2017-9-22 16:28',
					alarmType:'cancelled'
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



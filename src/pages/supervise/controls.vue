<template>
	<div id="container">
		<div class="views-container">
			<div class="searchTab mb20">
				<span class="gray">关键词：</span>
				<el-input class='tableSearchInput' placeholder="" icon="search" size="small"></el-input>
			</div>

			<div class="views-content ">
				<div class="table-div control-table">
					<el-table :data="tableData5" style="width: 100%" stripe>
						<el-table-column type="expand">
							<template slot-scope="props">
								<el-form label-position="left" inline class="demo-table-expand">
									<el-form-item label="品牌">
										<span>{{ props.row.brands }}</span>
									</el-form-item>
									<el-form-item label="型号">
										<span>{{ props.row.shop }}</span>
									</el-form-item>
									<el-form-item label="电压">
										<span>{{ props.row.voltage }}</span>
									</el-form-item>
									<el-form-item label="类型">
										<span>{{ props.row.shopId }}</span>
									</el-form-item>
									<el-form-item label="重量">
										<span>{{ props.row.category }}</span>
									</el-form-item>
									<el-form-item label="功率">
										<span>{{ props.row.address }}</span>
									</el-form-item>
								</el-form>
							</template>
						</el-table-column>
						<el-table-column label="控制对象" align="center" prop="id">
						</el-table-column>
						<el-table-column label="控制类别" align="center" prop="name">
						</el-table-column>
						<el-table-column label="控制时间" align="center" prop="desc">
						</el-table-column>
						<el-table-column align="center" label="控制状态">
							<template scope="scope">
								<span class="green">{{scope.row.status}}</span>
							</template>
						</el-table-column>

						<el-table-column label="操作" align="center">
							<template slot-scope="scope">
								<el-button size="mini" class="el-button--blue">运行</el-button>
								<el-button size="mini" type="danger">撤销</el-button>
							</template>
						</el-table-column>
					</el-table>
				</div>

				<div class="set-btn mt20">
					<button class="export" @click="dialogFormVisible = true" size="small"><i class="icon_export"></i>配置</button>
				</div>
			</div>

			<el-dialog class="dialog-control" title="控制配置" :visible.sync="dialogFormVisible">
				<div class="dialog-content">
					<div class="dialog-left">
						<h3>控制对像</h3>
						<div class="dialog-tree">
							<el-tree :accordion="true" :data="treedatas" :props="defaultProps"></el-tree>
						</div>
					</div>
					<div class="dialog-right">
						<div class="control-sel mb10">
							<h3 class="mb20">选择控制类型</h3>
							<ul class="sel-ul">
								<li>
									<el-checkbox>主动联动关闭末端</el-checkbox>
									<el-select placeholder="请选择" value='普通级' style="width:100px;" size="small">
										<el-option value='普通级'></el-option>
									</el-select>
								</li>
								<li>
									<el-checkbox>主动关闭风机</el-checkbox>
									<el-select placeholder="请选择" value='普通级' style="width:100px;" size="small">
										<el-option value='普通级'></el-option>
									</el-select>
								</li>
								<li>
									<el-checkbox>主动关闭插座</el-checkbox>
									<el-select placeholder="请选择" value='普通级' style="width:100px;" size="small">
										<el-option value='普通级'></el-option>
									</el-select>
								</li>
							</ul>
						</div>
						<div class="control-delay">
							<h3 class="mb20"> 延后执行时间</h3>
							<div class="input-div">
								<ul>
									<li>
										<el-input placeholder="" size="small"></el-input>天
									</li>
									<li>
										<el-input placeholder="" size="small"></el-input>时
									</li>
									<li>
										<el-input placeholder="" size="small"></el-input>分
									</li>
									<li>
										<el-input placeholder="" size="small"></el-input>秒
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div slot="footer" class="dialog-footer">
					<el-button type="primary" @click="dialogFormVisible = false" size="small">保 存</el-button>
					<el-button @click="dialogFormVisible = false" size="small">取 消</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogFormVisible: false,
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				treedatas: [{
					label: '市政基础设施',
					children: [{
						label: '路灯',
					},{
						label: 'AP',
					},{
						label: '垃圾桶',
					},{
						label: '井盖',
					},{
						label: '地磁',
					},{
						label: '地下管网',
					},{
						label: '环境传感器',
					},{
						label: '摄像头',
					},{
						label: 'LED大屏',
					},{
						label: '数字广播',
					}]
				}, {
					label: '楼宇设施',
				}, {
					label: '交通设施',
				}, {
					label: '消费设施',
					children: [{
						label: '路灯'
					}]
				}, {
					label: '通信设施',
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
		},

	}
</script>

<style lang="scss" scoped>
	.views-container {
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
			}
			.icon_export{
				background-image: url(../../assets/images/supervise/dispose.png);
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
	
	.dialog-control {
		.dialog-content {
			display: flex;
			padding: 0 20px 20px 20px;
			.dialog-left {
				padding: 10px;
				border: 1px solid #e2e2e2;
				border-radius: 3px;
				width: 360px;
				.el-tree {
					border: none;
					height: 270px;
					overflow-y: auto;
				}
			}
			.dialog-right {
				width: 100%;
				margin-left: 30px;
				.control-sel {
					border: 1px solid #e2e2e2;
					padding: 10px;
					li {
						display: flex;
						flex-flow: row wrap;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 15px;
					}
				}
				.control-delay {
					border: 1px solid #e2e2e2;
					padding: 10px;
					ul {
						display: flex;
						flex-flow: row wrap;
						justify-content: space-around;
						.el-input {
							display: inline-block;
							width: 60px;
							margin-right: 2px;
						}
					}
				}
			}
		}
		
	}
</style>

<style lang="scss">
	.control-table{
		.demo-table-expand label {
		    width: 50px;
		    color: #99a9bf;
		    font-weight: normal;
		}
	}
</style>
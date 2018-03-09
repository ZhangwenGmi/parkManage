<template>
	<div id="container">
		<div class="views-container">
			<div class="searchTab mb20">
				<span class="gray">Key:</span>
				<el-input class='tableSearchInput' placeholder="" icon="search" size="small"></el-input>
			</div>

			<div class="views-content ">
				<div class="table-div control-table">
					<el-table :data="tableData5" style="width: 100%" stripe>
						<el-table-column type="expand">
							<template slot-scope="props">
								<el-form label-position="left" inline class="demo-table-expand">
									<el-form-item label="Brand">
										<span>{{ props.row.brands }}</span>
									</el-form-item>
									<el-form-item label="Model">
										<span>{{ props.row.shop }}</span>
									</el-form-item>
									<el-form-item label="Voltage">
										<span>{{ props.row.voltage }}</span>
									</el-form-item>
									<el-form-item label="Type">
										<span>{{ props.row.shopId }}</span>
									</el-form-item>
									<el-form-item label="Weight">
										<span>{{ props.row.category }}</span>
									</el-form-item>
									<el-form-item label="Power">
										<span>{{ props.row.address }}</span>
									</el-form-item>
								</el-form>
							</template>
						</el-table-column>
						<el-table-column label="Control object" align="center" prop="id">
						</el-table-column>
						<el-table-column label="Control category" align="center" prop="name">
						</el-table-column>
						<el-table-column label="Control time" align="center" prop="desc">
						</el-table-column>
						<el-table-column align="center" label="Control state">
							<template scope="scope">
								<span class="green">{{scope.row.status}}</span>
							</template>
						</el-table-column>

						<el-table-column label="operation" align="center">
							<template slot-scope="scope">
								<el-button size="mini" class="el-button--blue">operation</el-button>
								<el-button size="mini" type="danger">revocation</el-button>
							</template>
						</el-table-column>
					</el-table>
				</div>

				<div class="set-btn mt20">
					<button class="export" @click="dialogFormVisible = true" size="small"><i class="icon_export"></i>configure</button>
				</div>
			</div>

			<el-dialog class="dialog-control" title="Control configuration" :visible.sync="dialogFormVisible">
				<div class="dialog-content">
					<div class="dialog-left">
						<h3>Control object</h3>
						<div class="dialog-tree">
							<el-tree :accordion="true" :data="treedatas" :props="defaultProps"></el-tree>
						</div>
					</div>
					<div class="dialog-right">
						<div class="control-sel mb10">
							<h3 class="mb20">Select control type</h3>
							<ul class="sel-ul">
								<li>
									<el-checkbox>Active linkage off end</el-checkbox>
									<el-select placeholder="Please select" value='Regular grade' style="width:150px;" size="small">
										<el-option value='Regular grade'></el-option>
									</el-select>
								</li>
								<li>
									<el-checkbox>Active closing fan</el-checkbox>
									<el-select placeholder="Please select" value='Regular grade' style="width:150px;" size="small">
										<el-option value='Regular grade'></el-option>
									</el-select>
								</li>
								<li>
									<el-checkbox>Active shut-down receptacle</el-checkbox>
									<el-select placeholder="Please select" value='Regular grade' style="width:150px;" size="small">
										<el-option value='Regular grade'></el-option>
									</el-select>
								</li>
							</ul>
						</div>
						<div class="control-delay">
							<h3 class="mb20"> Delay the execution time</h3>
							<div class="input-div">
								<ul>
									<li>
										<el-input placeholder="" size="small"></el-input>day
									</li>
									<li>
										<el-input placeholder="" size="small"></el-input>hour
									</li>
									<li>
										<el-input placeholder="" size="small"></el-input>minute
									</li>
									<li>
										<el-input placeholder="" size="small"></el-input>second
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div slot="footer" class="dialog-footer">
					<el-button type="primary" @click="dialogFormVisible = false" size="small">Save</el-button>
					<el-button @click="dialogFormVisible = false" size="small">Cancel</el-button>
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
					label: 'Municipal infrastructure',
					children: [{
						label: 'Street lamp',
					},{
						label: 'AP',
					},{
						label: 'Garbage can',
					},{
						label: 'Manhole cover',
					},{
						label: 'Geomagnetism',
					},{
						label: 'Underground network',
					},{
						label: 'Environmental sensor',
					},{
						label: 'Camera',
					},{
						label: 'LED',
					},{
						label: 'Digital broadcasting',
					}]
				}, {
					label: 'Building equipment',
				}, {
					label: 'Traffic facilities',
				}, {
					label: 'Fire control facilities',
					children: [{
						label: 'Street lamp'
					}]
				}, {
					label: 'Communication facilities',
					children: [{
						label: 'Street lamp'
					}]
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
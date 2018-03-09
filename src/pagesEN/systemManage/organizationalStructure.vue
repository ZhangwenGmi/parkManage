<template lang="html">

	<div style="display:flex">
		<div class="container-left">
			<el-input v-model="input" size="small" placeholder="Please enter content" icon="search"></el-input>
			<el-tree :data="data" node-key="id" :default-expanded-keys="[1,2]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
		</div>
		<div class="container-right">
			<span class="gray">Department:</span>
			<el-select value="All" size="small"  placeholder="Please select">
				<el-option value='All'></el-option>
			</el-select>
			<span class="ml20 gray">Key:</span>
			<el-input class='tableSearchInput' size="small" placeholder=""  icon="search"></el-input>
			<el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
				<el-table-column type="selection" width="55" align="center"></el-table-column>
				<el-table-column prop="order" label="Order" align="center"></el-table-column>
				<el-table-column prop="code" label="Name" align="center"></el-table-column>
				<el-table-column prop="name" label="Gender" align="center"></el-table-column>
				<el-table-column prop="phone" label="Department" align="center"></el-table-column>
				<el-table-column prop="type" label="Phone" align="center"></el-table-column>
				<el-table-column prop="score" label="Created By" align="center"></el-table-column>
			</el-table>
			<div style="margin-top: 20px">
				<el-button size="small" type="primary" icon="plus">Add</el-button>
				<el-button size="small" type="primary" icon="edit" class="el-button--edit">Edit</el-button>
				<el-button size="small" type="danger" icon="close">Delete</el-button>
			</div>
		</div>
	</div>

</template>
<script>
	export default {
		data() {
			return {
				input: '',
				data: [{
					id: 1,
					label: 'Board of Directors',
					children: [{
						id: 4,
						label: 'Finance Dept'
					}, {
						id: 2,
						label: 'Logistics Dept',
						children: [{
								id: 5,
								label: 'Cleaning Dept'
							},
							{
								id: 6,
								label: 'Security Dept'
							}
						]
					}, {
						id: 3,
						label: 'Role management'
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				tableData3: [{
					order: '1',
					code: 'Mingyi Li',
					name: 'female',
					phone: 'Cleaning Department',
					type: '1384687892',
					score: 'Manager'
				}, {
					order: '2',
					code: 'Mingyi Li',
					name: 'female',
					phone: 'Cleaning Department',
					type: '1384687892',
					score: 'Manager'
				}, {
					order: '3',
					code: 'Mingyi Li',
					name: 'female',
					phone: 'Cleaning Department',
					type: '1384687892',
					score: 'Manager'
				}, {
					order: '4',
					code: 'Mingyi Li',
					name: 'female',
					phone: 'Cleaning Department',
					type: '1384687892',
					score: 'Manager'
				}, {
					order: '5',
					code: 'Mingyi Li',
					name: 'female',
					phone: 'Cleaning Department',
					type: '1384687892',
					score: 'Manager'
				}, {
					order: '6',
					code: 'Mingyi Li',
					name: 'female',
					phone: 'Cleaning Department',
					type: '1384687892',
					score: 'Manager'
				}, {
					order: '7',
					code: 'Mingyi Li',
					name: 'female',
					phone: 'Cleaning Department',
					type: '1384687892',
					score: 'Manager'
				}],
				multipleSelection: []
			};
		}
	};
</script>
<style lang="scss" scoped>
	.views-container {
		//display:flex;
		padding: 0 20px 20px 20px;
		width: 100%;
		
		.tableSearchInput {
			width: 150px;
			margin: 15px 0;
		}
	}
	
	.container-left {
		padding: 10px;
		margin-top: 10px;
		border: 1px solid #e2e2e2;
		border-radius: 3px;
		width: 320px;
		.el-tree {
			border: none;
			margin: 20px
		}
	}
	
	.container-right {
		width: 100%;
		margin-left: 30px
	}
	
	
</style>
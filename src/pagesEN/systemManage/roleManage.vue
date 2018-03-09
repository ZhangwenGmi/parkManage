<template lang="html">

	<div class="container-right">
		<div>
			<span class="gray">Key:</span>
			<el-input size="small" class='tableSearchInput' placeholder=""   icon="search"></el-input>
		</div>
		<el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
			<el-table-column type="selection" width="55" align="center"></el-table-column>
			<el-table-column prop="order" label="Order" align="center"></el-table-column>
			<el-table-column prop="code" label="Nmae" align="center"></el-table-column>
			<el-table-column prop="name" label="Describe" align="center"></el-table-column>
			<el-table-column prop="property" label="Created By" align="center"></el-table-column>
			<el-table-column prop="type" label="Created" align="center"></el-table-column>
		</el-table>
		<div style="margin-top: 20px">
			<el-button size="small" type="primary" icon="plus">Add</el-button>
			<el-button size="small" type="primary" icon="edit" class="el-button--edit">Edit</el-button>
			<el-button size="small" type="danger" icon="close">Delete</el-button>
		</div>
	</div>

</template>
<script>
	export default {
		data() {
			return {
				input: '',
				tableData3: [{
					order: '1',
					code: 'Li Si',
					name: 'Responsible for the safety of the whole park',
					property: 'admin',
					type: '2017-09-10 12:34'
				}, {
					order: '2',
					code: 'Wang Wu',
					name: 'Responsible for information management of the whole platform',
					property: 'admin',
					type: '2017-10-11 08:00'
				}, 
				{
					order: '1',
					code: 'Zhang San',
					name: 'Responsible for the safety of the whole park',
					property: 'admin',
					type: '2017-09-10 12:34'
				}, {
					order: '2',
					code: 'Wang Wu',
					name: 'Responsible for information management of the whole platform',
					property: 'admin',
					type: '2017-10-11 08:00'
				}, 
				{
					order: '1',
					code: 'Li Si',
					name: 'Responsible for the safety of the whole park',
					property: 'admin',
					type: '2017-09-10 12:34'
				}, {
					order: '2',
					code: 'Li Si',
					name: 'Responsible for information management of the whole platform',
					property: 'admin',
					type: '2017-10-11 08:00'
				}],
				multipleSelection: []
			};
		}
	};
</script>
<style lang="scss" scoped>
	.views-container {
		width: 100%;
		
		.tableSearchInput {
			width: 150px;
			margin: 15px 0;
		}
	}
	
	.container-right {
		padding: 0 20px
	}
	
	
</style>
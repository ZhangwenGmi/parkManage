<template lang="html">

	<div class="container-right mt20">
		<el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
			<el-table-column type="selection" width="55" align="center"></el-table-column>
			<el-table-column prop="order" label="Order" align="center"></el-table-column>
			<el-table-column prop="code" label="Operation Time" align="center"></el-table-column>
			<el-table-column prop="name" label="Login IP Address" align="center"></el-table-column>
			<el-table-column prop="property" label="User Name" align="center"></el-table-column>
			<el-table-column prop="type" label="Log Type" align="center"></el-table-column>
			<el-table-column prop="content" label="Log Content" align="center"></el-table-column>
		</el-table>
	</div>

</template>
<script>
	export default {
		data() {
			return {
				input: '',
				tableData3: [{
					order: '1',
					code: '2017-11-01 09:00:09',
					name: '192.168.10.88',
					property: 'Zhang san',
					type: 'Login',
					content: 'Login successful'
				}, {
					order: '2',
					code: '2017-11-02 09:34:09',
					name: '192.168.10.20',
					property: 'Liu xiao li',
					type: 'Login',
					content: 'Login successful'
				}, {
					order: '3',
					code: '2017-11-03 09:12:00',
					name: '192.168.10.199',
					property: 'Li liang',
					type: 'Login',
					content: 'Login successful'
				}],
				multipleSelection: []
			};
		}
	};
</script>
<style lang="scss" scoped>
	.views-container {
		width: 100%;
	}
	
	.container-right {
		padding: 0 20px
	}
	
	.tableSearchInput {
		width: 250px;
		margin: 15px 0;
	}
</style>
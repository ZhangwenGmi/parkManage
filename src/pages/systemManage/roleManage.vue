<template lang="html">

	<div class="container-right">
		<div>
			<span class="gray">关键词：</span>
			<el-input size="small" class='tableSearchInput' placeholder=""   icon="search"></el-input>
		</div>
		<el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
			<el-table-column type="selection" width="55" align="center"></el-table-column>
			<el-table-column prop="order" label="序号" align="center"></el-table-column>
			<el-table-column prop="code" label="角色名称" align="center"></el-table-column>
			<el-table-column prop="name" label="描述" align="center"></el-table-column>
			<el-table-column prop="property" label="创建人" align="center"></el-table-column>
			<el-table-column prop="type" label="创建时间" align="center"></el-table-column>
		</el-table>
		<div style="margin-top: 20px">
			<el-button size="small" type="primary" icon="plus">添加</el-button>
			<el-button size="small" type="primary" icon="edit" class="el-button--edit">编辑</el-button>
			<el-button size="small" type="danger" icon="close">删除</el-button>
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
					code: 'liliang',
					name: '负责整个园区安全',
					property: 'admin',
					type: '2017-09-10 12:34'
				}, {
					order: '2',
					code: 'liliang',
					name: '负责整个园区安全',
					property: 'admin',
					type: '2017-09-10 12:34'
				}, {
					order: '3',
					code: 'liliang',
					name: '负责整个园区安全',
					property: 'admin',
					type: '2017-09-10 12:34'
				}, {
					order: '4',
					code: 'liliang',
					name: '负责整个园区安全',
					property: 'admin',
					type: '2017-09-10 12:34'
				}, {
					order: '5',
					code: 'liliang',
					name: '负责整个园区安全',
					property: 'admin',
					type: '2017-09-10 12:34'
				}, {
					order: '6',
					code: 'liliang',
					name: '负责整个园区安全',
					property: 'admin',
					type: '2017-09-10 12:34'
				}, {
					order: '7',
					code: 'liliang',
					name: '负责整个园区安全',
					property: 'admin',
					type: '2017-09-10 12:34'
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
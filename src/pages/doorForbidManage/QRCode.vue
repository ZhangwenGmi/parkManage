<template lang="html">

	<div class="container-right">
		<div>
			<span class="gray">关键字：</span>
			<el-input class='tableSearchInput' size="small" icon="search"></el-input>
		</div>
		<el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
			<el-table-column type="selection" width="55" align="center"></el-table-column>
			<el-table-column prop="order" label="序号" align="center"></el-table-column>
			<el-table-column prop="code" label="区域" align="center"></el-table-column>
			<el-table-column prop="name" label="时效min（内部人员）" align="center"></el-table-column>
			<el-table-column prop="property" label="时效min（来访人员）" align="center"></el-table-column>
			<el-table-column prop="type" label="时效min（临时人员）" align="center"></el-table-column>
			<el-table-column prop="manager" label="关联设备" align="center"></el-table-column>
			<el-table-column prop="capacity" label="创建时间" align="center"></el-table-column>
		</el-table>
		<div style="margin-top: 20px">
			<div style="text-align:center">
				<el-pagination :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="9">
				</el-pagination>
			</div>
			<el-button size="small"  type="primary" icon="plus">添加</el-button>
			<el-button size="small" class="el-button--edit" type="primary" icon="edit">编辑</el-button>
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
					code: '1栋1楼',
					name: '48',
					property: '48',
					type: '30',
					manager: '1000',
					capacity: '2017-09-21'
				}, {
					order: '2',
					code: '1栋1楼',
					name: '48',
					property: '48',
					type: '30',
					manager: '1000',
					capacity: '2017-09-21'
				}, {
					order: '3',
					code: '1栋1楼',
					name: '48',
					property: '48',
					type: '30',
					manager: '1000',
					capacity: '2017-09-21'
				}, {
					order: '4',
					code: '1栋1楼',
					name: '48',
					property: '48',
					type: '30',
					manager: '1000',
					capacity: '2017-09-21'
				}, {
					order: '5',
					code: '1栋1楼',
					name: '48',
					property: '48',
					type: '30',
					manager: '1000',
					capacity: '2017-09-21'
				}, {
					order: '6',
					code: '1栋1楼',
					name: '48',
					property: '48',
					type: '30',
					manager: '1000',
					capacity: '2017-09-21'
				}, {
					order: '7',
					code: '1栋1楼',
					name: '48',
					property: '48',
					type: '30',
					manager: '1000',
					capacity: '2017-09-21'
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
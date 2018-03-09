<template lang="html">

	<div class="container-right">
		<div>
			<span class="gray">关键词：</span>
			<el-input class='tableSearchInput' size="small" placeholder=""   icon="search"></el-input>
			
		</div>
		<el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
			<el-table-column type="selection" width="55" align="center"></el-table-column>
			<el-table-column prop="order" label="序号" align="center"></el-table-column>
			<el-table-column prop="code" label="账号名称" align="center"></el-table-column>
			<el-table-column prop="name" label="归属人员" align="center"></el-table-column>
			<el-table-column prop="property" label="关联角色" align="center"></el-table-column>
			<el-table-column prop="person" label="创建人" align="center"></el-table-column>
			<el-table-column prop="time" label="创建时间" align="center"></el-table-column>
			<el-table-column prop="times" label="有效时间" align="center"></el-table-column>
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
					name: '信息部/李量',
					property: '操作员',
					person: '河谷',
					time: '2017-09-10 12:34',
					times: '2017-09-10 12:34'
				}, {
					order: '2',
					code: 'liliang',
					name: '信息部/李量',
					property: '操作员',
					person: '河谷',
					time: '2017-09-10 12:34',
					times: '2017-09-10 12:34'
				}, {
					order: '3',
					code: 'liliang',
					name: '信息部/李量',
					property: '操作员',
					person: '河谷',
					time: '2017-09-10 12:34',
					times: '2017-09-10 12:34'
				}, {
					order: '4',
					code: 'liliang',
					name: '信息部/李量',
					property: '操作员',
					person: '河谷',
					time: '2017-09-10 12:34',
					times: '2017-09-10 12:34'
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
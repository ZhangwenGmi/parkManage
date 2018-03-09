<template lang="html">

	<div class="container-right mt20">
		<el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
			<el-table-column type="selection" width="55" align="center"></el-table-column>
			<el-table-column prop="order" label="序号" align="center"></el-table-column>
			<el-table-column prop="code" label="操作时间" align="center"></el-table-column>
			<el-table-column prop="name" label="登录IP地址" align="center"></el-table-column>
			<el-table-column prop="property" label="用户名" align="center"></el-table-column>
			<el-table-column prop="type" label="日志类型" align="center"></el-table-column>
			<el-table-column prop="content" label="日志内容" align="center"></el-table-column>
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
					code: '2017-09-10 12:34:09',
					name: '192.168.10.20',
					property: 'liuxiaoli',
					type: '登录',
					content: '登录成功'
				}, {
					order: '2',
					code: '2017-09-10 12:34:09',
					name: '192.168.10.20',
					property: 'liuxiaoli',
					type: '登录',
					content: '登录成功'
				}, {
					order: '3',
					code: '2017-09-10 12:34:09',
					name: '192.168.10.20',
					property: 'liuxiaoli',
					type: '登录',
					content: '登录成功'
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
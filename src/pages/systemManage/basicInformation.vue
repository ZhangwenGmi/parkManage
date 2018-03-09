<template lang="html">
	<div class="container-right">
		<div class="search-div">
			<span>所属部门：</span>
			<el-select value="全部" size="small" placeholder="请选择">
				<el-option value='全部'></el-option>
			</el-select>
			<span class="ml20">性别：</span>
			<el-select value="全部" size="small" placeholder="请选择">
				<el-option value='全部'></el-option>
			</el-select>
			<span class="ml20">关键词：</span>
			<el-input class='tableSearchInput' size="small" placeholder="" icon="search"></el-input>
		</div>
		<el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
			<el-table-column type="selection" width="55" align="center"></el-table-column>
			<el-table-column prop="order" label="序号" align="center"></el-table-column>
			<el-table-column prop="code" label="名称" align="center"></el-table-column>
			<el-table-column prop="name" label="性别" align="center"></el-table-column>
			<el-table-column prop="property" label="所属部门" align="center"></el-table-column>
			<el-table-column prop="type" label="职务" align="center"></el-table-column>
			<el-table-column prop="manager" label="籍贯" align="center"></el-table-column>
			<el-table-column prop="number" label="身份证号" align="center"></el-table-column>
		</el-table>
		<div style="margin-top: 20px">
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
					code: '河谷',
					name: '男',
					property: '信息部',
					type: '信息部主管',
					manager: '广东深圳%',
					number: '1231231231231231'
				}, {
					order: '2',
					code: '河谷',
					name: '男',
					property: '信息部',
					type: '信息部主管',
					manager: '广东深圳%',
					number: '1231231231231231'
				}, {
					order: '3',
					code: '河谷',
					name: '男',
					property: '信息部',
					type: '信息部主管',
					manager: '广东深圳%',
					number: '1231231231231231'
				}, {
					order: '4',
					code: '河谷',
					name: '男',
					property: '信息部',
					type: '信息部主管',
					manager: '广东深圳%',
					number: '1231231231231231'
				}, {
					order: '5',
					code: '河谷',
					name: '男',
					property: '信息部',
					type: '信息部主管',
					manager: '广东深圳%',
					number: '1231231231231231'
				}, {
					order: '6',
					code: '河谷',
					name: '男',
					property: '信息部',
					type: '信息部主管',
					manager: '广东深圳%',
					number: '1231231231231231'
				}, {
					order: '7',
					code: '河谷',
					name: '男',
					property: '信息部',
					type: '信息部主管',
					manager: '广东深圳%',
					number: '1231231231231231'
				}],
				multipleSelection: []
			};
		}
	};
</script>
<style lang="scss" scoped>
	.views-container {
		width: 100%;
		padding: 0 20px 20px 20px;
		
		.tableSearchInput {
			width: 150px;
			margin: 15px 0;
		}
	}
	
	.container-right {
		padding: 0 20px
	}
	
	
</style>
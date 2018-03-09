<template lang="html">

	<div style="display:flex">
		<div class="container-left">
			<el-input v-model="input" size="small" placeholder="请输入内容" icon="search"></el-input>
			<el-tree :data="data" node-key="id" :default-expanded-keys="[1,2]" :default-checked-keys="[1]" :props="defaultProps"> </el-tree>
		</div>
		<div class="container-right">
			<span class="gray">所属部门：</span>
			<el-select value="全部" size="small"  placeholder="请选择">
				<el-option value='全部'></el-option>
			</el-select>
			<span class="ml20 gray">关键词：</span>
			<el-input class='tableSearchInput' size="small" placeholder=""  icon="search"></el-input>
			<el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
				<el-table-column type="selection" width="55" align="center"></el-table-column>
				<el-table-column prop="order" label="序号" align="center"></el-table-column>
				<el-table-column prop="code" label="姓名" align="center"></el-table-column>
				<el-table-column prop="name" label="性别" align="center"></el-table-column>
				<el-table-column prop="phone" label="所属部门" align="center"></el-table-column>
				<el-table-column prop="type" label="电话" align="center"></el-table-column>
				<el-table-column prop="score" label="创建人" align="center"></el-table-column>
			</el-table>
			<div style="margin-top: 20px">
				<el-button size="small" type="primary" icon="plus">添加</el-button>
				<el-button size="small" type="primary" icon="edit" class="el-button--edit">编辑</el-button>
				<el-button size="small" type="danger" icon="close">删除</el-button>
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
					label: '董事会',
					children: [{
						id: 4,
						label: '财务部'
					}, {
						id: 2,
						label: '后勤部',
						children: [{
								id: 5,
								label: '清洁部'
							},
							{
								id: 6,
								label: '保安部'
							}
						]
					}, {
						id: 3,
						label: '角色管理'
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				tableData3: [{
					order: '1',
					code: '李明依',
					name: '女',
					phone: '清洁部',
					type: '1384687892',
					score: '管理员'
				}, {
					order: '2',
					code: '李明依',
					name: '女',
					phone: '清洁部',
					type: '1384687892',
					score: '管理员'
				}, {
					order: '3',
					code: '李明依',
					name: '女',
					phone: '清洁部',
					type: '1384687892',
					score: '管理员'
				}, {
					order: '4',
					code: '李明依',
					name: '女',
					phone: '清洁部',
					type: '1384687892',
					score: '管理员'
				}, {
					order: '5',
					code: '李明依',
					name: '女',
					phone: '清洁部',
					type: '1384687892',
					score: '管理员'
				}, {
					order: '6',
					code: '李明依',
					name: '女',
					phone: '清洁部',
					type: '1384687892',
					score: '管理员'
				}, {
					order: '7',
					code: '李明依',
					name: '女',
					phone: '清洁部',
					type: '1384687892',
					score: '管理员'
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
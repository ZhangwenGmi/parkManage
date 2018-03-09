<template lang="html">
	<div class="container-right">
		<div class="search-div">
			<span>Department:</span>
			<el-select value="All" size="small" placeholder="Please select">
				<el-option value='All'></el-option>
			</el-select>
			<span class="ml20">Gender:</span>
			<el-select value="All" size="small" placeholder="Please select">
				<el-option value='All'></el-option>
			</el-select>
			<span class="ml20">Key:</span>
			<el-input class='tableSearchInput' size="small" placeholder="" icon="search"></el-input>
		</div>
		<el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
			<el-table-column type="selection" width="55" align="center"></el-table-column>
			<el-table-column prop="order" label="Order" align="center"></el-table-column>
			<el-table-column prop="code" label="Name" align="center"></el-table-column>
			<el-table-column prop="name" label="Gender" align="center"></el-table-column>
			<el-table-column prop="property" label="Department" align="center"></el-table-column>
			<el-table-column prop="type" label="Position" align="center"></el-table-column>
			<el-table-column prop="manager" label="Place of origin" align="center"></el-table-column>
			<el-table-column prop="number" label="ID Card No" align="center"></el-table-column>
		</el-table>
		<div style="margin-top: 20px">
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
					code: 'He gu',
					name: 'male',
					property: 'Information Dept',
					type: 'Head of Information Dept',
					manager: 'Shen Zhen',
					number: '1231231231231231'
				}, {
					order: '2',
					code: 'He gu',
					name: 'male',
					property: 'Information Dept',
					type: 'Head of Information Dept',
					manager: 'Shen Zhen',
					number: '1231231231231231'
				}, {
					order: '3',
					code: 'He gu',
					name: 'male',
					property: 'Information Dept',
					type: 'Head of Information Dept',
					manager: 'Shen Zhen',
					number: '1231231231231231'
				}, {
					order: '4',
					code: 'He gu',
					name: 'male',
					property: 'Information Dept',
					type: 'Head of Information Dept',
					manager: 'Shen Zhen',
					number: '1231231231231231'
				}, {
					order: '5',
					code: 'He gu',
					name: 'male',
					property: 'Information Dept',
					type: 'Head of Information Dept',
					manager: 'Shen Zhen',
					number: '1231231231231231'
				}, {
					order: '6',
					code: 'He gu',
					name: 'male',
					property: 'Information Dept',
					type: 'Head of Information Dept',
					manager: 'Shen Zhen',
					number: '1231231231231231'
				}, {
					order: '7',
					code: 'He gu',
					name: 'male',
					property: 'Information Dept',
					type: 'Head of Information Dept',
					manager: 'Shen Zhen',
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
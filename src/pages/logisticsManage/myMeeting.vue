<template>

	<div class="views-content">
		<div>
			<div class="snav mb20">
				<ul class="clearfix">
					<li>
						<label>相关联：</label>
						<el-select size="small" class="el-select-my" value="我创建的" placeholder="请选择">
							<el-option value="我创建的"></el-option>
						</el-select>
					</li>

					<li>
						<label>状态：</label>
						<el-select size="small" value="全部" placeholder="请选择">
							<el-option value="全部"></el-option>
						</el-select>
					</li>
					<li>
						<label>关键词：</label>
						<el-input size="small" class='tableSearchInput' placeholder="" icon="search"></el-input>
					</li>

				</ul>
			</div>

			<div class="table mb20">
				<el-table ref="multipleTable" :data="tableData" stripe tooltip-effect="dark" style="width: 100%">
					<el-table-column type="selection" width="55" align="center"></el-table-column>
					<el-table-column prop="order" label="序号" align="center"></el-table-column>
					<el-table-column prop="theme" label="主题" align="center"></el-table-column>
					<el-table-column prop="bookPeople" label="预订人" align="center"></el-table-column>
					<el-table-column prop="status" label="状态" align="center"></el-table-column>
					<el-table-column label="日期" width="200" align="center">
						<template scope="scope">
							{{scope.row.date}}
						</template>
					</el-table-column>
					<el-table-column prop="meetingRoom" label="会议室" align="center"></el-table-column>
				</el-table>
			</div>
			<div class="btn-div">
				<el-button size="small" type="primary" icon="plus">添加</el-button>
				<el-button size="small" type="primary" icon="edit">编辑</el-button>
				<el-button size="small" type="danger" icon="close">删除</el-button>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					order: '1',
					theme: '园区清洁工作',
					bookPeople: '刘晓丽',
					status: '已审批',
					date: '2017-09-22 14:30-16:00',
					meetingRoom: '3栋18楼大会议室'
				}, {
					order: '2',
					theme: '关于学习五讲四美工作会议',
					bookPeople: '李林',
					status: '未审批',
					date: '2017-09-22 15:30-17:00',
					meetingRoom: '5栋5楼C会议室'
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.views-container {
		.snav {
			padding-top: 18px;
			ul {
				li {
					float: left;
					height: 36px;
					line-height: 36px;
					margin-right: 30px;
					label {
						font-weight: normal;
						color: #909090;
					}
				}
			}
		}
		.tableSearchInput{
			width: 150px;
		}
	}
	@media screen and (max-width: 1366px) {
		.el-select-my{
			width: 110px;
		}
	}
	
</style>
<template>

	<div class="views-content">
		<div>
			<div class="snav mb20">
				<ul class="clearfix">
					<li>
						<label>Correlation:</label>
						<el-select size="small" class="el-select-my" value="Create by me" placeholder="Please select">
							<el-option value="Create by me"></el-option>
						</el-select>
					</li>

					<li>
						<label>State:</label>
						<el-select size="small" value="All" placeholder="Please select">
							<el-option value="All"></el-option>
						</el-select>
					</li>
					<li>
						<label>Key:</label>
						<el-input size="small" class='tableSearchInput' placeholder="" icon="search"></el-input>
					</li>

				</ul>
			</div>

			<div class="table mb20">
				<el-table ref="multipleTable" :data="tableData" stripe tooltip-effect="dark" style="width: 100%">
					<el-table-column type="selection" width="55" align="center"></el-table-column>
					<el-table-column prop="order" label="Order" align="center"></el-table-column>
					<el-table-column prop="theme" label="Theme" align="center"></el-table-column>
					<el-table-column prop="bookPeople" label="Reservation person" align="center"></el-table-column>
					<el-table-column prop="status" label="State" align="center"></el-table-column>
					<el-table-column label="Date" width="200" align="center">
						<template scope="scope">
							{{scope.row.date}}
						</template>
					</el-table-column>
					<el-table-column prop="meetingRoom" label="Conference room" align="center"></el-table-column>
				</el-table>
			</div>
			<div class="btn-div">
				<el-button size="small" type="primary" icon="plus">Add</el-button>
				<el-button size="small" type="primary" icon="edit">Edit</el-button>
				<el-button size="small" type="danger" icon="close">Delete</el-button>
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
					theme: 'Park cleaning work',
					bookPeople: 'Liu xiao li',
					status: 'Approved',
					date: '2017-09-22 14:30-16:00',
					meetingRoom: 'Building 3 floor 18 conference room'
				}, {
					order: '2',
					theme: 'Study on wujiangsimei work conference',
					bookPeople: 'Li lin',
					status: 'Unapproved',
					date: '2017-09-22 15:30-17:00',
					meetingRoom: 'Building 5 floor 5C conference room'
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
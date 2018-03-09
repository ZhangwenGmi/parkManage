<template>

	<div class="views-content">
		<div class="c-resContainer">
			<div class="snav">
				<ul class="clearfix">
					<li>
						<label>Status：</label>
						<el-select size="small" value="All" placeholder="Please Select">
							<el-option value="All"></el-option>
						</el-select>
					</li>
					<li>
						<label>Keyword：</label>
						<el-input size="small" class='tableSearchInput' placeholder=""  style="width: 150px!important;" icon="search"></el-input>
					</li>
					<li>
						<label>Voice：</label>
						<el-checkbox></el-checkbox>
					</li>
					<li>
						<label>Video：</label>
						<el-checkbox></el-checkbox>
					</li>
					<li>
						<label>Projector：</label>
						<el-checkbox></el-checkbox>
					</li>
				</ul>
			</div>

			<div class="list-metting">
				<ul class="clearfix">
					<li v-for="item in meetingList">
						<dl>
							<dt>
    									{{item.palce}}
    								</dt>
							<dd>
								<div v-for="items in item.content">
									<span>{{items}}</span>
								</div>
								<div class="status-div">
									<span v-if="item.status == 0" class="idling">Idle</span>
									<span v-if="item.status == 1" class="keep">In use</span>
								</div>
							</dd>
						</dl>
					</li>
				</ul>
			</div>

			<div class="pages">
				<el-pagination :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="9">
				</el-pagination>
			</div>
		</div>
	</div>

</template>

<script>
	//0 空闲，1占用
	export default {
		data() {
			return {
				value: '',
				options: [{
					value: '0',
					label: 'All'
				}],
				meetingList: [{
					palce: 'Large conference room, 18th Floor, Building 3',
					content: ['It can accommodate 20 people', 'Voice, Video', 'Projector'],
					status: 0
				}, {
					palce: 'Small conference room, 8th Floor, Building 2',
					content: ['It can accommodate 10 people', 'Voice, Video'],
					status: 1
				}, {
					palce: 'Temporary conference room, 19th Floor, Building 3',
					content: ['It can accommodate 6 people', 'Voice, Video', 'Projector'],
					status: 0
				}, {
					palce: 'B conference room, 5th Floor, Building 12',
					content: ['It can accommodate 15 people', 'Voice, Video', 'Projector'],
					status: 1
				}, {
					palce: 'F conference room, 3th Floor, Building 6',
					content: ['It can accommodate 30 people', 'Voice, Video', 'Projector'],
					status: 1
				}, {
					palce: 'A conference room, 5th Floor, Building 12',
					content: ['It can accommodate 15 people', 'Voice, Video'],
					status: 0
				}, {
					palce: 'A conference room, 4th Floor, Building 11',
					content: ['It can accommodate 35 people', 'Voice, Video', 'Projector'],
					status: 1
				}, {
					palce: 'Temporary conference room, 7th Floor, Building 8',
					content: ['It can accommodate 10 people', 'Voice, Video', 'Projector'],
					status: 0
				}, {
					palce: 'Large conference room, 8th Floor, Building 10',
					content: ['It can accommodate 20 people', 'Voice, Video', 'Projector'],
					status: 1
				}, ]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.views-content {
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
		.list-metting {
			padding-top: 25px;
			li {
				float: left;
				margin: 10px 50px;
				width: 350px;
				&:last-child {
					margin-right: 0px;
				}
				dl {
					dt {
						background-color: #7ab5df;
						color: #fff;
						height: 40px;
						line-height: 40px;
						text-align: center;
					}
					dd {
						background-color: #f5f5f5;
						padding: 10px 15px 0px 15px;
						height: 178px;
						position: relative;
						span {
							display: block;
							height: 36px;
							line-height: 36px;
							margin-bottom: 6px;
							color: #6f6f6f;
						}
						.status-div {
							text-align: right;
							position: absolute;
							right: 10px;
							bottom: 0;
							span {
								display: inline-block;
								&:before {
									content: '';
									display: inline-block;
									width: 8px;
									height: 8px;
									border-radius: 8px;
									margin-right: 6px;
								}
								&.idling {
									color: #1cbfb0;
									&:before {
										background-color: #1cbfb0;
									}
								}
								&.keep {
									color: #d84c49;
									&:before {
										background-color: #d84c49;
									}
								}
							}
						}
					}
				}
			}
		}
		.pages {
			text-align: center;
		}
	}
</style>
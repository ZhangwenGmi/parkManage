<template>

	<div class="views-content">
		<div class="c-resContainer">
			<div class="snav">
				<ul class="clearfix">
					<li>
						<label>使用状态：</label>
						<el-select size="small" value="全部" placeholder="请选择">
							<el-option value="全部"></el-option>
						</el-select>
					</li>
					<li>
						<label>关键词：</label>
						<el-input size="small" class='tableSearchInput' placeholder=""  style="width: 150px!important;" icon="search"></el-input>
					</li>
					<li>
						<label>支持语音：</label>
						<el-checkbox></el-checkbox>
					</li>
					<li>
						<label>支持视频：</label>
						<el-checkbox></el-checkbox>
					</li>
					<li>
						<label>投影仪：</label>
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
									<span v-if="item.status == 0" class="idling">空闲</span>
									<span v-if="item.status == 1" class="keep">使用中</span>
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
					label: '全部'
				}],
				meetingList: [{
					palce: '3栋18楼大会议室',
					content: ['可容纳20人', '支持语音及视频连接', '有投影仪'],
					status: 0
				}, {
					palce: '2栋8楼小会议室',
					content: ['可容纳10人', '支持语音及视频连接'],
					status: 1
				}, {
					palce: '3栋19楼临时会议室',
					content: ['可容纳6人', '支持语音及视频连接', '有投影仪'],
					status: 0
				}, {
					palce: '12栋5楼B会议室',
					content: ['可容纳150人', '支持语音及视频连接', '有投影仪'],
					status: 1
				}, {
					palce: '6栋3楼F会议室',
					content: ['可容纳30人', '支持语音及视频连接', '有投影仪'],
					status: 1
				}, {
					palce: '12栋5楼A会议室',
					content: ['可容纳15人', '支持语音及视频连接'],
					status: 0
				}, {
					palce: '11栋4楼A会议室',
					content: ['可容纳35人', '支持语音及视频连接', '有投影仪'],
					status: 1
				}, {
					palce: '8栋7楼临时会议室',
					content: ['可容纳10人', '支持语音及视频连接', '有投影仪'],
					status: 0
				}, {
					palce: '10栋8楼大会议室',
					content: ['可容纳20人', '支持语音及视频连接', '有投影仪'],
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
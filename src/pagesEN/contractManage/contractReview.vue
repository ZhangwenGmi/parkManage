<template>
<div id="container">
	<div class="views-container">
		<ul class="views-list">
			<li>
				<div class="title">
					<span>Contract Information</span>
				</div>
				<div class="article clearfix">
					<ul class="ul">
						<li>
							<label> Header：</label>
							<span>FLTEST133467461</span>
						</li>
						<li>
							<label>Contract No：</label>
							<span>ZL-16070610121</span>
						</li>
						<li>
							<label>Business：</label>
							<span>IMAX Theater</span>
						</li>
						<li>
							<label>Title：</label>
							<span>Rent holder</span>
						</li>
						<li>
							<label>Type：</label>
							<span>Standard</span>
						</li>
					</ul>
					<ul class="ul">
						<li>
							<label>Project Name：</label>
							<span>IMAX software development</span>
						</li>
						<li>
							<label>Approval：</label>
							<span class="blue">No.10793</span>
						</li>
						<li>
							<label>Agency：</label>
							<span>IMAX</span>
						</li>
						<li>
							<label>Operation State：</label>
							<span>Operating</span>
						</li>
					</ul>
				</div>
			</li>

			<li>
				<div class="title">
					<span>Contract Text</span>
				</div>
				<div class="article"></div>
			</li>

			<li>
				<div class="title">
					<span>Appendix</span>
				</div>
				<div class="article"></div>
			</li>

			<li>
				<div class="title">
					<span>Approval Process</span>
				</div>
				<div class="article">
					<ul class="reManList clearfix">
						<li>
							<span>Principal</span>
						</li>
						<li>
							<span>Leader</span>
						</li>
						<li>
							<span>Vice Manager</span>
						</li>
						<li>
							<span>General Manager</span>
						</li>
					</ul>
				</div>
			</li>

			<li>
				<div class="title">
					<span>Approval History</span>
				</div>
				<div class="article">
					<ul class="record-list">
						<li v-for="(item,index) in recordList">
							<span>{{index+1}}</span>
							<span>{{item.resMan}}</span>
							<span>{{item.time}}</span>
							<span>{{item.status}}</span>
							<span class="blue">{{item.result}}</span>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			recordList: [{
				'resMan': 'admin',
				'time': 'Time（2017-09-10 13:17）',
				'status': 'Consignor',
				'result': 'Submit'
			}, {
				'resMan': 'admin',
				'time': 'Time（2017-09-11 11:11）',
				'status': 'Principal',
				'result': 'Agree'
			}, {
				'resMan': 'admin',
				'time': 'Time（2017-09-10 14:38）',
				'status': 'Leader',
				'result': 'Agree'
			}, {
				'resMan': 'admin',
				'time': 'Time（2017-09-10 20:24）',
				'status': 'Vice Manager',
				'result': 'Agree'
			}, {
				'resMan': 'admin',
				'time': 'Time（2017-09-10 20:29）',
				'status': 'General Manager',
				'result': 'Agree'
			}]
		}
	}
}
</script>

<style lang="scss" scoped>
.views-container {
	background-color: #f4f6f9;
	.blue {
		color: #5da4d7;
	}
	.views-list {
		&>li {
			margin-bottom: 19px;
		}
		li {
			background-color: #fff;
			.title {
				height: 50px;
				line-height: 50px;
				border-bottom: 2px solid #b7e0f9;
				span {
					display: inline-block;
					height: 50px;
					padding-left: 20px;
					padding-right: 30px;
					color: #1199ec;
					border-bottom: 2px solid #1199ec;
				}
			}
			&:nth-child(2),
			&:nth-child(3) {
				.article {
					padding: 25px 0;
				}
			}
		}
	}
	.article {
		color: #838383;
		padding: 20px 0;
		li {
			height: 40px;
			line-height: 40px;
		}
		.ul {
			float: left;
			margin-right: 10%;
			label {
				display: inline-block;
				font-weight: normal;
				width: 150px;
				text-align: right;
			}
		}
		.reManList {
			padding: 20px 0;
			padding-left: 80px;
			li {
				float: left;
				position: relative;
				width: 190px;
				margin-right: 33px;
				span {
					display: inline-block;
					padding: 0 15px;
					height: 40px;
					width: 150px;
					line-height: 40px;
					background-color: #dbeffc;
					color: #545555;
					border-radius: 4px;
					text-align: center;
					&:last-child {
						padding: 0 20px;
					}
				}
				&:after {
					content: '';
					display: block;
					width: 10px;
					height: 10px;
					background: url(../../assets/images/common/back.png) no-repeat;
					transform: rotate(180deg);
					position: absolute;
					top: 50%;
					margin-top: -6px;
					right: 0;
				}
				&:nth-child(3) {
					&:after {
						right: 6px;
					}
				}
				&:last-child {
					&:after {
						display: none;
					}
				}
			}
		}
		.record-list {
			padding: 0 20px;
			width: 80%;
			li {
				background-color: #f2f2f2;
				height: 40px;
				line-height: 40px;
				margin-bottom: 18px;
				padding-left: 20px;
				color: #515151;
				span {
					display: inline-block;
					width: 25%;
					text-align: left;
					&:nth-child(1) {
						width: 5%;
					}
					&:nth-child(2) {
						width: 14%;
					}
				}
			}
		}
	}
} //媒体查询兼容小屏
@media screen and (max-width: 1366px) {
	.views-container {
		.article {
			ul.record-list {
				li {
					span {
						&:nth-child(3) {
							margin-right: 5%;
						}
						&:nth-child(4) {
							width: 23%;
						}
					}
				}
			}
		}
	}
}
</style>


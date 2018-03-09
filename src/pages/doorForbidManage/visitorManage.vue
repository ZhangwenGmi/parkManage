<template lang="html">
	<div id="container">
		<div class="views-container">
			<div class="views-title views-title-a">
				<ul class="clearfix" id="changeTab">
					<li>
						<router-link to="/doorForbidManage/visitorManage/visitorAnalysis">访客分析</router-link>
					</li>
					<li>
						<router-link to="/doorForbidManage/visitorManage/visitorInfo">访客详情</router-link>
					</li>
					<li>
						<router-link to="/doorForbidManage/visitorManage/QRCodeStatistics">二维码统计</router-link>
					</li>
				</ul>
			</div>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>
<script>
	export default {}
</script>
<style lang="scss" scoped>
	.views-content {
		span {
			color: #a6a6a6;
		}
		.c-list-div {
			margin-top: 15px;
			li {
				dt {
					height: 30px;
					line-height: 30px;
					.title-name {
						float: left;
						color: #868686;
						font-weight: normal;
					}
					.floatL {
						float: right;
					}
				}
				dd {
					height: 200px;
					line-height: 200px;
					background-color: #f5f5f5;
					vertical-align: middle;
					text-align: center;
					color: #b8b8b8;
				}
			}
		}
	}
</style>
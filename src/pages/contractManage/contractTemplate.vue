<template lang="html">
<div id="container">
    <div class="views-container">
        <div class="views-title">
            <ul class="clearfix">
                <li class="active">合同主题库</li>
            </ul>
        </div>
        <div class="views-content">
            <ul class="temp-list">
            	<li v-for="item in tempList">
            		<h3 v-bind:style="{ background: item.color}">{{item.name}}</h3>
					<div class="temp-b">
						<a href="javascript:;" class="temp-view"><i class="el-icon-view"></i><span>预览</span></a>
						<a href="javascript:;" class="temp-download"><i class="el-icon-download"></i><span>下载</span></a>
					</div>
            	</li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>

export default {
    props: {},
    data: () => ({
        tempList: [
        	{
        		name: '买卖合同',
        		color: '#7ab5df'
        	},
        	{
        		name: '租赁合同',
        		color: '#a0cba1'
        	},
        	{
        		name: '赠与合同',
        		color: '#79bedc'
        	},
        	{
        		name: '借款合同',
        		color: '#8da3e9'
        	},
        	{
        		name: '融资租赁合同',
        		color: '#b893d9'
        	},
        	{
        		name: '承揽合同',
        		color: '#e89d9d'
        	},
        	{
        		name: '建设工程合同',
        		color: '#b893d9'
        	},
        	{
        		name: '运输合同',
        		color: '#79bedc'
        	},
        	{
        		name: '技术合同',
        		color: '#e89d9d'
        	},
        	{
        		name: '保管合同',
        		color: '#8993b3'
        	},
        	{
        		name: '仓储合同',
        		color: '#a0cba1'
        	},
        	{
        		name: '委托合同',
        		color: '#b893d9'
        	},
        	{
        		name: '行纪合同',
        		color: '#8da3e9'
        	},
        	{
        		name: '居间合同',
        		color: '#8993b3'
        	},
        	{
        		name: '供电、水、气合同',
        		color: '#b893d9'
        	}
        ]
    }),
    mounted: function() {
        
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>
.temp-list {
	overflow: hidden;
	padding: 40px 0 0 20px;
	li {
		width: 200px;
		height: 160px;
		float: left;
		margin: 0 40px 30px 0;
		h3 {
			margin:0;
			line-height: 120px;
			padding: 0;
			text-align: center;
			font-size: 22px;
			color: #fff;
			font-weight: 300;
		}
		.temp-b {
			height: 40px;
			overflow: hidden;
			.temp-view {
				float: left;
				margin: 5px 0;
				height: 30px;
				font-size: 14px;
				color: #8f8f8f;
				text-decoration: none;
				&:hover {
					color: #8f8f8f;
					text-decoration: none;
				}
				span {
					margin-left: 5px;
				}
			}
			.temp-download {
				float: right;
				margin: 5px 0;
				height: 30px;
				font-size: 14px;
				color: #129aed;
				text-decoration: none;
				&:hover {
					color: #129aed;
					text-decoration: none;
				}
				span {
					margin-left: 5px;
				}
			}
		}
	}
}
</style>
<template lang="html">
<div id="container">
    <div class="views-container">
        <div class="views-title">
            <ul class="clearfix">
                <li class="active">Contract Template</li>
            </ul>
        </div>
        <div class="views-content">
            <ul class="temp-list">
            	<li v-for="item in tempList">
            		<h3 v-bind:style="{ background: item.color}">{{item.name}}</h3>
					<div class="temp-b">
						<a href="javascript:;" class="temp-view"><i class="el-icon-view"></i><span>Preview</span></a>
						<a href="javascript:;" class="temp-download"><i class="el-icon-download"></i><span>Download</span></a>
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
        		name: 'Sales Contracts',
        		color: '#7ab5df'
        	},
        	{
        		name: 'Leasing Contracts',
        		color: '#a0cba1'
        	},
        	{
        		name: 'Gift Contracts',
        		color: '#79bedc'
        	},
        	{
        		name: 'Contracts for Loan of Money',
        		color: '#8da3e9'
        	},
        	{
        		name: 'Financial Leasing Contracts',
        		color: '#b893d9'
        	},
        	{
        		name: 'Work-for-Hire Contracts',
        		color: '#e89d9d'
        	},
        	{
        		name: 'Contracts for Construction Projects',
        		color: '#b893d9'
        	},
        	{
        		name: 'Carriage Contracts',
        		color: '#79bedc'
        	},
        	{
        		name: 'Technology Contracts',
        		color: '#e89d9d'
        	},
        	{
        		name: 'Safe-keeping Contracts',
        		color: '#8993b3'
        	},
        	{
        		name: 'Warehousing Contracts',
        		color: '#a0cba1'
        	},
        	{
        		name: 'Trading Trust Contracts',
        		color: '#b893d9'
        	},
        	{
        		name: 'Brokerage Contracts',
        		color: '#8da3e9'
        	},
        	{
        		name: 'Brokerage Contracts',
        		color: '#8993b3'
        	},
        	{
        		name: 'Contracts for Supply of Power, Water, Gas or Heat',
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
			height: 120px;
			margin: 0;
			line-height: 30px;
			padding: 20px;
			text-align: center;
			font-size: 18px;
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
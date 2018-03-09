<template>
	<div id="container">
		<div class="views-container">
			<ul class="views-list">
				<li>
					<div class="title">
						<span>合同信息</span>
					</div>
					<div class="article clearfix">
						<ul class="ul">
							<li>
								<label>文件标题：</label>
								<span>FLTEST133467461</span>
							</li>
							<li>
								<label>合同编号：</label>
								<span>ZL-16070610121</span>
							</li>
							<li>
								<label>商户品牌：</label>
								<span>IMAX巨幕影院</span>
							</li>
							<li>
								<label>类型：</label>
								<span>大租户</span>
							</li>
							<li>
								<label>合同类型：</label>
								<span>标准</span>
							</li>
						</ul>
						<ul class="ul">
							<li>
								<label>项目名称：</label>
								<span>某商业项目</span>
							</li>
							<li>
								<label>商务条件审批号：</label>
								<span class="blue">10793</span>
							</li>
							<li>
								<label>经销商：</label>
								<span>IMAX 公司</span>
							</li>
							<li>
								<label>运营状态：</label>
								<span>运营中</span>
							</li>
						</ul>
					</div>
				</li>
				
				<li>
					<div class="title">
						<span>合同文本</span>
					</div>
					<div class="article"></div>
				</li>
				
				<li>
					<div class="title">
						<span>附件</span>
					</div>
					<div class="article"></div>
				</li>
				
				<li>
					<div class="title">
						<span>审批流程</span>
					</div>
					<div class="article">
						<ul class="reManList clearfix">
							<li>
								<span>项目负责人</span>
							</li>
							<li>
								<span>总部运营人</span>
							</li>
							<li>
								<span>副总经理</span>
							</li>
							<li>
								<span>总经理</span>
							</li>
						</ul>
					</div>
				</li>
				
				<li>
					<div class="title">
						<span>审批记录</span>
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
	export default{
		data(){
			return{
				recordList:[
					{
						'resMan':'admin',
						'time':'审批时间（2017-09-10 13:17）',
						'status':'委托人',
						'result':'发起审批'
					},{
						'resMan':'admin',
						'time':'审批时间（2017-09-11 11:11）',
						'status':'运营负责人',
						'result':'同意发起人意见'
					},{
						'resMan':'admin',
						'time':'审批时间（2017-09-10 14:38）',
						'status':'总部运营负责人',
						'result':'同意发起人意见'
					},{
						'resMan':'admin',
						'time':'审批时间（2017-09-10 20:24）',
						'status':'副总经理',
						'result':'同意发起人意见'
					},{
						'resMan':'admin',
						'time':'审批时间（2017-09-10 20:29）',
						'status':'总经理',
						'result':'同意发起人意见'
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.views-container{
		background-color: #f4f6f9;
		
		.blue{
			color: #5da4d7;
		}
		.views-list{
			&>li{
				margin-bottom: 19px;
			}
			li{
				background-color: #fff;
				
				
				.title{
					height: 50px;
					line-height: 50px;
					border-bottom: 2px solid #b7e0f9;
					
					span{
						display: inline-block;
						height: 50px;
						padding-left: 20px;
    					padding-right: 30px;
    					color: #1199ec;
    					border-bottom: 2px solid #1199ec;
					}
				}
				
				&:nth-child(2),&:nth-child(3){
					.article{
						padding: 25px 0;
					}
				}
			}
		}
		
		.article{
			color: #838383;
			padding: 20px 0;
			
			
			li{
				height: 40px;
				line-height: 40px;
			}
			.ul{
				float: left;
				margin-right: 10%;
				
				label{
					display: inline-block;
					font-weight: normal;
					width: 150px;
					text-align: right;
				}
			}
			
			.reManList{
				padding: 20px 0;
				padding-left: 80px;
				
				li{
					float: left;
					position: relative;
					width: 150px;
					margin-right: 33px;
					
					
					span{
						display: inline-block;
						padding: 0 15px;
						height: 40px;
						line-height: 40px;
						background-color: #dbeffc;
						color: #545555;
						border-radius: 4px;
						text-align: center;
						
						&:last-child{
							padding: 0 20px;
						}
					}
					
					&:after{
						content: '';
						display: block;
						width: 10px;
						height: 10px;
						background: url(../../assets/images/common/back.png) no-repeat;
						transform: rotate(180deg);
						position: absolute;
						top:50%;
						margin-top: -6px;
						right: 0;
					}
					&:nth-child(3){
						&:after{
							right:6px;
						}
					}
					
					&:last-child{
						&:after{
							display: none; 
						}
					}
				}
			}
			
			.record-list{
				padding: 0 20px;
				width: 80%;
				
				li{
					background-color: #f2f2f2;
					height: 40px;
					line-height: 40px;
					margin-bottom: 18px;
					padding-left: 20px;
					color: #515151;
					
					span{
						display: inline-block;
						width: 25%;
						text-align: left;

						&:nth-child(1){
							width: 5%;
						}
						&:nth-child(2){
							width: 14%;
						}
					}
				}
			}
		}
	}
	
	//媒体查询兼容小屏
	@media screen and (max-width: 1366px) {
		.views-container{
			.article{
				ul.record-list{
			   		li{
			   			span{
			   				&:nth-child(3){
								margin-right:5%;
							}
							&:nth-child(4){
								width: 23%;
							}
			   			}
			   		}
			   	}
			}
		}
	   
	}

	
</style>


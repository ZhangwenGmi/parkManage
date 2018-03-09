<template lang="html">
  <div id="container">
    <div class="views-container">
    	<div class="views-title">
    		<ul class="clearfix">
    			<li class="active">Campus Bulletin</li>
    		</ul>
    	</div>
    	
    	<div class="views-content">
    		<div class="c-list-div">
    		
    				<el-collapse accordion>
    					 <el-collapse-item v-for="(item,index) in announList">
					 				<template  slot="title">
										<label>{{item.title}}</label>
					 				</template>
					 				<div class="dd">
					 					<article>
	    								<div class="article-title">{{item.depart}}：</div>
											<div class="article-content">{{item.content}}</div>
					 						<div class="article-footer">
												<span>{{item.ascription}}</span>
												<span>{{item.time}}</span>
											</div>
					 					</article>
					 				</div>
    					 </el-collapse-item>
    				</el-collapse>
    				
    		</div>
    	</div>
    </div>
  </div>
</template>


<script>
	export default{
		data(){
			return{
				showFlag:true,
				nowIndex :0,
				announList:[
					{
						'title':'On the announcement of the first expo',
						'depart':'Various departments of the park',
						'content':'According to the plan, in order to rich campus culture life, promote the comprehensive sports activities, we are scheduled for November 13, 2017 lines of the garden will run the second park, please organize registration work of the department.',
						'ascription':'Smart park office',
						'time':'2017-9-21'
					},
					{
						'title':'About the five lecture three good study announcement',
						'depart':'Various departments of the park',
						'content':'According to the plan, in order to rich campus culture life, promote the comprehensive sports activities, we are scheduled for November 13, 2017 lines of the garden will run the second park, please organize registration work of the department.',
						'ascription':'Smart park office',
						'time':'2017-9-21'
					},
					{
						'title':'About the five lecture three good study announcement',
						'depart':'Various departments of the park',
						'content':'According to the plan, in order to rich campus culture life, promote the comprehensive sports activities, we are scheduled for November 13, 2017 lines of the garden will run the second park, please organize registration work of the department.',
						'ascription':'Smart park office',
						'time':'2017-9-21'
					}
				]
			}
		},
		methods:{
			
		},
		mounted:function(){

		}
	}
</script>

<style lang="scss" scoped>
	.views-content{
		.c-list-div{
			margin-top: 30px;

			.dd{
					padding-right: 16px;
					padding-top: 18px;
					.head{
						text-align: center;

						.icon-img{
							float: right;
							cursor: pointer;
							vertical-align: top;
							img{
								vertical-align: top;
							}
						}
					}
					article{
						width: 100%;
						.article-title{
							margin-bottom: 25px;
						}
						.article-content{
							text-indent: 4rem;
							margin-bottom: 25px;
						}
						.article-footer{
							span{
								display: block;
								text-align: right;
								
								&:first-child{
									margin-bottom: 18px;
								}
							}
						}
					}
				}
			
			
			li{
				margin-bottom: 25px;
				dl{
					font-weight: normal;
				}
				dt{
					font-weight: normal;
					height: 50px;
					line-height: 50px;
					background-color: #f5f5f5;
					color: #5e5e5e;
					text-align: center;
					padding-right: 16px;
					label{
						font-weight: normal;
					}
					span{
						float: right;
						cursor: pointer;
					}
				}
				
				
			}
		}
	}
</style>





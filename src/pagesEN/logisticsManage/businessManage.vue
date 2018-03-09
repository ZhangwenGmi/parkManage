<template>
	<div id="container">
		<div class="views-container">
			<div class="views-title views-title-a">
	    		<ul class="clearfix">
	    			<li>
                   	 	<router-link to="/EN/logisticsManage/businessManage/conferenceManage">Conference Room</router-link>
	    			</li>
	    			<li>
                   	 	<router-link to="/EN/logisticsManage/businessManage/myMeeting">My Conference</router-link>
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
	export default{
		
	}
</script>

<style lang="scss">
	.views-content{
		.snav{
			padding-top:18px;
			ul{
				li{
					float: left;
					height: 36px;
					line-height: 36px;
					margin-right: 30px;
					label{
						font-weight: normal;
						color: #909090;
					}
				}
			}	
		}
		.list-metting{
			padding-top: 25px;
			li{
				float: left;
				margin:10px 50px;
				&:last-child{
					margin-right: 0px;
				}
				
				dl{
					dt{
						background-color: #7ab5df;
						color: #fff;
						height: 40px;
						line-height: 40px;
						text-align: center;
					}
					dd{
						background-color: #f5f5f5;
						padding: 10px 15px 0px 15px;
						height: 178px;
						position: relative;
						span{
							display: block;
							height: 36px;
							line-height: 36px;
							margin-bottom: 6px;
							color:#6f6f6f;
						}
						
						.status-div{
							text-align: right;
							position: absolute;
							right:10px;
							bottom:0;	
							
							span{
								display: inline-block;
								
								&:before{
									content: '';
									display: inline-block;
									width: 8px;
									height: 8px;
									border-radius: 8px;
									margin-right: 6px;
								}
								
								&.idling{
									color:#1cbfb0;
									&:before{
										background-color: #1cbfb0;
									}	
								}
								&.keep{
									color:#d84c49; 
									&:before{
										background-color: #d84c49;
									}       
								}
								
							}
						}
					}
				}
			}
		}
		
		.pages{
			text-align: center;
		}
	}
</style>
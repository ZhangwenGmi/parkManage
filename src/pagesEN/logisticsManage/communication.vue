<template>
	<div id="container">
		<div class="views-container">
			<div class="views-title">
	    		<ul class="clearfix">
	    			<li class="active">Comments</li>
	    		</ul>
	    	</div>
    		<div class="views-content">
    			<ul class="messageList">
    				<li class="mb20" v-for="(item,index) in mesList">
    					<dl>
    						<dt class="mb10">
    							<span class="gray">{{index+1}}.</span>
    							<span class="gray ml10">Date and Time：</span>
    							<span class="gray mr20">{{item.time}}</span>
    							<span class="gray">From</span>
    							<span class="blue">{{item.author}}</span>
    						</dt>
    						<dd>
								<div class="mb20">
									<span>Comments：</span>
									<span>{{item.mes}}</span>
								</div>
								<div class="green">
									<span>Reply：</span>
									<span>{{item.revert}}</span>
									<el-badge  class="item">
									  <el-button size="small">Reply</el-button>
									</el-badge>
								</div>
    						</dd>
    					</dl>
    				</li>
    			</ul>
    		</div>
		</div>
	</div>

</template>

<script>
	export default{
		data(){
			return{
				mesList:[
					{
						'time':'2017-09-21 12:37',
						'author':'Xiaoling Ma',
						'mes':'The platform is not friendly enough and needs to provide user interaction.',
						'revert':"Dear users, please point out the specific unfriendly menu and interaction. We are humble to listen to the user's opinions and improve the usability of the platform."
					},
					{
						'time':'2017-09-16 12:02',
						'author':'Tianhao Song',
						'mes':'Hello, how can I master the use of the platform faster?',
						'revert':'Dear users, please refer to the instructions of the platform for relevant operation.'
					},
					{
						'time':'2017-09-12 10:47',
						'author':'Lianlu Ming',
						'mes':'It might be better to add some new features.',
						'revert':'Dear users, we are thinking about something new and we can meet you soon.'
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.views-content{
		.messageList{
			padding-top:20px;
			dl{
				dt{
					font-weight: normal;	
					padding-left: 6px;
				}
				dd{
					background-color: #f5f5f5;
					padding: 30px 26px 25px 25px;
					
					
					div:first-child{
						color: #4d4d4d;
					}
					.el-button{
						color:#1cbfb0;
						border-color: #1cbfb0;
					}
					
					.el-badge{
						float: right;
					}
				}
			}
		}
	}
</style>


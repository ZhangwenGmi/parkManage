<template>
	<div id="container">
		<div class="views-container">
			<div class="views-title">
	    		<ul class="clearfix">
	    			<li class="active">留言评价</li>
	    		</ul>
	    	</div>
    		<div class="views-content">
    			<ul class="messageList">
    				<li class="mb20" v-for="(item,index) in mesList">
    					<dl>
    						<dt class="mb10">
    							<span class="gray">{{index+1}}.</span>
    							<span class="gray ml10">时间：</span>
    							<span class="gray mr20">{{item.time}}</span>
    							<span class="gray">来自</span>
    							<span class="blue">{{item.author}}</span>
    						</dt>
    						<dd>
								<div class="mb20">
									<span>用户留言：</span>
									<span>{{item.mes}}</span>
								</div>
								<div class="green">
									<span>已回复：</span>
									<span>{{item.revert}}</span>
									<el-badge  class="item">
									  <el-button size="small">回复</el-button>
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
						'author':'马小玲',
						'mes':'平台使用不够友好，需要提供用户交互友好性。',
						'revert':'尊敬的用户，请指出具体不够友好的菜单及交互，我们谦虚听取用户的意见，提高平台的可用性。'
					},
					{
						'time':'2017-09-16 12:02',
						'author':'宋天浩',
						'mes':'你好，请问如何能更快的掌握平台的使用。',
						'revert':'尊敬的用户，请参考平台使用说明书进行相关操作。'
					},
					{
						'time':'2017-09-12 10:47',
						'author':'明廉路',
						'mes':'增加一些新功能，或许会更好。',
						'revert':'尊敬的用户，我们正在思考一些新东西，要不了多久就可以跟大家见面。'
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


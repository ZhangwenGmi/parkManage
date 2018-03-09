<template lang="html">
  <div id="container">
    <div class="views-container">
    	<div class="views-title">
    		<ul class="clearfix">
    			<!--<li class="active">供应商准入标准</li>
    			<li>预选供应商准入标准</li>	-->
    			<li v-for="item,index in navList"  :class="{active : index === nowIndex}">
    				{{item}}
    			</li>
    		</ul>
    	</div>
    	
    	<div class="views-content">
    			<div class="c-list-div">
    				<ul>
    					<li>
    						<dl>
    							<dt class="clearfix">
    								<div class="title-name">公司资质</div>
    								<div class="scores-of">评分占比：10%</div> 
    							</dt>
    							<dd>
    								<span>供应商公司资质是否符合国家标准，达到目标要求</span>
    							</dd>
    						</dl>
    					</li>
    					<li>
    						<dl>
    							<dt class="clearfix">
    								<div class="title-name">售前交流</div>
    								<div class="scores-of">评分占比：20%</div> 
    							</dt>
    							<dd>
    								<span>供应商前期服务支持是否满足要求</span>
    							</dd>
    						</dl>
    					</li>
    					<li>
    						<dl>
    							<dt class="clearfix">
    								<div class="title-name">售时服务</div>
    								<div class="scores-of">评分占比：7%</div> 
    							</dt>
    							<dd>
    								<span>供应商在交易过程中是否提供样机，货物是否属实，供货日期是否准时，采购人的交易评价，产品使用后是否与说明相符等方面</span>
    							</dd>
    						</dl>
    					</li>
    				</ul>
    			</div>
    	</div>
    </div>
  </div>
</template>


<script>
	export default{
		data(){
			return{
				nowIndex:0,
				navList:['供应商准入标准','预选供应商准入标准','待处理供应商准入评分','供应商准入评分']
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.views-content{
		.c-list-div{
			li{
				dt{
					height: 50px;
					line-height: 50px;
					.title-name{
						float: left;
						color: #868686;
						font-weight: normal;
					}
					.scores-of{
						float: right;
						font-weight: normal;
						color: #4296d2;
					}
				}
				
				dd{
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





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
    								<div class="title-name">Company Qualification</div>
    								<div class="scores-of">Scores of：10%</div> 
    							</dt>
    							<dd>
    								<span>Whether the qualification of supplier company meets the national standard and meets the target requirement</span>
    							</dd>
    						</dl>
    					</li>
    					<li>
    						<dl>
    							<dt class="clearfix">
    								<div class="title-name">Pre-sale Communication</div>
    								<div class="scores-of">Scores of：20%</div> 
    							</dt>
    							<dd>
    								<span>Whether the supplier's pre-service support meets the requirements</span>
    							</dd>
    						</dl>
    					</li>
    					<li>
    						<dl>
    							<dt class="clearfix">
    								<div class="title-name">Service</div>
    								<div class="scores-of">Scores of：70%</div> 
    							</dt>
    							<dd>
    								<span>Whether the supplier provides a prototype in the process of the transaction, whether the goods are true, whether the delivery date is on time, the purchaser's transaction evaluation, and whether the product is in conformity with the specification</span>
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
				navList:['Supplier Standard','Primary Supplier Standard','Pending Supplier Grade','Supplier Grade']
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





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
				<div class="food-content">
					<div class="place"><b>位置</b></div>
					<div class="place-select">
						<ul class="clearfix">
							<li v-for="(item,index) in foodPlace">
								<span @click="activeClick(index)" :class="{active:index == placeIndex}">{{item}}</span> 
							</li>
						</ul>
					</div>
					<div class="nav-list">
						<ul>
							<li v-for="(item,index) in secNav">
								<span @click="secNavE(index)" :class="{active:index == secIndex}">{{item}}</span>
							</li>
						</ul>
					</div>
					<div class="food-lists">
						<ul class="clearfix">
							<li v-for="item in foodList">
								<dl>
									<dt class="clearfix">
										<img :src="item.src"/>
									</dt>
									<dd>
										<div class="details">
											<div class="foodName">{{item.name}}</div>
											<div class="stars">
												<el-rate  v-model="item.star" disabled></el-rate>
												<span>&yen;{{item.price}}</span>
											</div>
											<div class="article">{{item.appraise}}</div>
										</div>
									</dd>
								</dl>
							</li>
						</ul>
					</div>
					
					<div class="pages">
					    <el-pagination
					      :page-sizes="[10]"
					      :page-size="100"
					      layout="total, sizes, prev, pager, next, jumper"
					      :total="9">
					    </el-pagination>
					</div>
				</div>
			</div>
    	</div>
    </div>
  </div>
</template>


<script>
	import food from '../../assets/images/common/food.png';
	export default{
		data(){
			return{
				nowIndex:0,
				placeIndex:0,
				secIndex:0,
				navList:['菜品管理','运营统计'],
				foodPlace:['1号食堂','2号食堂','3号食堂','4号食堂','5号食堂','6号食堂','7号食堂','8号食堂','9号食堂','10号食堂','11号食堂','12号食堂'],
				secNav:['菜品','人气','价格','评价'],
				foodList:[
					{
						'src':food,
						'name':'宫爆鸡丁',
						'star':5,
						'price':34,
						'appraise':'“春天里来吃过一次，久久不能忘怀”'
					},
					{
						'src':food,
						'name':'东坡肉',
						'star':5,
						'price':37,
						'appraise':'“味道不错，好满足,好开心”'
					},
					{
						'src':food,
						'name':'红烧排骨',
						'star':5,
						'price':40,
						'appraise':'“跟老家妈妈的手艺很像，很棒”'
					},
					{
						'src':food,
						'name':'可乐鸡翅',
						'star':3,
						'price':46,
						'appraise':'“可乐有点多，有点腻了”'
					},
					{
						'src':food,
						'name':'清蒸鲈鱼',
						'star':5,
						'price':42,
						'appraise':'“鱼刺很少，已经很少吃到这么好”'
					},
					{
						'src':food,
						'name':'虾饺',
						'star':5,
						'price':28,
						'appraise':'“很精致的菜品，先拍照再吃”'
					},
					{
						'src':food,
						'name':'清炒菜心',
						'star':3,
						'price':18,
						'appraise':'“菜根比较大只，咬得费劲”'
					},
					{
						'src':food,
						'name':'蟹黄粥',
						'star':5,
						'price':48,
						'appraise':'“正宗的广东蟹黄粥啊，大爱”'
					},{
						'src':food,
						'name':'牛排',
						'star':2,
						'price':60,
						'appraise':'“好吃是好吃就是分量少的可怜”'
					}
				]
			}
		},
		methods:{
			activeClick(index){
				this.placeIndex = index;
			},
			secNavE(index){
				this.secIndex = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.views-content{
		.c-list-div{
			margin-top:25px;
			.food-content{

				.place{
					color: #595959;
					margin-bottom: 12px;
				}
				.place-select{
					background-color: #f5f5f5;
					height: 140px;
					padding-top: 28px;


					ul{
						color:#818181;
						height: 100%;
						
						li{
							float:left;
							width: 150px;
							text-align: center;
							margin-bottom: 26px;
							
							
							span{
								display: inline-block;
								height: 30px;
								line-height: 30px;
								padding: 0 14px;
								cursor: pointer;
								
								&.active{
									background-color: #1199ec;
									color: #ffffff;
								}
							}
						}
					}
					
				}
				
				.nav-list{
					margin-top: 20px;
					border-bottom:1px solid #e6e6e6;
					height: 48px;
					line-height: 48px;
					color:#b5b5b5;
					
					ul{
						height:100%;
						li{
							float: left;
							width: 150px;
							text-align: center;
							position: relative;
							cursor: pointer;
							span{
								cursor: pointer;
								display: inline-block;
								height: 100%;
								width: 100px;
								&.active{
									color: #81c9f5;
									&:after{
										content: '';
										display: block;
										width: 0;
										height: 0;
										border-left:6px solid transparent;
										border-right:6px solid transparent;
										border-bottom: 6px solid #e6e6e6;
										position: absolute;
										bottom:0;
										left: 50%;
										margin-left: -6px;
									}
								}
							}
						}
					}
				}
				
				.food-lists{
					padding-top: 20px;
					margin-bottom: 40px;
					ul{
						height: 100%;
						li{
							float: left;
							margin-bottom: 40px;
							width: 425px;
							margin-right: 50px;
							
							dl{
								
								
								dt,dd{
									float: left;
								}
								dt{
									width: 180px;
									height: 120px;
									img{
										width: 100%;
										height: 100%;
									}
								}
								dd{
									padding-left: 16px;
									padding-top: 10px;
									.foodName{
										color: #5b5b5b;
										width: 224px;
    								overflow: hidden;
    								text-overflow: ellipsis;
    								white-space: nowrap;
									}
									.el-rate{
										display: inline-block;
									}
									.stars{
										padding: 20px 0;
										span{
											color:#4d4d4d;
											vertical-align:middle;
										}
									}
									.article{
										color: #808080;
										width: 224px;
    								overflow: hidden;
    								text-overflow: ellipsis;
    								white-space: nowrap;
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
			
		}
	}
</style>





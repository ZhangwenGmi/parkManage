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
					<div class="place"><b>Location</b></div>
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
				navList:['Dish Management','Operating Statistics'],
				foodPlace:['Canteen 1','Canteen 2','Canteen 3','Canteen 4','Canteen 5','Canteen 6','Canteen 7','Canteen 8','Canteen 9','Canteen 10','Canteen 11','Canteen 12'],
				secNav:['Dish','Popularity','Price','Evaluation'],
				foodList:[
					{
						'src':food,
						'name':'Kung pao chicken',
						'star':5,
						'price':34,
						'appraise':'“Eat once in the spring and never forget it”'
					},
					{
						'src':food,
						'name':'Dongpo pork',
						'star':5,
						'price':37,
						'appraise':'“Good taste, good content, good fun”'
					},
					{
						'src':food,
						'name':'Braise in soy sauce sparerib',
						'star':5,
						'price':40,
						'appraise':'“It iss very similar to my mothers craft. It is great”'
					},
					{
						'src':food,
						'name':'Cola chicken wings',
						'star':3,
						'price':46,
						'appraise':'“Coke is a little too much, a little tired”'
					},
					{
						'src':food,
						'name':'Steamed bass',
						'star':5,
						'price':42,
						'appraise':'“Few fish thorns have been eaten so well”'
					},
					{
						'src':food,
						'name':'Shrimp dumplings',
						'star':5,
						'price':28,
						'appraise':'“Very delicate dishes, take pictures and eat first”'
					},
					{
						'src':food,
						'name':'Fried vegetable heart',
						'star':3,
						'price':18,
						'appraise':'“The root of the vegetable is large, and the bite is hard”'
					},
					{
						'src':food,
						'name':'Crab roe porridge',
						'star':5,
						'price':48,
						'appraise':'“Authentic cantonese crab porridge, great love”'
					},{
						'src':food,
						'name':'Steak',
						'star':2,
						'price':60,
						'appraise':'"Good food! but poor."'
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





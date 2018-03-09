<template>
	<div id="container">
		<div class="views-container">
			<div class="echarts-div">
				<div class="echarts-left">
					<h3>Air quality index</h3>
	            	<div class="echarts-content">
	            		<IEcharts :option="bar" ></IEcharts>
	            	</div>
				</div>
				<div class="echarts-right" >
					<div class="weather-title">
						<h3>Weather conditions</h3>
						<el-select placeholder="Please select" value='By hour' size="small">
		                    <el-option value='By hour'></el-option>
		                </el-select>
					</div>
					<div class="weather-content">
						<dl>
							<!-- <dt><img :src="weather_icon"/></dt> -->
							<dt><i :class="weat"></i></dt>
							<dd>
								<dl>
									<dt v-model="weather_curr">{{weather_curr}}</dt>
									<dd>
										<span>
											<b v-model="wind">{{wind}}</b>
											<b v-model="winp">{{winp}}</b>
										</span>
										<span v-model="temperature">{{temperature}}</span>
									</dd>
								</dl>
							</dd>
						</dl>
					</div>
				</div>
			</div>
			
			<div class="table-div mt20">
				<div class="tableList">
					<el-table ref="multipleTable" :data="tableData" stripe tooltip-effect="dark" >
		                <el-table-column prop="order" label="Major pollutant" align="center"></el-table-column>
		                <el-table-column prop="contractNum" label="1:00" align="center"></el-table-column>
		                <el-table-column prop="contract" label="2:00" align="center"></el-table-column>
		                <el-table-column prop="contractType" label="3:00" align="center"></el-table-column>
		                <el-table-column prop="type" label="4:00" align="center"></el-table-column>
		                <el-table-column prop="price" label="5:00" align="center"></el-table-column>
		                <el-table-column prop="creator" label="6:00" align="center"></el-table-column>
		                <el-table-column prop="paymentDays" label="7:00" align="center"></el-table-column>
		                <el-table-column prop="update" label="8:00" align="center"></el-table-column>
		                <el-table-column prop="timeWarn" label="9:00" align="center"></el-table-column>
		                <el-table-column prop="status" label="10:00" align="center"></el-table-column>
		                <el-table-column prop="a" label="11:00" align="center"></el-table-column>
		                <el-table-column prop="b" label="12:00" align="center"></el-table-column>
		            </el-table>
				</div>
				<div class="weather-qa">
					<el-table class="table-qa" ref="multipleTable" :data="tableData2" stripe tooltip-effect="dark">
		                <el-table-column prop="order" label="Area" align="center"></el-table-column>
		                <el-table-column prop="order" label="AQI" align="center"></el-table-column>
		                <el-table-column prop="contractNum" label="Regional air quality" align="center"></el-table-column>
		            </el-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import IEcharts from 'vue-echarts-v3/src/full.vue';
	export default{
		components: {
	        IEcharts,
	    },
		data(){
			return{
				weather_icon:'',
				weather_curr:'',
				wind:'',
				winp:'',
				weat:'',
				temperature:'',
				bar:{
					 title: {

			        },
            		backgroundColor: '#fafafa',
            		grid: {
		                left: '3%',
		                right: '5%',
		                bottom: '3%',
		                containLabel: true
		            },
			        tooltip: {
			            trigger: 'axis'
			        },
			        xAxis: {
                		type: 'category',
			            data:[]
			        },
			        yAxis: {
			        	type: 'value',
			            splitLine: {
			                show: false
			            },
                		minInterval: 1
			        },
			        toolbox: {
			            left: 'center',
			            feature: {
			            }
			        },
			        visualMap: {
			            top: 20,
			            right: 'center',
			            orient:'horizontal',
			            pieces: [{
			                gt: 0,
			                lte: 50,
			                color: '#096'
			            }, {
			                gt: 50,
			                lte: 100,
			                color: '#ffde33'
			            }, {
			                gt: 100,
			                lte: 150,
			                color: '#ff9933'
			            }, {
			                gt: 150,
			                lte: 200,
			                color: '#cc0033'
			            }, {
			                gt: 200,
			                lte: 300,
			                color: '#660099'
			            }, {
			                gt: 300,
			                color: '#7e0023'
			            }],
			            outOfRange: {
			                color: '#999'
			            }
			        },
			        series: {
			            name: 'AQI',
			            type: 'line',
			            data:[],
			            markLine: {
			                silent: true,
			                data: [{
			                    yAxis: 50
			                }, {
			                    yAxis: 100
			                }, {
			                    yAxis: 150
			                }, {
			                    yAxis: 200
			                }, {
			                    yAxis: 300
			                }]
			            }
			        }
				},
				tableData: [{
		            order: 'S02(μg/m³)',
		            contractNum: '3',
		            contract: '3',
		            contractType: '3',
		            type: '3',
		            price: '3',
		            creator: '3',
		            paymentDays: '3',
		            update: '3',
		            timeWarn: '3',
		            status: '3',
		            a: '3',
		            b: '3',
		        }, {
		            order: 'N02(μg/m³)',
		            contractNum: '51',
		            contract: '51',
		            contractType: '51',
		            type: '51',
		            price: '51',
		            creator: '51',
		            paymentDays: '51',
		            update: '51',
		            timeWarn: '51',
		            status: '51',
		            a: '51',
		            b: '51',

		        }, {
		          order: 'PM10(μg/m³)',
		            contractNum: '47',
		            contract: '47',
		            contractType: '47',
		            type: '47',
		            price: '47',
		            creator: '47',
		            paymentDays: '47',
		            update: '47',
		            timeWarn: '47',
		            status: '47',
		            a: '47',
		            b: '47',

		        }, {
		            order: 'PM2.5(μg/m³)',
		            contractNum: '35',
		            contract: '35',
		            contractType: '35',
		            type: '35',
		            price: '35',
		            creator: '35',
		            paymentDays: '35',
		            update: '35',
		            timeWarn: '35',
		            status: '35',
		            a: '35',
		            b: '35',
		        }, {
		           order: '03(μg/m³)',
		            contractNum: '4',
		            contract: '4',
		            contractType: '4',
		            type: '4',
		            price: '4',
		            creator: '4',
		            paymentDays: '4',
		            update: '4',
		            timeWarn: '4',
		            status: '4',
		            a: '4',
		            b: '4',
		        }, {
		            order: 'CO(μg/m³)',
		            contractNum: '3',
		            contract: '3',
		            contractType: '3',
		            type: '3',
		            price: '3',
		            creator: '3',
		            paymentDays: '3',
		            update: '3',
		            timeWarn: '3',
		            status: '3',
		            a: '3',
		            b: '3',
		        }],
		        tableData2:[
		        	{
		        		order:'Area A',
		        		contractNum: 65,
		            	contract: 'Fine'
		        	},
		        	{
		        		order:'Area B',
		        		contractNum: 48,
		            	contract: 'Fine'
		        	},
		        	{
		        		order:'Area C',
		        		contractNum: 45,
		            	contract: 'Excellent'
		        	},
		        	{
		        		order:'Park 1',
		        		contractNum: 112,
		            	contract: 'Light'
		        	},{
		        		order:'Park 2',
		        		contractNum: 124,
		            	contract: 'Light'
		        	}
		        ]
			}
		},
		created:function(){
			var that = this;
			$.ajax({
                url: 'http://api.k780.com:88/?app=weather.today&weaid=101280601&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json&jsoncallback=?',
                dataType: 'jsonp',
                type: 'Post',
                jsonpCallback: 'jsonpCallback',
                success: function(data) {
                    $.each(data, function(i, v) {
                        if (i == 'success') {
                            //
                        } else {
                        	//that.weather_icon = v.weather_icon;
                        	that.weat = 'weatid'+v.weatid;
                        	that.weather_curr = 'Sunny';
                        	that.wind = 'Northeaster';
                        	that.winp = 'level 2';
                        	that.temperature = v.temperature;
                        }
                    });
                },
                error: function(responseText, textStatus, XMLHttpRequest) {
                    alert(textStatus);
                }
            });
		},
		mounted:function(){
			this.$nextTick(function() {
				this.doRandom();
	        })
		},
		methods:{
			doRandom(){
				let xaxisData =[],
             	vData = [82, 80, 76, 70, 85, 86, 77, 90, 82, 85, 73, 70, 68, 60, 58, 56, 60, 64, 69, 74, 85, 98, 90, 86,83,80 ], //请求数据
				
				d = new Date(),
					hours = d.getHours();
				for(var i = 0;i<=hours;i++){
					xaxisData.push(i+':00');
				}
				this.bar.xAxis.data = xaxisData;
          		this.bar.series.data =vData.splice(0, hours + 1) ; //时间节点截取数据
			}
		}
	}
</script>

<style lang="scss" scoped>
	.views-container{
		padding: 20px;
		.echarts-div,.table-div{
			display: flex;
			flex-flow: row wrap;
    		justify-content: space-between;
			h3{
				color: #4d4d4d;
				font-size: 16px;
			}
			
			.echarts-left,.tableList{
				flex: 0 0 74%;
				height: 350px;
				.echarts-content{
					height: 300px;
				}
				
			}
			.echarts-right,.weather-qa{
				flex: 0 0 25%;
				height: 350px;

				
				h3{
					display: inline-block;
				}
				.weather-title{
					display: flex;
					flex-flow: row wrap;
    				justify-content: space-between;
					.el-select{
						width: 180px;
						margin-top: 4px;
					}
					.el-input__inner{
						height: 32px;
					}
				}
				.weather-content{
					background-color: #fafafa;
					height: 300px;
					display: flex;
					align-items:center;
					justify-content:center;  
					
					dl>dt{
						margin-bottom: 15px;
					}
					dl{
						display: flex;
						flex-direction:column;
						align-items:center; 
						margin-bottom: 0;
						
						dt{
							img{
								width: 80px;
								height: 80px;
							}
							i{
						        display:inline-block;
						        height:80px;
						        width: 80px;
						        background:url(../../assets/images/common/weatherBlue.png) no-repeat;
						        background-size:400%;
						      }
						      i.weatid32{
						        background-position:-240px -560px;
						      }
						      i.weatid31{
						        background-position:-160px -560px;    
						      }
						      i.weatid30{
						        background-position:-80px -560px;
						      }
						      i.weatid29{
						        background-position:0 -560px;
						      }
						      i.weatid28{
						        background-position:-240px -480px;
						      }
						      i.weatid27{
						        background-position:-160px -480px;
						      }
						      i.weatid26{
						        background-position:-80px -480px;
						      }
						      i.weatid25{
						        background-position:0 -480px;
						      }
						      i.weatid24{
						        background-position:-240px -400px;
						      }
						      i.weatid23{
						        background-position:-160px -400px;
						      }
						      i.weatid22{
						        background-position:-80px -400px;
						      }
						      i.weatid21{
						        background-position:0 -400px;
						      }
						      i.weatid20{
						        background-position:-240px -320px;
						      }
						      i.weatid19{
						        background-position:-160px -320px;
						      }
						      i.weatid18{
						        background-position:-80px -320px;
						      }
						      i.weatid17{
						        background-position:0 -320px ;
						      }
						      i.weatid16{
						        background-position:-240px -240px;
						      }
						      i.weatid15{
						        background-position:-160px -240px;
						      }
						      i.weatid14{
						        background-position:-80px -240px;
						      }
						      i.weatid13{
						        background-position:0 -240px;
						      }
						      i.weatid12{
						        background-position:-240px -160px;
						      }
						      i.weatid11{
						        background-position:-160px -160px;
						      }
						      i.weatid10{
						        background-position:-80px -160px;
						      }
						      i.weatid9{
						        background-position: 0 -160px;
						      }
						      i.weatid8{
						        background-position:-240px -80px;
						      }
						      i.weatid7{
						        background-position:-160px -80px;
						      }
						      i.weatid6{
						        background-position:-80px -80px;
						      }
						      i.weatid5{
						        background-position:0 -80px;
						      }
						      i.weatid4{
						        background-position:-240px 0;
						      }
						      i.weatid3{
						        background-position:-160px 0;
						      }
						      i.weatid2{
						        background-position:-80px 0;
						      }
						      i.weatid1{
						        background-position:0 0;
						      }
						}
						dd{
							dl{
								display: flex;
								flex-flow: row wrap;
								dt{
									margin-right: 15px;
									margin-bottom: 0;
									font-size: 16px;
									color: #808080;
								}
								
								dd{
									span{
										display: block;
										color: #818181;
										
										b{
											font-weight: normal;
										}
									}
								}
							}
						} 
					}
				}
			}
		}
		.table-div{
			.tableList{
				flex: 0 0 74%;
				width: 74%;
			}
			.weather-qa,.tableList{
				height: auto;
			}
			
		}
	}
	
	
</style>
<template lang="html">

	<div class="views-content">
		<div class="c-list-div">
			<ul>
				<li>
					<dl>
						<dt class="clearfix">
                                <div class="title-name">Statistical Data</div> 
                            </dt>
					</dl>
				</li>
			</ul>
		</div>
		<div class="statisticalTable">
			<div class='selectTime'>
				<span>Date range：</span>
				<el-date-picker size="small" v-model="value4" type="daterange" :picker-options="pickerOptions2" start-placeholder="Start date"  end-placeholder="End date"  align="left"></el-date-picker>
				<el-button  size="small" type="primary">Query</el-button>
			</div>

			<el-table :data="tableData" style="width: 40%;margin-left:76px;">
				<el-table-column prop="valid" label="Valid QR Code" align="center">
				</el-table-column>
				<el-table-column prop="invalid" label="Expiration QR Code" align="center">
				</el-table-column>
				<el-table-column prop="total" label="Total QR Codes Provisioned" align="center">
				</el-table-column>
			</el-table>
		</div>
		<div class="c-list-div">
			<ul>
				<li>
					<dl>
						<dt class="clearfix">
                                <div class="title-name">Chart</div> 
                                <div class="floatL">
                                    <el-select placeholder="Please Select" size="small" value='Last Week' style="width: 110px;">
                                        <el-option value='Last Week'> </el-option>
                                    </el-select>
                                </div>
                            </dt>
					</dl>
				</li>
			</ul>
		</div>
		<div class="charts" style="margin-top: 0px;">
			<IEcharts :option="barSec" :loading="loading"></IEcharts>
		</div>

	</div>

</template>
<script>
	import IEcharts from 'vue-echarts-v3/src/full.vue';
	export default {
		name: 'view',
		components: {
			IEcharts
		},
		data: () => ({
			selectValue: '2017-09-15~2017-09-21',
			loading: true,
			value4: [new Date(2000, 10, 10), new Date(2000, 10, 18)],
			pickerOptions2: {
				shortcuts: [{
					text: 'Last Week',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: 'Last Month',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: 'Last 3 months',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
						picker.$emit('pick', [start, end]);
					}
				}]
			},
			barSec: {
				tooltip: {
					trigger: 'axis'
				},
				backgroundColor: '#fafafa',
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					data: [],
					axisLine: {
						lineStyle: {
							color: '#d8d8d8'
						}
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						color: '#939DA9'
					}
				},
				yAxis: {
					type: 'value',
					axisLine: {
						lineStyle: {
							color: '#d8d8d8',
							type: 'solid'
						}
					},
					axisTick: {
						show: false
					},
					splitNumber: 4,
					minInterval: 1,
					axisLabel: {
						color: '#939DA9'
					},
					splitLine: {
						show: false,
						lineStyle: {
							type: 'dashed',
							color: '#304968'
						},
					}
				},
				series: [{
					name: 'Qr code release',
					type: 'line',
					barWidth: '50',
					label: {
						normal: {
							show: true,
							position: 'top'
						}
					},
					itemStyle: {
						normal: {
							color: '#5aa2e8',
						}
					},
					data: []

				}]
			},
			tableData: [{
				valid: '100 ',
				invalid: '0 ',
				total: '100 ',
			}]
		}),
		mounted: function() {
			this.$nextTick(function() {
				this.doRandom();

			})
		},
		methods: {
			doRandom() {
				const that = this;
				var vdata = [2, 17, 24, 12, 15, 24, 27, 35, 35, 45, 5, 8], //请求数据
					total = 0,
					timeDate = []; //七天日期
				that.barSec.series[0].data = vdata;
				var  date1  =  new  Date();        
				for (var i = 6; i > -1; i--) {
					var  date2  =  new  Date(date1);
					date2.setDate(date1.getDate() - i);        
					var  times  =  date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate(); //七天
					timeDate.push(times);
				}
				that.barSec.xAxis.data = timeDate; //x轴数据
				date2.setDate(date1.getDate() - 6);
				var ago = date2.getFullYear() + ',' + (date2.getMonth() + 1) + ',' + date2.getDate();
				var today = date1.getFullYear() + ','+ (date1.getMonth() + 1) + ',' + date1.getDate();
				that.value4 = [new Date(ago), new Date(today)]; //日期选择插件默认时间

				that.loading = !that.loading;
			}
		}
	}
</script>
<style lang="scss" scoped>
	.views-content {
		span {
			color: #a6a6a6;
		}
		.c-list-div {
			margin-top: 5px;
			ul{
				margin-bottom: 0;
			}
			li {
				dl{
					margin-bottom: 0;
				}
				dt {
					height: 36px;
					line-height: 36px;
					.title-name {
						float: left;
						color: #868686;
						font-weight: normal;
					}
					.floatL {
						float: right;
					}
				}
				dd {
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
	
	.statisticalTable {
		width: 100%;
		padding: 10px;
		height: 170px;
		margin-top: 10px;
		background-color: #fafafa;
	}
	
	.selectTime {
		height: 50px;
	}
	
	.el-table th>.cell {
		text-align: center;
	}
</style>
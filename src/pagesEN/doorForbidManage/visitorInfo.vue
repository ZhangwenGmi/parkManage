<template lang="html">
	<div class="container-right">
		<div class='searchTab'>
			<span>Access control name：</span>
			<el-select size="small" placeholder="Please Select" :value='selectValue' style="width: 100px;">
				<el-option :value='selectValue'></el-option>
			</el-select>
			<div class="floatL">
				<span>Date range：</span>
				<el-date-picker size="small" v-model="value4" type="daterange" :picker-options="pickerOptions2" placeholder="选择时间范围" align="right"></el-date-picker>
				<el-button size="small" type="primary">Query</el-button>
			</div>
		</div>
		<el-table ref="multipleTable" :data="tableData" stripe tooltip-effect="dark" style="width: 100%">
			<el-table-column type="selection" width="55" align="center"></el-table-column>
			<el-table-column prop="order" label="Order" align="center"></el-table-column>
			<el-table-column prop="name" label="Name" align="center"></el-table-column>
			<el-table-column prop="phone" label="Mobile Number" align="center"></el-table-column>
			<el-table-column prop="floor" label="Floor" align="center"></el-table-column>
			<el-table-column prop="visitType" label="Visitor Type" align="center"></el-table-column>
			<el-table-column prop="doorName" label="Access Control Name" align="center"></el-table-column>
			<el-table-column prop="openWay" label="Door Opening Mode" align="center"></el-table-column>
			<el-table-column prop="openTime" label="Door Opening Time" align="center"></el-table-column>
		</el-table>
		<div style="margin-top: 20px">
			<el-button size="small" type="success"><i class="el-icon-track"></i>Track Trace</el-button>
			<el-button size="small" type="danger" icon="close">Delete</el-button>
		</div>
	</div>

</template>
<script>
	import track from '../../assets/images/common/track.png';
	export default {
		name: 'view',
		components: {},
		data: () => ({
			selectValue: 'MJ031',
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
			tableData: [{
				order: 1,
				name: 'Li Xiang',
				phone: '13746497812',
				floor: 'Floor 5,Building 12',
				visitType: 'Visitor',
				doorName: 'MJ031',
				openWay: '蓝牙开门',
				openTime: '2017-10-22 21:30'
			}, {
				order: 2,
				name: 'Kaisheng He',
				phone: '18585337479',
				floor: 'Floor 1,Building 2',
				visitType: 'Visitor',
				doorName: 'MJ031',
				openWay: '蓝牙开门',
				openTime: '2017-10-23 20:02'
			}, {
				order: 3,
				name: 'Zhang Meng',
				phone: '13775897821',
				floor: 'Floor 5,Building 13',
				visitType: 'Temporary staff',
				doorName: 'MJ031',
				openWay: '二维码开门',
				openTime: '2017-10-25 11:30'
			}, {
				order: 4,
				name: 'Lulu Li',
				phone: '13886897814',
				floor: 'Floor 5,Building 12',
				visitType: 'Visitor',
				doorName: 'MJ031',
				openWay: '二维码开门',
				openTime: '2017-10-26 11:46'
			}, {
				order: 5,
				name: 'Wendi Fan',
				phone: '18588973419',
				floor: 'Floor 15,Building 9',
				visitType: 'Visitor',
				doorName: 'MJ031',
				openWay: '蓝牙开门',
				openTime: '2017-10-26 21:11'
			}, {
				order: 6,
				name: 'Feifei Zhang',
				phone: '13796985387',
				floor: 'Floor 4,Building 9',
				visitType: 'Internal personnel',
				doorName: 'MJ031',
				openWay: '人脸开门',
				openTime: '2017-10-27 10:59'
			}, {
				order: 7,
				name: 'Lili Zhou',
				phone: '17097468870',
				floor: 'Floor 2,Building 3',
				visitType: 'Internal personnel',
				doorName: 'MJ031',
				openWay: '人脸开门',
				openTime: '2017-10-27 21:03'
			}, {
				order: 8,
				name: 'Fanxing Kong',
				phone: '13746497812',
				floor: 'Floor 1,Building 12',
				visitType: 'Visitor',
				doorName: 'MJ031',
				openWay: '二维码开门',
				openTime: '2017-10-28 8:33'
			}, {
				order: 9,
				name: 'Meimei Xing',
				phone: '18611297468',
				floor: 'Floor 2,Building 8',
				visitType: 'Internal personnel',
				doorName: 'MJ031',
				openWay: '人脸开门',
				openTime: '2017-10-28 18:38'
			}, {
				order: 10,
				name: 'Mengshi Li',
				phone: '13876447281',
				floor: 'Floor 3,Building 4',
				visitType: 'Temporary staff',
				doorName: 'MJ031',
				openWay: '二维码开门',
				openTime: '2017-10-28 21:36'
			}]
		}),
		mounted: function() {
			this.$nextTick(function() {
				this.doRandom();
			})
		},
		methods: {
			doRandom() {
				var that = this;
				//下拉日期
				var  date1  =  new  Date();        
				var  date2  =  new  Date(date1);
				date2.setDate(date1.getDate() - 30);
				var ago = date2.getFullYear() + "," + (date2.getMonth() + 1) + "," + date2.getDate();
				var today = date1.getFullYear() + "," + (date1.getMonth() + 1) + "," + date1.getDate();
				that.value4 = [new Date(ago), new Date(today)]; //日期选择插件默认时间
			}
		}
	}
</script>
<style lang="scss" scoped>
	.container-right {
		width: 96%;
		margin-left: 2%;
	}
	
	span {
		color: #a6a6a6;
	}
	.el-icon-track{
		height: 10px;
	}
	.floatL {
		float: right;
	}
	
	.searchTab {
		margin-top: 10px;
		height: 50px;
	}
	
	.el-icon-track {
		width: 18px;
		height: 10px;
		background-image: url(../../assets/images/common/track.png);
		background-repeat: no-repeat;
		background-position: bottom center;
		display: inline-block;
		margin-right: 5px;
	}
	
	.tableSearchInput {
		width: 150px;
		margin: 15px 0;
	}
</style>
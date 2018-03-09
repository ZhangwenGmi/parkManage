<template lang="html">
	<div class="container-right">
		<div class='searchTab'>
			<span>门禁：</span>
			<el-select size="small" placeholder="请选择" :value='selectValue' style="width: 100px;">
				<el-option :value='selectValue'></el-option>
			</el-select>
			<div class="floatL">
				<span>日期查询：</span>
				<el-date-picker size="small" v-model="value4" type="daterange" :picker-options="pickerOptions2" placeholder="选择时间范围" align="right"></el-date-picker>
				<el-button size="small" type="primary">查询</el-button>
			</div>
		</div>
		<el-table ref="multipleTable" :data="tableData" stripe tooltip-effect="dark" style="width: 100%">
			<el-table-column type="selection" width="55" align="center"></el-table-column>
			<el-table-column prop="order" label="序号" align="center"></el-table-column>
			<el-table-column prop="name" label="姓名" align="center"></el-table-column>
			<el-table-column prop="phone" label="手机号" align="center"></el-table-column>
			<el-table-column prop="floor" label="所去楼层" align="center"></el-table-column>
			<el-table-column prop="visitType" label="访客类型" align="center"></el-table-column>
			<el-table-column prop="doorName" label="门禁名称" align="center"></el-table-column>
			<el-table-column prop="openWay" label="开门方式" align="center"></el-table-column>
			<el-table-column prop="openTime" label="开门时间" align="center"></el-table-column>
		</el-table>
		<div style="margin-top: 20px">
			<el-button size="small" type="success"><i class="el-icon-track"></i>轨迹追溯</el-button>
			<el-button size="small" type="danger" icon="close">删除</el-button>
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
					text: '最近一周',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: '最近一个月',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: '最近三个月',
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
				name: '李想',
				phone: '13746497812',
				floor: '12栋5楼',
				visitType: '外来访客',
				doorName: 'MJ031',
				openWay: '蓝牙开门',
				openTime: '2017-10-22 21:30'
			}, {
				order: 2,
				name: '何胜凯',
				phone: '18585337479',
				floor: '2栋1楼',
				visitType: '外来访客',
				doorName: 'MJ031',
				openWay: '蓝牙开门',
				openTime: '2017-10-23 20:02'
			}, {
				order: 3,
				name: '张萌',
				phone: '13775897821',
				floor: '13栋5楼',
				visitType: '临时人员',
				doorName: 'MJ031',
				openWay: '二维码开门',
				openTime: '2017-10-25 11:30'
			}, {
				order: 4,
				name: '李璐璐',
				phone: '13886897814',
				floor: '12栋5楼',
				visitType: '外来访客',
				doorName: 'MJ031',
				openWay: '二维码开门',
				openTime: '2017-10-26 11:46'
			}, {
				order: 5,
				name: '范文第',
				phone: '18588973419',
				floor: '9栋15楼',
				visitType: '外来访客',
				doorName: 'MJ031',
				openWay: '蓝牙开门',
				openTime: '2017-10-26 21:11'
			}, {
				order: 6,
				name: '章菲菲',
				phone: '13796985387',
				floor: '9栋4楼',
				visitType: '内部人员',
				doorName: 'MJ031',
				openWay: '人脸开门',
				openTime: '2017-10-27 10:59'
			}, {
				order: 7,
				name: '周立力',
				phone: '17097468870',
				floor: '3栋2楼',
				visitType: '内部人员',
				doorName: 'MJ031',
				openWay: '人脸开门',
				openTime: '2017-10-27 21:03'
			}, {
				order: 8,
				name: '孔繁星',
				phone: '13746497812',
				floor: '12栋5楼',
				visitType: '外来访客',
				doorName: 'MJ031',
				openWay: '二维码开门',
				openTime: '2017-10-28 8:33'
			}, {
				order: 9,
				name: '邢美美',
				phone: '18611297468',
				floor: '8栋2楼',
				visitType: '内部人员',
				doorName: 'MJ031',
				openWay: '人脸开门',
				openTime: '2017-10-28 18:38'
			}, {
				order: 10,
				name: '王诗梦',
				phone: '13876447281',
				floor: '4栋3楼',
				visitType: '临时人员',
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
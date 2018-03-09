<template lang="html">
<div id="container">
    <div class="views-container">
        <div class="views-title">
            <ul class="clearfix">
                <li v-for="item,index in navList" @click="navSelection(index)" :class="{active : index === nowIndex}">
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
                                    <div class="title-name">
                                        <span class="ml5">Key:</span>
                                        <el-input class='tableSearchInput'  placeholder="" icon="search" size="small"></el-input>
                                        
                                    </div>
                                    <div class="floatL">
                                        <span class="ml5">Date</span>
                                        <el-date-picker v-model="value4" type="daterange" :picker-options="pickerOptions2" size="small" placeholder="Select time range" align="right"></el-date-picker>
                                    <button class="export" size="small"><i class="icon_export"></i>Export</button>
                                </div>
                                </dt>
                        </dl>
                    </li>
                </ul>
            </div>
            <div class="charts">
                <div class="pie">
                    <IEcharts :option="bar" :loading="loading"></IEcharts>
                </div>
                <div class="pie" style="margin-left:1%">
                    <IEcharts :option="barSec" :loading="loading"></IEcharts>
                </div>
                <div class="pie" style="margin-left:1%">
                    <IEcharts :option="barThird" :loading="loading"></IEcharts>
                </div>
            </div>
            <div class="c-list-div">
                
            </div>
            <div class="c-list-div">

            </div>
            <div class="mt20" >
                <el-table ref="multipleTable" :data="tableData" stripe tooltip-effect="dark" style="width: 100%">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="order" label="Order" align="center"></el-table-column>
                <el-table-column prop="name" label="Park Name" align="center"></el-table-column>
                <el-table-column prop="location" label="Address" align="center"></el-table-column>
                <el-table-column prop="discharged" label="Vehicle Release" align="center"></el-table-column>
                <el-table-column prop="rates" label="Charging Standards" align="left">
                    <template scope="scope">
                        <div v-for="item in scope.row.rates">{{ item }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="vip" label="VIP Service" align="center"></el-table-column>
                <el-table-column prop="parkDetail" label="Ordinary (use/total)" align="center"></el-table-column>
                <el-table-column prop="vipPark" label="VIP (use/total)" align="center"></el-table-column>
            </el-table>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import IEcharts from 'vue-echarts-v3/src/full.vue';
import $ from 'jquery'
export default {
    name: 'view',
    components: {
        IEcharts,
        $
    },
    data: () => ({
        loading: true,
        nowIndex: 0,
        value4:[new Date(2000, 10, 10), new Date(2000, 10, 18)],
        pickerOptions2: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last three month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        navList: ['Vehicle list'],
        bar: {
            title: {
                text: 'Parking Spaces Count (Top 3) ',
                right: 'center',
                top:'20px',
                textStyle:{
                    color:'#4d4d4d',
                    fontWeight:'normal',
                    fontSize:'14'
                }
            },
            backgroundColor: '#fafafa',
            tooltip: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
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
            yAxis: {
                type: 'category',
                data: [ 'Basement Park','Outdoor park','Multistory park'],
                axisLine: {
                    lineStyle: {
                        color: '#d8d8d8'
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
                
            },

            series: [{
                name: 'Number of parking spaces',
                type: 'bar',
                barWidth: '20',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(params) {　 //首先定义一个数组 
                            var colorList = ['#ea6273', '#73c3a3', '#f5a623', ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [138,162,188]

            }]
        },
        barSec: {
            title: {
                text: 'Parking Duration (Top 3)',
                right: 'center',
                top:'20px',
                textStyle:{
                    color:'#4d4d4d',
                    fontWeight:'normal',
                    fontSize:'14'
                }
            },
            backgroundColor: '#fafafa',
            tooltip: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
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
            yAxis: {
                type: 'category',
                data: [ '2~3 hours','0~1 hours','3~4 hours'],
                axisLine: {
                    lineStyle: {
                        color: '#d8d8d8'
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
                
            },

            series: [{
                name: 'Time of parking duration',
                type: 'bar',
                barWidth: '20',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(params) {　 //首先定义一个数组 
                            var colorList = ['#ea6273', '#73c3a3', '#f5a623', ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [28,46,109]

            }]
        },
        barThird: {
            title: {
                text: 'Popular Parking Type (top 3)',
                right: 'center',
                top:'20px',
                textStyle:{
                    color:'#4d4d4d',
                    fontWeight:'normal',
                    fontSize:'14'
                }
            },
            backgroundColor: '#fafafa',
            tooltip: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
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
            yAxis: {
                type: 'category',
                data: [  'Basement Park','Outdoor park','Multistory park'],
                axisLine: {
                    lineStyle: {
                        color: '#d8d8d8'
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
                
            },

            series: [{
                name: 'Parking to count',
                type: 'bar',
                barWidth: '20',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(params) {　 //首先定义一个数组 
                            var colorList = ['#ea6273', '#73c3a3', '#f5a623', ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [48,52,83]

            }]
        },
        tableData:[{
            order: 1,
            name: 'Multistory parking A1',
            location: 'A1 Zone',
            discharged: 'Support',
            rates: ['Monthly card:220/month','Yearly card:2420/year','VIP Yearly card:2,800/year'],
            vip: 'Priority parking, parking reservation, parking lock',
            parkDetail: '16/78',
            vipPark: '5/20'
        },{
            order: 2,
            name: 'Multistory Parking B1',
            location: 'B1 Zone',
            discharged: 'Support',
            rates: ['Monthly card:220/month','Yearly card:2420/year','VIP Yearly card:2,800/year'],
            vip: 'Priority parking, parking reservation, parking lock',
            parkDetail: '16/60',
            vipPark: '12/23'
        },{
            order: 2,
            name: 'Outdoor Parking A1',
            location: 'A1 Zone',
            discharged: 'Support',
            rates: ['Temporary Parking:10/hour','Monthly card:180/month'],
            vip: 'Parking reservation, parking lock',
            parkDetail: '36/162',
            vipPark: '0/10'
        },{
            order: 4,
            name: 'Basement Parking A1',
            location: 'A1 Zone',
            discharged: 'Support',
            rates: ['Temporary Parking:12/hour','card Card:220/month','Yearly card:2320/year','VIP Yearly card:2,660/year'],
            vip: 'Priority parking, parking reservation, parking lock',
            parkDetail: '120/120',
            vipPark: '5/18'
        }]
    }),
    mounted: function() {
        this.$nextTick(function() {
            this.doRandom();
        })
    },
    methods: {
        navSelection(index) {
            this.nowIndex = index;
        },
        doRandom() {
            const that = this;
            //日期查询
            var  date1  =  new  Date();        
            var  date2  =  new  Date(date1);
            date2.setDate(date1.getDate() - 6);
            var sevenAgo = date2.getFullYear() + ',' + (date2.getMonth() + 1) + ',' + date2.getDate();
            var today = date1.getFullYear() + ',' + (date1.getMonth() + 1) + ',' + date1.getDate();
            that. value4 = [new Date(sevenAgo), new Date(today)];//日期查询默认
            that.loading = !that.loading;
        }
    }
}
</script>
<style lang="scss" scoped>
.views-content {
    span{
        color: #a6a6a6;
    }
    .tableSearchInput{
        width: 150px;
    }
    .c-list-div {
        margin-top: 15px;
        ul{
            margin-bottom: 0;
            li {
                dl{
                    margin-bottom: 0;
                }
                dt {
                    height: 30px;
                    line-height: 30px;
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
    .charts {
        .pie {
            width: 32.3%;
            height: 300px;
            display: inline-block;
        }
    }
}
</style>
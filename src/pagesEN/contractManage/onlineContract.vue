<template lang="html">
<div id="container">
    <div class="views-container">
        <div class="views-title">
            <ul class="clearfix">
                <li class="active">All Contract</li>
            </ul>
        </div>
        <div class="views-content">
            <div class="charts">
                <IEcharts :option="bar" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
            </div>
            <div class="searchTab">
                <span>Protocol：</span>
                <el-select placeholder="Please Select" value='Lease' style="width:100px;" size="small">
                    <el-option value='Lease'></el-option>
                </el-select>
                <span class="ml5">Type：</span>
                <el-select placeholder="Please Select" value='Standard' style="width:100px;" size="small">
                    <el-option value='Standard'></el-option>
                </el-select>
                <span class="ml5">Status：</span>
                <el-select placeholder="Please Select" value='All' style="width:100px;" size="small">
                    <el-option value='All'></el-option>
                </el-select>
                <span class="ml5">Key：</span>
                <el-input class='tableSearchInput' placeholder="" icon="search" size="small"></el-input>
            </div>
            <el-table ref="multipleTable" :data="tableData" stripe tooltip-effect="dark" style="width: 100%">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="order" label="Order" align="center"></el-table-column>
                <el-table-column prop="contractNum" label="Contract Number" align="center"></el-table-column>
                <el-table-column prop="contract" label="Contract Name" align="center"></el-table-column>
                <el-table-column prop="contractType" label="Protocol" align="center"></el-table-column>
                <el-table-column prop="type" label="Standard" align="center"></el-table-column>
                <el-table-column prop="price" label="Total Price" align="center"></el-table-column>
                <el-table-column prop="creator" label="Creater" align="center"></el-table-column>
                <el-table-column prop="paymentDays" label="Payment Days" align="center"></el-table-column>
                <el-table-column prop="update" label="Update" align="center"></el-table-column>
                <el-table-column prop="timeWarn" label="Expiry Warning" align="center">
                    <template scope="scope">
                                <span :class="(scope.row.timeWarn === '9 days')?'red':((scope.row.timeWarn === '25 days'||scope.row.timeWarn === '30 days')?'yellow':'green')" >{{ scope.row.timeWarn }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="Status" align="center"></el-table-column>
            </el-table>
        </div>
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
    props: {},
    data: () => ({
        loading: true,
        bar: {
            title: {
                text: '',
                subtext: '全部：',
                right: '10%'
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
                type: 'category',
                data: ['Revisability', 'End', 'Printable', 'Locked Print', 'Cancellation'],
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
                name: '全部合同',
                type: 'bar',
                barWidth: '50',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(params) {　 //首先定义一个数组 
                            var colorList = ['#509ce7', '#7788e8', '#73c3a3', '#f5a623', '#ea6273'];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: []

            }]
        },
        tableData: [{
            order: 1,
            contractNum: 'ZL-20130315322',
            contract: 'Manage software product procurement contract',
            contractType: 'Lease',
            type: 'Standard',
            price: '1,113,743.00',
            creator: 'Ling Lee',
            paymentDays: '45 days',
            update: '2017-10-10',
            timeWarn: '365 days',
            status: 'Revisability'
        }, {
            order: 2,
            contractNum: 'ZL-20130315342',
            contract: 'Manage software product procurement contract',
            contractType: 'Lease',
            type: 'Standard',
            price: '1,113,722.00',
            creator: 'Philis Lee',
            paymentDays: '45 days',
            update: '2017-10-10',
            timeWarn: '30 days',
            status: 'Processing'
        }, {
            order: 3,
            contractNum: 'ZL-20130315362',
            contract: 'Manage software product procurement contract',
            contractType: 'Lease',
            type: 'Standard',
            price: '1,123,743.00',
            creator: 'Ling Lee',
            paymentDays: '45 days',
            update: '2017-9-10',
            timeWarn: '9 days',
            status: 'Printable'
        }, {
            order: 4,
            contractNum: 'ZL-20130313322',
            contract: 'Manage software product procurement contract',
            contractType: 'Lease',
            type: 'Standard',
            price: '1,113,223.00',
            creator: 'Ling Lee',
            paymentDays: '45 days',
            update: '2017-10-10',
            timeWarn: '365 days',
            status: 'End'
        }, {
            order: 5,
            contractNum: 'ZL-2013031444',
            contract: 'Manage software product procurement contract',
            contractType: 'Lease',
            type: 'Standard',
            price: '1,113,331.00',
            creator: 'Ling Chou',
            paymentDays: '45 days',
            update: '2017-10-10',
            timeWarn: '25 days',
            status: 'Revisability'
        }, {
            order: 6,
            contractNum: 'ZL-20150315362',
            contract: 'Manage software product procurement contract',
            contractType: 'Lease',
            type: 'Standard',
            price: '1,113,864.00',
            creator: 'Ouyang',
            paymentDays: '45 days',
            update: '2017-10-10',
            timeWarn: '365 days',
            status: 'End'
        }, {
            order: 7,
            contractNum: 'ZL-20130315322',
            contract: 'Manage software product procurement contract',
            contractType: 'Lease',
            type: 'Standard',
            price: '1,113,743.00',
            creator: 'Fephy Wang',
            paymentDays: '45 days',
            update: '2017-10-10',
            timeWarn: '365 days',
            status: 'Revisability'
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
            let vdata = [304, 1120, 736, 625, 550], //请求数据
                total = 0;
            that.bar.series[0].data = vdata;
            vdata.forEach(function(element) {
                total += element;
            }, this);
            that.bar.title.subtext = '全部:' + total;
            that.loading = !that.loading;
        },
        onReady(instance, echarts) {
            console.log(instance,'0000');
        },
        onClick(event, instance, echarts) {
            console.log(arguments);
        }
    }
}
</script>
<style lang="scss" scoped>
.searchTab {
    width: 100%;
    margin-top: 10px;
    height: 60px;
}

div.tableSearchInput.el-input {
    width: 150px;
    margin: 15px 0;
}
span{
        color: #a6a6a6;
    }
.ml5 {
    margin-left: 5px;
}
.green {
  color:#20c0b1;
}
.yellow {
  color:#f5a623;
}
.red {
  color:#ea6273;
}
</style>

<template lang="html">
<div id="container">
    <div class="views-container">
        <div class="views-title">
            <ul class="clearfix">
                <li class="active">全部合同</li>
            </ul>
        </div>
        <div class="views-content">
            <div class="charts">
                <IEcharts :option="bar" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
            </div>
            <div class="searchTab">
                <span>合同类别：</span>
                <el-select placeholder="请选择" value='租赁' style="width:100px;" size="small">
                    <el-option value='租赁'></el-option>
                </el-select>
                <span class="ml5">类型：</span>
                <el-select placeholder="请选择" value='标准' style="width:100px;" size="small">
                    <el-option value='标准'></el-option>
                </el-select>
                <span class="ml5">状态：</span>
                <el-select placeholder="请选择" value='全部' style="width:100px;" size="small">
                    <el-option value='全部'></el-option>
                </el-select>
                <span class="ml5">关键词：</span>
                <el-input class='tableSearchInput' placeholder="" icon="search" size="small"></el-input>
            </div>
            <el-table ref="multipleTable" :data="tableData" stripe tooltip-effect="dark" style="width: 100%">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="order" label="序号" align="center"></el-table-column>
                <el-table-column prop="contractNum" label="合同编号" align="center"></el-table-column>
                <el-table-column prop="contract" label="合同名称" align="center"></el-table-column>
                <el-table-column prop="contractType" label="合同类别" align="center"></el-table-column>
                <el-table-column prop="type" label="类型" align="center"></el-table-column>
                <el-table-column prop="price" label="总价" align="center"></el-table-column>
                <el-table-column prop="creator" label="创建人" align="center"></el-table-column>
                <el-table-column prop="paymentDays" label="合同账期" align="center"></el-table-column>
                <el-table-column prop="update" label="更新" align="center"></el-table-column>
                <el-table-column prop="timeWarn" label="到期预警" align="center">
                    <template scope="scope">
                                <span :class="(scope.row.timeWarn === '9天后到期')?'red':((scope.row.timeWarn === '25天后到期'||scope.row.timeWarn === '30天后到期')?'yellow':'green')" >{{ scope.row.timeWarn }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="状态" align="center"></el-table-column>
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
                data: ['可修改', '合同结束', '可打印', '打印锁定', '已作废'],
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
            contract: '管理软件产品采购合同',
            contractType: '租赁合同',
            type: '标准',
            price: '1,113,743.00',
            creator: '李玲',
            paymentDays: '45天',
            update: '2017-10-10',
            timeWarn: '365天后到期',
            status: '可修改'
        }, {
            order: 2,
            contractNum: 'ZL-20130315342',
            contract: '管理软件产品采购合同',
            contractType: '租赁合同',
            type: '标准',
            price: '1,113,722.00',
            creator: '李非',
            paymentDays: '45天',
            update: '2017-10-10',
            timeWarn: '30天后到期',
            status: '审批中'
        }, {
            order: 3,
            contractNum: 'ZL-20130315362',
            contract: '管理软件产品采购合同',
            contractType: '租赁合同',
            type: '标准',
            price: '1,123,743.00',
            creator: '李玲',
            paymentDays: '45天',
            update: '2017-9-10',
            timeWarn: '9天后到期',
            status: '可打印'
        }, {
            order: 4,
            contractNum: 'ZL-20130313322',
            contract: '管理软件产品采购合同',
            contractType: '租赁合同',
            type: '标准',
            price: '1,113,223.00',
            creator: '李玲',
            paymentDays: '45天',
            update: '2017-10-10',
            timeWarn: '365天后到期',
            status: '合同结束'
        }, {
            order: 5,
            contractNum: 'ZL-2013031444',
            contract: '管理软件产品采购合同',
            contractType: '租赁合同',
            type: '标准',
            price: '1,113,331.00',
            creator: '周玲',
            paymentDays: '45天',
            update: '2017-10-10',
            timeWarn: '25天后到期',
            status: '可修改'
        }, {
            order: 6,
            contractNum: 'ZL-20150315362',
            contract: '管理软件产品采购合同',
            contractType: '租赁合同',
            type: '标准',
            price: '1,113,864.00',
            creator: '欧阳兟',
            paymentDays: '45天',
            update: '2017-10-10',
            timeWarn: '365天后到期',
            status: '合同结束'
        }, {
            order: 7,
            contractNum: 'ZL-20130315322',
            contract: '管理软件产品采购合同',
            contractType: '租赁合同',
            type: '标准',
            price: '1,113,743.00',
            creator: '王菲菲',
            paymentDays: '45天',
            update: '2017-10-10',
            timeWarn: '365天后到期',
            status: '可修改'
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
            console.log(instance);
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

<template lang="html">
    <div id="container">
        <div class="views-box">
            <div class="views-title">
                <ul class="clearfix">
                    <li class="active">服务率统计</li>
                </ul>
            </div>
            <div class="views-content">
            	<ul class="regular-that">
            		<li class="regular-blue">
            			<h3>总会话量</h3>
            			<p class="regular-p">14</p>
            			<div class="regular-b">
            				<p>
            					<span>接入率</span>
            					<em>80%</em>
            				</p>
            				<p>
            					<span>转接量</span>
            					<em>20</em>
            				</p>
            			</div>
            		</li>
            		<li class="regular-purple">
            			<h3>总消息量</h3>
            			<p class="regular-p">1102</p>
            			<div class="regular-b">
            				<p>
            					<span>答问比</span>
            					<em>94%</em>
            				</p>
            				<p>
            					<span>30'应答率</span>
            					<em>70%</em>
            				</p>
            			</div>
            		</li>
            		<li class="regular-gray">
            			<h3>平均会话时长</h3>
            			<p class="regular-p">10'21</p>
            			<div class="regular-b">
            				<p>
            					<span>平均相应时长</span>
            					<em>26'</em>
            				</p>
            			</div>
            		</li>
            		<li class="regular-green">
            			<h3>相对满意度</h3>
            			<p class="regular-p">88<em>分</em></p>
            			<div class="regular-b">
            				<p>
            					<span>参评率</span>
            					<em>74%</em>
            				</p>
            				<p>
            					<span>一次性解决率</span>
            					<em>92%</em>
            				</p>
            			</div>
            		</li>
            	</ul>
            </div>
        </div>
        <div class="views-box">
            <div class="views-title">
                <ul class="clearfix">
                    <li class="active">评价统计</li>
                    <li>等级统计</li>
                </ul>
            </div>
            <div class="views-content">
                <div class="charts">
                    <IEcharts :option="axis" :loading="loading"></IEcharts>
                </div>
            </div>
        </div>
        <div class="views-box">
            <div class="views-title">
                <ul class="clearfix">
                    <li class="active">服务之星</li>
                </ul>
            </div>
            <div class="views-content">
            	<ul class="star-list">
            		<li>
            			<p class="star-img"><img src="../../assets/images/service/1.png" alt=""></p>
            			<p class="star-name">李明亮</p>
            			<p class="star-store">100分</p>
            		</li>
            		<li>
            			<p class="star-img"><img src="../../assets/images/service/2.png" alt=""></p>
            			<p class="star-name">刘晓丽</p>
            			<p class="star-store">100分</p>
            		</li>
            		<li>
            			<p class="star-img"><img src="../../assets/images/service/3.png" alt=""></p>
            			<p class="star-name">郭嘉璐</p>
            			<p class="star-store">100分</p>
            		</li>
            		<li>
            			<p class="star-img"><img src="../../assets/images/service/4.png" alt=""></p>
            			<p class="star-name">田晓蕾</p>
            			<p class="star-store">100分</p>
            		</li>
            		<li>
            			<p class="star-img"><img src="../../assets/images/service/5.png" alt=""></p>
            			<p class="star-name">周婷婷</p>
            			<p class="star-store">100分</p>
            		</li>
            		<li>
            			<p class="star-img"><img src="../../assets/images/service/6.png" alt=""></p>
            			<p class="star-name">李笑</p>
            			<p class="star-store">99分</p>
            		</li>
            		<li>
            			<p class="star-img"><img src="../../assets/images/service/7.png" alt=""></p>
            			<p class="star-name">潘甜甜</p>
            			<p class="star-store">99分</p>
            		</li>
            	</ul>
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
    data: () => ({
    	nowIndex: 0,
        loading: true,
        axis: {
        	title: {
        		text: '报事、投诉、咨询各等级评价数量',
        		textStyle: {
        			color: '#bbbbbb',
        			fontWeight: 'normal',
        			fontSize: 15,
        			align: 'center',
        			lineHeight: 36
        		},
        		left: 'center',
        		top: '20'
        	},
        	color: ['#b9d7f5', '#7ab5df', '#4296d2'],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'line' // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: '{b0}<br>报事: {a0}: {c0} {a1}: {c1} {a2}: {c2}<br>投诉: {a3}: {c3} {a4}: {c4} {a5}: {c5}<br>咨询: {a6}: {c6} {a7}: {c7} {a8}: {c8}'
            },
            legend: {
                data: ['优', '良', '差'],
                right: '4%',
                top: 20
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
				type: 'category',
                data: ['2017-10-13', '2017-10-14', '2017-10-15', '2017-10-16', '2017-10-17', '2017-10-18', '2017-10-19'],
                axisLine: {
                	lineStyle: {
                        color: '#b3b3b3'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                	lineStyle: {
                        color: '#b3b3b3'
                    }
                }
            },
            series: [{
                name: '优',
                type: 'bar',
                stack: '报事',
                data: [123, 332, 301, 223, 390, 330, 320]
            }, {
                name: '良',
                type: 'bar',
                stack: '报事',
                data: [234, 132, 101, 455, 90, 230, 210]
            }, {
                name: '差',
                type: 'bar',
                stack: '报事',
                data: [567, 182, 191, 66, 290, 330, 310]
            },{
                name: '优',
                type: 'bar',
                stack: '投诉',
                data: [100, 332, 301, 334, 390, 330, 320]
            }, {
                name: '良',
                type: 'bar',
                stack: '投诉',
                data: [200, 132, 101, 134, 90, 230, 210]
            }, {
                name: '差',
                type: 'bar',
                stack: '投诉',
                data: [300, 182, 191, 234, 290, 330, 310]
            }, {
                name: '优',
                type: 'bar',
                stack: '咨询',
                data: [320, 332, 301, 334, 390, 330, 320]
            }, {
                name: '良',
                type: 'bar',
                stack: '咨询',
                data: [120, 132, 101, 134, 90, 230, 210]
            }, {
                name: '差',
                type: 'bar',
                stack: '咨询',
                data: [220, 182, 191, 234, 290, 330, 310]
            }]
        }
    }),
    mounted: function() {
        this.doRandom();
        this.navSelection();
    },
    methods: {
    	navSelection() {
           /* $('body').on('click', '.views-title li', function() {
            	$(this).addClass('active').siblings().removeClass('active');
            });*/
        },
        doRandom() {
			var that = this,
				timeDate = [],
				date1  =  new  Date(); 
			for (var i = 7; i > 0; i--) {
				var  date2  =  new  Date(date1);
				date2.setDate(date1.getDate() - i);        
				var  times  =  date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate(); //昨天以前的七天
				timeDate.push(times);
			}
			that.axis.xAxis.data = timeDate; //x轴数据
            that.loading = !that.loading;
        }
    }
}
</script>
<style lang="scss" scoped>
	.views-content {
		padding: 20px;
	}
	.star-list {
		padding: 0 50px;
		display: flex;
		flex-flow: row wrap;
    	justify-content: space-between;
    	p {
    		margin: 0;
    	}
    	li {
    		width: 102px;
    		text-align: center;
    		.star-img {
    			width: 102px;
    			height: 102px;
    			margin-bottom: 10px;
    		}
    		.star-name {
    			color: #4d4d4d;
    			font-size: 14px;
    			line-height: 30px;
    		}
    		.star-store {
    			color: #f6ab2e;
    			font-size: 14px;
    			line-height: 30px;
    		}
    	}
	}
</style>
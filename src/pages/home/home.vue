<template lang="html">
    <div class="home-wrap">
        <div class="home-menu">
            <ul class="homeMenu">
                <li><a href="javascript:;" data-id=""><i class="icon_account"></i><span>我的帐号</span></a></li>
                <li><router-link :to="'/exhibition'"><i class="icon_visual"></i><span>综合展示</span></router-link></li>
                <!-- <li><a href="javascript:;" data-id=""><i class="icon_composite"></i><span>综合监管</span></a></li> -->
                <li><router-link :to="'/supervise'"><i class="icon_composite"></i><span>综合监管</span></router-link></li>
                <li><a href="javascript:;" data-id="property"><i class="icon_property"></i><span>物业服务</span></a></li>
                <!-- <li><a href="javascript:;" data-id=""><i class="icon_logistics"></i><span>后勤保障</span></a></li>
                <li><a href="javascript:;" data-id=""><i class="icon_logout"></i><span>注销帐号</span></a></li> -->
                <li>
                    <router-link :to="'/logisticsManage'"><i class="icon_logistics"></i><span>后勤保障</span></router-link>
                </li>
                <li>
                    <router-link :to="'/'"><i class="icon_logout"></i><span>注销帐号</span></router-link>
                </li>
                <!-- <li v-for="i in menuList">
                    <router-link :to="''+i.code" class="nav-link"><i></i><span>{{i.menuName}}</span></router-link>
                </li> -->
            </ul>
            <div class="home-sub" data-id="property">
                <h3>物业服务</h3>
                <ul>
                    <li v-for="i in menuList">
                        <router-link :to="''+i.code" class="nav-link"><i v-bind:class="i.icon"></i><span>{{i.menuName}}</span></router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="home-weather">
            <div class="home-weather-t">
                <h3> </h3>
                <h4>园区综合管理服务平台</h4>
            </div>
            <div class="home-weather-b">
                <div class="weather-t">
                    <i></i>
                    <div class="weather-tr">
                        <h4>16℃/5℃</h4>
                        <p>多云转晴</p>
                    </div>
                </div>
                <div class="weather-b">
                    <div class="w-item w-1">
                        <p>北京</p>
                    </div>
                    <div class="w-item w-2">
                        <p>30</p>
                        <p>多云</p>
                        <p>北风3~4级</p>
                    </div>
                    <div class="w-item w-3">
                        <p><span>PM2.5</span><span>30</span></p>
                        <p><span>AQI</span><span>120</span></p>
                        <p><span>空气</span><span>良</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-datepicker"></div>
        <div class="lan">
            <router-link :to="'/'"><i class="icon_visual"></i><span class="c_white">中文版</span></router-link> | 
            <router-link :to="'/EN'"><i class="icon_visual"></i><span>English</span></router-link>
        </div>
    </div>
</template>
<script>
	
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
$.fn.datepicker.dates['ch'] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    daysMin: ["日", "一", "二", "三", "四", "五", "六"],
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    today: "今日",
    clear: "清除",
    format: "mm/dd/yyyy",
    titleFormat: "MM yyyy",
    /* Leverages same syntax as 'format' */
    weekStart: 0
};
export default {
    data() {
            return {
                menuList: {}
            }
        },
        created: function() {
            this.getMenuData();
        },
        methods: {
            getMenuData: function() {
                var that = this;
               	const mockData = location.protocol + '//' + location.host + '/static/mock/submenu.js';
                //const mockData = location.protocol + '//' + location.host + '/dist/static/mock/submenu.js';
                this.$api.get(mockData, null, r => {
                    this.menuList = r;
                    setTimeout(function() {
                        that.setSubPosition();
                    }, 500);
                });
            },
            showDatepicker: function() {
                $('.home-datepicker').datepicker({
                    language: 'ch',
                    todayHighlight: true
                });
            },
            setSubPosition: function() {
                var sublist = $('.home-sub'),
                    that = this;
                sublist.each(function(i) {
                    let wc = $(this).outerWidth(),
                        id = $(this).attr('data-id'),
                        p = $('.homeMenu a[data-id="' + id + '"]'),
                        wp = p.outerWidth(),
                        lp = p.offset().left;
                    $(this).css({
                        left: (lp + wp / 2 - wc / 2) + 'px'
                    });

                });
            },
            bindHover: function() {
                var that = this,
                    timer = null;
                $('body').on('mouseover', '.homeMenu a', function() {
                    let id = $(this).attr('data-id');
                    if (id) {
                        $('.home-sub[data-id="' + id + '"]').show().siblings('.home-sub').hide();
                    }
                }).on('mouseleave', '.homeMenu a', function() {
                    let id = $(this).attr('data-id');
                    if (id) {
                        timer && clearTimeout(timer);
                        timer = setTimeout(function() {
                            $('.home-sub[data-id="' + id + '"]').hide();
                        }, 300);
                    }
                }).on('mouseover', '.home-sub', function() {
                    timer && clearTimeout(timer);
                    $(this).show();
                }).on('mouseleave', '.home-sub', function() {
                    var dom = $(this);
                    timer && clearTimeout(timer);
                    timer = setTimeout(function() {
                        dom.hide();
                    }, 300);
                });
            }
        },
        mounted: function() {
            this.showDatepicker();
            this.bindHover();
            $.ajax({
                url: "http://api.k780.com:88/?app=weather.today&weaid=101280601&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json&jsoncallback=?",
                dataType: "jsonp",
                type: "Post",
                jsonpCallback: "jsonpCallback",
                success: function(data) {
                    $.each(data, function(i, v) {
                        if (i == "success") {
                            //
                        } else {
                            v.weat = 'weatid'+v.weatid;
                            var tpl = [
                                '<div class="weather-t">',
                                    //'<img src="'+ v.weather_icon +'">',
                                    '<i class="'+v.weat+'"></i>',
                                    '<div class="weather-tr">',
                                        '<h4>'+ v.temperature_curr +'</h4>',
                                        '<p>'+ v.weather_curr +'</p>',
                                    '</div>',
                                '</div>',
                                '<div class="weather-b">',
                                    '<div class="w-item w-1">',
                                        '<p>'+ v.citynm +'</p>',
                                    '</div>',
                                    '<div class="w-item w-2">',
                                        '<p>'+ v.temperature +'</p>',
                                        '<p>'+ v.weather +'</p>',
                                        '<p>'+ v.wind + v.winp +'</p>',
                                    '</div>',
                                    '<div class="w-item w-3">',
                                        '<p><span>湿度</span><span>'+ v.humidity +'</span></p>',
                                        '<p><span>风力ID</span><span>'+ v.winpid +'</span></p>',
                                        '<p><span>风向ID</span><span>'+ v.windid +'</span></p>',
                                    '</div>',
                                '</div>'
                            ].join('');
                            $('.home-weather-b').empty().html(tpl);
                        }
                    });
                },
                error: function(responseText, textStatus, XMLHttpRequest) {
                    alert(textStatus);
                }
            });
        }
}
</script>
<style lang="scss" scoped>
    .lan{
        width: 166px;
        float: right;
        margin-top: 20px;
        a{
            color: #dedede;
            font-size: 16px;
        }
    }
</style>
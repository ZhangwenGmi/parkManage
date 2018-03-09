<template>
<div>
  <div class="views-container">
    <div class="buidDetail">
      <div style="display:inline-block;float:left;width:39%;">
        <img src="../../assets/images/common/building.png" style="width:98%" />
      </div>
      <div style="display:inline-block;float:left;width:60%;">
        <span class="ml10 c_blue" style="font-size:26px;line-height:26px;">A1楼</span>
        <hr/>
        <p class="ml10 c_gray" style="font-size:16px;line-height:20px;text-indent: 2em;">A1楼坐落在深圳市罗湖区人民南路与嘉滨路交点东北侧罗湖商业区高层建筑群的中心地段，是一座由中国人自己设计、施工和实施物业管理的综合性多功能超高建筑。</p>
        <br/>
        <span class="ml10 c_darkgray">建筑面积</span><span class="ml10 c_blue">13737 平方米</span>
        <br/>
        <span class="ml10 c_darkgray">建筑占地面积</span><span class="ml10 c_blue">15494 平方米</span>
      </div>
    </div>

    <div class="charts">
      <div class="chartbox line_blue">
        <div class="charttitle bg_blue">
          <span class="c_darkgray">绿色运行指标 </span>
        </div>
        <div class="chartdetail">
          <span class="c_gray">运行面均能耗 </span><span class="ml10 c_blue">32.5k Wh/m&sup2; </span>
          <br/>
          <span class="c_gray">设计面均能耗 </span><span class="ml10 c_blue">75k Wh/m&sup2; </span>
        </div>

        <div class="chart">
          <IEcharts :option="pie" :loading="loading"></IEcharts>
        </div>
      </div>
      <div class="chartbox line_purple">
        <div class="charttitle bg_purple">
          <span class="c_darkgray">建筑入驻率</span>
        </div>
        <div class="chartdetail">
          <span class="c_gray">入驻部门 </span><span class="ml10 c_blue">5 个 </span>
          <br/>
          <span class="c_gray">入驻人数 </span><span class="ml10 c_blue">308 人 </span>
        </div>
        <div class="chart" style="margin-left:1%;border-color:#ebeefb;">
          <IEcharts :option="gauge" :loading="loading"></IEcharts>
        </div>
      </div>
      <div class="chartbox line_green">
        <div class="charttitle bg_green">
          <span class="c_darkgray">建筑生态环境</span>
        </div>
        <div class="chartdetail">
          <span class="c_gray">室内平均温度 </span><span class="ml10 c_blue">25 &#8451;</span>
          <br/>
          <span class="c_gray">室外平均温度 </span><span class="ml10 c_blue">29  &#8451;</span>
        </div>
        <div class="chart" style="margin-left:1%;border-color:#d8efe6;">
          <IEcharts :option="weatherAQI" :loading="loading"></IEcharts>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
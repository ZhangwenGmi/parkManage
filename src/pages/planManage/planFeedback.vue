<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">反馈处理</li>
        </ul>
      </div>
      <div class="container-right">
      	<div class="data-list">
      		<ul>
      			<li class="blue">
      				<dl>
      					<dt>今日反馈<span>2</span></dt>
      					<dd>
									<p>用户反馈</p>
									<p>151</p>
      					</dd>
      				</dl>
      			</li>
      			<li class="purple">
      				<dl>
      					<dt>新增<span>3.5%</span></dt>
      					<dd>
      						<p>过去七日反馈数</p>
      						<p>30</p>
      					</dd>
      				</dl>
      			</li>
      			<li class="green">
      				<dl>
      					<dt></dt>
      					<dd>
      						<p>反馈用户比例</p>
      						<p>29%</p>
      					</dd>
      				</dl>
      			</li>
      		</ul>
      	</div>
        <div>
          <span class="gray">状态：</span>
          <el-select class="tableSearchInput" value="全部" placeholder="请选择" size="small"><el-option value='全部'></el-option></el-select>
          <span class="ml20 gray">日期查询：</span>
          <el-date-picker v-model="value7" type="daterange" align="left" placeholder="选择日期范围" :picker-options="pickerOptions2" size="small">
          </el-date-picker>
          <el-button class="ml20" type="primary" icon="search" size="small">查询</el-button>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="code" label="反馈时间" align="center"></el-table-column>
          <el-table-column prop="name" label="反馈人" align="center"></el-table-column>
          <el-table-column prop="property" label="电话" align="center"></el-table-column>
          <el-table-column prop="type" label="反馈内容" align="center"></el-table-column>
          <el-table-column label="状态" width="120">
            <template scope="scope">
              <el-button type="text" size="small"> 待处理 </el-button>
            </template>
          </el-table-column>
          <el-table-column prop="manager" label="处理结果" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button class="el-button--edit" type="primary" icon="edit" size="small">处理</el-button>
          <el-button type="danger" icon="close" size="small">删除</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        input:'',
        value7:'',
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
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
        tableData3: [{
            order: '1',
            code: '2017-09-21 16:10',
            name: '何从',
            property: '13131313131',
            type: '计划与实际差距大',
            manager: '-'
          }, {
            order: '2',
            code: '2017-09-21 16:10',
            name: '安然',
            property: '13131313131',
            type: '计划与实际差距大',
            manager: '-'
          }, {
            order: '3',
            code: '2017-09-21 16:10',
            name: '王琦',
            property: '13131313131',
            type: '计划与实际差距大',
            manager: '-'
          }, {
            order: '4',
            code: '2017-09-21 16:10',
            name: '郝开心',
            property: '13131313131',
            type: '计划与实际差距大',
            manager: '-'
          }, {
            order: '5',
            code: '2017-09-21 16:10',
            name: '王秀',
            property: '13131313131',
            type: '计划与实际差距大',
            manager: '-'
          }, {
            order: '6',
            code: '2017-09-21 16:10',
            name: '李斐然',
            property: '13131313131',
            type: '计划与实际差距大',
            manager: '-'
          }, {
            order: '7',
            code: '2017-09-21 16:10',
            name: '何晓晓',
            property: '13131313131',
            type: '计划与实际差距大',
            manager: '-'
        }],
        multipleSelection: []
      };
    },
    mounted:function(){
    	this.$nextTick(function() {
	        this.doRandom();
	    })
    },
    methods:{
    	doRandom(){
    		const that = this,
              end = new Date(),
              start = end.getTime() - 3600 * 1000 * 24 * 7;
        that.value7 = [start,end];      
    	}
    }
  };
</script>
<style lang="scss" scoped>
  .views-container{
    width: 100%;
  }
  .container-right{
    padding:0 20px
  }
  .tableSearchInput{
    width: 150px;
    margin: 15px 0 ;
  }
  .data-list{
  	margin-top: 30px;
  	ul{
  		display: flex;
  		flex-flow: row wrap;
  		justify-content: flex-start;
  		color: #fff;
  		
  		li{
  			padding:12px;
  			width: 20%;
  			margin-right: 4%;
  			
  			&.blue{
  				background-color: #509ce7;
  			}
  			&.purple{
  				background-color: #7686e6;
  			}
  			&.green{
  				background-color: #73c3a3;
  			}
  			dt{
  				text-align: right;
  				color: #fff;
  				height: 20px;
  				
  				span{
  					margin-left: 6px;
  				}
  			}
  			
  			dd{
  				color: #fff;
  				margin-top: 15px;

  				p{
  					text-align: center;
  					margin: 10px 0;
  					
  					&:nth-child(2){
  						font-size: 26px;
  					}
  				}
  			}
  		}
  	}
  }
  
  dl{
  	margin-bottom: 0;
  }
  dt,dd{
  	font-weight: normal;
  }
</style>
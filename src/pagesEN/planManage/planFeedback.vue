<template lang="html">
  <div id="container">
    <div class="views-container">
      <div class="views-title">
        <ul class="clearfix">
          <li class="active">Feedback Processing</li>
        </ul>
      </div>
      <div class="container-right">
      	<div class="data-list">
      		<ul>
      			<li class="blue">
      				<dl>
      					<dt>Today<span>2</span></dt>
      					<dd>
									<p>User Feedback</p>
									<p>151</p>
      					</dd>
      				</dl>
      			</li>
      			<li class="purple">
      				<dl>
      					<dt>Newly<span>3.5%</span></dt>
      					<dd>
      						<p>Last 7 days Feedback</p>
      						<p>30</p>
      					</dd>
      				</dl>
      			</li>
      			<li class="green">
      				<dl>
      					<dt></dt>
      					<dd>
      						<p>Feedback Proportional</p>
      						<p>29%</p>
      					</dd>
      				</dl>
      			</li>
      		</ul>
      	</div>
        <div>
          <span class="gray">Status：</span>
          <el-select class="tableSearchInput" value="All" placeholder="Please select" size="small"><el-option value='All'></el-option></el-select>
          <span class="ml20 gray">Date range：</span>
          <el-date-picker v-model="value7" type="daterange" align="left" placeholder="please select date range" :picker-options="pickerOptions2" size="small">
          </el-date-picker>
          <el-button class="ml20" type="primary" icon="search" size="small">Query</el-button>
        </div>
        <el-table ref="multipleTable" :data="tableData3" stripe tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="order" label="Order" align="center"></el-table-column>
          <el-table-column prop="code" label="Feedback Time" align="center"></el-table-column>
          <el-table-column prop="name" label="Feedback Given By" align="center"></el-table-column>
          <el-table-column prop="property" label="Tel" align="center"></el-table-column>
          <el-table-column prop="type" label="Feedback Content" align="center"></el-table-column>
          <el-table-column label="Status" width="120">
            <template scope="scope">
              <el-button type="text" size="small"> Pending </el-button>
            </template>
          </el-table-column>
          <el-table-column prop="manager" label="Result" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button class="el-button--edit" type="primary" icon="edit" size="small">Deal</el-button>
          <el-button type="danger" icon="close" size="small">Delete</el-button>
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
            text: 'Last a week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last a month',
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
        tableData3: [{
            order: '1',
            code: '2017-09-21 16:10',
            name: 'Cong He',
            property: '13131313131',
            type: 'There is a big gap between plan and practice',
            manager: '-'
          }, {
            order: '2',
            code: '2017-09-21 16:10',
            name: 'Ran An',
            property: '13131313131',
            type: 'There is a big gap between plan and practice',
            manager: '-'
          }, {
            order: '3',
            code: '2017-09-21 16:10',
            name: 'Qi Wang',
            property: '13131313131',
            type: 'There is a big gap between plan and practice',
            manager: '-'
          }, {
            order: '4',
            code: '2017-09-21 16:10',
            name: 'Happy Hao',
            property: '13131313131',
            type: 'There is a big gap between plan and practice',
            manager: '-'
          }, {
            order: '5',
            code: '2017-09-21 16:10',
            name: 'Xiu Wang',
            property: '13131313131',
            type: 'There is a big gap between plan and practice',
            manager: '-'
          }, {
            order: '6',
            code: '2017-09-21 16:10',
            name: 'Feiran Lee',
            property: '13131313131',
            type: 'There is a big gap between plan and practice',
            manager: '-'
          }, {
            order: '7',
            code: '2017-09-21 16:10',
            name: 'Xiaoxiao He',
            property: '13131313131',
            type: 'There is a big gap between plan and practice',
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
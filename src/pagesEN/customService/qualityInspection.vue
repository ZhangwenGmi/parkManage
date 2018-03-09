<template lang="html">
  <div id="container">
    <div class="views-container">
    	<div class="views-title">
    		<ul class="clearfix">
    			<li class="active">Scoring Rule Settings</li>
    		</ul>
    	</div>
    	<div class="views-content">
    		<ul class="inptUl">
    			<li>
    				<div class="inputCon"><span class="gray">Item:</span><el-input size="small" v-model="input"></el-input></div>
    				<div class="inputCon"><span class="gray len" >Full score:</span><el-input size="small" v-model="input"></el-input></div>
    				<i class="el-icon-minus"></i>
    			</li>
    			<li>
    				<div class="inputCon"><span class="gray">Item:</span><el-input size="small" v-model="input"></el-input></div>
    				<div class="inputCon"><span class="gray len">Full score:</span><el-input size="small" v-model="input"></el-input></div>
    				<i class="el-icon-minus"></i>
    			</li>
    			<li>
    				<div class="inputCon"><span class="gray">Item:</span><el-input size="small" v-model="input"></el-input></div>
    				<div class="inputCon"><span class="gray len">Full score:</span><el-input size="small" v-model="input"></el-input></div>
    				<i class="el-icon-minus"></i>
    			</li>
    			<li>
    				<el-button size="small" type="primary" icon="plus">Add</el-button>
    			</li>
    		</ul>
    	</div>
    </div>
    <div class="views-container" style="margin-top:20px">
        <div class="views-title">
            <ul class="clearfix">
                <li class="active">Taboo Settings</li>
            </ul>
        </div>
        <div class="views-content">
            <ul class="inptUl">
                <li>
                    <div class="inputCon"><span class="gray">Taboo:</span><el-input size="small" v-model="input"></el-input></div>
                    <i class="el-icon-minus"></i>
                </li>
                <li>
                    <div class="inputCon"><span class="gray">Taboo:</span><el-input size="small" v-model="input"></el-input></div>
                    <i class="el-icon-minus"></i>
                </li>
                <li>
                    <div class="inputCon"><span class="gray">Taboo:</span><el-input size="small" v-model="input"></el-input></div>
                    <i class="el-icon-minus"></i>
                </li>
                <li>
                    <el-button size="small" type="primary" icon="plus">Add</el-button>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
	.views-container{
		min-height: auto;
	}
	.inptUl li{
		display: flex;
		margin:20px 0;
		.inputCon{
			width: 30%;
			margin-right: 30px;
			display: flex;
			span{
				width: 60px;
				line-height: 30px
			}
			.len{
				width: 86px;
			}
		}
	}
	.el-icon-minus{
		margin-top: 5px;
		width: 25px;
		height: 25px;
		border-radius: 13px;
		color: #d42d2d;
		border:1px solid #d42d2d;
		line-height: 25px;
		text-align: center;
		cursor: pointer;
	}
</style>
<script>
  export default {
    data() {
      return {
        input:''
      };
    }
  };
</script>





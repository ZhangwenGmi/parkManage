<template>
	<div id="container">
        <div style="height:100%; background:#fff">
	    <div class="workflow">
	    	<div class="workflow-l"></div>
	    	<div class="workflow-r">
	    		<div class="workflow-rl">Customer</div>
	    		<div class="workflow-rr"></div>
	    	</div>
	    </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
.workflow {
	background: #fff;
	padding: 20px;
    display: flex;
    min-height: 394px;
    .workflow-l {
        flex: 0 0 110px;
        height: 394px;
        background: url(../../assets/images/supervise/workflow01.png) no-repeat 50% 50%;
    }
    .workflow-r {
    	flex: 1;
    	border: 2px solid #000;
    	margin-left: 10px;
    	display: flex;
    	.workflow-rl {
    		flex: 0 0 43px;
    		color: #000;
    		padding-left: 12px;
    		writing-mode: vertical-lr;
    		text-align: center;
    		border-right: 2px solid #000;
    		font-weight: 700;
    		font-size: 16px;
    	}
    	.workflow-rr {
    		flex: 1;
    		background: url(../../assets/images/supervise/workflow02.png);
    		background-repeat: no-repeat;
    		background-position: 50% 50%;
    		background-size: 80% auto;
    	}
    }
}
</style>
<template>
	<div class="container-right">
		<div class="views-container">
			<div class="views-title views-title-a">
	    		<ul class="clearfix">
	    			<li>
           	 	<router-link to="/supervise/information/infoList">发布总览</router-link>
	    			</li>
	    			<li>
           	 	<router-link to="/supervise/information/programInfo">节目信息</router-link>
	    			</li>
            <li>
              <router-link to="/supervise/information/taskRelease">任务发布</router-link>
            </li>
	    		</ul>
	    	</div>
    		<keep-alive>
		   		<router-view></router-view>
		   	</keep-alive>
		</div>
	</div>
</template>
<template>
	<div class="container-right">
		<div class="views-container">
			<div class="views-title views-title-a">
	    		<ul class="clearfix">
	    			<li>
       	 			<router-link to="/EN/supervise/information/infoList">Release the overview</router-link>
	    			</li>
	    			<li>
       	 			<router-link to="/EN/supervise/information/programInfo">Program information</router-link>
	    			</li>
            <li>
              <router-link to="/EN/supervise/information/taskRelease">Task distribution</router-link>
            </li>
	    		</ul>
	    	</div>
    		<keep-alive>
		   		<router-view></router-view>
		   	</keep-alive>
		</div>
	</div>
</template>
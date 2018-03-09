<template lang="html">
  <div id="container">
  	<div class="views-container">
      <div class="views-title views-title-a">
        <ul class="clearfix">
          <li>
            <router-link to="/EN/systemManage/userManages/organizationalStructure">Organizational Structure</router-link>
          </li>
          <li>
            <router-link to="/EN/systemManage/userManages/basicInformation">Basic Information</router-link>
          </li>
        </ul>
      </div>
      
      <keep-alive>
	   		<router-view></router-view>
	  	</keep-alive>
    </div>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
  
</style>
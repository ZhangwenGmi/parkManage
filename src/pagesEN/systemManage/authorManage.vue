<template lang="html">
  <div id="container">
  	<div class="views-container">
      <div class="views-title views-title-a">
        <ul class="clearfix">
          <li>
            <router-link to="/EN/systemManage/authorManage/roleManage">Role management</router-link>
          </li>
          <li>
            <router-link to="/EN/systemManage/authorManage/userManage">User management</router-link>
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
  .views-container {
		width: 100%;
	}
	
	.container-right {
		padding: 0 20px
	}
	
	.tableSearchInput {
		width: 250px;
		margin: 15px 0;
	}
</style>
<template>
  	<div id="container">
  		<div class="views-container">
  			<div class="views-title views-title-a">
		        <ul class="clearfix">
		          <li><router-link to="/EN/storeManage/inventory/inventoryQuery"> Inventory Query</router-link></li>
		          <li><router-link to="/EN/storeManage/inventory/inventoryCheck"> Inventory Count</router-link></li>
		          <li><a>Inventory Details</a></li>
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
<style scoped>
	.views-container{
    width: 100%;
  }
  .container-right{
    padding:0 20px
  }
  .tableSearchInput{
    width: 250px;
    margin: 15px 0 ;
  }
	
</style>

<template>
	<div style="height:100%">
    <router-link to="/EN"><div class="logo"></div></router-link>
		<iframe src="http://192.168.49.10:8092/video/DemoEN/index.html" frameborder="0" width="100%" height="100%" id="3dframe"></iframe>
    <!-- <iframe src="http://localhost:8912/DemoEN/index.html" frameborder="0" width="100%" height="100%" id="3dframe"></iframe> -->
	</div>
</template>
<style lang="scss" scoped>
  .logo{
    width: 294px;
    height: 56px;
    position: absolute;
    left: 20px;
    top: 20px;
    background: url('../../assets/images/common/titleEn.png');
  }
</style>

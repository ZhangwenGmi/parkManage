<template>
	<div style="height:100%">
    <router-link to="/"><div class="logo"></div></router-link>
		<iframe src="http://192.168.49.10:8092/video/Demo/index.html" frameborder="0" width="100%" height="100%" id="3dframe"></iframe>
    <!-- <iframe src="http://localhost:8912/Demo/index.html" frameborder="0" width="100%" height="100%" id="3dframe"></iframe> -->
	</div>
</template>
<style lang="scss" scoped>
  .logo{
    width: 200px;
    height: 80px;
    position: absolute;
    left: 20px;
    top: 20px;
    background: url('../../assets/images/common/platform-name.png');
  }
</style>

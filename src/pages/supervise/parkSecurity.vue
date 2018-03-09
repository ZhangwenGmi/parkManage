<template>
  <div class="video-list-container">
  	<div class="video-div">
  		<p><router-link to="/supervise/parkSecurityDetail">东门</router-link></p>
		<video :src="videoIp+'v5.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
  	</div>
  	<div class="video-div">
  		<p><router-link to="/supervise/parkSecurityDetail">停车场</router-link></p>
		<video :src="videoIp+'v4.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
  	</div>
  	<div class="video-div">
  		<p><router-link to="/supervise/parkSecurityDetail">会议室</router-link></p>
		<video :src="videoIp+'v3.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
  	</div>
  	<div class="video-div">
  		<p><router-link to="/supervise/parkSecurityDetail">会议室</router-link></p>
		<video :src="videoIp+'v2.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
  	</div>
  	<div class="video-div">
  		<p><router-link to="/supervise/parkSecurityDetail">东门</router-link></p>
		<video :src="videoIp+'v5.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
  	</div>
  	<div class="video-div">
  		<p><router-link to="/supervise/parkSecurityDetail">停车场</router-link></p>
		<video :src="videoIp+'v4.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
  	</div>
  </div>
</template>
<style lang="scss" scoped>
  .video-list-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .video-div{
    	margin-top: 15px;
    	p{
    		padding: 0;
    		margin:0
    	}
    }
  }
</style>
<script>
  export default{
    data(){
      return{
        videoWidth: 400,
        videoHeight: 250,
        videoIp: 'http://192.168.49.10:82/video/'
        //videoIp: 'http://localhost:8912/video/'
      }
    }
  }
</script>



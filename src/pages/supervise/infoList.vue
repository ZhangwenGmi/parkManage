<template>
  <div class="videoList">
    <video :src="videoIp+'v1.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
    <video :src="videoIp+'v1.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
    <video :src="videoIp+'v1.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
    <video :src="videoIp+'v1.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
    <video :src="videoIp+'v1.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
    <video :src="videoIp+'v1.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
    <video :src="videoIp+'v1.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
    <video :src="videoIp+'v1.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
    <video :src="videoIp+'v1.mp4'" controls="controls" :width="videoWidth" :height="videoHeight"></video>
  </div>
</template>
<style lang="scss" scoped>
  .videoList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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



<template>
  <el-row class="top-bar">
    <div class="top-wrapper">
    	<div class="user-area pull-left">
    	</div>
      <div class="user-area pull-right">
      	<dl class="user-info">
      		<dt>zaki</dt>
      		<dd>Park manager</dd>
      	</dl>
        <div class="user-avatar">
          <span class="avatar-img" :style=""></span>
          <!--<i class="el-icon-arrow-down"></i>-->
         <!-- <div class="drop-menu">
            <ul>
              <li><i class="iconfont">&#xe602;</i>退出</li>
            </ul>
          </div>-->
        </div>
      </div>
    </div>
  </el-row>
</template>

<script>
  export default {
    name:"container"
  }
</script>

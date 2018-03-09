<template>
  <div>
  	<NavMenu></NavMenu>
    <TopBar></TopBar>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import NavMenu from '../../components/common/NavMenu.vue'
import TopBar from '../../components/common/TopBar.vue'

export default {
	name:"container",
  components: {
    NavMenu,TopBar
  }
}
</script>

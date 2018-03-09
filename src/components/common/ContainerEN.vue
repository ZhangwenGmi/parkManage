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
import NavMenu from '../../components/common/NavMenuEN.vue'
import TopBar from '../../components/common/TopBarEN.vue'

export default {
	name:"container",
  components: {
    NavMenu,TopBar
  }
}
</script>

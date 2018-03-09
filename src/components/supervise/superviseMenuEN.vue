<template lang="html">
    <el-menu :unique-opened="uniqueOpened" id="nav-menu" theme="dark">
        <li>
            <div class="logo">
                <router-link to="/EN">
                    <img src="../../assets/images/common/platform-name.png" />
                </router-link>
            </div>
        </li>
        <li>
            <ul class="nav-links" id="superviseMenu">
                <template v-for="(i,index) in list">
                    <el-submenu :index="index" v-if="i.subMenu">
                        <template slot="title"><i v-bind:class="i.icon"></i><span>{{ i.menuName }}</span></template>
                        <template v-for="(j,jindex) in i.subMenu">
                            <el-menu-item :index="j.code">
                                <router-link :to="''+j.code" class="nav-link">{{ j.menuName }}</router-link>
                            </el-menu-item>
                        </template>
                    </el-submenu>
                    <el-menu-item v-else :index="index" slot="title" class="nav-second">
                        <router-link :to="''+i.code" class="nav-link"><i v-bind:class="i.icon"></i>{{ i.menuName }}</router-link>
                    </el-menu-item>
                </template>
            </ul>
        </li>
        <li class="layMain">
            <a href="#/EN" class="nav-link">
                <button>EXIT</button>
            </a>
        </li>
    </el-menu>
</template>
<script>
export default {
    data() {
            const routPath = this.$route.path.split('/')[1]
            return {
                path: routPath,
                menuName: '',
                menuIcon: '<div class="' + routPath + ' img"></div>',
                list: [],
                uniqueOpened: true //是否菜单只展开一项
            }
        },
        created() {
            this.getData();
        },
        mounted() {
            setTimeout(function() {
                $('#superviseMenu li:first').find(".el-submenu__title").trigger('click')
            }, 50);
        },
        methods: {
            getData() {
               	const mockData = location.protocol + '//' + location.host + '/static/mock/superviseMenuEN.js';
                //const mockData = location.protocol + '//' + location.host + '/dist/static/mock/superviseMenuEN.js';
                this.$api.get(mockData, null, r => {
                    this.list = r;
                    this.fetchDate();
                })
            },
            fetchDate() {
                let curPath = this.$route.path;
                for (let p in this.list) {
                    if (this.list[p].code == curPath) {
                        $('.pull-left').html('<h3>' + this.list[p].menuName + '</h3>');
                        return;
                    }
                    if (this.list[p].subMenu && this.list[p].subMenu.length) {
                        let subMenu = this.list[p].subMenu;
                        for (let i = 0, len = subMenu.length; i < len; i++) {
                          if (curPath == subMenu[i].code) {
                              $('.pull-left').html('<h3>' + subMenu[i].menuName + '</h3>');
                              return;
                          }
                        }
                    }
                }
            }
        },
        watch: {
            '$route': 'fetchDate'
        }
}
</script>
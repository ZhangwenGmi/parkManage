<template lang="html">
    <el-menu default-active="1" id="nav-menu" theme="dark">
        <li>
            <div class="logo">
                <router-link to="/EN">
                    <img src="../../assets/images/common/platform-name.png" />
                </router-link>
            </div>
        </li>
        <li class="nav-li">
            <div class="head-img">
                <dl>
                    <dt v-html="menuIcon"></dt>
                    <dd>
                        {{menuNames}}
                    </dd>
                </dl>
            </div>
        </li>
        <li>
            <ul class="nav-links">
                <el-menu-item v-for="i in list" index="">
                    <router-link :to="''+i.code" class="nav-link" active-class="active"> {{ i.menuName }}</router-link>
                </el-menu-item>
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
            const routPath = this.$route.path.split('/')[2];
            return {
                path: routPath,
                menuNames: '',
                menuIcon: '<div class="' + routPath + ' img"></div>',
                list: []
            }
        },
        created() {
            this.getData()
        },
        methods: {
            getData() {
                const mockData = location.protocol + '//' + location.host + '/static/mock/menuEN.js';
                //const mockData = location.protocol + '//' + location.host + '/dist/static/mock/menuEN.js';
                this.$api.get(mockData, null, r => {
                    this.list = r[this.path].subMenu;
                    this.menuNames = r[this.path].menuName;
                    this.fetchDate();
                })
            },
            fetchDate() {
                let curPath = this.$route.path;
                for (let i = 0, len = this.list.length; i < len; i++) {
                    if (curPath.indexOf(this.list[i].code) != -1) {
                        $('.pull-left').html('<h3>' + this.list[i].menuName + '</h3>');
                    }
                }
            }
        },
        watch: {
            '$route': 'fetchDate'
        }
}
</script>
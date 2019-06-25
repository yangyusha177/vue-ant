<template>
  <div id="app">
    <a-layout :class="{'isHide': isHide}" v-if="!this.$route.meta.isLogin" id="components-layout-demo-responsive">
        <a-layout-sider
          :trigger="null"
          collapsible
          v-model="collapsed"
        >
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1-1']">
          <a-menu-item key="1-1">
            <a-icon type="home" />
            <span class="nav-text"><router-link to="/home">Dashboard</router-link></span>
          </a-menu-item>
          <a-menu-item v-for="(list, index) in $store.state.routes" :key="index" v-show="!list.meta.isLogin&&index!=1">
            <a-icon :type="list.meta.icon" />
            <span class="nav-text"><router-link :to="list.path">{{list.meta.title}}</router-link></span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0 20px;color: #97a8be;">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="()=> collapsed = !collapsed"
          />
          <span class="title-current">{{title}}</span>
          <span class="logout" @click="logout">退出</span>
          <span class="username"><a-icon type="user" style="margin-right:6px;"/>{{username}}</span>
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <div :style="{ background: '#fff', minHeight: '580px' }">
            <router-view/>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
    <a-layout v-if="this.$route.meta.isLogin">
      <router-view/>
    </a-layout>
  </div>
</template>
<script>
import { Layout, Menu, Icon } from 'ant-design-vue'
const LayoutHeader = Layout.Header
const LayoutSider = Layout.Sider
const LayoutContent = Layout.Content
const MenuItem = Menu.Item

export default {
  name: 'home',
  data () {
    return {
      collapsed: false,
      isHide: true,
      username: '',
      title: ''
    }
  },
  methods: {
    onCollapse (collapsed, type) {
      console.log(collapsed, type)
    },
    onBreakpoint (broken) {
      console.log(broken)
    },
    getRoute () {
      this.$store.dispatch('handRoute')
    },
    logout () {
      localStorage.removeItem('username')
      localStorage.removeItem('password')
      this.$router.push({ path: '/' })
    }
  },
  components: {
    ALayout: Layout,
    AMenu: Menu,
    AIcon: Icon,
    ALayoutHeader: LayoutHeader,
    ALayoutSider: LayoutSider,
    ALayoutContent: LayoutContent,
    AMenuItem: MenuItem
  },
  created () {
  },
  mounted () {
  },
  beforeUpdate () {
    this.isHide = this.$route.meta.isLogin
    this.getRoute()
    this.username = localStorage.getItem('username')
    this.title = this.$route.meta.title
    console.log(localStorage.getItem('username'))
  }
}
</script>

<style lang="less">
#app {
  height: 100%;
}
.ant-layout {
  height: 100%;
}
#components-layout-demo-responsive {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
.ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background-color: rgb(48, 65, 86);
}
.isHide {
  display: none;
}
.nav-text {
  display: inline-block;
  width: 100%;
}
.nav-text a{
  display: inline-block;
  width: 84%;
  color: rgba(255, 255, 255, 0.65);
}
.ant-menu-dark .ant-menu-item-selected .nav-text a {
  text-decoration: none;
  color: #fff;
}
.nav-text a:hover {
  color: #fff;
}
.title-current {
  padding-left: 20px;
}
.logout {
  float: right;
  cursor: pointer;
}
.username {
  float: right;
  margin-right: 18px;
}
</style>

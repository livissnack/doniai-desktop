<template>
  <div id="app">
    <div class="side-nav border">
      <div class="side-top">
        <ul class="ls-menu">
          <li>
            <router-link to="#" class="ls-avatar ls-white ls-menu-item">
              <img
                src="./assets/avatar.jpg"
                width="30"
                height="30"
                alt="livissnack"
              />
            </router-link>
          </li>
          <li>
            <router-link to="/" class="ls-white ls-menu-item">
              <i class="fas fa-comment-dots"></i>
              <span>消息</span>
            </router-link>
          </li>
          <li>
            <router-link to="/file" class="ls-menu-item">
              <i class="fas fa-folder-open"></i>
              <span>文档</span>
            </router-link>
          </li>
          <li>
            <router-link to="/work" class="ls-menu-item">
              <i class="fas fa-globe-europe"></i>
              <span>笔记</span>
            </router-link>
          </li>
          <li>
            <router-link to="/address_book" class="ls-menu-item">
              <i class="fas fa-address-book"></i>
              <span>通讯录</span>
            </router-link>
          </li>
          <li>
            <router-link to="/tools" class="ls-menu-item">
              <i class="fas fa-hammer"></i>
              <span>工具</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="side-middle"></div>
      <div class="side-bottom">
        <ul class="ls-menu">
          <li>
            <b-tooltip label="日历" type="is-dark" position="is-right">
              <router-link to="/calendar" class="ls-menu-item">
                <i class="fas fa-calendar-alt"></i>
              </router-link>
            </b-tooltip>
          </li>
          <li>
            <b-tooltip label="待办" type="is-dark" position="is-right">
              <router-link to="/done" class="ls-menu-item">
                <i class="fas fa-calendar-check"></i>
              </router-link>
            </b-tooltip>
          </li>
          <li>
            <b-tooltip label="视频" type="is-dark" position="is-right">
              <router-link to="/video" class="ls-menu-item">
                <i class="fas fa-video"></i>
              </router-link>
            </b-tooltip>
          </li>
          <li>
            <b-tooltip label="邮件" type="is-dark" position="is-right">
              <router-link to="/email" class="ls-menu-item">
                <i class="fas fa-envelope"></i>
              </router-link>
            </b-tooltip>
          </li>
        </ul>
      </div>
    </div>
    <div class="work-box border">
      <div class="operate-nav border">
        <div></div>
        <div class="operate-btns">
          <ul>
            <li>
              <a href="#" @click="minimizeWin"><i class="fas fa-minus"></i></a>
            </li>
            <li>
              <a href="#" @click="maximizeWin"
                ><i class="far fa-window-maximize"></i
              ></a>
            </li>
            <li>
              <a href="#" @click="closeWin"><i class="fas fa-times"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="content-box">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// const ipc = null
const ipc = window.require ? window.require('electron').ipcRenderer : require('electron').ipcRenderer
export default {
  methods: {
    minimizeWin() {
      ipc.send('window-min')
    },
    maximizeWin() {
      ipc.send('window-max')
    },
    closeWin() {
      ipc.send('window-close')
    },
  },
}
</script>

<style lang="less">
::-webkit-scrollbar{
  width: 5px;
  height: 1px;
}

body {
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  height: 100%;
}

.pd2 {
  padding: 20px;
}

.side-nav {
  float: left;
  width: 60px;
  position: relative;
  background-color: #6b56f7;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.ls-avatar {
  border-radius: 5px;
}

.work-box {
  position: relative;
  overflow: hidden;
  // height: 810px;
}

.content-box {
  // height: 810px;
}

.operate-nav {
  -webkit-app-region: drag;
  -webkit-user-select: none;
  height: 30px;
}

.border {
  border: 1px solid #cecece;
}

.side-top {
  // top: 0;
  width: 100%;
}

.side-middle {
  // margin-top: 266px;
  width: 100%;
  flex-grow: 1;
}

.ls-white {
  color: #ffffff !important;
}

.side-bottom {
  // bottom: 0;
  width: 100%;
}

.ls-menu {
  li {
    padding: 10px 0;
    .b-tooltip {
      margin-left: 22px;
    }
    a:hover {
      color: #ffffff;
    }
  }
}

.ls-avatar {
  margin-left: 15px;
  img {
    border: 1px solid #ffffff;
    border-radius: 5px;
  }
}

.ls-menu-item {
  text-align: center;
  color: #cecece;
  i {
    display: block;
  }
  span {
    display: block;
    font-size: 12px;
  }
}

.operate-nav {
  display: flex;
  justify-content: space-between;
  .operate-btns {
    padding: 2px 20px 0 0px;
    width: 100px;
    -webkit-app-region: no-drag;
  }
  ul {
    display: flex;
    justify-content: space-between;
    li {
      display: inline-block;
      a {
        color: #666666;
        &:hover {
          color: #3298dc;
        }
      }
    }
  }
}

.dropdown-menu {
  min-width: 6rem !important;
  .dropdown-content {
    padding-bottom: 0;
    padding-top: 0;
    text-align: left;
    .dropdown-divider {
      margin: 0 !important;
    }
  }
}
</style>

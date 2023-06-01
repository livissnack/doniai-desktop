<template>
  <div class="operate-box">
    <div class="operate-icons">
      <ul>
        <li>
          <b-tooltip label="表情" type="is-dark" position="is-bottom">
            <a href=""><i class="far fa-smile"></i></a>
          </b-tooltip>
        </li>
        <li>
          <b-tooltip label="赞" type="is-dark" position="is-bottom">
            <a href=""><i class="far fa-thumbs-up"></i></a>
          </b-tooltip>
        </li>
        <li>
          <b-tooltip label="屏幕截图" type="is-dark" position="is-bottom">
            <a href="javascript(0)" @click="startCapture"><i class="fas fa-cut"></i></a>
          </b-tooltip>
        </li>
        <li>
          <b-tooltip label="发送文件" type="is-dark" position="is-bottom">
            <i class="fas fa-folder-plus"></i>
          </b-tooltip>
        </li>
      </ul>
    </div>
    <div>
      <textarea class="textarea" placeholder="请输入要发送的信息"></textarea>
    </div>
    <div class="operate-sent-box">
      <div>
        <div><span>Enter 发送，Ctrl + Enter 换行</span></div>
        <div><button class="button is-link is-small">发送</button></div>
      </div>
    </div>
  </div>
</template>

<script>
// const ipc = null
// console.log(window, 'llll-----')
const ipc = window.require ? window.require('electron').ipcRenderer : require('electron').ipcRenderer
export default {
  name: 'ChatOperate',
  props: {
    msg: String
  },
  methods: {
    startCapture() {
      ipc.send('capture-screen')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.operate-box {
  padding: 10px 10px;
}
.operate-sent-box{
  padding-top: 15px;
  display: flex;
  justify-content: flex-end;
  div {
    div {
      display: inline;
      margin-left: 20px;
    }
  }
}

.textarea:not([rows]) {
  min-height: 14em;
}

.operate-icons {
  ul {
    li {
      display: inline;
      margin-left: 20px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>

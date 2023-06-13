<template>
  <div class="clash-box">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="header">
            <div class="title">请输入要查询  的序列号</div>
            <div class="copy">
              <b-button type="is-primary" size="is-small" @click="copyStr('wait_str')">
                <Copy theme="outline" size="12" fill="#fff"/>
                复制
              </b-button>
            </div>
          </div>
          <b-field>
            <b-input v-model="wait_str" type="text"></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="buttons">
            <b-button class="ml-10" type="is-success" size="is-small" @click="startQuery">
              <Change theme="outline" size="14" fill="#333"/>
              查询
            </b-button>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="header">
            <div class="title">查询 的结果：</div>
            <div class="copy">
              <div>
                <b-button id="download-link" type="is-is-danger" size="is-small" @click="downloadFile">下载</b-button>
                <b-button class="ml-10" type="is-primary" size="is-small" @click="copyStr('res_str')">
                  <Copy theme="outline" size="12" fill="#fff"/>
                  复制
                </b-button>
              </div>
            </div>
          </div>
          <b-field>
            <b-input v-model="res_str" maxlength="20000" rows="10" type="textarea"></b-input>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const fs = window.require ? window.require('fs') : require('fs')
import {Airplay, Change, Copy, DEFAULT_ICON_CONFIGS, Down, Send, Up } from '@icon-park/vue'
import {SnackbarProgrammatic as Snackbar} from 'buefy'
const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon' }
const ipc = window.require ? window.require('electron').ipcRenderer : require('electron').ipcRenderer

export default {
  provide() {
    return {
      ICON_CONFIGS: IconConfig,
    }
  },
  data() {
    return {
      wait_str: ``,
      res_str: '',
      currentMenu: { id: 3, text: 'Clash' },
      active_dropdown: false,
      currentFilePath: '',
    }
  },
  components: {
    Copy,
    Airplay,
    Change,
    Up,
    Down,
    Send,
  },
  methods: {
    startQuery() {
      if (this.currentMenu.id === 1) {
        this.res_str = base64_encode(this.wait_str)
      }

      if (this.currentMenu.id === 3) {
        console.log(clash_demo_json, 'pppp-------')
        this.res_str = this.parseClash(clash_demo_json)
        this.writeYaml(this.res_str)
      }
    },
    downloadFile() {
      ipc.send("download", {
        payload: {
          saveStr: this.res_str,
        }
      })
    },
    async copyStr(type) {
      let copy_str = ''
      if (type === 'wait_str') {
        copy_str = this.wait_str
      } else if (type === 'res_str') {
        copy_str = this.res_str
      } else {
        copy_str = ''
      }

      if (!isEmpty(copy_str)) {
        this.$copyText(copy_str).then(function (e) {
          Snackbar.open({
            message: '成功复制到粘贴板',
            pauseOnHover: true,
            type: 'is-success',
          })
        }, function (e) {
          Snackbar.open({
            message: '成功复制到粘贴板',
            pauseOnHover: true,
            type: 'is-success',
          })
        })
      } else {
        Snackbar.open({
          message: '当前复制内容为空',
          pauseOnHover: true,
          type: 'is-danger',
        })
      }
    },
    changeCurrentMenu(menu) {
      this.active_dropdown = false
      this.currentMenu = menu
    },
    parseClash(str) {
    }
  },
}
</script>

<style lang="less" scoped>
.clash-box {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  .title {
    font-size: 14px;
    color: #777;
  }
}

.ml-10 {
  margin-left: 10px;
}

.node-type-btn {
  width: 160px;
  justify-content: space-between;
}
</style>

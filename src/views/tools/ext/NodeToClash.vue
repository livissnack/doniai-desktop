<template>
  <div class="clash-box">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="header">
            <div class="title">请输入要进行 转换 的节点</div>
            <div class="copy">
              <b-button type="is-primary" size="is-small" @click="copyStr('wait_str')">
                <Copy theme="outline" size="12" fill="#fff"/>
                复制
              </b-button>
            </div>
          </div>
          <b-field>
            <b-input v-model="wait_str" maxlength="20000" rows="10" type="textarea"></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="buttons">
            <div class="dropdown" :class="active_dropdown ? 'is-active' : ''">
              <div class="dropdown-trigger">
                <button class="button node-type-btn is-small" aria-haspopup="true" aria-controls="dropdown-menu3" @click="active_dropdown = true">
                  <span>{{ currentMenu.text }}</span>
                  <Down theme="outline" size="14" fill="#333" v-if="!active_dropdown"/>
                  <Up theme="outline" size="14" fill="#333" v-if="active_dropdown"/>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item" v-for="(menu, index) in menus" :key="index" @click="changeCurrentMenu(menu)">
                    {{ menu.text }}
                  </a>
                </div>
              </div>
            </div>
            <b-button class="ml-10" type="is-success" size="is-small" @click="startChange">
              <Change theme="outline" size="14" fill="#333"/>
              转换
            </b-button>
            <div class="remark">
              (转换快捷键：Ctrl + Enter )
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="header">
            <div class="title">节点 转换 的结果：</div>
            <div class="copy">
              <div>
<!--                <a :href="currentFilePath" :download="currentFilePath" class="button is-danger is-small">下载</a>-->
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
import Yaml from 'json-to-pretty-yaml'
import clash_demo_json from '@/utils/jsons/clash.json'
import {Airplay, Change, Copy, DEFAULT_ICON_CONFIGS, Down, Send, Up } from '@icon-park/vue'
import {SnackbarProgrammatic as Snackbar} from 'buefy'
import {base64_encode, isEmpty, timeFileName} from '@/utils/helper'

const ipc = window.require ? window.require('electron').ipcRenderer : require('electron').ipcRenderer
const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon' }

export default {
  provide() {
    return {
      ICON_CONFIGS: IconConfig,
    }
  },
  data() {
    return {
      wait_str: `ss://YWVzLTI1Ni1nY206ZzVNZUQ2RnQzQ1dsSklkQDE5OC41Ny4yNy4yMTg6NTAwNA==#v2rayse_test
vmess://eyJhZGQiOiIxNTQuMjMuMTkwLjE2MiIsInYiOjIsInBzIjoidjJyYXlzZV90ZXN0IiwicG9ydCI6NDQzLCJpZCI6ImI5OTg0Njc0LWY3NzEtNGU2Ny1hMTk4LWM3ZTYwNzIwYmEyYyIsImFpZCI6IjAiLCJzY3kiOiJhdXRvIiwibmV0Ijoid3MiLCJ0eXBlIjoiIiwidGxzIjoiIn0=
vmess://eyJhZGQiOiIxNTQuMjMuMTkwLjE2MiIsInYiOjIsInBzIjoidjJyYXlzZV90ZXN0IiwicG9ydCI6NDQzLCJpZCI6ImI5OTg0Njc0LWY3NzEtNGU2Ny1hMTk4LWM3ZTYwNzIwYmEyYyIsImFpZCI6IjAiLCJzY3kiOiJhdXRvIiwibmV0Ijoid3MiLCJ0eXBlIjoiIiwidGxzIjoiIn0=
ssr://MjAuMjM5LjQ5LjQ0OjU5ODE0Om9yaWdpbjpub25lOnBsYWluOk0yUm1OVGN5TnpZdE1ETmxaaTAwTldObUxXSmtaRFF0TkdWa1lqWmtabUZoTUdWbS8/Z3JvdXA9YUhSMGNITTZMeTkyTW5KaGVYTmxMbU52YlE9PSZyZW1hcms9ZGpKeVlYbHpaVjkwWlhOMA==
trojan://bc7593fe-0604-4fbe-a70bYWVzLTI1Ni1nY206Q1VuZFNabllzUEtjdTaclWNFc1RmRBNk5NQU5KSnga3fa58ac5a3ef0-b4ab-11eb-b65e-1239d0255272@ca-trojan.bonds.id:443#v2rayse_test
http://username:password@124.15.12.24:251
socks5://124.15.12.24:2312
hysteria://1.2.3.4:12854?protocol=udp&auth=pekopeko&peer=wechat.com&insecure=1&upmbps=50&downmbps=250&alpn=h3#Hys-1.2.3.4
vless://abc-def-ghi-fge-zsx@1.2.3.4:7777?encryption=none&security=tls&type=tcp&headerType=none#test
https://t.me/socks?server=1.2.3.4&port=123&user=username&pass=password`,
      res_str: '',
      currentMenu: { id: 3, text: 'Clash' },
      menus: [
        { id: 1, text: 'Base64' },
        { id: 2, text: 'V2ray' },
        { id: 3, text: 'Clash' },
        { id: 4, text: 'Surfboard' },
        { id: 5, text: 'Surge' },
        { id: 6, text: 'Quantumult X' },
      ],
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
    startChange() {
      if (this.currentMenu.id === 1) {
        this.res_str = base64_encode(this.wait_str)
      }

      if (this.currentMenu.id === 3) {
        console.log(clash_demo_json, 'pppp-------')
        this.res_str = this.parseClash(clash_demo_json)
        this.writeYaml(this.res_str)
      }
    },

    writeYaml(str) {
      let fileName = 'livis' + timeFileName()
      let filePath = `tmp/${fileName}.yaml`
      this.currentFilePath = filePath
      fs.writeFile(filePath, str, { flag: 'w' }, (err) => {
        if (err) {
          Snackbar.open({
            message: '解析出现未知错误',
            pauseOnHover: true,
            type: 'is-danger',
          })
        } else {
          Snackbar.open({
            message: '解析成功，请下载该文件',
            pauseOnHover: true,
            type: 'is-success',
          })
        }
      })
    },
    downloadFile() {
      ipc.send("download", {
        payload: {
          fileURL: this.currentFilePath
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
      return Yaml.stringify(str)
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

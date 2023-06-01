<template>
  <div class="book-box">
    <div class="container">
      <nav class="lv-navbar navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img class="clash-logo" style="background-image: url(&quot;https://v2rayse.com/icon/v2ray-clash.png&quot;); background-position: center center;" />
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item toolbar-title">
              节点转Clash
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
                <a class="lv-light">
                  <span>清空</span>
                </a>
                <a class="lv-light">
                  <span>过滤</span>
                </a>
            </div>
          </div>
        </div>
      </nav>
      <div class="columns">
        <div class="column">
<!--           <MonacoEditor ref="" :opts="opts" @change="changeValue" :height="600"/>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { User, DEFAULT_ICON_CONFIGS } from '@icon-park/vue'
import {snsArr} from "@/utils/helper";
import {decode_http, decode_hysteria, decode_ss, decode_ssr, decode_trojan, decode_vmess} from "@/utils/clash";
const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon' }
// import MonacoEditor from '@/components/MonacoEditor.vue'

export default {
  provide() {
    return {
      ICON_CONFIGS: IconConfig,
    }
  },
  data() {
    return {
      opts: {
        value: '',
        readOnly: false,
        language: 'javascript',
        theme: 'vs',
      },
      wait_decode: `
        ss://YWVzLTI1Ni1nY206ZzVNZUQ2RnQzQ1dsSklkQDE5OC41Ny4yNy4yMTg6NTAwNA==#v2rayse_test
        vmess://eyJhZGQiOiIxNTQuMjMuMTkwLjE2MiIsInYiOjIsInBzIjoidjJyYXlzZV90ZXN0IiwicG9ydCI6NDQzLCJpZCI6ImI5OTg0Njc0LWY3NzEtNGU2Ny1hMTk4LWM3ZTYwNzIwYmEyYyIsImFpZCI6IjAiLCJzY3kiOiJhdXRvIiwibmV0Ijoid3MiLCJ0eXBlIjoiIiwidGxzIjoiIn0=
        ssr://MjAuMjM5LjQ5LjQ0OjU5ODE0Om9yaWdpbjpub25lOnBsYWluOk0yUm1OVGN5TnpZdE1ETmxaaTAwTldObUxXSmtaRFF0TkdWa1lqWmtabUZoTUdWbS8/Z3JvdXA9YUhSMGNITTZMeTkyTW5KaGVYTmxMbU52YlE9PSZyZW1hcms9ZGpKeVlYbHpaVjkwWlhOMA==
        trojan://bc7593fe-0604-4fbe-a70bYWVzLTI1Ni1nY206Q1VuZFNabllzUEtjdTaclWNFc1RmRBNk5NQU5KSnga3fa58ac5a3ef0-b4ab-11eb-b65e-1239d0255272@ca-trojan.bonds.id:443#v2rayse_test
        http://username:password@124.15.12.24:251
        socks5://124.15.12.24:2312
        hysteria://1.2.3.4:12854?protocol=udp&auth=pekopeko&peer=wechat.com&insecure=1&upmbps=50&downmbps=250&alpn=h3#Hys-1.2.3.4
        vless://abc-def-ghi-fge-zsx@1.2.3.4:7777?encryption=none&security=tls&type=tcp&headerType=none#test
        https://t.me/socks?server=1.2.3.4&port=123&user=username&pass=password
      `
    }
  },
  components: {
    User,
    // MonacoEditor,
  },
  created() {
    this.initParams()
  },
  methods: {
    changeValue(value) {
      console.log(value, 'lll-')
    },
    initParams(value) {
      let wait_arr = snsArr(this.wait_decode)
      let a = decode_hysteria(11)
      console.log(a, '打印调试-----')
      // console.log('00000000', url)
      // console.log('11111111', window.btoa('hello world'))
      // console.log('22222222', window.atob('YWVzLTI1Ni1nY206ZzVNZUQ2RnQzQ1dsSklkQDE5OC41Ny4yNy4yMTg6NTAwNA==#v2rayse_test'))

    }
  },
}
</script>

<style lang="less" scoped>
.lv-navbar {
  padding: 0 20px 0 0;
  background-color: #316ce8 !important;
  border-color: #316ce8 !important;
}

.clash-logo {

}

.toolbar-title {
  font-size: 1.25rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #ffffff;
}

.lv-light {
  margin-left: 40px;
  color: #ffffff;
}
</style>

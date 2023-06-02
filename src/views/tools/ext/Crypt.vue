<template>
  <div class="crypt-box">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="header">
            <div class="title">请输入要 加密 的数据</div>
            <div class="copy">
              <b-button type="is-primary" size="is-small" @click="copyStr('wait_str')">
                <Copy theme="outline" size="12" fill="#fff"/>
                复制
              </b-button>
            </div>
          </div>
          <b-field>
            <b-input v-model="wait_str" maxlength="20000" type="textarea"></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="buttons">
            <div class="cate-btns">
              <b-button class="ml-10" type="is-success" :class="cur_aes.id === item.id ? '' : 'is-light'" size="is-small" v-for="item in aes_list" :key="item.id" @click="startChange(item)">
                <Lock theme="outline" size="12" :fill="cur_aes.id === item.id ? '#fff' : '#999'"/>
                <span>{{ item.name }}</span>
              </b-button>
            </div>
            <div class="start-btn">
              <b-button class="ml-10 is-small" type="is-danger" @click="startChange(cur_aes)">
                <Click theme="outline" size="12" fill="#fff"/>
                执行
              </b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="header">
            <div class="title">加密后 的结果：</div>
            <div class="copy">
              <div>
                <b-button class="ml-10" type="is-primary" size="is-small" @click="copyStr('res_str')">
                  <Copy theme="outline" size="12" fill="#fff"/>
                  复制
                </b-button>
              </div>
            </div>
          </div>
          <b-field>
            <b-input v-model="res_str" maxlength="20000" type="textarea"></b-input>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Lock, Click, DEFAULT_ICON_CONFIGS, Copy} from '@icon-park/vue'
import {SnackbarProgrammatic as Snackbar} from 'buefy'
import {isEmpty} from '@/utils/helper'
import sha1 from 'crypto-js/sha1'
import sha3 from 'crypto-js/sha3'
import sha224 from 'crypto-js/sha224'
import sha256 from 'crypto-js/sha256'
import sha384 from 'crypto-js/sha384'
import sha512 from 'crypto-js/sha512'
import md5 from 'crypto-js/md5'
import ripemd160 from 'crypto-js/ripemd160'
const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon' }

export default {
  provide() {
    return {
      ICON_CONFIGS: IconConfig,
    }
  },
  data() {
    return {
      wait_str: '',
      res_str: '',
      cur_aes: {id: 1, name: 'sha1'},
      aes_list: [
        {
          id: 1,
          name: 'sha1'
        },
        {
          id: 2,
          name: 'sha3'
        },
        {
          id: 3,
          name: 'sha224'
        },
        {
          id: 4,
          name: 'sha256'
        },
        {
          id: 5,
          name: 'sha384'
        },
        {
          id: 6,
          name: 'sha512'
        },
        {
          id: 7,
          name: 'md5'
        },
        {
          id: 8,
          name: 'ripemd160'
        },
      ],
    }
  },
  components: {
    Copy,
    Lock,
    Click,
  },
  methods: {
    startChange(item) {
      let tmp_wait_str = this.wait_str
      if (isEmpty(tmp_wait_str)) {
        Snackbar.open({
          message: '加密内容不能为空',
          pauseOnHover: true,
          type: 'is-danger',
        })
        return
      }
      this.cur_aes = item
      let aesMap = new Map([
          [1, sha1(tmp_wait_str).toString()],
          [2, sha3(tmp_wait_str).toString()],
          [3, sha224(tmp_wait_str).toString()],
          [4, sha256(tmp_wait_str).toString()],
          [5, sha384(tmp_wait_str).toString()],
          [6, sha512(tmp_wait_str).toString()],
          [7, md5(tmp_wait_str).toString()],
          [8, ripemd160(tmp_wait_str).toString()],
      ])
      this.res_str = aesMap.get(item.id)
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
  },
}
</script>

<style lang="less" scoped>
.crypt-box {
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

.buttons {
  display: flex;
  justify-content: space-between;
}
</style>

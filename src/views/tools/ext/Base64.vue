<template>
  <div class="base64-box">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="header">
            <div class="title">请输入要进行 Base64 编码或解码的字符</div>
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
            <b-button :type="cur_type === 'encode' ? 'is-primary' : 'is-success is-light'" size="is-small" @click="handleBase64Encode">编码 (Encode)</b-button>
            <b-button :type="cur_type === 'decode' ? 'is-primary' : 'is-success is-light'" size="is-small" @click="handleBase64Decode">解码 (Decode)</b-button>
            <b-button type="is-success is-light" size="is-small" @click="changeAesStr">
              <Change theme="outline" size="12" fill="#333"/>
              交换
            </b-button>
            <div class="remark">
              (编码快捷键：Ctrl + Enter )
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="header">
            <div class="title">Base64 编码或解码的结果：</div>
            <div class="copy">
              <b-button type="is-primary" size="is-small" @click="copyStr('res_str')">
                <Copy theme="outline" size="12" fill="#fff"/>
                复制
              </b-button>
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
import {SnackbarProgrammatic as Snackbar} from 'buefy'
import {base64_decode, base64_encode, isEmpty} from '@/utils/helper'
import {Copy, Change} from "@icon-park/vue"

export default {
  data() {
    return {
      cur_type: 'encode',
      wait_str: '',
      res_str: '',
    }
  },
  components: {
    Copy,
    Change,
  },
  methods: {
    handleBase64Encode() {
      this.cur_type = 'encode'
      if (isEmpty(this.wait_str)) {
        Snackbar.open({
          message: '当前编码内容为空',
          pauseOnHover: true,
          type: 'is-danger',
        })
        return
      }
      this.res_str = base64_encode(this.wait_str)
    },
    handleBase64Decode() {
      this.cur_type = 'decode'
      if (isEmpty(this.wait_str)) {
        Snackbar.open({
          message: '当前解码内容为空',
          pauseOnHover: true,
          type: 'is-danger',
        })
        return
      }
      this.res_str = base64_decode(this.wait_str)
    },
    changeAesStr() {
      let tmp_wait_str = this.wait_str
      let tmp_res_str = this.res_str
      this.wait_str = tmp_res_str
      this.res_str = tmp_wait_str
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
.base64-box {
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
</style>

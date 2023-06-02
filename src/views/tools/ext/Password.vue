<template>
  <div class="password-box">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="header">
            <div class="title">生成的密码 结果 数据</div>
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
      <div class="columns">
        <div class="column">
          <b-field class="pass-title is-small" label="密码长度">
            <input class="input pass-input is-small" v-model="pass_len" autocomplete="on" step="1" type="number" placeholder="请输入生成密码长度">
          </b-field>
          <div class="buttons">
            <div class="cate-btns">
              <b-button class="ml-10" type="is-success" :class="cur_type.id === item.id ? '' : 'is-light'" size="is-small" v-for="item in list" :key="item.id" @click="startChange(item)">
                <Protect theme="outline" size="12" :fill="cur_type.id === item.id ? '#fff' : '#999'"/>
                <span>{{ item.name }}</span>
              </b-button>
            </div>
            <div class="start-btn">
              <b-button class="ml-10 is-small" type="is-danger" @click="startChange(cur_type)">
                <Click theme="outline" size="12" fill="#fff"/>
                生成
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Protect, Click, Copy, DEFAULT_ICON_CONFIGS} from '@icon-park/vue'
import {SnackbarProgrammatic as Snackbar} from 'buefy'
import {isEmpty} from '@/utils/helper'
import { randomPass } from '@/utils/password'
const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon' }

export default {
  provide() {
    return {
      ICON_CONFIGS: IconConfig,
    }
  },
  data() {
    return {
      res_str: '',
      cur_type: {id: 1, name: '小写数字', type: 'low'},
      list: [
        {
          id: 1,
          name: '小写数字',
          type: 'low',
        },
        {
          id: 2,
          name: '大小写数字',
          type: 'medium',
        },
        {
          id: 3,
          name: '大小写数字特殊字符',
          type: 'high',
        },
      ],
      pass_len: 16,
    }
  },
  components: {
    Protect,
    Click,
    Copy,
  },
  methods: {
    startChange(item) {
      this.cur_type = item
      this.res_str = randomPass(this.pass_len, this.cur_type.type)
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
.password-box {
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

.pass-input {
  width: 100px;
}

::v-deep .pass-title {
  .label {
    font-size: 14px !important;
    color: #777 !important;
  }
}
</style>

<template>
  <div class="editor">
    <div class="ls-chat-box border">
      <div class="ls-main-title">
        <h4>筱知识库</h4>
      </div>
      <div class="ls-search-box">
        <div class="field">
          <div class="control has-icons-left">
            <input
              class="input is-small is-rounded"
              type="text"
              placeholder="搜索"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
        <div class="">
          <div class="plus-btn" @click="createKnowModel = true">
            <div>
              <plus
                theme="outline"
                size="14"
                fill="#333"
                slot="trigger"
                role="button"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="ls-chat-list">
        <div class="ls-title">
          <span class="ls-text">筱知识</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><bookshelf theme="outline" size="14" fill="#333"/></span>
          <span class="ls-text ls-bold black ml2">知识书籍</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><notebook-and-pen theme="outline" size="14" fill="#333"/></span>
          <span class="ls-text ls-bold black ml2">学习笔记</span>
        </div>
      </div>
    </div>
    <div class="ls-section-box">
      <div id="vditor">
        <plus
          theme="outline"
          size="14"
          fill="#333"
          slot="trigger"
          role="button"
        />
      </div>
    </div>

    <b-modal v-model="createKnowModel" :width="640" scroll="keep">
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">新建知识库</p>
            <button
              size="is-small"
              type="button"
              class="delete"
              @click="hiddenCreateKnowModel"
            />
          </header>
          <section class="modal-card-body">
            <b-field label="名称">
              <b-input
                type="text"
                size="is-small"
                :value="name"
                placeholder="如：产品文档"
                required
              >
              </b-input>
            </b-field>

            <b-field label="简介">
              <b-input
                size="is-small"
                maxlength="200"
                type="textarea"
                :value="desc"
                placeholder="产品设计与研发"
              ></b-input>
            </b-field>

            <b-field label="可见范围">
              <b-select size="is-small" v-model="seclectedValue" required>
                <option value="0">仅自己可见</option>
                <option value="1">互联网可见</option>
              </b-select>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-primary is-small">新建</button>
          </footer>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Vditor from 'vditor'
import { isEmpty } from '../utils/helper'
import { Plus, Bookshelf, NotebookAndPen, DEFAULT_ICON_CONFIGS } from '@icon-park/vue'
const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon' }

export default {
  name: 'Editor',
  provide() {
    return {
      ICON_CONFIGS: IconConfig,
    }
  },
  data() {
    return {
      contentEditor: '',
      createKnowModel: false,
      name: '',
      desc: '',
      seclectedValue: 0,
    }
  },
  components: {
    Plus,
    Bookshelf,
    NotebookAndPen,
  },
  mounted() {
    this.contentEditor = new Vditor('vditor', {
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
      },
      after: () => {
        this.contentEditor.setValue('hello, Vditor + Vue!')
      },
      input: (value) => {
        console.log(value, 'lllll')
      }
    })
  },
  destroyed() {
    if (!isEmpty(this.contentEditor)) {
      this.contentEditor.destroy()
    }
  },
  methods: {
    hiddenCreateKnowModel() {
      this.createKnowModel = false
    },
  },
}
</script>

<style lang="less" scoped>
@import url('../../node_modules/vditor/dist/index.css');
.editor {
  display: flex;
  justify-content: flex-start;
  .vditor-toolbar {
    padding-left: 0!important;
  }
}

.vditor-reset {
  padding: 10px !important;
}

.ls-main-title {
  padding: 20px 0 10px 10px;
  h4 {
    font-size: 18px;
    font-weight: bold;
    color: #4a4a4a;
  }
}

.ls-chat-box {
  width: 260px;
}

.ls-section-main {
  height: 100%;
  .ls-section-content {
    overflow-y: auto;
    height: 400px;
  }
}

.ls-bottom-border {
  border-bottom: 1px solid #cecece;
}

.ls-search-box {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #cecece;
}

.ls-chat-list {
  overflow-y: auto;
  overflow-x: hidden;
  height: 714px;
}

.ls-section-box {
  width: 100%;
}

.ls-title {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-left: 12px;
}

.ls-text {
  font-size: 14px;
  color: #9b9494;
}

.ls-bold {
  font-weight: bold;
}

.black {
  color: #666;
}

.ml2 {
  margin-left: 20px;
}

.ls-menu-box {
  width: 90%;
  margin: 0 auto;
  padding: 5px 10px;
  border-radius: 6px;
  .ls-menu-item {
    padding: 10px;
  }
  &:hover {
    background-color: #eee7e7;
    cursor: pointer;
  }
}

.ls-more {
  cursor: pointer;
}

.ls-section-title {
  padding: 20px;
}

.ls-section-btn {
  padding: 0 20px;
}

.ls-section-navs {
  padding: 20px;
}

.ls-section-table {
  padding: 0 40px 20px 20px;
  table {
    tbody {
      overflow-y: auto !important;
    }
  }
}

#vditor {
  height: 100% !important;
}

.plus-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #dbdbdb;
  text-align: center;
  line-height: 30px;
  border-radius: 20px;
}

.modal-card-foot {
  justify-content: flex-end;
}
</style>

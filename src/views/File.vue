<template>
  <div class="file">
    <div class="ls-chat-box border">
      <div class="ls-main-title">
        <h4>筱盘与文档</h4>
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
      </div>

      <div class="ls-chat-list">
        <div class="ls-title">
          <span class="ls-text">筱盘</span>
          <span class="ls-more">
            <div>
              <b-dropdown aria-role="list" position="is-bottom-left">
                <more theme="outline" size="24" fill="#333" slot="trigger" role="button"/>
                <b-dropdown-item aria-role="listitem">文件动态</b-dropdown-item>
                <b-dropdown-item aria-role="listitem">外链管理</b-dropdown-item>
                <b-dropdown-item aria-role="listitem">查看容量</b-dropdown-item>
                <hr class="dropdown-divider" aria-role="menuitem">
                <b-dropdown-item aria-role="listitem">添加快捷方式</b-dropdown-item>
                <hr class="dropdown-divider" aria-role="menuitem">
                <b-dropdown-item aria-role="listitem">帮助</b-dropdown-item>
                <hr class="dropdown-divider" aria-role="menuitem">
                <b-dropdown-item aria-role="listitem">刷新页面</b-dropdown-item>
              </b-dropdown>
            </div>
          </span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><i class="fas fa-folder-open"></i></span>
          <span class="ls-text ls-bold black ml2">私人盘</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><i class="fas fa-trash"></i></span>
          <span class="ls-text ls-bold black ml2">回收站</span>
        </div>
        <div class="ls-title">
          <span class="ls-text">筱文档</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><i class="fas fa-fire-alt"></i></span>
          <span class="ls-text ls-bold black ml2">知识库</span>
        </div>
      </div>
    </div>
    <div class="ls-section-box">
      <div class="ls-section-title">
        <div>
          <h3>最近</h3>
        </div>
      </div>
      <div class="ls-section-btn">
        <div class="file-btn">
          <button class="button is-success is-small is-rounded" @click="thisUpladFile">
            <span class="icon is-small">
              <i class="fas fa-upload"></i>
            </span>
            <span><input type="file" id="uploadFile" hidden @change="changeUploadFile"/>
            上传</span>
          </button>
        </div>
      </div>
      <div class="ls-section-navs">
        <div class="tabs">
          <ul>
            <li class="is-active"><a>全部</a></li>
            <li><a>文档</a></li>
            <li><a>表格</a></li>
            <li><a>视频</a></li>
            <li><a>音乐</a></li>
            <li><a>知识库</a></li>
            <li><a>其他</a></li>
          </ul>
        </div>
      </div>

      <div class="ls-section-table">
        <div class="b-table">
          <div class="table-wrapper has-mobile-cards has-sticky-header">
            <table class="table">
              <thead>
                <tr>
                  <th class="checkbox-cell is-sticky">
                    <label class="b-checkbox checkbox"
                      ><input
                        type="checkbox"
                        true-value="true"
                        value="false"/><span class="check"></span
                      ><span class="control-label"></span
                    ></label>
                  </th>
                  <th class="" style="width: 40px;">
                    <div class="th-wrap is-numeric">
                      <span class="is-relative">
                        ID
                      </span>
                    </div>
                  </th>
                  <th class="">
                    <div class="th-wrap">
                      <span class="is-relative">
                        文件名称
                      </span>
                    </div>
                  </th>
                  <th class="">
                    <div class="th-wrap">
                      <span class="is-relative">
                        最近使用
                      </span>
                    </div>
                  </th>
                  <th class="">
                    <div class="th-wrap">
                      <span class="is-relative">
                        大小
                      </span>
                    </div>
                  </th>
                  <th class="">
                    <div class="th-wrap">
                      <span class="is-relative">
                        操作
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr draggable="false">
                  <td class="checkbox-cell is-sticky">
                    <label class="b-checkbox checkbox"
                      ><input
                        type="checkbox"
                        true-value="true"
                        value="false"/><span class="check"></span
                      ><span class="control-label"></span
                    ></label>
                  </td>
                  <td data-label="ID" class="has-text-right"><span>11</span></td>
                  <td data-label="文件名称" class="">
                    <span>夜鹰助手.docx</span>
                  </td>
                  <td data-label="最近使用" class="">
                    <span>2020/12/17 17:44:45</span>
                  </td>
                  <td data-label="大小" class=""><span>11.45kb</span></td>
                  <td data-label="操作" class="">
                    <div>
                      <b-dropdown aria-role="list" position="is-bottom-left">
                        <more theme="outline" size="24" fill="#333" slot="trigger" role="button"/>
                        <b-dropdown-item aria-role="listitem">转为副本</b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">下载</b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item aria-role="listitem">云打印</b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item aria-role="listitem">删除</b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ChatOperate from '@/components/ChatOperate.vue'
import ChatContent from '@/components/ChatContent.vue'
import ChatItem from '@/components/ChatItem.vue'
import {More, DEFAULT_ICON_CONFIGS} from '@icon-park/vue'
import { uploadFile } from '../utils/api'
const IconConfig = {...DEFAULT_ICON_CONFIGS, prefix: 'icon'}


export default {
  name: 'File',
  provide () {
    return {
      ICON_CONFIGS: IconConfig
    }
  },
  components: {
    ChatOperate,
    ChatContent,
    ChatItem,
    More
  },
  data() {
    return {
      files: [],
      fileList: [
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
      ],
    }
  },
  computed: {
    columns() {
      return [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true,
          sticky: true,
          headerClass: 'is-sticky-column-one',
          cellClass: 'is-sticky-column-one',
        },
        {
          field: 'name',
          label: '文件名称',
        },
        {
          field: 'time',
          label: '最近使用',
        },
        {
          field: 'size',
          label: '大小',
        },
        {
          field: '',
          label: '操作',
        },
      ]
    },
    checkableColumns() {
      return [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true,
          sticky: false,
        },
        {
          field: 'name',
          label: '文件名称',
        },
        {
          field: 'time',
          label: '最近使用',
        },
        {
          field: 'size',
          label: '大小',
        },
        {
          field: '',
          label: '操作',
        },
      ]
    },
  },
  methods: {
    thisUpladFile() {
      document.getElementById("uploadFile").click();
    },
    async changeUploadFile(event) {
      this.files = event.target.files
      let fd = new FormData()
      let file = this.files[0]
      fd.append('file', file)
      console.log(file)
      const {data} = await uploadFile(fd)
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
.file {
  display: flex;
  justify-content: flex-start;
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

.tabs {
  ul {
    border: 0;
    .is-active {
      text-decoration: underline;
    }
  }
}

.has-sticky-header {
  height: 600px !important;
}

.file-btn {
  margin-top: 20px;
}
</style>

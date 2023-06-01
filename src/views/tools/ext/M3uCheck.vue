<template>
  <div class="m3u-check">
    <div class="ls-section-box">
      <div class="ls-section-title">
        <div>
          <b-progress :rounded="false" :value="80" type="is-success" show-value format="percent">
            萨达达萨
          </b-progress>
        </div>
      </div>
      <div class="ls-section-btn">
        <div class="file-btn">
          <div class="btn-left">
            <button class="button is-danger is-small" @click="thisUpladFile">
            <span class="icon is-small">
              <i class="fas fa-upload"></i>
            </span>
            <span><input type="file" id="uploadFile" hidden @change="changeUploadFile"/>
              云端导入</span>
            </button>
            <button class="button is-danger is-small" @click="thisUpladFile">
              <span class="icon is-small">
                <i class="fa-solid fa-tv-retro"></i>
              </span>
              <span><input type="file" id="uploadFile" hidden @change="changeUploadFile"/>
                本地导入m3u/m3u8</span>
            </button>
          </div>
          <div class="btn-center">
            <button class="button is-success is-small" @click="thisUpladFile">
            <span class="icon is-small">
              <i class="fas fa-upload"></i>
            </span>
            <span><input type="file" id="uploadFile" hidden @change="changeUploadFile"/>
                开始检测</span>
            </button>
          </div>
         
          <div class="btn-right">
            <button class="button is-info is-small" @click="thisUpladFile">
            <span class="icon is-small">
              <i class="fas fa-upload"></i>
            </span>
            <span><input type="file" id="uploadFile" hidden @change="changeUploadFile"/>
              导出m3u/m3u8</span>
            </button>
            <button class="button is-info is-small" @click="thisUpladFile">
              <span class="icon is-small">
                <i class="fas fa-upload"></i>
              </span>
              <span><input type="file" id="uploadFile" hidden @change="changeUploadFile"/>
                导出txt</span>
            </button>
          </div>
        </div>
      </div>
      <div class="ls-section-navs">
        <div class="tabs">
          <ul>
            <li class="is-active"><a>全部</a></li>
            <li><a>可用</a></li>
            <li><a>失效</a></li>
            <li><a>优质</a></li>
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
                  <th class="">
                    <div class="th-wrap">
                      <span class="is-relative">
                        名称
                      </span>
                    </div>
                  </th>
                  <th class="">
                    <div class="th-wrap">
                      <span class="is-relative">
                        链接
                      </span>
                    </div>
                  </th>
                  <th class="">
                    <div class="th-wrap">
                      <span class="is-relative">
                        响应速度
                      </span>
                    </div>
                  </th>
                  <th class="">
                    <div class="th-wrap">
                      <span class="is-relative">
                        状态
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
                <tr draggable="false" v-for="item in fileList">
                  <td class="checkbox-cell is-sticky">
                    <label class="b-checkbox checkbox"
                      ><input
                        type="checkbox"
                        true-value="true"
                        :value="item.is_selected"/><span class="check"></span
                      ><span class="control-label"></span
                    ></label>
                  </td>
                  <td data-label="名称" class="name-box">
                    <span>{{ item.name }}</span>
                  </td>
                  <td data-label="链接" class="live-url-box">
                    <b-tooltip :label="item.url" dashed>
                      <span class="live_url">{{ item.url }}</span>
                    </b-tooltip>
                  </td>
                  <td data-label="响应速度" class=""><span>{{ item.req_time }}</span></td>
                  <td data-label="状态" class=""><span :class="item.status === 'ok' ? 'text-success' : 'text-error'">{{ item.status}}</span></td>
                  <td data-label="操作" class="">
                    <div class="buttons">
                      <b-button size="is-small" type="is-success is-light" @click="copyLive(item.url)">复制</b-button>
                      <div>
                        <b-dropdown aria-role="list" position="is-bottom-left">
                          <more theme="outline" size="24" fill="#333" slot="trigger" role="button">更多</more>
                          <b-dropdown-item aria-role="listitem" @click="checkLive(item)">检测</b-dropdown-item>
                          <b-dropdown-item aria-role="listitem" @click="playLive(item)">播放</b-dropdown-item>
                          <b-dropdown-item aria-role="listitem" @click="editPlay(item)">编辑</b-dropdown-item>
                          <b-dropdown-item aria-role="listitem">下载</b-dropdown-item>
                          <hr class="dropdown-divider" aria-role="menuitem">
                          <b-dropdown-item aria-role="listitem">收藏</b-dropdown-item>
                          <hr class="dropdown-divider" aria-role="menuitem">
                          <b-dropdown-item aria-role="listitem">删除</b-dropdown-item>
                        </b-dropdown>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <b-modal v-model="setPlayerUrlModel" :width="640" scroll="keep">
      <div class="player-box">
        <VideoPlayer
            :video_url="player_url"
            :is_live="true"
        />
      </div>
    </b-modal>
    <b-modal v-model="updatePlayerUrlModel" :width="640" scroll="keep">
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">修改播放源地址</p>
            <button
                size="is-small"
                type="button"
                class="delete"
                @click="hiddenUpdatePlayerUrlModel"
            />
          </header>
          <section class="modal-card-body">
            <b-field label="播放源地址">
              <b-input
                  type="text"
                  size="is-small"
                  v-model="update_live_url"
                  placeholder="请输入播放地址"
                  required
              >
              </b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-primary is-small" @click="setUpdatePlayerUrl">
              保存
            </button>
          </footer>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import {More, DEFAULT_ICON_CONFIGS} from '@icon-park/vue'
import VideoPlayer from '@/components/LivisPlayer.vue'
import { uploadFile } from '@/utils/api'
import { checkLiveUrl } from '@/utils/m3u'
const IconConfig = {...DEFAULT_ICON_CONFIGS, prefix: 'icon'}


export default {
  name: 'M3uCheck',
  provide () {
    return {
      ICON_CONFIGS: IconConfig
    }
  },
  components: {
    More,
    VideoPlayer,
  },
  data() {
    return {
      update_live_url: '',
      updatePlayerUrlModel: false,
      setPlayerUrlModel: false,
      player_url: '',
      files: [],
      fileList: [
        {
          id: 1,
          name: 'CCTV-1',
          url: 'http://113.207.84.195:8090/__cl/cg:live/__c/cctv1HD/__op/default/__f/index.m3u8',
          req_time: '173ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 2,
          name: 'CCTV-2',
          url: 'http://113.207.84.195:8090/__cl/cg:live/__c/cctv2HD/__op/default/__f/index.m3u8',
          req_time: '73ms',
          status: 'ok',
          is_completed: false,
          is_selected: true,
        },
        {
          id: 3,
          name: 'CCTV-3',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV3HD_6000.m3u8',
          req_time: '23ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 4,
          name: 'CCTV-4',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV4HD_6000.m3u8',
          req_time: '23ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 5,
          name: 'CCTV-5',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV5HD_6000.m3u8',
          req_time: '28ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 6,
          name: 'CCTV-6',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV6HD_6000.m3u8',
          req_time: '73ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 7,
          name: 'CCTV-7',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV7HD_6000.m3u8',
          req_time: '23ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 8,
          name: 'CCTV-8',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV8HD_6000.m3u8',
          req_time: '234ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 9,
          name: 'CCTV-7',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV7HD_6000.m3u8',
          req_time: '23ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 10,
          name: 'CCTV-8',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV8HD_6000.m3u8',
          req_time: '234ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 1,
          name: 'CCTV-1',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV1HD_6000.m3u8',
          req_time: '173ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 2,
          name: 'CCTV-2',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV2HD_6000.m3u8?query=hhh&token=adhsadsadasdadadsasddadadasd',
          req_time: '73ms',
          status: 'ok',
          is_completed: false,
          is_selected: true,
        },
        {
          id: 3,
          name: 'CCTV-3',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV3HD_6000.m3u8',
          req_time: '23ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 4,
          name: 'CCTV-4',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV4HD_6000.m3u8',
          req_time: '23ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 5,
          name: 'CCTV-5',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV5HD_6000.m3u8',
          req_time: '28ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 6,
          name: 'CCTV-6',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV6HD_6000.m3u8',
          req_time: '73ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 7,
          name: 'CCTV-7',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV7HD_6000.m3u8',
          req_time: '23ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 8,
          name: 'CCTV-8',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV8HD_6000.m3u8',
          req_time: '234ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 9,
          name: 'CCTV-7',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV7HD_6000.m3u8',
          req_time: '23ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
        {
          id: 10,
          name: 'CCTV-8',
          url: 'http://yfsl.vsd.gehua.net.cn/live/CCTV8HD_6000.m3u8',
          req_time: '234ms',
          status: 'ok',
          is_completed: false,
          is_selected: false,
        },
      ],
    }
  },
  computed: {
    columns() {
      return []
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
    },
    async checkLive(live) {
      try {
        let url = live.url
        console.log(live, 'debug1---------')
        const data = await checkLiveUrl(url)
        console.log(data, '测源返回结果---------')
      } catch (error) {
        live.status = 'no'
        live.req_time = error.duration
        live.is_completed = true
        console.log(error, 'debug3')
      }
    },
    async playLive(live) {
      this.player_url = live.url
      this.setPlayerUrlModel = true
      console.log(live, '播放测试视频----------')
    },
    async copyLive(live) {
      this.$copyText(live).then(function (e) {
          alert('Copied')
        }, function (e) {
          alert('Can not copy')
        })
      console.log(live, '复制到粘贴板----------')
    },
    async editPlay(live) {
      this.updatePlayerUrlModel = true
    },
    hiddenUpdatePlayerUrlModel() {
      this.updatePlayerUrlModel = false
    },
    setUpdatePlayerUrl() {

    },
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
  padding: 0 10px 20px 10px;
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
  display: flex;
  justify-content: space-between;
  .btn-left {
    justify-content: flex-start;
    button:nth-child(2) {
      margin-left: 20px;
    }
  }
  .btn-center {
    justify-content: center;
  }
  .btn-right {
    justify-content: flex-start;
    button {
      margin-left: 20px;
    }
  }
}

.text-success {
  color: #48c774;
}

.text-error {
  color: #f14668;
}

.live-url-box {
  width: 400px;
}

.live_url {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.modal-background {
  background-color: #ffffff !important;
}
</style>

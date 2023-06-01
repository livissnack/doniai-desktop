<template>
  <div class="video">
    <div class="ls-chat-box border">
      <div class="ls-main-title">
        <h4>筱娱乐</h4>
      </div>
      <div class="ls-search-box">
        <div class="field">
          <div class="control has-icons-left">
            <b-input v-model="search.keyword" @blur="handleSearchVideos" size="is-small" type="search"
                     icon-pack="fas" placeholder="搜索" rounded></b-input>
          </div>
        </div>
      </div>

      <div class="ls-chat-list">
        <div class="ls-title">
          <span class="ls-text">推荐列表</span>
        </div>
        <div
          class="ls-menu-box"
          v-for="(hot, index) in hot_lives"
          :key="index"
          @click="changeLive(hot)"
        >
          <span class="ls-text"
            ><tv theme="outline" size="14" fill="#333"
          /></span>
          <span class="ls-text ls-bold ml2" :class="hot.video_id === live_data.video_id ? 'green' : 'black'">{{ hot.title }}</span>
        </div>
      </div>
    </div>
    <div class="ls-section-box">
      <div class="video-box">
        <div class="columns">
          <div class="column video-title-box">
            <div>
              <h3 class="video-title">{{ live_data.title }}</h3>
            </div>
            <div>
              <button
                class="button is-small is-success is-rounded"
                @click="setVideoUrlModel = true"
              >
                设置播放源
              </button>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <VideoPlayer
              @get-instance="getInstance"
              :video_url="live_data.url"
              :is_live="is_live"
              v-if="hackReset"
            />
          </div>
        </div>
      </div>
    </div>

    <b-modal v-model="setVideoUrlModel" :width="640" scroll="keep">
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">设置播放源地址</p>
            <button
              size="is-small"
              type="button"
              class="delete"
              @click="hiddenSetVideoUrlModelModel"
            />
          </header>
          <section class="modal-card-body">
            <b-field label="播放地址">
              <b-input
                type="text"
                size="is-small"
                v-model="movie_url"
                placeholder="请输入播放地址"
                required
              >
              </b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-primary is-small" @click="setVideoUrl">
              播放
            </button>
          </footer>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoPlayer from '@/components/LivisPlayer.vue'
import {getVideo, getHotVideos, searchVideos, getParseLiveAddr} from '@/utils/api'
import { Tv, DEFAULT_ICON_CONFIGS } from '@icon-park/vue'
import {getResourceType, isEmpty} from "@/utils/helper";
const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon' }

export default {
  name: 'VideoDetail',
  provide() {
    return {
      ICON_CONFIGS: IconConfig,
    }
  },
  data() {
    return {
      search: {
        keyword: ''
      },
      setVideoUrlModel: false,
      hot_lives: [],
      live_data: {
        video_id: null,
        title: null,
        cover_url: '',
        play_nums: 0,
        remark: '',
        url: '',
        type: 1
      },
      is_live: false,
      movie_url: '',
      hackReset: false,
    }
  },
  mounted() {
    this.getAllHotVideo()
    this.getVideoDetail()
  },
  components: {
    VideoPlayer,
    Tv,
  },
  methods: {
    async getVideoDetail() {
      let video_id = this.$route.params.id
      const { data } = await getVideo(video_id)
      let url = data.data.url
      let live_type = getResourceType(url)
      if (live_type === 'php') {
        data.data.url = await this.parseLiveStream(url)
      }
      this.live_data = { ...data.data }
      this.is_live = data.data.type === 1
      this.hackReset = true
    },
    async parseLiveStream(url) {
      const { data } = await getParseLiveAddr({live_url: url})
      return data.data.data
    },
    async getAllHotVideo() {
      let video_id = this.$route.params.id
      const { data } = await getHotVideos(video_id)
      this.hot_lives = data.data
    },
    async handleSearchVideos() {
      let keyword = this.search.keyword
      if (isEmpty(keyword)) {
        await this.getAllHotVideo()
      } else {
        const { data } = await searchVideos(keyword)
        this.hot_lives = data.data
      }
    },
    async changeLive(live) {
      let live_type = getResourceType(live.url)
      if (live_type === 'php') {
        live.url = await this.parseLiveStream(live.url)
      }
      this.live_data = { ...live }
      this.is_live = live.type === 1
      await this.reloadLoadPlayer()
    },
    reloadLoadPlayer() {
      this.hackReset = false
      this.$nextTick(() => {
        this.hackReset = true
      })
    },
    hiddenSetVideoUrlModelModel() {
      this.setVideoUrlModel = false
    },
    setVideoUrl() {
      this.live_data.url = this.movie_url
      this.live_data.video_id = 0
      this.live_data.title = '自定义直播源'
      this.live_data.remark = '未知源'
      this.reloadLoadPlayer()
      this.hiddenSetVideoUrlModelModel()
    },
    getInstance(art) {
      console.info(art)
    },
  },
}
</script>

<style lang="less" scoped>
.video {
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

.ls-search-box {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #cecece;
}

.ls-chat-list {
  padding-bottom: 160px;
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
  &:hover {
    text-decoration: underline;
  }
}

.green {
  color: #22c55e;
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

.video-box {
  padding: 30px;
}

.video-title-box {
  display: flex;
  justify-content: space-between;
}

.video-title {
  font-size: 30px;
}
</style>

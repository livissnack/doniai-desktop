<template>
  <div class="video">
    <div class="ls-chat-box border">
      <div class="ls-main-title">
        <h4>筱娱乐</h4>
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
          <span class="ls-text">筱知识</span>
        </div>
        <div
          class="ls-menu-box"
          v-for="(category, index) in categories"
          :key="index"
          @click="selectedCategory(category.category_id)"
        >
          <span class="ls-text"
            ><tv theme="outline" size="14" fill="#333"
          /></span>
          <span class="ls-text ls-bold ml2" :class="category.category_id === cur_cate_id ? 'green' : 'black'">{{ category.name }}</span>
        </div>
      </div>
    </div>
    <div class="ls-section-box">
      <div class="video-box">
        <div class="columns is-multiline is-fullheight">
          <div
            class="column is-4"
            v-for="(live, index) in liveList"
            :key="index"
          >
            <div class="card large">
              <div class="card-image">
                <figure class="image is-16by9">
                  <img :src="handleCoverUrl(live.cover_url)" alt="Image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img
                        class="is-rounded"
                        src="../assets/avatars/01.jpg"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-6 no-padding">{{ live.title }}</p>
                    <p>
                      <span class="title is-7"
                        ><a href="http://twitter.com/twitterid">
                          2020.09.08 - 2020.09.09
                        </a></span
                      >
                    </p>
                  </div>
                  <i
                    class="far fa-play-circle play"
                    @click="jumpVideoPlayer(live)"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getVideos, getCategories } from '@/utils/api'
import { Tv, DEFAULT_ICON_CONFIGS } from '@icon-park/vue'
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
      categories: [],
      liveList: [],
      cur_cate_id: '',
    }
  },
  mounted() {
    this.getAllCategory()
    this.getAllVideo()
  },
  components: {
    Tv,
  },
  methods: {
    selectedCategory(category_id) {
      this.cur_cate_id = category_id
      this.getAllVideo({ category_id: category_id })
    },
    async getAllVideo(params = {}) {
      const { data } = await getVideos(params)
      if (data.code === 0) {
        this.liveList = data.data
      }
    },
    async getAllCategory() {
      const { data } = await getCategories()
      if (data.code === 0) {
        this.categories = data.data
      }
    },
    jumpVideoPlayer(video) {
      this.$router.push({
        path: `/video_detail/${video.video_id}`,
        query: {
          category_id: video.category_id,
        },
      })
    },
    handleCoverUrl(url) {
      if([null, undefined, ''].includes(url)) {
        return require('../assets/th.jpg')
      }
      return url
    }
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
  overflow-y: auto;
  overflow-x: hidden;
  height: 670px;
}

.ls-section-box {
  width: 100%;
  // height: 800px;
  overflow-y: auto;
	max-height: calc(100vh - 30px); // 30px header drag area
}

.auto-overflow {
  overflow-y: auto !important;
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

.play {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 36px;
  margin: -100px 0 0 -25px;
  transform: scale(2);
  transition: all 0.25s ease-out;
  color: #fff;
  &:hover {
    opacity: 0.9;
  }
}

.card {
  &:hover {
    box-shadow: #cecece;
    cursor: pointer;
  }
}

.video-box {
  padding: 30px;
}
</style>

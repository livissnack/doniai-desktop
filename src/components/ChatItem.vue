<template>
  <article class="media" @mouseover="mouseOverChat" @mouseout="mouseOutChat">
    <a href="" v-show="is_show" class="ls-chat-delete"><i class="fas fa-times"></i></a>
    <figure class="media-left">
      <p class="image is-48x48">
        <img class="ls-avatar" src="https://s2.loli.net/2023/04/11/IVU3MSFJr7N58Ah.webp"  alt="avatar"/>
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong class="ls-chat-name">{{name}}</strong>
          <br />
          <span class="ls-chat-content">
            {{content}}
          </span>
        </p>
      </div>
    </div>
    <div class="media-right ls-media-right">
      <small class="">{{time}}</small>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    name: String,
    content: String,
    time: String
  },
  data() {
    return {
      is_show: false
    }
  },
  methods: {
    mouseOverChat() {
      this.is_show = true
    },
    mouseOutChat() {
      this.is_show = false
    }
  }
}
</script>

<style lang="less" scoped>
.media {
  padding: 10px 10px 10px 5px;
  margin-top: 0!important;
  &:hover{
    background-color: #f6f8fa;
  }
}

.ls-chat-delete {
  margin-top: 15px;
}

.ls-chat-name {
  font-size: 14px;
}

.ls-chat-content {
  font-size: 12px;
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.ls-media-right {
  padding: 10px;
  i {
    font-size: 10px;
    color: #cecece;
  }
}
</style>

<template>
  <div class="chat-message-box">
    <div class="chat-message has-reactions" :class="item.type === 'receive' ? 'is-received' : 'is-sent'" v-for="(item) in chatList" :key="item.id">
      <img
        src="../assets/avatar.jpg"
        alt=""
      />
      <div class="message-block">
        <span>{{item.time}}</span>
        <div class="message-text">
          {{item.msg}}
        </div>

        <!--Reactions buttons-->
        <div class="reactions-toolbar">
          <button class="reaction">
            <span>👍</span>
          </button>
          <button class="reaction">
            <span>👊</span>
          </button>
          <button class="reaction">
            <span>🙂</span>
          </button>
          <button class="reaction">
            <span>😄</span>
          </button>
          <button class="reaction">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-more-vertical"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </button>
        </div>
        <!--Message reactions-->
        <div class="reaction-counts">
          <div class="reaction-count">
            <span>👍</span>
            <span>{{item.love}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    content: String,
    time: String,
  },
  data() {
    return {
      is_show: false,
      chatList: [
        {
          id: 1,
          msg: 'Hi Helen! I made a new design, and i wanted to show it to you. ',
          love: 2,
          type: 'receive',
          time: '8:03am',
          avatar: ''
        },
        {
          id: 2,
          msg: 'Hi Helen! I made a new design, and i wanted to show it to you. ',
          love: 2,
          type: 'sent',
          time: '8:03am',
          avatar: ''
        },
        {
          id: 3,
          msg: 'Hi Helen! I made a new design, and i wanted to show it to you. ',
          love: 2,
          type: 'receive',
          time: '8:03am',
          avatar: ''
        },
        {
          id: 4,
          msg: 'Hi Helen! I made a new design, and i wanted to show it to you. ',
          love: 2,
          type: 'sent',
          time: '8:03am',
          avatar: ''
        },
         {
          id: 5,
          msg: 'Hi Helen! I made a new design, and i wanted to show it to you. ',
          love: 2,
          type: 'receive',
          time: '8:03am',
          avatar: ''
        },
        {
          id: 6,
          msg: 'Hi Helen! I made a new design, and i wanted to show it to you. ',
          love: 2,
          type: 'sent',
          time: '8:03am',
          avatar: ''
        },
        {
          id: 7,
          msg: 'Hi Helen! I made a new design, and i wanted to show it to you. ',
          love: 2,
          type: 'receive',
          time: '8:03am',
          avatar: ''
        },
        {
          id: 8,
          msg: 'Hi Helen! I made a new design, and i wanted to show it to you. ',
          love: 2,
          type: 'sent',
          time: '8:03am',
          avatar: ''
        },
      ]
    }
  },
  methods: {
    mouseOverChat() {
      this.is_show = true
    },
    mouseOutChat() {
      this.is_show = false
    },
  },
}
</script>

<style lang="less" scoped>
.chat-message {
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin-bottom: 30px;
  overflow-y: auto;
  overflow-x: auto;
  img {
    position: relative;
    top: 8px;
    display: block;
    height: 36px;
    width: 36px;
    border-radius: 10px;
  }
  .message-block {
    position: relative;
    span {
      display: block;
      width: 100%;
      font-size: 0.8rem;
      color: #999;
      text-align: right;
    }
    .message-text {
      color: #757a91;
      background-color: #ebebeb;
      position: relative;
      padding-bottom: 24px;
      display: block;
      width: auto;
      max-width: 320px;
      padding: 10px;
      border-radius: 3px;
      font-size: 0.9rem;
      line-height: 1.4;
    }
    .reactions-toolbar {
      left: 10px;
      position: absolute;
      top: -4px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 30px;
      border-radius: 100px;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      .reaction {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 26px;
        width: 26px;
        background: #fff;
        padding: 0;
        border: 1px solid #e5e5e5;
        border-radius: 100px;
        margin: 0 1px;
        -webkit-transform: translateY(5px);
        transform: translateY(5px);
        opacity: 0;
        pointer-events: none;
        -webkit-box-shadow: -1px 3px 10px 0 rgba(0, 0, 0, 0.06);
        box-shadow: -1px 3px 10px 0 rgba(0, 0, 0, 0.06);
        -webkit-transition: all 0.1s;
        transition: all 0.1s;
        outline: none !important;
        &:nth-child(2) {
          -webkit-transition-delay: 0.1s;
          transition-delay: 0.1s;
        }
        span {
          position: relative;
          top: -1px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          font-size: 13px;
        }
      }
    }

    .reaction-counts {
      position: absolute;
      bottom: 5px;
      right: 10px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      width: 100%;
      .reaction-count {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-left: 4px;
        span {
          display: block;
          font-size: 0.8rem;
          &:first-child {
            position: relative;
            top: -1px;
          }
        }
      }
    }
  }
}

.is-sent {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  img {
    margin-left: 20px;
  }
  .message-block {
    span {
      text-align: left;
    }
  }
}

.is-received {
  img {
    margin-right: 20px;
  }
}
</style>

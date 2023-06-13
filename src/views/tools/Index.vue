<template>
  <div class="book">
    <div class="ls-chat-box border">
      <div class="ls-main-title">
        <h4>筱工具</h4>
      </div>
      <div class="ls-search-box">
        <div class="field">
          <div class="control has-icons-left">
            <input
              class="input is-small is-rounded"
              type="text"
              placeholder="搜索工具"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="ls-chat-list">
        <div class="ls-title">
          <span class="ls-text">热门工具</span>
        </div>
        <div
          class="ls-menu-box"
          @click="jumpRoute(menu.path)"
          v-for="(menu, index) in menus"
          :key="index"
        >
          <span class="ls-text">
            <Key theme="outline" size="14" fill="#333" v-if="menu.icon === 'key'" />
            <Bitcoin theme="outline" size="14" fill="#333" v-if="menu.icon === 'btc'" />
            <ExchangeOne theme="outline" size="14" fill="#333" v-if="menu.icon === 'exchange'" />
            <EmailSecurity theme="outline" size="14" fill="#333" v-if="menu.icon === 'email'" />
            <FileConversion theme="outline" size="14" fill="#333" v-if="menu.icon === 'file'" />
            <Iphone theme="outline" size="14" fill="#333" v-if="menu.icon === 'phone'" />
            <Tv theme="outline" size="14" fill="#333" v-if="menu.icon === 'tv'" />
            <MessagePrivacy theme="outline" size="14" fill="#333" v-if="menu.icon === 'message-privacy'" />
            <Tool theme="outline" size="14" fill="#333" v-if="menu.icon === 'tool'" />
          </span>
          <span class="ls-text ls-bold black ml2">{{ menu.title }}</span>
        </div>
      </div>
    </div>
    <div class="ls-section-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Key, Bitcoin, ExchangeOne, EmailSecurity, FileConversion, Iphone, Tv, MessagePrivacy, Tool, DEFAULT_ICON_CONFIGS } from "@icon-park/vue";
const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: "icon" };

export default {
  name: "Tools",
  provide() {
    return {
      ICON_CONFIGS: IconConfig,
    };
  },
  data() {
    return {
      menus: [
        {
          id: 1,
          title: "随机密码生成器",
          path: "/tools/password",
          icon: "key",
        },
        {
          id: 2,
          title: "比特币交易行情",
          path: "/tools/btc",
          icon: "btc",
        },
        {
          id: 3,
          title: "外汇汇率",
          path: "/tools/exchange",
          icon: "exchange",
        },
        {
          id: 4,
          title: "邮箱检测",
          path: "/tools/email",
          icon: "email",
        },
        {
          id: 5,
          title: "节点转换",
          path: "/tools/to_clash",
          icon: "file",
        },
        {
          id: 6,
          title: "验机报告",
          path: "/tools/phone",
          icon: "phone",
        },
        {
          id: 7,
          title: "Base64工具",
          path: "/tools/Base64",
          icon: "tool",
        },
        {
          id: 8,
          title: "加解密",
          path: "/tools/crypt",
          icon: "message-privacy",
        },
        {
          id: 9,
          title: "直播源检测",
          path: "/tools/m3u_check",
          icon: "tv",
        },
      ],
    };
  },
  components: {
    Key,
    Bitcoin,
    ExchangeOne,
    EmailSecurity,
    FileConversion,
    Iphone,
    MessagePrivacy,
    Tv,
    Tool,
  },
  methods: {
    jumpRoute(path) {
      if (this.$route.path !== path) {
        this.$router.push({ path: path });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.book {
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
  height: 714px;
}

.ls-section-box {
  background: #ebebeb;
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
</style>

<template>
  <div class="done">
    <div class="ls-chat-box border">
      <div class="ls-main-title">
        <h4>待办事项</h4>
      </div>
      <div class="ls-search-box">
        <div class="field">
          <div class="control has-icons-left">
            <input
              class="input is-small is-rounded"
              type="text"
              placeholder="搜索待办"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="ls-chat-list">
        <div class="ls-menu-box">
          <span class="ls-text"><i class="fas fa-file-medical"></i></span>
          <span class="ls-text ls-bold black ml2">我的</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><i class="fas fa-user-circle"></i></span>
          <span class="ls-text ls-bold black ml2">待我处理</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><i class="fas fa-check-square"></i></span>
          <span class="ls-text ls-bold black ml2">已处理</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><i class="fas fa-trash"></i></span>
          <span class="ls-text ls-bold black ml2">回收站</span>
        </div>
      </div>
    </div>
    <div class="ls-section-box">
      <div class="ls-section-title">
        <div>
          <h3>我的</h3>
        </div>
      </div>
      <div class="ls-section-btn">
        <div class="done-btn">
          <button
            class="button is-success is-small is-rounded is-fullwidth btn-content-center"
          >
            <span class="icon is-small">
              <i class="fas fa-plus"></i>
            </span>
            <span>新建待办</span>
          </button>
        </div>

        <div class="done-title">
          <span>今天</span>
          <span class="ls-bleade"><small>2</small></span>
        </div>

        <div class="done-content-box">
          <div class="done-content-item-box">
            <div class="done-content-item">
              <div class="justify-between">
                <div><span>制定下周计划</span></div>
                <div><span class="done-time">今天 18：00 截止</span></div>
              </div>
              <div class="justify-between">
                <div><span>管欣</span></div>
                <div><span class="tag is-link done-finish">完成</span></div>
              </div>
            </div>
          </div>

          <div class="done-content-item-box">
            <div class="done-content-item">
              <div class="justify-between">
                <div><span>制定下周计划</span></div>
                <div><span>今天 18：00 截止</span></div>
              </div>
              <div class="justify-between">
                <div><span>管欣</span></div>
                <div><span class="tag is-link done-finish">完成</span></div>
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

export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.done {
  display: flex;
  justify-content: flex-start;
  background-color: #f6f6f6;
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
  padding: 20px 10px;
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

.has-sticky-header {
  height: 600px !important;
}

.btn-content-center {
  justify-content: left;
}

.done-title {
  padding: 20px 5px;
  span {
    font-size: 14px;
    margin-left: 10px;
    &:first-of-type {
      margin-left: 0;
    }
  }
  .ls-bleade {
    height: 20px;
    width: 20px;
    padding: 3px;
    border-radius: 10px;
    background-color: #ec7259;
    small {
      color: #ffffff;
    }
  }
}

.done-content-box {
  .done-content-item-box {
    border: 1px solid #cecece;
    background-color: #ffffff;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 300;
    padding: 20px;
    margin-top: 10px;
    &:first-of-type {
      margin-top: 0;
    }
    .done-content-item {
      div {
        padding-top: 10px;
        &:first-of-type {
          padding-top: 0;
        }
      }
    }
  }
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.pd2 {
  padding-top: 20px;
}

.done-time {
  color: #ec7259;
}

.done-finish {
  &:hover {
    cursor: pointer;
  }
}

.done-btn {
  margin-top: 20px;
}
</style>

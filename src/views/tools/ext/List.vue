<template>
  <div class="book-box">
    <div class="columns ls-flex-col">
      <div class="column is-three-quarters">
        <div class="post">
          <div class="widget">
            <a href="#" class="sub-title title-underline">
              节点工具
            </a>
          </div>
          <div class="tab-item" @click="jumpNodeToClash">
            <a
              href="javascript:0;"
              class="box-item is-primary"
              >节点转Clash</a
            >
            <a
              href="https://www.baidu.com"
              target="_blank"
              class="box-item is-success"
              >免费节点</a
            >
            <a
              href="https://www.baidu.com"
              target="_blank"
              class="box-item is-warning"
              >Base64工具</a
            >
            <a
              href="https://www.baidu.com"
              target="_blank"
              class="box-item is-info"
              >短链接</a
            >
          </div>
        </div>
      </div>
      <div class="column is-three-quarters">
        <div class="post">
          <div class="widget">
            <a href="#" class="sub-title title-underline">
              常用工具
            </a>
          </div>
          <div class="tab-item">
            <a
              href="https://www.baidu.com"
              target="_blank"
              class="box-item is-primary"
              >12306查票工具</a
            >
            <a
              href="https://www.baidu.com"
              target="_blank"
              class="box-item is-success"
              >比特币交易行情</a
            >
            <a
              href="https://www.baidu.com"
              target="_blank"
              class="box-item is-warning"
              >外汇汇率</a
            >
            <a
              href="https://www.baidu.com"
              target="_blank"
              class="box-item is-info"
              >邮箱检测</a
            >
          </div>
        </div>
      </div>
      <div class="column is-three-quarters">
        <div class="post">
          <div class="widget">
            <a href="#" class="sub-title title-underline">
              其他工具
            </a>
          </div>
          <div class="tab-item">
            <a
              href="https://www.baidu.com"
              target="_blank"
              class="box-item is-primary"
              >文件格式转换</a
            >
            <a
              href="https://www.baidu.com"
              target="_blank"
              class="box-item is-success"
              >验机报告</a
            >
            <a
              href="https://www.baidu.com"
              target="_blank"
              class="box-item is-warning"
              >市政数据</a
            >
            <a
              href="https://www.baidu.com"
              target="_blank"
              class="box-item is-info"
              >淘宝客数据</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    jumpNodeToClash() {
      this.$router.push({ name: 'ToolsNodeToClash'})
    }
  },
}
</script>

<style lang="less" scoped>
.book-box {
  padding: 30px;
}

.post {
  background: #fff;
  padding: 25px;
  display: block;
  margin-bottom: 20px;
}

.widget {
  margin-bottom: 20px;
}

.title-underline {
  text-decoration: none;
  border-bottom: 1px solid #e67e22;
}

a {
  color: #7957d5;
  cursor: pointer;
}

.tab-item {
  .box-item {
    box-shadow: 1px 1px 5px #ccc5c5;
  }

  a {
    color: #fff;
    font-size: 14px;
    display: inline-block;
    width: 25%;
    height: 35px;
    line-height: 35px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 10px 34px 10px 0;
    text-align: center;
    border-radius: 3px;
    text-decoration: none;
  }
}

.ls-flex-col {
  flex-direction: column;
}

.is-primary {
  background-color: #6943d0;
}

.is-success {
  background-color: #20bc56;
}

.is-warning {
  background-color: #ffd83d;
}

.is-info {
  background-color: #0e71de;
}

.is-danger {
  background-color: #ff3860;
}
</style>

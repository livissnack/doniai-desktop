<template>
  <div class="done">
    <div class="ls-chat-box border">
      <div class="ls-main-title">
        <h4>筱日历</h4>
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
          <span class="ls-text ls-bold black ml2">待办事项</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><i class="fas fa-check-square"></i></span>
          <span class="ls-text ls-bold black ml2">已处理</span>
        </div>
      </div>
    </div>
    <div class="ls-section-box">
      <div class="ls-section-title">
        <div>
          <h3>
            日历视窗----<strong>当前时间：<time>{{timeFix}} {{currentTime}}</time></strong>
          </h3>
        </div>
      </div>
      <div class="calendar-wrapper">
        <div class="calendar">
          <CalendarComponent
            :months="months"
            :value="currentDate"
            @next="next"
            @prev="prev"
            :events="events"
            lunar
            clean
            @select="select"
            ref="calendar"
            @selectMonth="selectMonth"
            @selectYear="selectYear"
            :tileContent="tileContent"
            :almanacs="almanacs"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CalendarComponent from 'mpvue-calendar-rzt'
import {
  monningAndAfternoonText,timeNow} from '@/utils/helper.js'

export default {
  name: 'Calendar',
  components: {
    CalendarComponent,
  },
  data() {
    return {
      months: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月',
      ],
      currentDate: [2020, 12, 18],
      events: { '2020-12-25': '今日备注', '2018-6-8': '一条很长的明日备注' },
      almanacs: { '9-3': '抗战胜利日', '11-17': '学生日' },
      tileContent: [
        { date: '2020-12-19', className: 'xiu', content: '休' },
        { date: '2020-12-20', className: 'ban', content: '班' },
      ],
      currentTime: timeNow(),
      timeFix: '上午'
    }
  },
  mounted() {
    this.setCurrentDate()
    setInterval(() => {
      this.currentTime = timeNow()
    }, 1000)
  },
  methods: {
    prev(year, month, weekIndex) {
      console.log(year, month, weekIndex)
    },
    next(year, month, weekIndex) {
      console.log(year, month, weekIndex)
    },
    selectYear(year) {
      console.log(year)
    },
    selectMonth(month, year) {
      console.log(year, month)
    },
    setToday() {
      this.$refs.calendar.setToday()
    },
    setCurrentDate() {
      let time = new Date()
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      this.timeFix = monningAndAfternoonText()
      this.currentDate = [year, month, day]
    },
    dateInfo() {
      const info = this.$refs.calendar.dateInfo(2018, 8, 23)
      console.log(info)
    },
    renderer() {
      this.$refs.calendar.renderer(2018, 8) //渲染2018年8月份
    },
    select(val, val2) {
      console.log(val)
      console.log(val2)
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../node_modules/mpvue-calendar-rzt/src/browser-style.css';
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

.ls-section-title {
  padding: 20px;
  border: 1px solid #cecece;
}

.ls-section-btn {
  padding: 0 20px;
}

.calendar-wrapper {
  width: 600px;
  margin: 40px 0 0 10%;
  .calendar {
    width: 100%;
    -webkit-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }
}

.calendar-date {
  text-align: center !important;
}

.xiu {
  background-color: #fff0f0;
  .slot-element {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 12px;
    background-color: #f43;
    color: #fff;
    padding: 0 2px;
    border-radius: 3px;
    display: inline-block;
  }
}

.ban {
  background-color: #f5f5f5;
  .slot-element {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 12px;
    background-color: #969799;
    color: #fff;
    padding: 0 2px;
    border-radius: 3px;
    display: inline-block;
  }
}
</style>

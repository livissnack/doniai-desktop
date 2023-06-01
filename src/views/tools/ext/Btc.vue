<template>
  <div class="book-box">
    <div class="container">
      <div class="columns">
        <div class="column">BTC</div>
        <div class="column">2</div>
        <div class="column">
          <b-datepicker
            inline
            v-model="date"
            :events="events"
          >
          </b-datepicker>
        </div>
        <div class="column">4</div>
        <div class="column">5</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { User, DEFAULT_ICON_CONFIGS } from '@icon-park/vue'
const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon' }
const thisMonth = new Date().getMonth()

export default {
  provide() {
    return {
      ICON_CONFIGS: IconConfig,
    }
  },
  data() {
    return {
      date: new Date(2017, thisMonth, 1),
      events: [
          new Date(2017, thisMonth, 2),
          new Date(2017, thisMonth, 6),
          {
              date: new Date(2017, thisMonth, 6),
              type: 'is-info',
              value: '12'
          },
          {
              date: new Date(2017, thisMonth, 8),
              type: 'is-danger'
          },
          {
              date: new Date(2017, thisMonth, 10),
              type: 'is-success'
          },
          {
              date: new Date(2017, thisMonth, 10),
              type: 'is-link'
          },
          new Date(2017, thisMonth, 12),
          {
              date: new Date(2017, thisMonth, 12),
              type: 'is-warning'
          },
          {
              date: new Date(2017, thisMonth, 16),
              type: 'is-danger'
          },
          new Date(2017, thisMonth, 20),
          {
              date: new Date(2017, thisMonth, 29),
              type: 'is-success'
          },
          {
              date: new Date(2017, thisMonth, 29),
              type: 'is-warning'
          },
          {
              date: new Date(2017, thisMonth, 29),
              type: 'is-info'
          }
      ]  
    }
  },
  components: {
    User,
  },
  methods: {},
}
</script>

<style lang="less" scoped></style>

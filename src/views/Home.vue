<template>
  <a-layout>
    <a-row>
      <a-col :span="6" v-for="(data, index) in echartDate" :key="index" @click="handleEchar(index)">
        <div class="echar-data">
          <div class="icon-box">
            <a-icon :type="data.name" />
          </div>
          <div class="icon-title">
            <p>{{data.title}}</p>
            <p>{{data.val}}</p>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row :style="{ marginTop:'40px' }">
      <div class="echar-container" id="lineEchart"></div>
    </a-row>
<!--    <a-row :style="{ marginTop:'40px' }">-->
<!--      <div class="echar-container"></div>-->
<!--    </a-row>-->
<!--    <a-row :style="{ marginTop:'40px' }">-->
<!--      <div class="echar-container"></div>-->
<!--    </a-row>-->
<!--    <a-row :style="{ marginTop:'40px' }">-->
<!--      <div class="echar-container"></div>-->
<!--    </a-row>-->
  </a-layout>
</template>

<script>
import { Layout, Row, Col, Icon } from 'ant-design-vue'
export default {
  name: 'home',
  data () {
    return {
      chart: null,
      echartDate: [
        {
          name: 'team',
          title: 'New Visits',
          val: '102,400',
          data1: [520, 632, 701, 834, 990, 230, 120],
          data2: [420, 232, 701, 434, 1290, 1230, 1220]
        },
        {
          name: 'message',
          title: 'Messages',
          val: '81,212',
          data1: [620, 682, 701, 334, 590, 330, 520],
          data2: [220, 332, 401, 534, 1390, 1130, 1220]
        },
        {
          name: 'red-envelope',
          title: 'Purchases',
          val: '9,280',
          data1: [320, 642, 301, 854, 690, 730, 220],
          data2: [520, 232, 731, 444, 190, 130, 120]
        },
        {
          name: 'shopping-cart',
          title: 'Shoppings',
          val: '13,600',
          data1: [120, 232, 501, 634, 490, 530, 120],
          data2: [430, 232, 741, 444, 190, 130, 120]
        }
      ]
    }
  },
  methods: {
    initChart (expected, actual) {
      this.chart = this.$echarts.init(document.getElementById('lineEchart'))
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['expected', 'actual'],
          top: '5%'
        },
        grid: {
          bottom: '8%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#008acd'
            }
          },
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#008acd'
            }
          }
        },
        series: [{
          name: 'expected',
          data: expected,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa'
            }
          },
          smooth: true
        },
        {
          name: 'actual',
          data: actual,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#ff005a'
            }
          },
          smooth: true
        }]
      })
    },
    handleEchar (index) {
      this.initChart(this.echartDate[index].data1, this.echartDate[index].data2)
    }
  },
  components: {
    ALayout: Layout,
    ARow: Row,
    ACol: Col,
    AIcon: Icon
  },
  mounted () {
    let expected = [820, 932, 901, 934, 1290, 1330, 1320]
    let actual = [120, 932, 401, 634, 1390, 230, 320]
    this.initChart(expected, actual)
  }
}
</script>

<style>
.echar-data {
  height: 108px;
  width: 90%;
  background-color: #fff;
  border: 1px solid #eee;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  cursor: pointer;
}
.echar-container {
  width: 100%;
  height: 420px;
  background-color: #fff;
}
.icon-box {
  float: left;
  width: 48px;
  height:48px;
  padding: 16px;
  margin: 16px 0 0 16px;
}
.icon-box .anticon {
  font-size: 36px;
  color: #40c9c6;
}
.icon-title {
  float: right;
  margin: 26px 26px 26px 0;
}
.icon-title p{
  margin-bottom: 5px;
  font-weight: bold;
  color: #97a8be;
}

</style>

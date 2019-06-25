<template>
  <a-layout>
    <a-table :columns="columns" :dataSource="data" bordered>
      <template slot="name" slot-scope="text">
        <a href="javascript:;">{{text}}</a>
      </template>
      <template slot="title" slot-scope="currentPageData">
        Header
      </template>
      <template slot="footer" slot-scope="currentPageData">
        Footer
      </template>
    </a-table>
    <a-timeline>
      <a-timeline-item color="yellow">Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item color="red">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </a-timeline-item>
    </a-timeline>
  </a-layout>
</template>

<script>
import { Layout, Table, Timeline } from 'ant-design-vue'
const TimelineItem = Timeline.Item
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  scopedSlots: { customRender: 'name' }
}, {
  title: 'Cash Assets',
  className: 'column-money',
  dataIndex: 'money'
}, {
  title: 'Address',
  dataIndex: 'address'
}]

const data = [{
  key: '1',
  name: 'John Brown',
  money: '￥300,000.00',
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  money: '￥1,256,000.00',
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park'
}]
export default {
  name: 'Table.vue',
  data () {
    return {
      data,
      columns
    }
  },
  components: {
    ALayout: Layout,
    ATable: Table,
    ATimeline: Timeline,
    ATimelineItem: TimelineItem
  }
}
</script>

<style scoped>

</style>

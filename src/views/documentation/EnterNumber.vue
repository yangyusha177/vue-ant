<template>
  <div class="enternumber">
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">{{steps[current].content}}</div>
    <div class="steps-action">
      <a-button
        v-if="current < steps.length - 1"
        type="primary" @click="next"
      >
        Next
      </a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="$message.success('Processing complete!')"
      >
        Done
      </a-button>
      <a-button
        v-if="current>0"
        style="margin-left: 8px"
        @click="prev"
      >
        Previous
      </a-button>
    </div>
  </div>
</template>

<script>
import { Steps, Button } from 'ant-design-vue'
const Step = Steps.Step
export default {
  name: 'enterNumber',
  data () {
    return {
      current: 0,
      steps: [{
        title: '1',
        content: 'First-content'
      }, {
        title: '2',
        content: 'Second-content'
      }, {
        title: '3',
        content: 'third-content'
      }, {
        title: '4',
        content: 'fourth-content'
      }, {
        title: '5',
        content: 'five-content'
      }, {
        title: '6',
        content: 'six-content'
      }, {
        title: '7',
        content: 'Last-content'
      }]
    }
  },
  components: {
    ASteps: Steps,
    AStep: Step,
    AButton: Button
  },
  methods: {
    next () {
      this.current++
    },
    prev () {
      this.current--
    }
  }
}
</script>

<style scoped>
  .enternumber {
    width: 100%;
    padding: 20px;
  }
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
</style>

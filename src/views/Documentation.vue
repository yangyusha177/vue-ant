<template>
  <div class="documentation">
    <div v-for="(box,index) in boxData" :class="box.className" :key="index" :style="'background-color: '+box.colors+';'">
      <div @click="addValue(item.path)" v-show="box.children.length>0" v-for="(item,Iindex) in box.children" :key="Iindex" :class="item.className" :style="'background-color: '+item.colors+';'">
        <div :class="item.contentClass">
          <div :class="item.className">
            <div :class="item.imgClass"></div>
            <p class="box-title">{{item.name}}</p>
          </div>
        </div>
      </div>
      <div @click="addValue(box.path)" v-show="!box.children" :class="box.contentClass" :style="'background-color: '+box.colors+';'">
        <div :class="box.imgClass"></div>
        <p class="box-title">{{box.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'ant-design-vue'
export default {
  name: 'Documentation.vue',
  data () {
    return {
      boxData: [
        {
          name: '车险购买',
          path: '/enterNumber',
          className: 'docu-box',
          imgClass: 'box-img box-img-1',
          contentClass: 'box-container',
          colors: '#4A90E2'
        },
        {
          className: 'docu-box box-two',
          children: [
            {
              name: '违章代缴',
              path: '/enterNumber',
              className: 'box-two-content',
              contentClass: 'box-container-ver',
              imgClass: 'box-img box-img-2',
              colors: '#01CAD8'
            },
            {
              name: '代办年检',
              path: '/enterNumber',
              className: 'box-two-content',
              contentClass: 'box-container-ver',
              imgClass: 'box-img box-img-3',
              colors: '#00B35A'
            }
          ]
        },
        {
          className: 'docu-box',
          children: [
            {
              name: '定期理赔',
              path: '/enterNumber',
              className: 'box-content',
              contentClass: 'box-container-her',
              imgClass: 'box-img box-img-4',
              colors: '#4F7BFC'
            },
            {
              name: '加油充值',
              path: '/enterNumber',
              className: 'box-content',
              contentClass: 'box-container-her',
              imgClass: 'box-img box-img-5',
              colors: '#FF9700'
            }
          ]
        },
        {
          className: 'docu-box',
          children: [
            {
              name: '高价卖车',
              path: '/enterNumber',
              className: 'box-content',
              contentClass: 'box-container-her',
              imgClass: 'box-img box-img-6',
              colors: '#FF7300'
            },
            {
              name: '抵押贷款',
              path: '/enterNumber',
              className: 'box-content',
              contentClass: 'box-container-her',
              imgClass: 'box-img box-img-7',
              colors: '#D0B768'
            }
          ]
        },
        {
          name: '其他业务',
          path: '/enterNumber',
          className: 'docu-box box-one',
          imgClass: 'box-img box-img-8',
          contentClass: 'box-container-her',
          colors: '#434B87'
        }
      ]
    }
  },
  components: {
    AIcon: Icon
  },
  methods: {
    addValue (index) {
      this.$router.push({path:index})
    }
  }
}
</script>

<style scoped>
.documentation {
  width: 100%;
  height: 100%;
  padding: 120px 10px 120px 150px;
}
.docu-box {
  float: left;
  width: 15%;
  height: 350px;
  margin-left: 14px;
  cursor: pointer;
}
.box-two {
  width: 32%;
}
.box-two-content, .box-content {
  width: 100%;
  height: 48%;
}
.box-two-content + .box-two-content, .box-content + .box-content{
  margin-top: 12px;
}
.box-one {
  height: 170px;
  float: right;
  margin-right: 13px;
}
.box-container {
  padding: 70% 30%;
}
.box-container-ver {
  padding: 7% 41%;
}
.box-container-her {
  padding: 14% 32%;
}
.box-img{
  width: 60px;
  height: 60px;
  margin-bottom: 30px;
}
.box-img-1 {
  background: url("../assets/img/zengzhiyewu/车险 (1).png") no-repeat;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.box-img-2 {
  background: url("../assets/img/zengzhiyewu/违章.png") no-repeat;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.box-img-3 {
  background: url("../assets/img/zengzhiyewu/违章@2x.png") no-repeat;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.box-img-4 {
  background: url("../assets/img/zengzhiyewu/钱.png") no-repeat;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.box-img-5 {
 background: url("../assets/img/zengzhiyewu/ico_jiayou.png") no-repeat;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.box-img-6 {
  background: url("../assets/img/zengzhiyewu/ico_esc.png") no-repeat;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.box-img-7 {
  background: url("../assets/img/zengzhiyewu/Group.png") no-repeat;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.box-img-8 {
  background: url("../assets/img/zengzhiyewu/钱广告.png") no-repeat;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.box-title{
  color: #fff;
}
</style>

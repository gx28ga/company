<template>
  <el-button
    type="primary"
    size="small"
    @click="exportAction">{{ text }}</el-button>
</template>
<script>
import $config from "../../../../config.js";
import { encodeParams } from '../../Utils/formate';
export default {
  name: "export",
  props: {
    text: {
      type: String,
      default: '导出数据'
    },
    url: {
      type: String,
      default: ''
    },
    params: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },

  methods: {
    exportAction(){
      let baseUrl =  $config.modulePrefix[$config.env]
      let finaUrl =  `${baseUrl}${this.url}?${encodeParams(this.params)}`
      window.open(finaUrl)
    },
  }
};
</script>




<template>
  <div class="info-box">
    <div class="content">
      {{ content }}
    </div>
    <div class="legend">
      {{ legend }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    legend: {
      type: String
    },

    content: {
      type: [String, Number]
    }
  }
}
</script>

<style scoped>
.info-box {
  padding: 15px;
  margin-bottom: -1px;
  margin-left: -1px;
  border: 1px solid #e5e5e5;
}

.legend,
.content {
  text-align: center
}

.legend {
  margin-top: 10px;
  font-size: 16px;
}

.content {
  font-size: 30px;
}
</style>

<style lang='sass'>
  @import '../../css/global.scss';

  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
<script>
    import Main from './main';
    export default {
        components: {
            Main
        }
    }
</script>
<template>
  <div class="main-section">
    <Main></Main>
  </div>
</template>
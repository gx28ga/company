declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
// 扩充
/*
declare module 'vue/types/vue' {
    interface Vue {
        $modal: void;
    }
}
*/

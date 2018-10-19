import Upload from './Upload';
import Vue from 'vue';

Upload.install = (Vue) =>{
    Vue.component(Upload.name,Upload);
}

Vue.use(Upload);
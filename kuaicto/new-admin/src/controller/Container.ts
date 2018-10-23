/**
 *  author : bo.peng
 *  createTime 2018-10-23 15:55
 *  description :
 */
import menuSider from "@/views/global/Menu.vue";
import headerSider from "@/views/global/Header.vue";
import { Component, Vue } from 'vue-property-decorator';
@Component({
    components: {
        menuSider,
        headerSider,
    },
})
export default class Container extends Vue {
}
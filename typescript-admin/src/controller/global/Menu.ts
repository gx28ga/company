/**
 *  author : bo.peng
 *  createTime 2018-10-23 16:15
 *  description :
 */
import {Component, Vue, Watch} from 'vue-property-decorator';
import {Action, Getter} from 'vuex-class';
import AsideMenuDto from '@/dto/global/AsideMenuDto';

@Component
export default class Menu extends Vue {
    @Action("getCurrentMenu") private getCurrentMenu!: () => void;
    @Getter("currentMenu") private currentData!: [];
    private data() {
        return{
            width: "220px",
        };
    }
    private mounted() {
        this.getCurrentMenu();
    }
    private go(item: any, item1: any) {
        window.router.push("/" + item.path + "/" + item1.path);
    }
}
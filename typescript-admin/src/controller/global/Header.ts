/**
 *  author : bo.peng
 *  createTime 2018-10-23 15:58
 *  description :
 */
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Header extends Vue {
    private data() {
        return{
            width: "220px",
        };
    }
    private goHome() {
        window.router.push("/");
    }
}
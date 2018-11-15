/**
 *  author : bo.peng
 *  createTime 2018-11-12 10:38
 *  description : 图片
 */
import {Component, Prop, Vue, Watch} from "vue-property-decorator";
const defaultSrc = require('../../../imags/img-404.jpg');
@Component
export class Kimg extends Vue {
    private imgsrc: string;
    @Prop({ default: defaultSrc}) private src!: string;
    @Prop({ default: 40 }) private width!: number;
    @Prop({ default: 40 }) private height!: number;
    @Watch('src', { immediate: true, deep: true })
    private onImgChange(val: string) {
        /*if (!/\.(gif|png|jpe|jpg)$/i.test(val)) {
            this.imgsrc = defaultSrc;
        } else {
            this.imgsrc = val;
        }*/
        this.imgsrc = val;
    }
    private render() {
        return (<img src={this.src || this.imgsrc} width={this.width} height={this.height}/>);
    }
}
Vue.component("k-img", Kimg);
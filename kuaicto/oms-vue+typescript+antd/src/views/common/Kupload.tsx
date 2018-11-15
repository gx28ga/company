/**
 *  author : Lxh
 *  createTime 2018-11-13
 *  description : 图片上传(limit:number限制图片上传数量)(multiple:boolen是否支持多张上传)
 */
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

const $config = require('../../../config.js');

export interface KuploadObj {
    name?: string;
    uid?: string;
    status?: string;
    url: string;
}

function getBase64(img: any, callback: any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

@Component
export class Kupload extends Vue {
    private imgsrc: string;
    private previewVisible: boolean = false;
    // 上传地址
    @Prop({default: $config.imageUploadUrl[$config.env]}) private action!: string;
    // 是否支持多张上传
    @Prop({default: false}) private multiple!: boolean;
    // 默认列表
    @Prop({default: []}) private value!: KuploadObj[];
    // 组件样式
    @Prop({default: 'picture-card'}) private listType!: string;
    // 图片上传限制数量
    @Prop({default: 999}) private limit!: number;
    private previewImage: string = '';
    private fileList: KuploadObj[] = [];
    private handlePreview(file: any) {
        this.imgsrc = file.url || file.thumbUrl;
        this.previewVisible = true;
    }
    @Watch('value', { immediate: true, deep: true })
    private getUpload( arr: KuploadObj[]) {
        this.fileList = arr;
    }
    private mounted() {
        this.fileList = this.value;
    }
    private handleChange(obj: any) {
        // this.value = obj.fileList;
        let fileLists: KuploadObj[];
        fileLists = obj.fileList.map((item: any, index: number) => {
            if (item.response) {
                return {
                    uid: index,
                    name: item.name,
                    status: item.status,
                    url: $config.imageUrl[$config.env] + item.response,
                };
            } else {
                return item;
            }
        });
        if (fileLists.length > this.limit) {
            fileLists = fileLists.slice(0, this.limit);
        }
        this.fileList = fileLists;
        if (obj.file.status === 'done') {
            this.$emit('uploadDone', this.fileList);
        }
    }

    private handleCancel() {
        this.previewVisible = false;
    }

    private handleBeforeUpload(file: any) {
        const isLt50M = file.size / 1024 / 1024 < 50;
        if (!isLt50M) {
            window.Main.$message.error('上传图片大小不能超过 50M!');
        }
        return isLt50M;
    }
    private onPreview(file: any) {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    }
    private render() {
        this.value.map((item: KuploadObj) => {
            return {
                name: item.name = item.name || 'uploadName',
                uid: item.uid = item.uid || '-1',
                status: item.status = item.status || 'done',
                url: item.url,
            } as KuploadObj;
        });
        return (
            <div>
                <a-upload
                    action={this.action}
                    listType={this.listType}
                    fileList={this.fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    multiple={this.multiple}
                    beforeUpload={this.handleBeforeUpload}
                >
                    {
                        this.fileList.length < this.limit ?
                            <div>
                                <a-icon type="plus"/>
                                <div class="ant-upload-text">Upload</div>
                            </div> : null
                    }
                </a-upload>
                <a-modal visible={this.previewVisible} footer="" onCancel={this.handleCancel}>
                    <img style="width: 100%" src={this.imgsrc}/>
                </a-modal>
            </div>
        );
    }
}

Vue.component('k-upload', Kupload);
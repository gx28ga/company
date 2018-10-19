<template>
    <div id="data-1">
        <el-upload ref="upload"
                   :action="imgUrl"
                   list-type="picture-card"
                   :on-preview="handlePreview"
                   :on-remove="handleRemove"
                   :on-success="handleSuccess"
                   :file-list="pictureList"
        >
            <!--:disabled="disabled"-->
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog class="eg-upload-list" v-model="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>
<script>
    //  import {login as loginApi} from '../../api/index'
    import {uploadImageApi} from '../../api/api'
    import $config from '$config'
    export default{
        data(){
            return {
                imgUrl: '',
                dialogVisible: false,
                dialogImageUrl: "",
                pictureList:[]
            }
        },
        props: {
            id:{
                type: Number,
                default(){
                    return 1
                }
            },
            defaultList: {
                type: Array,
                default(){
                    return []
                }
            },
            uplaodSize: {
                type: Number,
                default(){
                    return 1
                }

            }
        },
        watch: {
            'defaultList':function (newvalue,oldValue) {
                this.pictureList =  newvalue

            },
            'pictureList':function (newValue,oldValue) {
                this.uploadImage()
            }
        },

        computed: {
            disabled(){
                if (this.defaultList.length >= this.uplaodSize) {

                    return true
                } else {

                    return false
                }

            }
        },
        methods: {
            handlePreview(file){
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleSuccess(response, file, fileList){
                this.pictureList = fileList;
                // console.log(fileList)
                this.$emit('success', response, file, fileList)
            },
            handleRemove(file, fileList){
                this.pictureList = [];
                this.$emit('remove', file, fileList)

            },
            uploadImage() {
                if (this.pictureList.length == this.uplaodSize) {
                    $(this.$refs.upload.$el).find('.el-upload--picture-card:eq(0)').hide()
//                    $('.el-upload--picture-card:eq(0)').hide()
                    // console.log(1);
                } else {
                    $(this.$refs.upload.$el).find('.el-upload--picture-card:eq(0)').show()
//                    $('.el-upload--picture-card:eq(0)').show()
                    // console.log(2);
                }
            }
        },
        mounted(){
            var vm = this;
            this.$set(this, "imgUrl", $config.apiUrlPrefix[$config.env] + '/image/uploadSingle');

        }
    }

</script>
<style>

</style>
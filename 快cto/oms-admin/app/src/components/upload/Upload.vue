<script>
import $config from "$config";
export default {
  name: "Upload",
  props: {
    showDelete:{
      type:Boolean,
      default:function() {
        return true;
      }
    },
    showUpload:{
      type:Boolean,
      default:function() {
        return true;
      }
    },
    value: {
      type: Array,
      default: function() {
        return [];
      }
    },
    baseImgUrl: {
      type: String,
      default: function() {
        return "";
      }
    },
    data: {
      type: Object,
      default: function() {
        return {
          // 
          prefix: ""
        };
      }
    },
    limit: Number,
    action: {
      type: String,
      default: `${$config.imageUploadUrl[$config.env]}`
      // required: true
    },
    accept: {
      type: String
      // default:'iamge/*'
    },
    listType: {
      type: String,
      default: "picture-card"
    },
    multiple:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: ""
    };
  },
  computed: {
    fileList: function() {
      if (this.value[0] && !this.value[0].url) {
        return [];
      } else {
        return this.value.map(item => {
          if (/(blob:)|(http[s]?:\/\/[\w\.]+\/)/.test(item.url)) {
            //if (/(download)|(http[s]?:\/\/)/.test(item.url)) {
            return item;
          } else {
            return Object.assign(item, {
              url: `${$config.imageUrl[$config.env]}/${item.url}`
            });
          }
        });
      }
    }
  },
  render(h) {
    const uploadData = {
      props: {
        "multiple":this.multiple,
        "on-change": this.handleChange,
        "on-progress": this.handleProgress,
        "on-success": this.handleSuccess,
        "on-error": this.handleError,
        "on-preview": this.onPreview,
        "on-remove": this.handleRemove,
        "before-upload": this.beforeAvatarUpload,
        action: this.action,
        "list-type": this.listType,
        "file-list": this.fileList,
        accept: this.accept,
        data: this.data,
      }
      
    };
    return h(
      "div",
      {
        class: {
          "upload-hidden": this.limit == this.fileList.length,
          //
          "upload-show-upload": this.showDelete?false:true
        }
      },
      [
        h(
          "el-upload",
          {
            ...uploadData,
            //
            class:{
              "show-delete":this.showDelete?false:true
            }
          },
          [this.$slots.default]
        ),
        this.listType !== "text"
          ? h(
              "el-dialog",
              {
                props: {
                  visible: this.dialogVisible,
                  size: "tiny"
                },
                on: {
                  close: () => {
                    this.dialogVisible = false;
                  },
                  open: () => {
                    this.dialogVisible = true;
                  }
                }
              },
              [<img src={this.dialogImageUrl} style="width:100%;" />]
            )
          : ""
      ]
    );
  },
  methods: {
    handleChange(file, fileList) {
      this.$emit("input", fileList);
    },
    handleProgress(file) {
      this.$emit("uploadImage", true);
    },
    onPreview(file) {
      //console.log(file);
      this.dialogVisible = true;
      this.dialogImageUrl = file.url;
    },
    handleSuccess(response, file, fileList) {
      this.$emit("uploadImage", false);
      this.$emit("input", fileList);
      this.$emit("onSuccess", response, file, fileList);
    },
    handleError(err, file, fileList) {
      this.$emit("uploadImage", false);
      this.$emit("input", fileList);
      this.$emit("onError", err, file, fileList);
    },
    handleRemove(file, fileList) {
      //console.log(fileList);
      this.$emit("input", fileList);
      this.$emit("onRemove", file, fileList);
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;   
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2M!");
      }
      return isLt2M;
    },
    
  }
};
</script>
<style lang="less">
.show-delete{
  .el-upload-list__item-delete{
    display: none !important;
  }
}
.upload-hidden {
  .el-upload {
    display: none;
  }
}
.upload-show-upload{
  .el-upload {
    display: none;
  }
}
</style>


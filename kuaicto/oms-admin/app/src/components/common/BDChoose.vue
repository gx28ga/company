<template>
        <el-row>
            <el-col :span="24">
                <el-form
                         :model="model"
                         ref="form">
               <el-form-item :label="showTitle ? title : ''">
              <el-col :span='4'>
                <el-select v-model='model.province' placeholder="请选择" @change="handleProvinceChange">
                  <el-option v-for="item in firstDepartmentList" :key="item.id" :value=item.id :label=item.name></el-option>
                </el-select>

              </el-col>
                <el-col :span='4'  :offset="1">
                  <el-select v-model="model.city" @change="handleCityChange" placeholder="请选择">
                    <el-option v-for="item in secondDepartmentList" :key="item.id" :label='item.name' :value='item.id'></el-option>
                  </el-select>
                </el-col>
               <el-col :span='4'  :offset="1">
                  <el-select v-model="model.county" v-if='thirdDepartmentList.length!=0' @change="handleCountyChange" placeholder="请选择">
                    <el-option v-for="item in thirdDepartmentList" :key="item.id" :label='item.name' :value='item.id'></el-option>
                  </el-select>
                  <el-select v-model="model.userId" v-if='thirdDepartmentList.length==0' @change="handleCountyChange" placeholder="请选择">
                    <el-option v-for="item in bdUserInfoList" :key="item.userId" :label='item.bdName' :value='item.userId'></el-option>
                  </el-select>
               </el-col>
                 <el-col :span='4' :offset="1" v-if='thirdDepartmentList.length !=0'   >
                     <el-select v-model="model.userId"
                          value-key="id"
                         placeholder="请选择"
                         @change="handleInforChange">
                <el-option v-for="item in bdUserInfoList"
                           :key="item.departmentId"
                           :label='item.bdName'
                           :value='item.userId'></el-option>
              </el-select>
                </el-col>

            </el-form-item>
                </el-form>
            </el-col>
        </el-row>
</template>
<script>
import { StoreApi ,getCbdApi} from "../../api/api.js";
import $config from "$config";

export default {
  props: {
    isBD: {
      type: Boolean
    },

    showTitle: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
        title:"",
      list: [{}],
      model: {
        province: "",
        city: "",
        county: "",
        userId: ""
      },
      firstDepartmentList:[],
      secondDepartmentList:[],
      bdUserInfoList:[],
      thirdDepartmentList:[],
      forthDepartmentList:[],
      userInfor:{}
    };
  },
  computed: {
    dialogVisible: {
      get() {
        return this.isBD;
      },
      set(val) {
        this.$emit("update:isBD", val);
      }
    }
  },
  mounted () {
    this.open()
  },
  methods: {
  async  open(){
      const  {departmentList} =  await this.getList({parentId:1})
      this.firstDepartmentList = departmentList

  },
  async  handleProvinceChange(id){

    const paramsData = {parentId:id}
    const {departmentList} = await this.getList(paramsData)
    this.secondDepartmentList = departmentList
  },
  async handleCityChange(id){
      this.thirdDepartmentList = [];
      this.bdUserInfoList = [];
      this.model.bdUserInfo = ''
      this.model.county =''
      var params = {}
      _.forEach(this.secondDepartmentList,(item, index)=>{
        if(item.id == id){
          params = item
        }
      })
      const paramsData = {parentId:params.id,departmentName:params.name}
      const {departmentList,bdUserInfoList} = await this.getList(paramsData)
      if(departmentList.length != 0){
            this.thirdDepartmentList = departmentList
      }else{
            if(bdUserInfoList){
           this.bdUserInfoList = bdUserInfoList;
      }

    }

  },
  async handleCountyChange(id){
      var params = {}
      if (this.thirdDepartmentList.length!=0){
          _.forEach(this.thirdDepartmentList,(item, index)=>{
            if(item.id == id){
              params = item
            }
          })
          this.forthDepartmentList = [];
          this.model.bdUserInfo = ''
          const paramsData = {parentId:params.id,departmentName:params.name}
          const {departmentList,bdUserInfoList} = await this.getList(paramsData)
          this.bdUserInfoList =  bdUserInfoList;
      }else{
        _.forEach(this.bdUserInfoList,(item, index)=>{
            if(item.userId == id){
              params = item
            }
        })
         this.userInfor = params
         this.$emit('getUserInfor',this.userInfor )
      }


  },
  handleInforChange(){
    if (this.thirdDepartmentList.length!=0){
          _.forEach(this.bdUserInfoList,(item, index)=>{
            if(item.userId == this.model.userId){
              this.userInfor = item
            }
        })
    }
    this.$emit('getUserInfor',this.userInfor )
    return this.userInfor
  },
   async getList(params){
       if (this.dialogVisible){
           this.title = "选择BD"
            return  await  StoreApi.bdInfo(params)
       }else{
           this.title = "选择CBD"
            return  await  getCbdApi.bdInfo(params)
       }
    },

    submit() {
        if (this.thirdDepartmentList.length){
          _.forEach(this.bdUserInfoList,(item, index)=>{
            if(item.userId == this.model.userId){
              this.userInfor = item
            }
          })
        }
        if (!this.userInfor.bdName){
            return this.$message({message: "请选择完整的BD信息", type: "error"});
        }
        let postUserInfor = this.userInfor
        this.model = {}
        this.userInfor = {}
        return postUserInfor
    },

  }
};
</script>


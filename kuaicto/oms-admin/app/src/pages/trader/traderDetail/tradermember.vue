<template>
    <el-container>
        <!-- 搜索栏 -->
        <el-row>
            <el-col>
          <el-form :inline="true" :model="queryParams" ref="queryParams" size="small">
              <top-edit>
                  <div slot="left">
                    <el-form-item>
                        <el-button type="primary" size="small" @click="traderUserDialogAdd">添加成员</el-button>
                    </el-form-item>
                  </div>
                  <div slot="right">
                      <el-form-item label="名称">
                          <el-input v-model="queryParams.name"></el-input>
                      </el-form-item>
                      <el-form-item label="登录账号">
                          <el-input v-model="queryParams.cityName"></el-input>
                      </el-form-item>

                      <el-form-item>
                          <el-button class="btn-search" type="primary" @click="search">搜索</el-button>
                          <!-- <el-button  type="default" @click="reset">高级todo?
                            <i class="el-icon-caret-bottom"></i>
                          </el-button> -->
                      </el-form-item>
                  </div>
              </top-edit>

          </el-form>
            </el-col>
      <!-- info -->
      
        <el-table :data="traderUserList" width="100%" border >
            <el-table-column label="成员编号" align="center">
                <template slot-scope="scope">
                  {{scope.row.userId}}
                </template>
            </el-table-column>
            <el-table-column label="名称" align="center">
                <template slot-scope="scope">
                    {{scope.row.nickName}}
                </template>
            </el-table-column>
            <el-table-column label="性别" align="center" >
                <template slot-scope="scope">
                    {{scope.row.gender}}
                </template>
            </el-table-column>
            <el-table-column label="职务" align="center" >
                <template slot-scope="scope">
                    {{scope.row.positionName}}
                </template>
            </el-table-column>
            <!-- <el-table-column label="登录账号" width="200" align="center">
                <template slot-scope="scope">
                    {{scope.row.cellphone}}
                </template>
            </el-table-column> -->
            <el-table-column label="手机" align="center" width="200">
                <template slot-scope="scope">
                    {{scope.row.cellphone}}
                </template>
            </el-table-column>
            <el-table-column label="邮箱" header-align="center" width="200">
                <template slot-scope="scope">
                    {{scope.row.email}}
                </template>
            </el-table-column>
            <!-- <el-table-column label="管理员" align="center" >
              <template slot-scope="scope">
                <el-button type="text" size="mini"><i class="el-icon-check" v-if="scope.row.isDefault" ></i></el-button>
                <el-button type="text" size="mini"><i class="el-icon-close" ></i></el-button>
              </template>
            </el-table-column> -->
            <el-table-column label="是否启用" align="center" width="80">
              <template slot-scope="scope">
                    <!-- {{scope.row.enabled}} -->
                <el-button v-if = "scope.row.enabled" type="text" size="medium"><i class="el-icon-check"></i></el-button>
                <el-button v-else type="text" size="mini"><i class="el-icon-close" ></i></el-button>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              width="100" 
              align="center">
              <template slot-scope="scope">
                <el-button type="text" size="small" class="edit" @click="traderUserDialogEdit(scope.row.userId)">编辑</el-button>
                <el-button type="text" size="small" class="edit" @click="traderUserRemove(scope.row.userId)">移除</el-button>
              </template>
            </el-table-column>
          
        </el-table>

        <el-row type="flex">
            <el-col  v-if='total>0'>
                <el-pagination
                  class="text-right"
                  @current-change="handleCurrentChange"
                  :current-page="current"
                  layout="total, prev, pager, next, jumper"
                  :total="total">
                </el-pagination>
            </el-col>
        </el-row>

         <!-- 添加功能 -->
          <el-dialog title="添加成员" :visible.sync="traderUserAddVisible" width="40%" size="mini">
            <el-form :model="traderUserAddList" labelWidth="120px">
              <el-form-item label="名称">
                <el-input style="width:80%" v-model="traderUserAddList.nickName"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <!-- <el-radio-group v-model="traderUserAddList.gender"> -->
                  <!-- <el-radio :label="item.value" :key="item.value" v-for="item in gender">{{item.value}}</el-radio> -->
                  <el-radio v-model="traderUserAddList.gender" label="MALE">男</el-radio>
                  <el-radio v-model="traderUserAddList.gender" label="FEMALE">女</el-radio>
                  <el-radio v-model="traderUserAddList.gender" label="UNKNOWN">未知</el-radio>
                  <el-radio v-model="traderUserAddList.gender" label="SECRECY">保密</el-radio>
                <!-- </el-radio-group> -->
                <!-- <el-input style="width:80%" v-model="traderUserAddList.gender"></el-input> -->
              </el-form-item>
              <el-form-item label="职务">
                <el-input style="width:80%" v-model="traderUserAddList.positionName"></el-input>
              </el-form-item>
              <!-- <el-form-item label="登录账号">
                <el-input style="width:80%" v-model="traderUserAddList.phone"></el-input>
              </el-form-item> -->
              <el-form-item label="手机">
                <el-input style="width:80%" v-model="traderUserAddList.cellphone"></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input style="width:80%" v-model="traderUserAddList.email"></el-input>
              </el-form-item>
              <!-- <el-form-item label="成员编号">
                <el-input style="width:80%" v-model="traderUserAddList.userId"></el-input>
              </el-form-item> -->
              <!-- <el-form-item label="设置管理员">
                <el-checkbox v-model="traderUserAddList.isDefault">设置为管理员</el-checkbox>
              </el-form-item> -->
              <el-form-item label="是否启用">
                <el-checkbox v-model="traderUserAddList.enabled">启用</el-checkbox>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="traderUserAddVisible = false">取 消</el-button>
              <el-button type="primary" @click="traderUserAdd">确 定</el-button>
            </div>

          </el-dialog>

          <!-- 编辑 -->
          <el-dialog title="编辑成员" :visible.sync="traderUserVisible" width="40%" size="mini">
            <el-form :model="traderUserAddList" labelWidth="120px">
              <el-form-item label="名称">
                <el-input style="width:80%" v-model="traderUserAddList.nickName"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio-group v-model="traderUserAddList.gender">
                  <el-radio v-model="traderUserAddList.gender" label="MALE">男</el-radio>
                  <el-radio v-model="traderUserAddList.gender" label="FEMALE">女</el-radio>
                  <el-radio v-model="traderUserAddList.gender" label="UNKNOWN">未知</el-radio>
                  <el-radio v-model="traderUserAddList.gender" label="SECRECY">保密</el-radio>
                  <!-- <el-radio :label="MALE">男</el-radio>
                  <el-radio :label="FEMALE">女</el-radio>
                  <el-radio :label="UNKNOWN">未知</el-radio>
                  <el-radio :label="SECRECY">保密</el-radio> -->
                </el-radio-group>
                <!-- <el-radio v-model="traderUserAddList.gender" label="MALE">男</el-radio>
                <el-radio v-model="traderUserAddList.gender" label="FEMALE">女</el-radio>
                <el-radio v-model="traderUserAddList.gender" label="UNKNOWN">未知</el-radio>
                <el-radio v-model="traderUserAddList.gender" label="SECRECY">保密</el-radio> -->
              </el-form-item>
              <el-form-item label="职务">
                <el-input style="width:80%" v-model="traderUserAddList.positionName"></el-input>
              </el-form-item>
              <!-- <el-form-item label="登录账号">
                <el-input style="width:80%" v-model="traderUserAddList.phone"></el-input>
              </el-form-item> -->
              <el-form-item label="手机">
                <el-input style="width:80%" v-model="traderUserAddList.cellphone"></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input style="width:80%" v-model="traderUserAddList.email"></el-input>
              </el-form-item>
              <el-form-item label="成员编号">
                <el-input style="width:80%" v-model="traderUserAddList.userId"></el-input>
              </el-form-item>
              <!-- <el-form-item label="设置管理员">
                <el-checkbox v-model="traderUserAddList.isDefault">设置为管理员</el-checkbox>
              </el-form-item> -->
              <el-form-item label="是否启用">
                <el-checkbox v-model="traderUserAddList.enabled">启用</el-checkbox>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="traderUserVisible = false">取 消</el-button>
              <el-button type="primary" @click="traderUserEdit(traderUserAddList.userId)">确 定</el-button>
            </div>

          </el-dialog>

        </el-row>
    </el-container>

</template>
<script type="text/ecmascript-6">
import Vue from 'vue';
import $config from '../../../../../config.js'
import { mixin } from "../../../mixins/seach";
import {
 traderUserApi
    } from '../../../api/goods-api.js'
import TopEdit from "../../../components/common/topEdit";
export default {
  components: {TopEdit},
  mixins: [mixin],
    methods: {
      getList() {
        traderUserApi.find({userId: this.userId}).then(res => {
          this.traderUserList = res.items;
          this.total = res.total;
        })
      },
      traderUserDialogAdd() {
        this.traderUserAddVisible = true
      },
      traderUserAdd() {
        let vm = this
        traderUserApi.create(this.traderUserAddList).then(res => {
          vm.getList()
        })
        this.traderUserAddVisible = false
        this.traderUserAddList = {}
      },
      traderUserDialogEdit(userId) { // 编辑模态框
        this.traderUserVisible = true;
        traderUserApi.get(userId).then(res => {
          this.traderUserAddList = res
        })
      },
      traderUserEdit(userId) { // 编辑
        let vm = this
        console.log(userId);
        console.log(this.traderUserAddList);
        traderUserApi.update(userId, this.traderUserAddList).then(res => {
          console.log(res);
          console.log(this.traderUserAddList);
          console.log('hahah');
          this.traderUserAddList = res
          vm.getList()
        })
        this.traderUserVisible = false;
      },
      traderUserRemove(userId) {
        this.$confirm('确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            traderUserApi.delete(userId).then(res => {
              this.$message.success('已删除');
              this.getList()
            }).catch(err => {
                this.$message({ message: '删除失败', type: 'error' });
            })
        }).catch(err => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
        });
      }
    },
    data() {
        return {
            traderId: this.$route.params.id,
            traderUserAddVisible: false,
            traderUserVisible:false,
            dialogEditView: false,
            traderUserList: [],
            traderUserAddList: {
              trader: {traderId: this.$route.params.id},
              nickName: '',
              userId: '',
              positionName: '',
              cellphone: '',
              email: '',
              nickName: '',
              enabled: 'true',
              gender: '未知'
            },
            current:1,
            currentPage: 1,
            total: 0,
            uploadedImages:[],
            model: {},
            tableParams: {},
            breadcrumbPaths: [],
            queryParams:{
                name:''
            }
        }
    },
}
</script>
<style>
.el-dialog__body{
  padding-left: 10px;
}
.el-form-item__label{
  padding-left: 0;
  padding-right: 15px;
}
.el-form-item__content{
  padding-left: 0;
}
</style>
<style scoped lang="less">

.el-row{
  margin-bottom: 0;
}

.thumb {
    width: 70px !important;
    height: auto;
}

.thumb+.el-tag {
    position: absolute;
    left: 5px;
    top: 5px;
}

.category-icon-uploader {
    .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .el-upload:hover {
        border-color: #409EFF;
    }
}

.category-icon-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
}

.category-icon {
    max-width: 100px;
    max-height: 100px;
    display: block;
}

.el-table__row td p {
    margin: 0;
    padding: 0;
}

.baseinfo p {
    font-size: 12px;
    color: #999;
}

.baseinfo h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 16px;
    color: #333;
    font-weight: normal;
}
</style>

<style scoped>

</style>
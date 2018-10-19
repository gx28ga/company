<template>
    <div>
        <!--<div v-for="items in list">-->
        <!--<el-menu-item :index="items.path" >-->
        <!--<i class="el-icon-menu"></i>-->
        <!--<router-link :to="items.path"-->
        <!--tag="span">{{items.name}}-->
        <!--&lt;!&ndash;菜单管理&ndash;&gt;-->
        <!--</router-link>-->
        <!--</el-menu-item>-->
        <!--<guang :list="items.children"></guang>-->
        <!--</div>-->


        <template v-for="items in list">
            <el-submenu v-if="items.children" :index="items.url" :key="items.index">
                <template slot="title"><i class="el-icon-menu"></i>{{items.name}}</template>
                <el-menu-item-group v-for="data in items.children" :key="data.index">
                    <el-menu-item :index="data.url">
                        <span v-if="!urlPermission(data.url)">
                            <router-link :to="data.url" tag="span">{{data.name}}</router-link>
                        </span>
                        <span @click="randomUrl(data)" v-else>
                            <!-- <a :href="['index']">{{data.name}}</a> -->
                                 <router-link to="/index"  target="_blank" tag="span">{{data.name}}</router-link>
                  
                         
                        </span>
                    </el-menu-item>
                    
                    <!--
                    <span v-if="data.children">
                        <guang :list="data.children"></guang>
                    </span>
                    -->
                </el-menu-item-group>
            </el-submenu>

            <el-menu-item v-else-if="!items.children" @click="gotoLink(items.url)" :index="items.url" :key="items.index">
                <i class="el-icon-menu"></i>
                <span v-if="!urlPermission(items.url)">
                   <router-link :to="items.url"
                                tag="span">
                       {{items.name}}
                    </router-link>
                </span>
                <span @click="randomUrl(items)" v-else>
                         <router-link to="/index"
                                      tag="span">
                             {{items.name}}
                         </router-link>
                </span>

            </el-menu-item>
        </template>

    </div>
</template>
<script>
    export default {
        name: 'guang',
        props: ['list'],
        mounted () {
     
          
        },
        data(){
            return{
                memu:[]
            }
        },
        computed:{

        },
        components: {},
        methods: {
            active(data){
                return '/menu/list'
                // return String(data)
            },
            randomUrl(items){
                this.$router.push({path: '/index', query: {id: items.menuId}})
            },
            gotoLink(data){
                window.links = data
                if(!this.urlPermission(data)){
                    this.$router.push({path:data})
                }

            },
            urlPermission(data){
                if (data && data.indexOf('http') != -1) {
                    return true
                }
            }
        }
    }
</script>
<style>

</style>
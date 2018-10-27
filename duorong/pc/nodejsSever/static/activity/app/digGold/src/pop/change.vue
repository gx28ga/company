<style scoped>
    @import '../css/global.css';
    .modal-mask{
       .modal-header{
            .title-bg{
            }
        }
        .modal-body{
            .winning-pop{
                padding:0 $s20;
                h2{ color:#fff600; text-align:center;}
                p{ text-align:center; }
            }
        }
        .changetop{ background: url('../images/chantop.png') no-repeat; background-size: contain;  position: relative;
            .prizename{ color: #fff; position: absolute; left:0; } 
            .close{ background: url('../images/close.png') no-repeat; background-size: contain; position: absolute; right:0; margin:auto; }
        }
        .changebottom{ background: #fff;
            ul{  display: table; margin: 0 auto;
                li{ display: block;float: left; position: relative;
                    .xz{ background: url('../images/xz.png') no-repeat; background-size: contain; position: absolute; }
                    img{ width: 100%; height: 100%; }
                 }
            }
            .qrdh{ background: url('../images/qrdh.png') no-repeat; background-size: contain; margin: 0 auto; }
         }
    }
</style>
<template>
<pop ref='pop' :transition='transition'>
    <div slot="header" >
    </div>
    <div slot='body' class='winning-pop'>
        <div class="changetop img-size" data-width='560' data-height='325' data-fontSize='32'>
            <div class="prizename img-size" data-left='30' data-bottom='20'>请选择财神兑换</div>
            <div class="close img-size" data-width='40' data-height='38' data-right='18' data-bottom='26' @click='close'></div>
        </div>
        <div class="changebottom img-size" data-width='560' data-paddingTop='50' data-paddingBottom='40' data-borderBottomLeftRadius='20' data-borderBottomRightRadius='20'>
            <ul>
                <li v-for='item in chans' class="img-size" data-width='108' data-height='144' data-marginLeft='3' data-marginRight='3' @click='change(item)'>
                    <img v-bind:src="item.im" alt="">
                    <i class="img-size" v-bind:class="[item.curr?'xz':'']" data-width='84' data-height='71' data-bottom='2' data-right='2'></i>
                </li>
            </ul>
            <div class="qrdh img-size" data-width='357' data-height='73' data-marginTop='45' @click='tosucc'></div>
        </div>
    </div>
</pop>
</template>
<script>
    import requirePop from './requirePop.js';
    import {bigmanmon_convert} from '../common/URL.js';
    import pop from './pop.vue';
    export default {
        components : {
            pop
        },
        data(){
            return {
                chans: [
                    {name: 'east',im : require('../images/ec.png'),curr : false},
                    {name: 'south',im : require('../images/sc.png'),curr : false},
                    {name: 'west',im : require('../images/wc.png'),curr : false},
                    {name: 'north',im : require('../images/nc.png'),curr : false},
                ],
                changeName:null,
            }
        },
        props : {
            type:Number,
            transition : String,
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            close(){
                this.$refs.pop.closePop();
            },
            change : function(type){
                this.chans.map(item=>{
                    item.curr = false;
                })
                type.curr = !type.curr;
                this.changeName = type.name;
            },
            tosucc(){
                var self = this;
                T.ajax({
                    url : bigmanmon_convert , 
                    data : { uid : T.uid ,mammonType : self.changeName},
                    callback : true,
                    success : function( _data ){
                        if(_data.success){
                            self.$refs.pop.closePop(function(){
                               requirePop('chansucc',{
                                    props: {
                                        name : self.changeName
                                    }
                                },'success');
                            });
                        }else{
                            self.$refs.pop.closePop(function(){
                               requirePop('chansucc',{
                                    props: {
                                        content : _data.errorMsg
                                    }
                                },'publicTips');
                            });
                        }
                    }
                });
            },
        }
    }
</script>
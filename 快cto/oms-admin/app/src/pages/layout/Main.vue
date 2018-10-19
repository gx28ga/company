<template>
    <section>
        <!-- <LeftSliderBar class="left-menu"></LeftSliderBar> -->
        <div class="offset-left-menu layout-content">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </section>
</template>

<script>
    import LeftSliderBar from './LeftSliderBar.vue'
    export default {
        data: function () {
            return {}
        },
        components:{
            LeftSliderBar
        }
    }
</script>
<style lang="less">

</style>
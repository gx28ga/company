<style scoped>
</style>
<template>
<div class='nav-footer' v-show='showNav'>
    <nav id='Nav' class='nav img-size' data-height='98' data-fontSize='20'>
       <ul>
            <router-link to="main" tag='li' ><i class='home img-size' data-width='50' data-height='50'></i><h2>首页</h2></router-link>
            <router-link to="login" tag='li' ><i class='project img-size' data-width='50' data-height='50'></i><h2>登录</h2></router-link>
       </ul>
    </nav>
</div>
</template>
<script>

</script>

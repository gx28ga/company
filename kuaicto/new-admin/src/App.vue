<template>
    <div id="app">
        <component :is="tabElement"></component>
    </div>
</template>
<script lang="ts">
    import App from '@/controller/App.ts';
    export default App;
</script>

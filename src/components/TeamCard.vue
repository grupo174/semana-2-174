<template>
     <div id="app">
       <img :src="require('./assets/logo.png')" />
     </div>
</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
    
</script>

<style scoped>

</style>

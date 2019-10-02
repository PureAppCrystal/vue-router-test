<template>
    <div class='home'>
        <h1> Home</h1>
        <span>{{msg}}</span><br>
        <span>Browser : {{browserInfo}}</span>
    </div>
</template>


<script>
export default {
    name: 'home',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    computed: {
        browserInfo: function() {
            return navigator.userAgent;
        }
    },
    methods: {
        getBrowser() {
            console.log('browser : ', navigator.userAgent)
            this.result = "user Agent = " + navigator.userAgent;
        }
    },

}
</script>

<style scoped>

</style>
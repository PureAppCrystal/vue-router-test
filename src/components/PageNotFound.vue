<template>
    <div class='not-found-page'>
        <h1> 404 Page Not Found Error.</h1>
        <span>{{msg}}</span>
    </div>
</template>


<script>
export default {
    name: 'not-found-page',
    data() {
        return {
            msg: "Cant not found page you want"
        }
    }
}
</script>

<style scoped>

</style>
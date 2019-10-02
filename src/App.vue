<template>
  <div id="app">
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/home2'>Home2</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style scoped>
a {
  margin-left: 1rem;
  background-color:rgb(209, 68, 68);
  padding:1rem;
  color: white;
}

</style>>


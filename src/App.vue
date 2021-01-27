<template> 
<div id="app">
  <div>
    <b-nav>
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
    </b-nav>
  </div>
  <nav>
    <img alt="Rymd tupp" src="./assets/Group 11.png"><br>
    <div id="page-nav">
      <router-link to="/">sida 1 </router-link> |
      <router-link to="/page2">Yes or No</router-link> 
      </div>
  </nav>
  <router-view/>
</div>
</template>



<style lang="scss">
img {
  margin-bottom: 20px
}
ul {
  display: inline;
  justify-content:space-around;
  list-style-type:none;
  text-align: center;
}
#page-nav{
   margin-bottom: 20px
}
#app {
  background-color:rgba(52, 68, 70, 0.548);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav{
background-color: #161e27;
height: 50px;
padding: 30px;
a {
font-weight: bold;
color: #2c3e50;
 &.router-link-exact-active {
 color: #42b983;
     }
  }
}
</style>

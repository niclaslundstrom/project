<template>
<div>
  <h1>Städer!</h1>
    <ul>
      <li v-for="citie in cities" :key="citie.id" :value="citie">
      {{ citie.name }}
      {{ citie.population }}
      </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
      return{
        cities: {}
        }
      
    },
      created() {
        fetch('https://avancera.app/cities/')
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
            this.cities = result
          })
      },
      name: 'cities'
}

</script>

<style scoped>
  div{
  height: 100vh;
  }
</style>

<template>
  <div>
  <h1>{{ answer }}</h1><br>
  <img v-bind:src="img" alt="detta är en gif"><br>
  <input class="[ btn btn-secondary ][ bobutton ]" @click="fetchData()" type="button" value="Yes or No">
  <textfield text="inget värde skickat!"></textfield>
  </div>
</template>

<script>
import textfield from '../components/textfield.vue'

export default {
  components: { textfield },
  data() {
    return{
      answer: null,
      img: null
    }  
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData () {
      fetch('https://cors-anywhere.herokuapp.com/http://yesno.wtf/api/')
      .then((response) => response.json())
      .then((result) => {
      console.log(result)
      this.answer = result.answer
      this.img = result.image
      })
    }
  },
  name: 'Yesorno' 
}
</script>
<style scoped>
  h1 {
    color: rgb(86, 112, 94);
    font-size: 5rem;
  }
  div {
  background-color: rgb(33, 54, 66);
  }
  .bobutton {
  margin-top: 50px;
  margin-bottom:50px;; 
  }
  div{
  height: 100vh;
  }
</style>
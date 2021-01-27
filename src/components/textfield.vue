<template>
<div>
  <input type="text" v-model="textfield"><br>
  <h2 v-if="textfield == null">{{ text }}</h2>
  <h2 v-else>Ett korekt värde skickats!</h2>
  <input class="[ btn btn-primary ][ bobutton ]"  type="button" @click="onClick" value="payload-värde">
</div>
</template>

<script>
export default {
  props: ['text'],
  data() {
    return {
      textfield: null
    }
  },
  methods: {
    onClick() {   
      console.log(this.$emit)
      this.$emit('text-input',this.textfield)
    }
  },
  name: 'textfield'
}
</script>
<style scoped>
  h2{
    color: red
  }
 .bobutton {
  margin-top: 50px;
  margin-bottom:50px;; 
  }
</style>
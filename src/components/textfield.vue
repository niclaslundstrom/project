<template>
<div>
  <input type="text" v-model="textfield"><br>
  <input class="[ btn btn-primary ][ bobutton ]"  type="button" @click="onClick" value="payload-värde">
</div>
</template>

<script>
export default {
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
 .bobutton {
  margin-top: 50px;
  margin-bottom:50px;; 
  }
</style>
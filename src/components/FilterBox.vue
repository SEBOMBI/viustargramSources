<template>
  <div :class="`${filter} filter-item`" :style="`background-image : url(${img})`">
  <slot></slot>
  </div>
<!--     값 확인용 button
    <button @click="v">a</button>-->
</template>

<script>
export default {
  name: "FilterBox",
  props : {
    filter : String,
    img : String,
  },
  methods : {
    v(){
      console.log(this.filter)
    }
  }

}
</script>

<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>
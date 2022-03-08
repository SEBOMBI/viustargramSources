<template>
  <div>
    <PostVue :postData="postData" :step="step" :imgUrl="imgUrl">
    </PostVue>
  </div>
</template>
<script>
import PostVue from "@/components/PostVue";

export default {
  name: "ContainerVue",
  components: {
    PostVue
  },
  props: {
    postData: Object,
    step: Number,
    imgUrl: String,
  }
}
</script>

<style scoped>
</style>
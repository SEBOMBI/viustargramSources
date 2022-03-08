<template>
  <div>
      <div v-for="(post,id) in postData" :key="id">
        <br/>
    <div v-if="step===0" class="post">
        <div class="post-header">
          <div class="profile" :style="{backgroundImage : `url(${post.userImage})` }"></div>
          <span class="profile-name">{{ post.name }}</span>
        </div>
      <br/>
        <div class="post-body" :style="{backgroundImage : `url(${post.postImage})` }"></div>
        <div class="post-content">
          <p>{{ post.likes }} Likes</p>
          <p><strong>{{ post.name }}</strong> {{ post.content }}</p>
          <p class="date">{{ post.date }}</p>
        </div>
    </div>
      </div>

      <!-- 필터선택페이지 -->
    <div v-if="step===1">
      <div class="upload-image" :style="{backgroundImage:`url(${imgUrl})`}"></div>
      <div class="filters">
        <FilterBox v-for="(filter,id) in filterData" :key="id" :filter="filterData[id]" :img="imgUrl"/>
      </div>
      <!--확인용 버튼-->
      <!--<button @click="v" >filter-data</button>-->
    </div>

      <!-- 글작성페이지 -->
      <div v-if="step===2">
      <div class="upload-image" :style="{backgroundImage:`url(${imgUrl})`}"></div>
      <div class="write">
        <textarea class="write-box">write!</textarea>
      </div>
      </div>

<!--      <div>
        <button @click="blogStep=0">MyPost</button>
        <button @click="blogStep=1">Filter</button>
        <button @click="blogStep=2">write</button>
        <button @click="$emit('change',1)">changeStepTest</button>
        <button @click="v">now Step</button>
      </div>-->
  </div>
</template>

<script>

import FilterBox from "@/components/FilterBox";
import filterData from "@/assets/datas/filterData";

export default {
  name: "PostVue",
  components: {FilterBox},
  props: {
    postData: Object,
    step: Number,
    imgUrl : String,
  },
  methods: {
    v(){
      console.log(this.filterData)
    },
    v1(){
      this.$emit('change',1)
    }
  },
  data(){
    return{
      blogStep : 0,
      filterData : filterData,
    }
  }
}
</script>

<style scoped>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}

.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}

.filters {
  overflow-x: scroll;
  white-space: nowrap;
}

.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}

.filters::-webkit-scrollbar {
  height: 5px;
}

.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
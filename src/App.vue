<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step=0">Cancel</li>
    </ul>
    <ul v-if="step<2" class="header-button-right">
      <li @click="step++">Next</li>
    </ul>
    <ul v-if="step===2" class="header-button-right">
      <li @click="publish">Upload</li>
    </ul>
    <img src="./assets/logo.png" class="logo"/>
  </div>

  <!-- MAIN CONTAINER -->
  <ContainerVue :postData="PostData" :step="step" :imgUrl="imgUrl"
                @change="this.step=$event"
  />
  <button @click="v">adsf확인</button>

  <div class="d-grid gap-2 col-3 mx-auto">
    <button v-if="step<1" @click="thebogi" type="button" class="btn btn-outline-primary">더 보기</button>
  </div>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" accept="image/*" id="file" class="inputfile"/>
      <label @click="uploadSeq" for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>

import ContainerVue from "@/components/ContainerVue";
import PostData from "./assets/datas/postData";
import axios from "axios";

let file=null;
let url=null;

export default {
  name: 'App',
  components: {
    ContainerVue,
  },
  data() {
    return {
      PostData: PostData,
      moreState: 0,
      step : 0,
      imgUrl : '',
    }
  },
  methods: {
    thebogi() {
        axios.get('https://codingapple1.github.io/vue/more'+this.moreState+'.json')
            .then((d) => {
              this.PostData.push(d.data);
              this.moreState++;
            })
    },
    v(){
      console.log(this.imgUrl[0])
    },
    upload(e){
      file = e.target.files;
      url = URL.createObjectURL(file[0]);
      this.imgUrl =url;
      this.step=+1
    },
    uploadSeq(){
      console.log(file !== null && url !== null);
      if(file!==null&&url!==null){
        file = null;
        url = null;
      }
    },
    publish(){
      console.log(url);
      console.log(typeof (this.PostData));
      const newUpload = {
        name: "Inhoo Jeon",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: url,
        likes: 36,
        date: "May 15",
        liked: false,
        content: " 나중에 넣을거임 ",
        filter: "perpetua"
      }
      this.PostData.unshift(newUpload);
      this.step = 0;
    }
  },
}

</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
  display: table;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}
</style>

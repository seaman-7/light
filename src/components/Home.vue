<template>
  <div class="content">
            <div class="swiper-container" data-space-between='10' data-pagination=".swiper-pagination">
                <div class="swiper-wrapper">
                    <div v-for="slide in slides" class="swiper-slide">
                        <img :src="slide.img" style="width: 100%;height:200px"alt="">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="bar content_icon">
            <div class="content-block-title">首页应用</div>
              <div v-for="icon in icons">
                <img :src="icon.img" class="col-20 item_icon">
              </div>
            </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
       slides:[
                {img:'http://img1.imgtn.bdimg.com/it/u=3087723120,2486907605&fm=21&gp=0.jpg'},
                {img:'http://img2.imgtn.bdimg.com/it/u=1703095530,1627452578&fm=21&gp=0.jpg'},
                {img:'http://img1.imgtn.bdimg.com/it/u=1042691314,1928586555&fm=21&gp=0.jpg'},
       ],
       icons:[
                {img:"../static/1.png"},
                {img:"../static/2.png"},
                {img:"../static/3.png"},
                {img:"../static/4.png"},
                {img:"../static/5.png"},
                {img:"../static/6.png"},
                {img:"../static/7.png"},
                {img:"../static/8.png"},
                {img:"../static/9.png"},
                {img:"../static/10.png"},
                {img:"../static/11.png"},
                {img:"../static/12.png"},
       ]

    }
  },
  ready: function () {
            console.log("home-dom准备完毕") // -> 'foo'
            $(".swiper-container").swiper();
        }
}
</script>

<style>
/*<!-- <style scoped> -->*/
.item_icon{
  padding:1em 1.5em;
  float: left;
  /*max-resolution: res;in: 0;*/
}
.item_icon:hover{
  opacity:0.5;
}
.content_icon{
  width:100%;
  min-height:15em; 
}
iframe{
  display: none;
  border:none;
  width: 100%;
  min-height: 30rem;
  overflow-y:hidden;
}
</style>
<script setup>
import banner1 from "@/assets/img/banner/gioi-thieu-ban-mua-hang-ttg.jpg";
import banner2 from "@/assets/img/banner/pc-delta-force_2.jpg";
import banner3 from "@/assets/img/banner/sale-halloween-ttg-bnc-pc.jpg";
import banner4 from "@/assets/img/banner/slide_pc_premium.jpg";
import banner5 from "@/assets/img/banner/thu-cu-doi-moi-bnc-ttg.jpg";
import banner6 from "@/assets/img/banner/TTG_khuyen-mai-pc-doanh-nghiep-1.jpg";
import banner7 from "@/assets/img/banner/TTG-011.jpg";
import banner8 from "@/assets/img/banner/ttg-banner-1.jpg";
import banner9 from "@/assets/img/banner/ttg-khuyen-mai-hs-sv.jpg";
import banner10 from "@/assets/img/banner/TTG-lap-dat-pc-tai-nha-banner-chinh.jpg";
import banner11 from "@/assets/img/banner-con/pc-pr-ttg.jpg";
import banner12 from "@/assets/img/banner-con/ttg-ldpctn.jpg";
import banner13 from "@/assets/img/banner-con/tcdm-ttg.jpg";
import { ref } from "vue";
//Sử dụng thư viện của swiper để thực hiện là slide auto show
// Import Component của Swiper dành cho Vue
import { Swiper, SwiperSlide } from "swiper/vue";

// Import đầy đủ các tính năng mở rộng (auto...)
import { Autoplay } from "swiper/modules";
// 3. Import CSS chuẩn của Swiper
import "swiper/css";

//khai báo các module sẽ sử dụng
const modules = [Autoplay];
const images = ref([
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
  banner10,
]);

const images_con = ref([banner11, banner12, banner13]);
</script>

<template>
  <div class="section-hero">
    <div class="banner-wrapper">
      <!-- Sử dụng thẻ Swiper để bọc bên ngoài -->
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :rewind="true"
        :speed="1500"
        :space-between="10"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        class="my-banner"
      >
        <!-- Sử dụng thẻ swiper-slide để bọc ảnh -->
        <SwiperSlide
          class="banner-slide"
          v-for="(img, index) in images"
          :key="index"
        >
          <img :src="img" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="banner-con">
      <a v-for="(img, index) in images_con" :key="index" href="">
        <img :src="img" alt="" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.banner-wrapper {
  width: 100%;
  max-width: 1280px;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 10px auto;
  border-radius: 12px;
  overflow: hidden;
}

.my-banner img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  border-radius: 12px;
}

.banner-con {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 1280px;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 10px auto;
  gap: 10px;
}

.banner-con a {
  display: block;
  overflow: hidden;
  border-radius: 12px;
  width: 100%;
}

.banner-con img {
  display: block;
  width: 100%;
  height: 219px;
  object-fit: cover;
}
</style>

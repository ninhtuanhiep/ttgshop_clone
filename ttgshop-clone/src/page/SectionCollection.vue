<script setup>
import { SectionCollectionData } from "@/data/section-collection.js";
import SlideAutoShow from "@/components/SlideAutoShow.vue";
import {ChevronsRight } from "@lucide/vue"
</script>

<template>
  <div class="collection-section">

    <div class="section-header">
        <img src="@/assets/img/section-collection/ttgshop-collection-title-1.png" alt="" class="title-img">
    </div>

    <div class="section-body">
      <SlideAutoShow :items="SectionCollectionData"/>
    </div>

    <div class="section-footer">
        <a href="" class="btn-xem-tat-ca">Xem tất cả <ChevronsRight/></a>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.collection-section {
  width: 100%;
  max-width: 1260px; /* Điều chỉnh theo grid web của bạn */
  margin: 20px auto;
  padding: 10px 12px 12px; 
  /* Tạo khoảng lề bên trong để các thẻ không chạm sát viền */
  border-radius: 12px;
  background: url(src/assets/img/section-collection/ttgshop-collection-bg-1.jpg) no-repeat;
  background-size:cover;
  font-family: "Inter",sans-serif;
}

/* Căn giữa tiêu đề */
.section-header {
  text-align: left;
  /* margin-bottom: 20px; */
}

.title-img {
  max-width: 700px; /* Chỉnh độ to nhỏ của ảnh tiêu đề */
}

/* Nút Xem tất cả */
.section-footer {
  text-align: center;
  margin-top: 12px;
}

.btn-xem-tat-ca {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #ff5636; /* Màu cam/đỏ */
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  padding: 4px 8px 4px 11px;
  border-radius: 20px; /* Bo tròn 2 đầu */
  text-decoration: none;
}
</style>

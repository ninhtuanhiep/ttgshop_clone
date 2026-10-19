<script setup>
import { ChevronsRight } from "@lucide/vue";
import SlideAutoShow from "@/components/SlideAutoShow.vue";
import { PCGamingData } from "@/data/pcGaming.js";
import {PcWorkStationData} from "@/data/pc_workstation"
import {PcAMDGamingData} from "@/data/pc_amd_gaming.js"
import {PcMiniData} from "@/data/pc_mini.js"
import {PCVanPhong} from "@/data/pc_van_phong"
import {LinhKienMayTinhData} from "@/data/linh_kien_may_tinh.js"
import {ManHinhMayTinhData} from "@/data/man_hinh_may_tinh.js"
</script>

<template>
  <div class="section-category">
    <div class="pc-gaming category-section">
      <div class="category-header">
        <span class="head"> PC GAMING </span>

        <ul>
          <li><a href="#">PC GAMING GIÁ RẺ</a></li>
          <li><a href="#">PC STREAM GAME</a></li>
          <li><a href="#">PC GAMING PREMIUM</a></li>
          <li><a href="#">PC Core Ultra</a></li>
          <li><a href="#">PC GAMING CAO CẤP</a></li>
        </ul>
        <a href="#" class="btn-xem-tat-ca">Xem tất cả <ChevronsRight /> </a>
      </div>
      <div class="category-body" style="padding: 15px 15px 10px">
        <SlideAutoShow :items="PCGamingData" />
      </div>
    </div>
<!-- -------------------PC WORKSTATION 2D 3D--------------- -->
    <div class="pc-workstation-2d-3d category-section">
      <div class="category-header">
        <span class="head"> PC WORKSTATION 2D 3D </span>
        <a href="#" class="btn-xem-tat-ca">Xem tất cả <ChevronsRight /> </a>
      </div>
      <div class="category-body" style="padding: 15px 15px 10px">
        <SlideAutoShow :items="PcWorkStationData" />
      </div>
    </div>
    <!-- -------------------PC AMD GAMING--------------- -->
    <div class="pc-amd-gaming category-section">
      <div class="category-header">
        <span class="head"> PC AMD GAMING </span>
        <a href="#" class="btn-xem-tat-ca">Xem tất cả <ChevronsRight /> </a>
      </div>
      <div class="category-body" style="padding: 15px 15px 10px">
        <SlideAutoShow :items="PcAMDGamingData" />
      </div>
    </div>
    <!-- -------------------PC mini--------------- -->
    <div class="pc-mini category-section">
      <div class="category-header">
        <span class="head"> PC MINI </span>
        <a href="#" class="btn-xem-tat-ca">Xem tất cả <ChevronsRight /> </a>
      </div>
      <div class="category-body" style="padding: 15px 15px 10px">
        <SlideAutoShow :items="PcMiniData" />
      </div>
    </div>
    <!-- -------------------PC VĂN PHÒNG--------------- -->
    <div class="pc-van-phong category-section">
      <div class="category-header">
        <span class="head"> PC VĂN PHÒNG </span>
        <a href="#" class="btn-xem-tat-ca">Xem tất cả <ChevronsRight /> </a>
      </div>
      <div class="category-body" style="padding: 15px 15px 10px">
        <SlideAutoShow :items="PCVanPhong" />
      </div>
    </div>
    <!-- -------------------LINH KIỆN MÁY TÍNH--------------- -->
    <div class="linh-kien-may-tinh category-section">
      <div class="category-header">
        <span class="head"> LINH KIỆN MÁY TÍNH </span>
        <a href="#" class="btn-xem-tat-ca">Xem tất cả <ChevronsRight /> </a>
      </div>
      <div class="category-body" style="padding: 15px 15px 10px">
        <SlideAutoShow :items="LinhKienMayTinhData" />
      </div>
    </div>
    <!-- -------------------MÀN HÌNH MÁY TÍNH--------------- -->
    <div class="man-hinh-may-tinh category-section">
      <div class="category-header">
        <span class="head"> MÀN HÌNH MÁY TÍNH </span>
        <a href="#" class="btn-xem-tat-ca">Xem tất cả <ChevronsRight /> </a>
      </div>
      <div class="category-body" style="padding: 15px 15px 10px">
        <SlideAutoShow :items="ManHinhMayTinhData" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.category-section {
  width: 100%;
  max-width: 1260px;
  background-color: white;
  margin: 10px auto;
  border-radius: 8px;
  margin-top: 30px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  gap: 34px;
  font-family: "Inter", sans-serif;
  padding-right: 14px;
}

.category-header ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 4px;
  flex: 1 1 0%;
}

.category-header a {
  font-size: 13px;
  text-decoration: none;
  color: black;
}

.category-header li > a {
  padding: 8px;
  background-color: #f4f4f4;
  border-radius: 3px;
  transition: all 0.2s ease;
}

.category-header li > a:hover {
  background-color: #ff5636;
  color: white;
}

.btn-xem-tat-ca {
  display: inline-flex;
  align-items: center;
  padding-top: 4px;
  gap: 5px;
  font-weight: 600;
  line-height: 1;
  transition: all 0.2s ease;
}

.btn-xem-tat-ca:hover {
  color: #ff5636;
}

.head {
  font-size: 22px;
  padding: 14px 12px 13px;
  background-color: #ff5636;
  color: white;
  border-radius: 8px 0 0 0;
  position: relative;
  font-weight: 700;
}

.head::after {
  content: "";
  background: url(src/assets/img/dung_chung/ttgshop-static-icon-category-polygon-1.png)
    no-repeat;
  position: absolute;
  width: 53px;
  height: 100%;
  top: 0;
  left: 100%;
  background-size: cover;
  background-position: left center;
}
</style>

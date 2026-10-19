<script setup>
import { Map, Phone, MapPin, RotateCcwClock } from "@lucide/vue";
</script>

<template>
  <div class="header-top-list">
    <div class="warper">
      <p>
        <span class="header-number">01</span>
        CHI NHÁNH ĐỐNG ĐA - HÀ NỘI
      </p>
      <a href="#">
        <MapPin :size="16" ></MapPin>
        <span>83 - 85 Thái Hà, Trung Liệt, Đống Đa, Hà Nội</span>
      </a>
      <a href="#">
        <Map :size="16" ></Map>
        <span>Xem bản đồ đường đi</span>
      </a>
      <a href="#">
        <Phone :size="16"></Phone>
        <span>Tel: 036.625.8142</span>
      </a>
      <a href="#">
        <RotateCcwClock :size="16" />
        <span>Thời gian mở cửa: Từ 8h30 - 20h00 hàng ngày</span>
      </a>
    </div>
    <div class="warper">
      <p>
        <span class="header-number">02</span>
        CHI NHÁNH QUẬN 10 - Hồ Chí Minh
      </p>
      <a href="#">
        <MapPin :size="16" ></MapPin>
        <span>83A Cửu Long, Phường 15, Quận 10, TP Hồ Chí Minh</span>
      </a>
      <a href="#">
        <Map :size="16" ></Map>
        <span>Xem bản đồ đường đi</span>
      </a>
      <a href="#">
        <Phone :size="16" ></Phone>
        <span>Tel: 098.668.0497</span>
      </a>
      <a href="#">
        <RotateCcwClock :size="16" />
        <span>Thời gian mở cửa: Từ 8h30 - 20h00 hàng ngày</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.header-top-list {
  display: flex;
  justify-content: space-between;
  width:1200px;
  height:auto;
  background-color: #F1F1F1;
  padding: 20px 20px 0;
}

.warper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width:575px;
  height:auto;
  margin: 0 0 20px;
  font-size: 14px;
  font-family: sans-serif;
}

.warper a {
  display: flex;
  align-items:center;
  gap:10px;
  margin: 3px 0 0;
  text-decoration: none;
  color: var(--vt-c-black);
}

.warper a:hover{
  color: rgb(242, 117, 7);
  transition: 0.5s;
}

.warper p {
  font-weight: 600;
  color: var(--vt-c-white);
  height: 30px;
  background-color: #004147;
  line-height: 30px;
  border-radius: 0px 20px 20px 0px;
}

.warper .header-number{
  display: inline-block;
  background-color: #EB1F27;
  margin: 0 13px 0 0;
  padding: 0px 8px;
  font-weight: 600;
}
</style>

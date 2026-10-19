<script setup>
import { defineProps } from "vue";
import { CircleCheck, Gift } from "@lucide/vue";
defineProps({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  bao_hanh: {
    type: String,
  },
  mo_ta: {
    type: Array,
    default: () => [],
  },
  khuyen_mai: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="detail-popup">
    <div class="detail-header">
      <h3>{{ title }}</h3>
    </div>
    <div class="body-detail">
      <div class="top">
        <p>
          <span>Giá bán:</span>
          <span>{{ price }}</span>
        </p>
        <p>
          <span>Bảo hành:</span>
          <span>{{ bao_hanh }}</span>
        </p>
      </div>

      <div class="middle" v-if="mo_ta.length > 0">
        <p>Mô tả tóm tắt:</p>
        <ul>
          <li v-for="(nd, index) in mo_ta" :key="index">
            <CircleCheck :size="16" color="white" fill="black" style="flex-shrink: 0; margin-top: 2px;"/> 
            <span>{{ nd }}</span>
          </li>
        </ul>
      </div>

      <div class="bottom" v-if="khuyen_mai.length > 0">
        <p>Khuyến mại:</p>
        <ul>
          <li v-for="(km, index) in khuyen_mai" :key="index">
             <Gift :size="16" color="red" style="flex-shrink: 0; margin-top: 2px;"/> 
             <span>{{ km }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

/* Bao bọc toàn bộ popup */
.detail-popup {
  width: 400px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.65);
  font-family: "Inter", sans-serif;
  color: #333;
  overflow: hidden;
}

/* Phần Header màu cam */
.detail-header {
  background: linear-gradient(to right, #f94c43, #f6412e);
  padding: 12px 15px;
  color: #ffffff;
}

.detail-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
}

/* Phần thân chứa nội dung */
.body-detail {
  padding: 15px;
}

/* Khối Giá bán & Bảo hành */
.top {
  padding-bottom: 10px;
}

.top p {
  display: flex;
  gap: 15px;
  margin: 8px 0;
  font-size: 14px;
}

.top p span:first-child {
  font-weight: 600;
  color: #000;
}

.top p:first-child span:last-child {
  color: #d70018;
  font-weight: bold;
  font-size: 16px;
}

.top p:last-child span:last-child {
  color: #000;
}

/* Tiêu đề của phần Mô tả và Khuyến mại */
.middle p,
.bottom p {
  display: inline-block;
  padding: 9px 15px;
  margin: 0 0 8px 0;
  font-size: 13px;
  font-weight: bold;
  color: white;
  background-color: #f6412e;
  border-radius: 5px;
  line-height: 1;
}

.bottom {
  padding-top: 15px;
}

/* Định dạng danh sách (ul, li) */
.middle ul,
.bottom ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.middle li,
.bottom li {
  position: relative;
  margin-bottom: 6px;
  font-size: 15px;
  line-height: 1.5;
  color: black;
  display: flex;
  align-items: flex-start;
  gap: 4px;
}

</style>

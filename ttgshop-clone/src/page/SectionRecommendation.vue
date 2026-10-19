<script setup>
import { WifiOff, MoveRight, Play, Dot } from "@lucide/vue";
import { gian_tiep_game_data } from "@/data/gian_tiep_game.js";
</script>
<template>
  <div class="section-recommendation">
    <div
      class="header-recommendation"
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0 10px;
        border-bottom: 1px solid #1523212e;
      "
    >
      <div class="recomendation">
        <span
          class="logo"
          style="display: flex; align-items: center; gap: 10px"
        >
          <span class="logo-mark">
            <WifiOff :size="14" color="white" />
          </span>
          <span style="font-weight: 600; font-size: 20px">
            Gián Tiếp Game
          </span>
        </span>
        <span class="de-xuat"> Đề xuất cho bạn </span>
        <span class="signal"> TÍN HIỆU THỊNH HÀNH </span>
      </div>

      <a href="" class="xem-tat-ca">
        <span style="font-weight: 700">XEM TẤT CẢ</span>
        <span>
          <MoveRight :size="13" />
        </span>
      </a>
    </div>

    <div class="body-recommendation">
      <div
        v-for="(item, index) in gian_tiep_game_data"
        :key="item.id"
        class="game-card"
        :class="{ 'is-featured': item.featured }"
      >
        <!-- Phần hình ảnh và các huy hiệu chèn lên ảnh -->
        <div class="card-thumbnail">
          <img :src="item.img" alt="" />
          <!-- Huy hiệu số thứ tự (01, 02) -->
          <div class="badge-number">0{{ item.id }}</div>
          <!-- Huy hiệu tag -->
          <div class="badge-tag">{{ item.tag }}</div>
          <!-- Nút play -->
          <div class="play-btn">
            <Play :size="14" color="white" fill="white" />
          </div>
        </div>

        <!-- Phần thông tin bên dưới thẻ -->
        <div class="card-info">
          <a href="">{{ item.title }}</a>
          <p class="game-meta">
            <span class="video-count">{{ item.so_luong_video }} video</span>
            <span class="dot"><Dot :size="13" /></span>
            <span class="the-loai">{{ item.the_loai }}</span>
          </p>
        </div>
        <!-- Dải băng FEATURED chéo ở góc (Chỉ hiện nếu featured: true) -->
        <div v-if="item.featured" class="featured-ribbon">FEATURED</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.section-recommendation {
  width: 100%;
  max-width: 1260px;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #eee;
  box-sizing: border-box;

  /* 2. Hiệu ứng Background (Gradient + Lưới) */
  background-color: #ffffff;
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    linear-gradient(
      90deg,
      rgba(255, 235, 235, 0.8) 0%,
      rgba(220, 245, 240, 0.6) 100%
    );

  /* 20px 20px là kích thước của 1 ô vuông nhỏ trong thẻ div */
  background-size:
    20px 20px,
    20px 20px,
    100% 100%;

  /* Đảm bảo hình nền không bị tràn */
  background-repeat: repeat, repeat, no-repeat;

  /* (Tùy chọn) Thêm viền mờ cho thẻ div để tách biệt với nền trang web */
  border: 1px solid #eee;
}

.recomendation {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  background-color: #ff5636;
  border-radius: 5px;
  box-shadow: 4px 4px 2px rgb(203, 242, 250);
}

.de-xuat {
  font-size: 7px;
  padding: 4px 7px 3px;
  background-color: #e2f4ee;
  color: #17594f;
  border: 1px solid #c0e3e5;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 600;
  line-height: 1;
}

.signal {
  font-size: 8px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 600;
  color: #61736f;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.signal::before {
  display: inline-block;
  content: "";
  background: #ff5636;
  border-radius: 50%;
  flex: none;
  width: 6px;
  height: 6px;
  animation: 2.4s pulse ease-in-out infinite;
  box-shadow:
    0 0 0 3px #ff563624,
    0 0 12px #ff5636b8;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.3);
    opacity: 0.6;
  }
}

.xem-tat-ca {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: black;
  font-size: 8px;
  font-family: "Be Vietnam Pro", sans-serif;
  background-color: #a7e8d7;
  padding: 5px 10px 5px 12px;
  transition: all 0.3s ease;
  white-space: nowrap; /** sử dụng để :after không bị giới hạn chiều ngang */
}

.xem-tat-ca::after {
  content: "05 / SELECTED";
  color: #1523317a;
  background-color: rgba(236, 245, 243, 0.5);
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 7px;
  font-weight: 700;
  padding: 0 7px;
  position: absolute;
  bottom: -14px;
  right: 116px;
  transition: all 0.3s ease;
}

.xem-tat-ca:hover {
  color: var(--vt-c-white);
  background-color: #ff5636;
  transform: translate(-5px, -5px);
}

.xem-tat-ca:hover::after {
  transform: translate(5px, 5px);
}
/* ------------------------ phần body recommendation --------------------- */

.body-recommendation {
  display: grid;
  grid-template-columns:minmax(250px, 1.45fr) repeat(4, minmax(140px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.game-card {
  background: #fff;
  border: 1px solid #eaeaea;
  position: relative;
  overflow: hidden; /* Cắt phần dải băng thừa */
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px #15232114;
  height: 223px;
}

.game-card:hover{
  box-shadow: 5px 5px #ffdfc7;
}

/* Thẻ nổi bật (Featured) có viền đỏ nhẹ */
.game-card.is-featured {
  border: 1px solid #ff917e;
}

/* Khung chứa ảnh */
.card-thumbnail {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.card-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: all 0.5s ease;
}

/* 1. Huy hiệu số (01, 02) + Hình tam giác ở dưới */
.badge-number {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff5636;
  color: white;
  font-weight: 800;
  font-size: 14px;
  padding: 4px 8px;
  line-height: 1;
  box-shadow: 3px 3px #00000059;
  font-family: "Bricolage Grotesque", sans-serif;
}

/* 2. Huy hiệu thể loại góc phải trên */
.badge-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(10, 19, 17, 0.85); /* Nền đen mờ */
  color: #72dcb5; /* Chữ xanh ngọc */
  font-size: 6px;
  font-weight: 700;
  padding: 4px 8px;
  border: 1px solid #233e38;
  font-family: "Be Vietnam Pro", sans-serif;
}

/* 3. Nút Play tròn góc trái dưới */
.play-btn {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  cursor: pointer;
  transition: background 0.2s;
}

.card-thumbnail:hover img{
  transform: scale(1.1);
}

.card-thumbnail:hover .play-btn {
  background-color: #ff5636;
  border: none;
}

/* 4. Phần thông tin Text */
.card-info {
  padding: 8px 9px 17px;
  background-color: white;
  position: relative;
  font-family: "Bricolage Grotesque", sans-serif;

}

.card-info::after{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  height: 2.5px;
  width: 34px;
  background-color: #ff5636;
}

.card-info a {
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  color: #152321;
}

.card-info a:hover {
  color: #17594f;
  transition: 0.5s;
}

.game-meta {
  font-size: 7px;
  font-weight: 700;
  margin: 0;
  color: #888;
  display: flex;
  align-items: center;
  margin: 6px 0 0;
}

.video-count {
  color: #ff5636; /* Chữ màu cam cho số video */
}

/* 5. Dải băng FEATURED cắt chéo góc */
.featured-ribbon {
  position: absolute;
  bottom: 18px; /* Cách đáy lên 1 chút */
  right: -18px; /* Kéo lệch sang phải để cắt chéo */
  background-color: #ff5636;
  color: black;
  font-size: 6px;
  font-weight: 800;
  letter-spacing: 0.5px;
  padding: 4px 25px;
  transform: rotate(-45deg); /* Xoay nghiêng 45 độ */
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: "Be Vietnam Pro", sans-serif;
}

/* Màn hình nhỏ thì cuộn ngang */
@media (max-width: 1024px) {
  .body-recommendation {
    display: flex;
    overflow-x: auto;
    padding-bottom: 10px;
  }
  .game-card {
    min-width: 220px;
  }
}
</style>

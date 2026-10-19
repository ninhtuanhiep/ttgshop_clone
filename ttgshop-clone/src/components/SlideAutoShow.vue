<script setup>
import DetailPopup from "./popups/DetailPopup.vue";
import { ShoppingCart } from "@lucide/vue";
// Import Component của Swiper dành cho Vue
import { Swiper, SwiperSlide } from "swiper/vue";

// Import đầy đủ các tính năng mở rộng (auto, nút bấm)
import { Autoplay, Navigation } from "swiper/modules";
// 3. Import CSS chuẩn của Swiper
import "swiper/css";
import "swiper/css/navigation";
import { computed, defineProps, ref } from "vue";

const props =  defineProps({
  items:{
    type: Array,
    required:true,
    default: () => [],
  }
})

// Khai báo các module sẽ sử dụng
const modules = [Autoplay, Navigation];

const Items_With_Discount = computed(() => {
  return props.items.map((product) => {
    // Lấy giá gốc và giá khuyến mãi (bảo đảm định dạng số)
    const goc = Number(product.price);
    const sale = Number(product.price_khuyen_mai);

    let discountPercent = 0;

    // Kiểm tra nếu có giá gốc và có giảm giá thực sự
    if (goc > 0 && sale < goc) {
      // Công thức tính và làm tròn đến số nguyên (ví dụ: 20%)
      discountPercent = Math.round(((goc - sale) / goc) * 100);
    }

    // Trả về object sản phẩm cũ kèm theo thuộc tính phần trăm giảm giá mới
    return {
      ...product,
      discountPercent: discountPercent,
    };
  });
});

// Khai báo hàm format tiền
const formatPrice = (price) => {
  // Kiểm tra nếu không có giá thì trả về 0 hoặc chuỗi rỗng
  if (!price) return "0 VNĐ";
  return price.toLocaleString("vi-VN") + " VNĐ";
};

// biến lưu ID của sản phẩm đang được hover
const HoveredId = ref(null);

// Biến lưu tọa độ X, Y của chuột
const mouseX = ref(0);
const mouseY = ref(0);

// Hàm cập nhật tọa độ liên tục khi chuột di chuyển
const handleMouseMove = (event) => {
  mouseX.value = event.clientX; // Tọa độ ngang của trình duyệt
  mouseY.value = event.clientY; // Tọa độ dọc của trình duyệt
};
</script>

<template>
  <div class="slides-auto-show">
    <div class="collection-item">
      <Swiper
        :modules="modules"
        :slides-per-view="5"
        :rewind="true"
        :speed="800"
        :space-between="10"
        :navigation="true"
        :prevent-interaction-on-transition="false"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
      >
        <!-- Sử dụng thẻ <swiper-slide> bọc từng ảnh -->
        <SwiperSlide
          class="collection-slides"
          v-for="(item, index) in Items_With_Discount"
          :key="item.id"
        >
          <div
            class="collection-thumnail"
            @mouseenter="HoveredId = item.id"
            @mouseleave="HoveredId = null"
            @mousemove="handleMouseMove"
          >
            <img :src="item.img" alt="" />
            <span class="pcdeltaforce" v-if="item.delta_force === true"></span>

            <Teleport to="body">
              <div
                v-if="HoveredId === item.id"
                class="mouse-popup"
                :style="{ top: mouseY + -300 + 'px', left: mouseX + 15 + 'px' }"
                style="
                  position: fixed;
                  pointer-events: none;
                  transition:
                    top 0.05s linear,
                    left 0.05s linear;
                  z-index: 999;
                "
              >
                <DetailPopup
                  :title="item.title"
                  :price="formatPrice(item.price)"
                  :bao_hanh="item.bao_hanh"
                  :mo_ta="item.mo_ta"
                  :khuyen_mai="item.khuyen_mai"
                />
              </div>
            </Teleport>
          </div>

          <div class="collection-info">
            <a href="">
              <h3>
                {{ item.title }}
              </h3>
            </a>

            <div class="price">
              <div>
                <span>{{ formatPrice(item.price_khuyen_mai) }}</span>
                <span>{{ formatPrice(item.price) }}</span>
              </div>
              <span>-{{ item.discountPercent }}%</span>
            </div>

            <div class="info-bottom">
              <p>
                <span>
                  <ShoppingCart :size="14" color="white" />
                </span>
                Thêm vào giỏ
              </p>
              <span class="con-hang" v-if="item.so_luong > 0"> Còn hàng </span>
              <span class="het-hang" v-else> Hết hàng </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

:deep(.swiper-wrapper) {
  transition-timing-function: ease-in-out !important;
}

/* Tạo hình tròn và căn giữa mũi tên cho cả nút Next và Prev */

:deep(.swiper-button-prev) {
  transform: scale(1);
  color: black;
  background: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 0 30px 30px 0;
  left: -10px;
}

:deep(.swiper-button-next) {
  transform: scale(1);
  color: black;
  background: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 30px 0 0 30px;
  right: -10px;
}

/* Container của mỗi sản phẩm */
.collection-slides {
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #e5e7eb; /* Viền xám nhạt */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); /* Đổ bóng nhẹ */
  padding: 10px 10px 12px;
  font-family: "Inter", sans-serif;
}

.collection-slides:hover img {
  transform: translate(0, -20px);
}

.collection-slides:hover h3 {
  color: #ff5636;
}

/* Vùng chứa hình ảnh */
.collection-thumnail {
  position: relative;
  width: 100%;
  /* Giữ ảnh vuông vắn, có thể chỉnh tuỳ tỉ lệ ảnh thực tế */
  aspect-ratio: 1 / 1; 
  overflow: hidden;
  border-radius: 10px;
  /* Căn giữa hình ảnh bên trong nếu ảnh bị nhỏ */
  display: flex;
  align-items: center;
  justify-content: center;
}

.collection-thumnail img {
  width: 100%;
  object-fit: cover;
  display: block;
  transition: all 0.3s ease-in-out;
}

.pcdeltaforce {
  background: url(src/assets/img/dung_chung/khung-pc-delta-force_pc.png)
    no-repeat bottom center;
  width: 100%;
  aspect-ratio: 1 / 1;
  position: absolute;
  z-index: 10;
  left: 0;
  bottom: 0;
  background-size: contain;
  height: 40%;
}

/* Vùng chứa thông tin sản phẩm */
.collection-info {
  padding: 5px 0 0 0;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.collection-info a {
  text-decoration: none;
  color: inherit;
}

/* Tên sản phẩm */
.collection-info h3 {
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  margin: 0 0 12px 0;
  line-height: 1.4;

  /* Giới hạn hiển thị 2 dòng, phần thừa sẽ thành dấu "..." */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Khu vực giá cả */
.price {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 16px;
}

.price > div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Giá hiện tại (Màu đỏ, in đậm) - Giả định giá khuyến mãi nằm trên */
.price > div > span:nth-child(1) {
  color: #e30019; /* Đỏ đặc trưng */
  font-size: 16px;
  font-weight: 700;
}

/* Giá cũ (Màu xám, gạch ngang) */
.price > div > span:nth-child(2) {
  color: #9ca3af;
  font-size: 13px;
  text-decoration: line-through;
}

/* Nhãn phần trăm giảm giá */
.price > span {
  background-color: #e30019;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  height: fit-content;
}

/* Khu vực Nút giỏ hàng & Trạng thái */
.info-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto; /* Đẩy khối này xuống đáy thẻ */
}

/* Nút Thêm vào giỏ */
.info-bottom p {
  display: flex;
  align-items: center;
  gap: 13px;
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  color: #111827;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
}

.info-bottom p::after {
  position: absolute;
  content: "";
  top: -7px;
  left: -7px;
  width: 28px;
  height: 28px;
  background-color: #1e3a8a;
  border-radius: 50px;
  z-index: -1;
  transition: all 0.5s ease;
}

.info-bottom p:hover::after {
  width: 129px;
}

.info-bottom p:hover {
  color: var(--vt-c-white);
}

/* Nhãn Còn hàng / Hết hàng */
.con-hang,
.het-hang {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 9999px; /* Bo tròn hoàn toàn */
}

.con-hang {
  background-color: #d1fae5;
  color: #059669;
}

.het-hang {
  background-color: #fee2e2;
  color: #dc2626;
}
</style>

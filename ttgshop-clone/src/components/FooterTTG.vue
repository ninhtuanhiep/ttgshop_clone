<script setup>
import { MapPin, Phone, Mail, Map } from "@lucide/vue";
</script>

<template>
  <div class="footer">
    <div class="footer-top">
      <h2 class="title">HỆ THỐNG SHOWROOM TTG</h2>

      <div class="content">
        <!-- Khu vực Hà Nội -->
        <div class="showroom-col">
          <div class="showroom-header">
            <h3>SHOWROOM HÀ NỘI</h3>
          </div>
          <ul>
            <li>
              <MapPin :size="15" /> Địa chỉ: 83 - 85 Thái Hà - Đống Đa - HN
            </li>
            <li>
              <Phone :size="15" /> Số điện thoại: <a href="#">088.697.6868</a> -
              <a href="#"> 087.997.9997</a>
            </li>
            <li>
              <Mail :size="15" /> Email:
              <a href="#">theloc93.neu@gmail.com</a>
            </li>
            <li>
              <Map :size="15" />
              <a
                href="https://maps.app.goo.gl/sMZz3TRcVbgKUmba7"
                target="_blank"
                >Xem bản đồ đường đi</a
              >
            </li>
          </ul>
        </div>

        <!-- Khu vực Hồ Chí Minh -->
        <div class="showroom-col">
          <div class="showroom-header">
            <h3>SHOWROOM TP. HỒ CHÍ MINH</h3>
          </div>
          <ul>
            <li>
              <MapPin :size="15" /> Địa chỉ: 83A Cửu Long - Phường 15 - Q10 -
              TP.HCM
            </li>
            <li>
              <Phone :size="15" /> Số điện thoại: <a href="#">088.697.6868</a> -
              <a href="#"> 087.997.9997</a>
            </li>
            <li>
              <Mail :size="15" /> Email:
              <a href="#">theloc93.neu@gmail.com</a>
            </li>
            <li>
              <Map :size="15" />
              <a
                href="https://maps.app.goo.gl/sMZz3TRcVbgKUmba7"
                target="_blank"
                >Xem bản đồ đường đi</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-middle">
      <div class="footer-logo">
        <img src="@/assets/img/logo/logo_ttgshop.png" alt="TTG Shop Logo" />
      </div>

      <div class="footer-columns">
        <div class="footer-col">
          <h4>Về TTG SHOP</h4>
          <p>
            TTG SHOP là đơn vị chuyên cung cấp PC GAMING, PC ĐỒ HỌA, PC Đẹp và
            các sản phẩm linh kiện máy tính giá tốt.
          </p>
        </div>

        <div class="footer-col">
          <h4>Thông tin liên hệ</h4>
          <ul>
            <li>
              <MapPin :size="16" /> CS1: Số 83 - 85 Thái Hà - Đống Đa - HN
            </li>
            <li>
              <MapPin :size="16" /> CS2: Số 83A Cửu Long - Phường 15 - Q10 -
              TP.HCM
            </li>
            <li><Phone :size="16" /> <a href="#">088.697.6868</a></li>
            <li><Mail :size="16" /><a href="#">theloc93.neu@gmail.com</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Tài khoản ngân hàng</h4>
          <ul>
            <li><a href="#">Tài khoản ngân hàng</a></li>
            <li><a href="#">Tìm kiếm phương thức thanh toán</a></li>
          </ul>
          <img
            class="bct-img"
            src="@/assets/img/dung_chung/ttgshop-bct-1.png"
            alt="Đã thông báo bộ công thương"
          />
        </div>

        <div class="footer-col">
          <h4>Chính sách</h4>
          <ul>
            <li><a href="#">Chính Sách Bảo Mật</a></li>
            <li><a href="#">Quy Định Bảo Hành</a></li>
            <li><a href="#">Chính Sách Đổi Trả</a></li>
            <li><a href="#">Điều khoản sử dụng</a></li>
            <li><a href="#">Chính sách vận chuyển & kiểm hàng</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>CÔNG TY TNHH ĐẦU TƯ VÀ THƯƠNG MẠI PCM</p>
      <p>
        Giấy phép Chứng nhận đăng ký doanh nghiệp số: 0110441021 do Sở Kế hoạch
        và đầu tư thành phố Hà Nội (Nay là Sở Tài chính thành phố Hà Nội) cấp
        lần đầu ngày: 07/08/2023; thay đổi lần thứ nhất ngày: 05/07/2024
      </p>
      <p>
        Trụ sở: Số 83-85 Thái Hà, Phường Trung Liệt, Quận Đống Đa, Thành phố Hà
        Nội, Việt Nam
      </p>
      <p>Copyright ©2025</p>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

.footer-top {
  width: 100%;
  min-height: 271px;
  margin: 0 auto;
  background-color: #002222;
  font-family: "Inter", sans-serif;
  color: #ffffff;
  padding: 24px 0;
  border-radius: 8px 8px 0 0;
}

.title {
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  font-size: 24px;
}

.content {
  margin: 0 120px;
  display: flex;
  gap: 30px; /* Tạo khoảng cách giữa 2 cột */
}

.showroom-col {
  flex: 1; /* Chia đều 50/50 cho 2 cột */
}

/* ================= STYLE CHO THANH TIÊU ĐỀ SHOWROOM ================= */
.showroom-header {
  position: relative;
  background: linear-gradient(
    180deg,
    #3f4e41 0%,
    #1a2a24 100%
  ); /* Nền gradient xanh rêu */
  border: 1px solid #ff7a00;
  border-radius: 8px;
  padding: 12px 0;
  text-align: center;
  margin-bottom: 24px;
  overflow: hidden;
}

.showroom-header h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  font-size: 14px;
  margin-bottom: 5px; /* Giãn cách các dòng thông tin */
}

ul li:last-child {
  margin-bottom: 0;
}

ul li a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s;
}

ul li a:hover {
  color: #ff7a00; /* Hover vào đổi sang màu cam */
}
/* -------------------------- footer-middle--------------------- */
.footer-middle {
  font-family: "Inter", sans-serif;
  color: black;
  background-color: #ffffff;
  padding-bottom: 40px;
}

.footer-logo {
  margin: 10px 120px;
}

.footer-logo img {
  height: 50px;
  width: auto;
}

/* 2. Phần dàn cột (Flexbox) */
.footer-columns {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 120px;
  gap: 30px;
}

/* 3. Tinh chỉnh từng cột */
.footer-col {
  flex: 1; /* Chia đều không gian cho 4 cột (mỗi cột 25%) */
}

.footer-col h4 {
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 16px 0; /* Khoảng cách từ tiêu đề xuống nội dung */
  color: #000000;
}

.footer-col p {
  font-size: 13px;
  line-height: 1.6;
  color: #374151; /* Màu xám đậm dễ đọc */
  margin: 0;
}

/* 4. Xử lý danh sách (ul, li) */
.footer-col ul {
  list-style: none; /* Bỏ dấu chấm đen mặc định của danh sách */
  padding: 0;
  margin: 0;
}

.footer-col ul li {
  display: flex;
  align-items: flex-start;
  /* Căn mép trên phòng trường hợp địa chỉ dài bị rớt dòng */
  gap: 10px; /* Khoảng cách giữa icon và chữ */
  font-size: 13px;
  margin-bottom: 10px;
  color: black;
}

/* Xóa khoảng cách ở thẻ li cuối cùng */
.footer-col ul li:last-child {
  margin-bottom: 0;
}

/* Tinh chỉnh Icon */
.footer-col ul li svg {
  flex-shrink: 0;
  /* Giữ icon không bị méo khi chữ xuống dòng */
  margin-top: 2px;
  /* Đẩy icon xuống một chút để cân bằng với chữ */
}

/* 5. Tinh chỉnh thẻ <a> */
.footer-col ul li a {
  color: black;
  text-decoration: none; /* Bỏ gạch chân mặc định */
  transition: color 0.2s ease;
}

/* Hiệu ứng hover khi chỉ chuột vào Link */
.footer-col ul li a:hover {
  color: #ff5636; /* Màu cam chủ đạo */
}

/* 6. Logo Bộ Công Thương */
.bct-img {
  margin-top: 16px;
  width: 140px; /* Chỉnh kích thước logo BCT cho vừa vặn */
  height: auto;
}
/* ---------------------------- footer bottom ----------------------------- */
.footer-bottom {
  text-align: center;
  padding: 10px;
  background-color: #dbdbdb;
  font-size: 12px;
  font-family: "Inter", sans-serif;
}
.footer-bottom p{
    margin-bottom: 5px;
    color: rgba(76,76,76);
}
</style>

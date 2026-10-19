<script setup>
import {
  MapPinned,
  Phone,
  Gamepad,
  Search,
  MonitorCog,
  ShoppingCart,
  Menu,
  MonitorPc,
  LaptopMinimal,
  Computer,
} from "@lucide/vue";
import HeaderShowRoomPopup from "@/components/popups/HeaderShowRoomPopup.vue";
import HeaderSellOnlinePopup from "./popups/HeaderSellOnlinePopup.vue";
import HeaderMegaMenu from "./popups/HeaderMegaMenu.vue";
import { categoriesData } from "@/data/danhmuc.js";
</script>

<template>
  <div class="header">
    <div class="header-top">
      <div class="container">
        <div class="header-top_nav">
          <div class="HeaderShowRoom">
            <p class="top-nav-link">
              <MapPinned :size="16" />
              Hệ thống showroom
            </p>
            <div class="HeaderShowRoomPopup">
              <HeaderShowRoomPopup />
            </div>
          </div>
          <div class="HeaderSellOnline">
            <p class="top-nav-link">
              <Phone :size="16" />
              Bán hàng trực tuyến
            </p>
            <div class="HeaderSellOnlinePopup">
              <HeaderSellOnlinePopup />
            </div>
          </div>

          <a href="#">Trang tin công nghệ</a>
          <p class="top-nav-link">
            <Gamepad :size="16" />
            TƯ VẤN BUILD PC
          </p>
          <a href="#">Phần mềm hay</a>
        </div>
        <div style="display: flex; align-items: center; gap: 12px">
          <a href="#">Đăng ký</a>
          <line style="color: var(--vt-c-white)">|</line>
          <a href="#">Đăng nhập</a>
        </div>
      </div>
    </div>
    <div class="header-middle">
      <div class="container-middle">
        <div class="header-middle-content" style="margin: 8px 0 20px">
          <a href="" class="header-logo">
            <img src="../assets/img/logo/logo_ttgshop.png" alt="" />
          </a>
          <div class="header-search">
            <form action="">
              <select class="danh-muc">
                <option value="">Tất cả danh mục</option>
                <option value="" v-for="item in categoriesData" :key="item.id">
                  {{ item.name }}
                </option>
              </select>
              <input
                class="search"
                type="search"
                placeholder="Tìm kiếm sản phẩm..."
              />
              <button class="btn-search">
                <Search :size="16" style="color: white" />
              </button>
            </form>
            <ul class="search-tag">
              <li><a href="">PC Gaming</a></li>
              <li><a href="">Linh kiện máy tính</a></li>
              <li><a href="">Màn hình</a></li>
            </ul>
          </div>
          <div class="header-noi_bat">
            <a href="" class="group-featured">
              <span class="header-circle-icon" style="margin-left: -18px">
                <Phone :size="20" class="icon" />
              </span>
              <span class="font-medium"> Hotline mua hàng 088.697.6868 </span>
            </a>
            <a href="" class="group-featured">
              <span class="header-circle-icon">
                <MonitorCog :size="20" class="icon" />
              </span>
              <span class="font-medium"> Xây dựng Cấu hình PC </span>
            </a>
            <a href="" class="group-featured">
              <span class="header-circle-icon">
                <ShoppingCart :size="20" class="icon" />
              </span>
              <span class="font-medium"> Giỏ hàng </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container-bottom">
        <div class="header-bottom-content">
          <div class="header-bottom-nav">
            <div class="mega-menu-wrapper" style="position: relative">
              <button class="header-btn-nav-bottom">
                <Menu :size="16" />
                <span style="font-size: 13px; font-weight: 600"
                  >DANH MỤC SẢN PHẨM</span
                >
              </button>
              <div class="headerMegaMenu">
                <HeaderMegaMenu />
              </div>
            </div>

            <a href=""
              ><span><MonitorPc :size="16" color="black" /></span>PC GAMING</a
            >
            <a href=""
              ><span><MonitorCog :size="16" color="black" /></span>PC
              WORKSTATION 2D 3D</a
            >
            <a href=""
              ><span><MonitorPc :size="16" color="black" /></span>PC AMD</a
            >
            <a href=""
              ><span><LaptopMinimal :size="16" color="black" /></span>PC MINI</a
            >
            <a href=""
              ><span><Computer :size="16" color="black" /></span>PC VĂN PHÒNG</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: auto;
  background-color: var(--vt-c-white);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}
/*--------------------------------------------------- Header top ---------------------------------------------- */
.header-top {
  display: flex;
  align-items: center;
  background-color: var(--vt-c-black);
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  font-size: 13px;
  font-family: sans-serif;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  max-width: 1280px;
  margin: 0 auto;
  font-weight: 500;
  padding: 0 15px;
}
.header-top_nav {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 44px;
}

a {
  text-decoration: none;
  color: var(--vt-c-white);
}

.container a:hover {
  color: rgb(255, 119, 0);
  transition: 0.5s;
}
.top-nav-link {
  color: var(--vt-c-white);
  display: flex;
  align-items: center;
  gap: 4px;
  height: 28px;
  padding: 8px 16px;
  background-color: #00707c;
  border-radius: 20px;
  position: relative; /* Để vệt sáng chạy bên trong nút này */
  overflow: hidden; /* Cắt bỏ phần vệt sáng khi nó chạy ra ngoài viền nút */
  cursor: pointer;
}

.top-nav-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: -20px;
  /* Tạo ra tia scan mỏng và sáng sắc nét */
  width: 4px; /* Độ mỏng của tia scan */
  height: 100%;
  background-color: #0fc2d6; /* Tia màu trắng đục */
  box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.6); /* Hiệu ứng tỏa sáng xung quanh tia */
  animation: scan-action 2.5s infinite; /* Chạy liên tục */
}

/* 3. Kịch bản chuyển động của vệt sáng */
@keyframes scan-action {
  0% {
    left: -20%; /* Bắt đầu từ ngoài mép trái */
  }
  90%,
  100% {
    left: 120%; /* Chạy lố qua mép phải. Dừng ở 90% để tạo nhịp nghỉ giữa các lần quét */
  }
}

.HeaderShowRoom,
.HeaderSellOnline {
  position: relative;
}

.HeaderShowRoom::after,
.HeaderSellOnline::after {
  content: "";
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: -10px;
  height: 20px;
}

.HeaderShowRoomPopup,
.HeaderSellOnlinePopup {
  display: none;
  position: fixed;
  top: 7%;
  left: 5%;
  z-index: 999;
}

.HeaderShowRoom:hover .HeaderShowRoomPopup {
  display: block;
}

.HeaderSellOnline:hover .HeaderSellOnlinePopup {
  display: block;
}
/* -----------------------------------Header middle ----------------------------------------------------- */
.header-middle {
  width: 100%;
}
.container-middle {
  min-height: 60px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 10px;
  gap: 24px;
}

.header-middle-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo img {
  max-height: 60px; /* Hoặc nhập thẳng 60px. Ép ảnh không được cao hơn thẻ cha */
  width: auto; /* Chiều rộng tự co lại theo đúng tỷ lệ gốc, không bị méo */
  display: block;
}

.header-search {
  position: relative;
  max-width: 455px;
}

.danh-muc {
  width: 140px;
  height: 38px;
  border: none;
  padding: 0 0 0 10px;
  background: none;
  outline: none;
  position: absolute;
}

.search {
  width: 455px;
  height: 38px;
  border-radius: 8px;
  border: 2px solid #dbe0e0;
  padding: 8px 60px 8px 150px;
  outline: none;
}
.search:focus {
  border-color: rgb(251, 95, 5);
}

.btn-search {
  width: 50px;
  height: 38px;
  border: 1px solid #ff5636;
  border-radius: 8px;
  background-color: #ff5636;
  transform: translate(-50px);
  position: absolute;
}

.search-tag {
  list-style: none;
  display: flex;
  gap: 10px;
  padding: 3px 0 0;
  width: 260px;
  position: absolute;
}

.search-tag a {
  color: var(--vt-c-divider-dark-1);
  font-size: 13px;
  font-family: sans-serif;
}

.search-tag a:hover {
  color: rgb(255, 119, 0);
  transition: 0.5s;
}
/* --------------- phần header nổi bật thuộc header middle ---------------------------- */
.header-noi_bat {
  display: flex;
  gap: 10px;
  background-color: #f0f0f0;
  border-radius: 23px;
  padding: 6px 20px 6px 0;
}
.group-featured {
  display: flex;
  align-items: center;
  gap: 5px;
}

.header-circle-icon {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #0fc2d6;
  border-radius: 50%;
  background-color: var(--vt-c-white);
}

.icon {
  color: black;
}

.font-medium {
  color: black;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 100px;
}
.group-featured:hover .font-medium {
  color: #ff5636;
}

.group-featured:hover .header-circle-icon {
  background-color: #ff5636;
  border: none;
  transition: 0.5s;
}

.group-featured:hover .icon {
  color: var(--vt-c-white);
}

/* ------------------------------ header bottom----------------------------- */
.header-bottom {
  width: 100%;
  height: auto;
  padding: 0 0 12px;
}

.container-bottom {
  height: auto;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 10px;
}

.header-btn-nav-bottom {
  background-color: black;
  color: var(--vt-c-white);
  display: flex;
  gap: 5px;
  border: 1px solid;
  border-radius: 5px;
  padding: 6px 10px 6px 8px;
  font-family: sans-serif;
}

.header-btn-nav-bottom {
  position: relative;
}

.header-btn-nav-bottom::after {
  content: "";
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: -20px;
  height: 20px;
}

.header-bottom-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-bottom-nav a {
  color: black;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: Arial, Helvetica, sans-serif;
}

.header-bottom-nav a > span {
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #e8f7ff;
  border-radius: 50%;
}

.header-bottom-nav a:hover {
  color: #fb431e;
  transition: 0.5s;
}

.headerMegaMenu {
  display: none;
  position: absolute;
  top: 100%;
  left: -21%;
  z-index: 999;
}

.mega-menu-wrapper:hover .headerMegaMenu {
  display: block;
}
</style>

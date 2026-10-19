<script setup>
import { categoriesData } from "@/data/danhmuc.js";
import { ChevronRight } from "@lucide/vue";
</script>

<template>
  <div class="navbar-list">
    <ul class="menu">
      <li v-for="item in categoriesData" :key="item.id" class="menu-item">
        <div class="menu-title">
          <a class="menu-title-nav" href="#"
            ><span style="font-size: 14px">
              {{ item.name }}
            </span>
            <span v-if="item.subCategories?.length > 0">
              <ChevronRight :size="14" />
            </span>
          </a>
        </div>

        <!-- Khung chứa Subnav dạng Mega Menu -->
        <div v-if="item.subCategories?.length > 0" class="subnav-mega">
          <div
            v-for="sub in item.subCategories"
            :key="sub.id"
            class="subnav-column"
          >
            <!-- 1. TIÊU ĐỀ SUBCATEGORY (Highlight màu đỏ/cam tại đây) -->
            <a href="#" class="subcategory-title">{{ sub.name }}</a>
            <!-- 2. DANH SÁCH CON BÊN DƯỚI -->
            <ul v-if="sub.children?.length > 0" class="child-list">
              <li v-for="child in sub.children" :key="child.id">
                <a href="">{{ child.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu {
  list-style: none;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
}

.menu-title {
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(245, 239, 239);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

.menu-item {
  position: static;
}

.menu-title-nav {
  text-decoration: none;
  width: 240px;
  height: 40px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
}

.menu-title-nav:hover{
  background-color:#ff4d4f;
  color: var(--vt-c-white);
}

/* Khung chứa các nhóm subcategory */
.subnav-mega {
  position: absolute;
  top: 0%;
  left: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Chia thành 3 cột như trong ảnh */
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: none;
  width: 960px;
  min-height: 100%;
  /* THÊM DÒNG NÀY ĐỂ FIX LỖI DÃN DÒNG */
  align-content: start;
}

.menu-item:hover .subnav-mega{
  display: grid;
}

/* Cột chứa từng Subcategory */
.subnav-column {
  display: flex;
  flex-direction: column;
}

/* HIGHLIGHT TIÊU ĐỀ SUBCATEGORY (CPU, Mainboard, RAM...) */
.subcategory-title {
  color: #ff4d4f; /* Màu đỏ / cam highlight */
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
}

.subcategory-title:hover {
  text-decoration:underline;
}

/* Danh sách con bên dưới tiêu đề */
.child-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.child-list li {
  margin-bottom: 8px;
}

.child-list a {
  color: #333;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: color 0.2s;
}

.child-list a:hover {
  color: #ff4d4f;
}
</style>

<script setup>
import {
  Map,
  Phone,
  MapPin,
  RotateCcwClock,
  MessageSquareMore,
} from "@lucide/vue";
</script>

<template>
  <div class="header-top-list">
    <div class="warper">
      <p>
        <span class="header-number">01</span>
        BÁN HÀNG ONLINE
      </p>
      <a href="#">
        <MessageSquareMore :size="16" style="color: #31c6fe" />
        <span class="zalo">Zalo</span>
        <span>036.625.8142 - Mr.Đình Lâm</span>
      </a>
      <a href="#">
        <MessageSquareMore :size="16" style="color: #31c6fe" />
        <span class="zalo">Zalo</span>
        <span>0348.635.217 - Mr.Thành</span>
      </a>
      <a href="#">
        <MessageSquareMore :size="16" style="color: #31c6fe" />
        <span class="zalo">Zalo</span>
        <span>088.697.6868 - Mr.Lộc</span>
      </a>
      <a href="#">
        <MessageSquareMore :size="16" style="color: #31c6fe" />
        <span class="zalo">Zalo</span>
        <span> 0941.553.086 - Mr.Kiên</span>
      </a>
      <a href="#">
        <MessageSquareMore :size="16" style="color: #31c6fe" />
        <span class="zalo">Zalo</span>
        <span> 0814.700.384 - Mr.Linh</span>
      </a>
      <a href="#">
        <MessageSquareMore :size="16" style="color: #31c6fe" />
        <span class="zalo">Zalo</span>
        <span> 0392.913.168 - Mr.Trung Anh </span>
      </a>
      <a href="#">
        <MessageSquareMore :size="16" style="color: #31c6fe" />
        <span class="zalo">Zalo</span>
        <span> 0367.799.146 - Mr.Đức </span>
      </a>
      <a href="#">
        <MessageSquareMore :size="16" style="color: #31c6fe" />
        <span class="zalo">Zalo</span>
        <span>098.668.0497 - Mr.Đông</span>
      </a>
    </div>
    <div class="warper">
      <p>
        <span class="header-number">02</span>
        HỖ TRỢ BẢO HÀNH
      </p>
      <a href="#">
        <MessageSquareMore :size="16" style="color: #31c6fe" />
        <span class="zalo">Zalo</span>
        <span>
          <span>CHI NHÁNH HN:</span>
          032.6694.168 - Mr.Tuấn
        </span>
      </a>
      <a href="#">
        <MessageSquareMore :size="16" style="color: #31c6fe" />
        <span class="zalo">Zalo</span>
        <span>
          <span>CHI NHÁNH HCM:</span>
          088.697.6868 - Mr.Lộc
        </span>
      </a>
      <!--  -->
      <p style="margin: 10px 0  ;">
        <span class="header-number">03</span>
        HỖ TRỢ TRỢ KĨ THUẬT
      </p>
      <a href="#">
        <MessageSquareMore :size="16" style="color: #31c6fe" />
        <span class="zalo">Zalo</span>
        <span>
          <span>HỖ TRỢ KĨ THUẬT ONLINE</span>
          032.6694.168 - Mr.Tuấn
        </span>
      </a>
      <!--  -->
      <p style="margin: 10px 0 ;">
        <span class="header-number">04</span>
        ĐƯỜNG DÂY PHẢN ÁNH DỊCH VỤ
      </p>
      <a href="#">
        <MessageSquareMore :size="16" style="color: #31c6fe" />
        <span class="zalo">Zalo</span>
        <span> 088.697.6868 - Mr.Lộc </span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.header-top-list {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: auto;
  background-color: #f1f1f1;
  padding: 20px 20px 0;
}

.warper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 575px;
  height: auto;
  margin: 0 0 20px;
  font-size: 14px;
  font-family: sans-serif;
}

.warper a {
  display: flex;
  align-items: center;
  gap: 10px;
  /* margin: 3px 0 0; */
  text-decoration: none;
  color: var(--vt-c-black);
}

.warper a:hover {
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

.warper .header-number {
  display: inline-block;
  background-color: #eb1f27;
  margin: 0 13px 0 0;
  padding: 0px 8px;
  font-weight: 600;
}

.zalo {
  color: #31c6fe;
}
</style>

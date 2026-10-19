<script setup>
import { IconTruckDelivery, IconPackageImport } from "@tabler/icons-vue";
import { CreditCardCheck, Headset, Plus, Minus } from "@lucide/vue";
import { ref } from "vue";

const questions = [
  {
    title: "1. Liên hệ chăm sóc khách hàng dễ dàng",
    content: `
      <p>Bạn đang cần hỗ trợ hay cần đóng góp ý kiến cho TTG SHOP trong quá trình mua hàng. Hãy liên hệ với TTG SHOP trong bất cứ khi nào 24/07 qua số Hotline hoặc dịch vụ Chat trực tuyến miễn phí. TTG SHOP sẽ cung cấp giải pháp hỗ trợ quý khách các vần đề liên quan đến sản phẩm mua hàng tại TTG SHOP của bạn nhanh nhất có thể</p>
      <br>
      <p>Hotline chăm sóc và hỗ trợ khách mua hàng (chỉ hoạt động trong giờ hành chính): 0986552233</p>
      <br>
      <p>Ngoài ra khách hàng có thể liên hệ với TTG SHOP thông qua rất nhiều kênh khác nhau như: Email, Chat, Để lại đánh giá, bình luận ở các kênh mạng xã hội của TTG SHOP.</p>
      <br>
      <p>Fanpage: <a href="https://www.facebook.com/ttgshopvn">https://www.facebook.com/ttgshopvn</a> </p>
    `,
  },
  {
    title: "2. Giao hàng nhanh trong 2 giờ mà không thu thêm phí",
    content: `
      <p>TTG SHOP hiểu rằng khách hàng khi đặt mua các sản phẩm của TTG SHOP trên các nền tảng thương mại đều mong muốn nhận được hàng của mình nhanh nhất có thể, vì thế TTG SHOP với đội ngũ kỹ thuật viên giao hàng chuyên hợp tác với các đơn vị vận chuyển hàng đầu đáp ứng các yêu cầu sau:</p>
      <br>
      <p>+ Cam kết giao hàng nhanh trong vòng 2 giờ đến tay khách hàng (kể từ khi giao dịch được hoàn thành) trong khu vực nội thành TP.Hà Nội và Tp.Hồ Chí Minh mà không thu thêm bất kỳ một khoản phí nào.</p>
      <br>
      <p>+ Cam kết đóng hàng (theo chuẩn đóng gói linh kiện điện tử của các trang TMDT) và gửi hàng đến các đơn vị vận chuyển trên thành phố Hà Nội chỉ trong vòng 2 giờ, kể từ khi đơn hàng được kích hoạt trạng thái sẵn sàng giao trên các trang TMDT.</p>
    `,
  },
  {
    title: "3. Miễn phí lên đời và trải nghiệm sản phẩm trong vòng 15 ngày",
    content: `
      <p>Đây chắc chắn là một độc quyền chỉ có TTG SHOP đem đến cho các khách hàng của mình, TTG SHOPcam kết cho khách hàng được trải nghiệm và miễn phí sản phẩm lên đời trong vòng 15 ngày (tính từ ngày kích hoạt sản phẩm)</p>
      <br>
      <p>Ví dụ: khi khách hàng mua 1 sản phẩm GPU tại TTG SHOP nhưng sử dụng không đáp ứng được thông số kỳ vọng sẽ được TTG SHOP hỗ trợ thu mua bằng giá khi xuất hoá đơn cho khách hàng và hỗ trợ khách hàng nâng cấp đời cao hơn.</p>
    `,
  },
  {
    title:
      "4. Cam kết thu cũ đổi mới trọn đời với tất cả các sản phẩm Gaming Gear và linh kiện",
    content: `
      <p>TTG SHOP luôn muốn khách hàng của mình được trải nghiệm những sản phẩm công nghệ mới nhất trên thị trường và muốn được đồng hành khách hàng, hỗ trợ khách hàng trọn đời sản phẩm khi mua hàng tại TTG SHOP.</p>
      <br>
      <p>Vì vậy TTG SHOP cam kết thu cũ các sản phẩm của quý khách hàng với giá tốt và hỗ trợ nâng đời mới cho khách hàng với các sản phẩm Linh kiện máy tính.</p>
    `,
  },
  {
    title:
      "5. Cho mượn sản phẩm miễn phí thay thế trong thời gian bảo hành tại TTG SHOP",
    content: `
      <p>Đối với các khách hàng khi bảo hành sản phẩm tại TTG SHOP, sẽ được cửa hàng cung cấp cho mượn miễn phí sản phẩm tương đương trong thời gian bảo hành sản phẩm (Áp dụng đối với tất cả các sản phẩm khi mua hàng tại TTG SHOP)</p>
    `,
  },
];

const questionIndex = ref(new Set());

const toggleItem = (index) => {
  if (questionIndex.value.has(index)) {
    questionIndex.value.delete(index);
  } else {
    questionIndex.value.add(index);
  }
};
</script>

<template>
  <div class="section-global-support">
    <div class="global-support-container">
      <ul class="feature-cards">
        <li>
          <IconTruckDelivery :size="40" color="#ff5636" stroke-width="1" />
          <h3>GIAO HÀNG TOÀN QUỐC</h3>
          <p>Giao hàng trước, trả tiền sau COD</p>
        </li>
        <li>
          <IconPackageImport :size="40" color="#ff5636" stroke-width="1" />
          <h3>ĐỔI TRẢ DỄ DÀNG</h3>
          <p>Đổi mới trong 30 ngày đầu</p>
        </li>
        <li>
          <CreditCardCheck :size="40" color="#ff5636" stroke-width="1" />
          <h3>THANH TOÁN TIỆN LỢI</h3>
          <p>Trả tiền mặt, chuyển khoản, trả góp 0%</p>
        </li>
        <li>
          <Headset :size="40" color="#ff5636" stroke-width="1" />
          <h3>HỖ TRỢ NHIỆT TÌNH</h3>
          <p>Tư vấn tổng đài miễn phí 24/7</p>
        </li>
      </ul>

      <div class="support-question">
        <div class="support-head">
          <h2>
            Trải nghiệm mua sắm tại
            <span class="shop-name">TTG SHOP</span>
            <br />
            <span class="shop-commit"
              >Cam kết 100% <span class="text-gradient">Hài Lòng</span></span
            >
          </h2>
        </div>

        <div class="support-body">
          <div
            class="question-item"
            v-for="(item, index) in questions"
            :key="index"
          >
            <!-- Tiêu đề -->
            <button class="question-header" @click="toggleItem(index)">
              {{ item.title }}
              <span class="icon">
                <Minus v-if="questionIndex.has(index)" />
                <Plus v-else />
              </span>
            </button>

            <!-- Nội dung -->
            <div v-show="questionIndex.has(index)" class="question-content">
              <div v-html="item.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.feature-cards {
  max-width: 1260px;
  min-height: 165px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin: 30px auto;
  padding: 28px 38px 28px 28px;
  transform: skewX(-10deg);
  font-family: "Inter", sans-serif;
  border-radius: 8px;
}

.feature-cards li {
  text-align: center;
  transform: skewX(10deg);
}
.feature-cards h3 {
  font-size: 15px;
  margin: 8px 0 4px;
  font-weight: 700;
}

.feature-cards p {
  font-size: 13px;
}

/* ------------------------support-question --------------------- */
.support-question {
  max-width: 1260px;
  margin: 32px auto;
  font-family: "Inter", sans-serif;
}

.support-head h2 {
  font-size: 20px;
  color: #111827;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
}
.shop-name {
  font-size: 20px;
  color: #ff5636;
  font-weight: 700;
}
.shop-commit {
  font-size: 32px;
  font-weight: 700;
}

.text-gradient {
  background-image: linear-gradient(172deg, #f9a900 25%, #ff6f00 75%);
  color: transparent;
  -webkit-background-clip: text; /* Cắt background theo hình chữ */
  background-clip: text;
  font-weight: 700;
}
/* ------------------------ support-body --------------------- */
.support-body {
  /* Khung bao ngoài cùng: Nền trắng, bo góc, viền mỏng */
  background-color: #ffffff;
  border: 1px solid #f3f4f6; 
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); 
  padding: 10px 30px; 
  margin-top: 30px;
}


.question-item {
  border-bottom: 1px solid #e5e7eb; 
}


.question-item:last-child {
  border-bottom: none;
}


.question-header {
  width: 100%;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  background: transparent;
  border: none;
  padding: 24px 0;
  font-size: 15px; 
  font-weight: 600; 
  color: #111827; 
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  transition: color 0.2s ease;
}


.question-header:hover {
  color: #ff5636; 
}


.question-header .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000; 
  flex-shrink: 0;
  margin-left: 20px;
}


.question-header .icon svg {
  width: 20px;
  height: 20px;
  stroke-width: 2.5; /* Làm nét icon dày lên một chút giống dấu cộng trong hình */
}

/* Phần nội dung câu trả lời xổ xuống */
.question-content {
  padding: 0 0 24px 0; 
  color: black; 
  font-size: 14px;
  line-height: 1.6;
}


.question-content :deep(p) {
  margin: 0 0 8px 0;
}


.question-content :deep(a) {
  color: #2563eb;
  text-decoration: none;
}

.question-content :deep(a:hover) {
  text-decoration: underline;
}
</style>

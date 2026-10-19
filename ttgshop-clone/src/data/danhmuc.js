export const categoriesData = [
  {
    id: 1,
    name: "PC GAMING",
    subCategories: [
      { id: 11, name: "PC GAMING GIÁ RẺ" },
      { id: 12, name: "PC STREAM GAME" },
      { id: 13, name: "PC GAMING PREMIUM" },
      { id: 14, name: "PC Core Ultra" },
      { id: 15, name: "PC GAMING CAO CẤP" },
      { id: 16, name: "PC ĐẸP" },
    ],
  },
  {
    id: 2,
    name: "PC WORKSTATION 2D 3D",
    subCategories: [
      { id: 21, name: "PC VIDEO EDITING" },
      { id: 22, name: "PC PHOTO EDITING" },
      { id: 23, name: "PC 3D DESIGN - Animation" },
      { id: 24, name: "PC RENDERING" },
      { id: 25, name: "PC Architecture - CAD" },
      { id: 26, name: "PC Machine Learning / AI" },
    ],
  },
  { id: 3, name: "PC AMD GAMING" },
  { id: 4, name: "PC MINI" },
  {
    id: 5,
    name: "PC VĂN PHÒNG",
    subCategories: [{ id: 51, name: "PC DOANH NGHIỆP WINDOWN BẢN QUYỀN" }],
  },
  { id: 6, name: "PC AI - TRÍ TUỆ NHÂN TẠO" },
  {
    id: 7,
    name: "Linh kiện máy tính",
    subCategories: [
      {
        id: 71,
        name: "CPU",
        children: [
          { id: 711, name: "CPU INTEL" },
          { id: 712, name: "CPU AMD" },
        ],
      },
      {
        id: 72,
        name: "Mainboard - Bo Mạch Chủ",
        children: [
          { id: 721, name: "Mainboard Cho CPU INTEL" },
          { id: 722, name: "Mainboard Cho CPU AMD" },
        ],
      },
      { id: 73, name: "RAM" },
      { id: 74, name: "GIÁ TREO MÀN HÌNH" },
      {
        id: 75,
        name: "Ổ Cứng (SSD, HDD)",
        children: [
          { id: 751, name: "Ổ Cứng SSD" },
          { id: 752, name: "Ổ Cứng HDD" },
        ],
      },
      {
        id: 76,
        name: "VGA - Card Màn Hình",
        children: [
          { id: 761, name: "VGA NVIDIA" },
          { id: 762, name: "VGA AMD" },
          { id: 763, name: "VGA Nvidia RTX 5000 Series" },
        ],
      },
      { id: 77, name: "Vỏ Case" },
      { id: 78, name: "Nguồn (PSU)" },
      {
        id: 79,
        name: "Tản Nhiệt",
        children: [
          { id: 791, name: "Tản Nhiệt Khí" },
          { id: 792, name: "Tản Nhiệt Nước AIO" },
          { id: 793, name: "QUạt Tản Nhiệt" },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Màn hình máy tính",
    subCategories: [
      {
        id: 81,
        name: "Màn Hình Theo Nhu Cầu",
        children: [
          { id: 811, name: "MÀN HÌNH GAMING" },
          { id: 812, name: "MÀN Hình Đồ Họa" },
          { id: 813, name: "MÀN Hình Văn Phòng" },
          { id: 814, name: "MÀN Hình Cong" },
        ],
      },
      {
        id: 82,
        name: "Màn Hình Theo Hãng",
        children: [
          { id: 821, name: "Màn Hình ASUS" },
          { id: 822, name: "Màn Hình MSI" },
          { id: 823, name: "Màn Hình Viewsonic" },
          { id: 824, name: "Màn Hình LG" },
          { id: 825, name: "Màn Hình SAMSUNG" },
          { id: 826, name: "Màn Hình DELL" },
          { id: 827, name: "Màn Hình Gigabyte" },
          { id: 828, name: "Màn Hình BenQ" },
          { id: 829, name: "Màn Hình AOC" },
          { id: 8210, name: "Màn Hình EDRA" },
          { id: 8211, name: "Màn Hình Dark Flash" },
          { id: 8212, name: "Màn Hình Acer" },
        ],
      },
      {
        id: 83,
        name: "Độ Phân Giải Màn Hình",
      },
      {
        id: 84,
        name: "Tần Số Quét Màn Hình",
      },
      {
        id: 85,
        name: "Màn Hình Theo Kích Thước",
      },
    ],
  },
  {
    id: 9,
    name: "Gaming Gear",
    subCategories: [
      { id: 91, name: "Thiết bị Stream" },
      { id: 92, name: "Bàn Phím" },
      { id: 93, name: "Chuột" },
      { id: 94, name: "tai Nghe Chơi Game" },
      { id: 95, name: "Tay Cầm Chơi Game" },
      { id: 96, name: "Ghế GAMING" },
      { id: 97, name: "Micro" },
      { id: 98, name: "Phụ Kiện" },
    ],
  },
  { id: 10, name: "Full bộ PC kèm màn hình" },
  { id: 11, name: "Loa máy tính" },
  { id: 12, name: "OnSale" },
  { id: 13, name: "PC GIẢ LẬP ẢO HÓA" },
  { id: 14, name: "CARD MẠNG KHÔNG DÂY" },
  {
    id: 15,
    name: "LAPTOP",
    subCategories: [
      {
        id: 151,
        name: "LAPTOP THEO HÃNG",
        children: [
          { id: 1511, name: "LAPTOP DELL" },
          { id: 1512, name: "LAPTOP ASUS" },
          { id: 1513, name: "LAPTOP HP" },
          { id: 1514, name: "LAPTOP MSI" },
          { id: 1515, name: "LAPTOP ACER" },
          { id: 1516, name: "LAPTOP LENOVO" },
          { id: 1517, name: "LAPTOP GIGABUTE" },
        ],
      },
      { id: 152, name: "LAPTOP GAMING" },
      { id: 153, name: "LAPTOP ĐỒ HỌA" },
      { id: 154, name: "LAPTOP VĂN PHÒNG" },
    ],
  },
  { id: 16, name: "Phần mềm" },
];

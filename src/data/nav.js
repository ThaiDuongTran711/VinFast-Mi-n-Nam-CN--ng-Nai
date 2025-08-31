const nav = [
  {
    label: "Sản phẩm",
    children: [
      { label: "Ô tô điện", to: "/vehicles", desc: "Dải sản phẩm xe điện đa dạng" },
      { label: "Xe máy điện", to: "/vehicles", desc: "Tối ưu di chuyển nội đô" },
    ]
  },
  {
    label: "Trải nghiệm",
    children: [
      { label: "Lái thử", to: "/support", desc: "Đặt lịch lái thử gần bạn" },
      { label: "Đăng ký tư vấn", to: "/support", desc: "Nhận tư vấn nhanh chóng" },
    ]
  },
  {
    label: "Tin tức",
    children: [
      { label: "Bài viết", to: "/news", desc: "Tin mới & sự kiện" },
      { label: "Blog", to: "/news", desc: "Câu chuyện từ cộng đồng" },
    ]
  },
  {
    label: "Về VinFast",
    children: [
      { label: "Giới thiệu", to: "/about", desc: "Tầm nhìn & sứ mệnh" },
      { label: "Tuyển dụng", to: "/about", desc: "Gia nhập đội ngũ" },
    ]
  },
]
export default nav

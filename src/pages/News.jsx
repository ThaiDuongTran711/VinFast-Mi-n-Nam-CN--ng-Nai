import React from 'react'

export default function News() {
  return (
    <div className="container page-news">
      <h1 className="page-title">Tin tức</h1>
      <p className="page-subtitle">Trang tin demo. Tích hợp API CMS sau.</p>

      <div className="news-list">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="news-card">
            <div className="news-date">2025-08-27</div>
            <div className="news-title">Bài viết {i+1} - tiêu đề hấp dẫn</div>
            <p className="news-desc">
              Tóm tắt ngắn gọn về nội dung bài viết. Đây là bản mô phỏng để bạn thay thế bằng dữ liệu thật.
            </p>
            <button className="btn-readmore">Đọc thêm</button>
          </div>
        ))}
      </div>
    </div>
  )
}

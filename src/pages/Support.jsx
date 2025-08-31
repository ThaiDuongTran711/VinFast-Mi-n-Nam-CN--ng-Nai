import React from 'react'

export default function Support() {
  return (
    <div className="container page-support">
      <h1 className="page-title">Hỗ trợ</h1>
      <p className="page-subtitle">Câu hỏi thường gặp, bảo hành, đặt lịch lái thử.</p>

      <div className="support-grid">
        {['Đặt lịch lái thử','Trung tâm dịch vụ','Chính sách bảo hành'].map((t, i) => (
          <div key={i} className="support-card">
            <div className="support-title">{t}</div>
            <p className="support-desc">Mô tả ngắn cho mục {t.toLowerCase()}.</p>
            <button className="btn-support">Tìm hiểu</button>
          </div>
        ))}
      </div>
    </div>
  )
}

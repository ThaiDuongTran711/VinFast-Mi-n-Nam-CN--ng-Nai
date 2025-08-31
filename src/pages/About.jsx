import React from 'react'
import './About.css'   

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Về VinFast (demo)</h1>
      <p className="about-desc">
        Trang này mô phỏng cấu trúc nội dung giới thiệu thương hiệu. Bạn có thể chèn timeline, giá trị cốt lõi, chứng chỉ và hình ảnh thật.
      </p>
      <div className="about-grid">
        {['Sứ mệnh','Tầm nhìn','Giá trị'].map((t, i) => (
          <div key={i} className="about-card">
            <div className="about-card-title">{t}</div>
            <p className="about-card-desc">Mô tả ngắn cho mục {t.toLowerCase()}.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

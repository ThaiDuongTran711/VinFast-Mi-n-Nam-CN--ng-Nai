import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './HeroCarousel.css'

export default function HeroCarousel() {
  const slides = [
    { id: 1, title: "Trải nghiệm tương lai di chuyển", desc: "Ô tô điện thông minh cho mọi gia đình", cta: "Khám phá xe", to: "/vehicles", img: "/images/hero1.jpg" },
    { id: 2, title: "An tâm trên mọi hành trình", desc: "Dịch vụ và bảo hành toàn diện", cta: "Tìm hiểu hỗ trợ", to: "/support", img: "/images/hero2.jpg" },
    { id: 3, title: "Tin nóng mỗi ngày", desc: "Cập nhật sản phẩm và ưu đãi", cta: "Xem tin tức", to: "/news", img: "/images/hero3.jpg" }
  ]
  return (
    <div className="hero">
      <div className="carousel">
        {slides.map((s, i) => (
          <div key={s.id} className="slide">
            <img src={s.img} alt="" className="slide-img" />
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="slide-text"
              >
                <h2 className="slide-title">{s.title}</h2>
                <p className="slide-desc">{s.desc}</p>
                <Link to={s.to} className="slide-btn">
                  {s.cta}
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

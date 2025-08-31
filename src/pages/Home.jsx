import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import Section from '../components/Section'
import ProductCard from '../components/ProductCard'
import vehicles from '../data/vehicles'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <HeroCarousel />
      </div>

      <Section title="Dải sản phẩm VinFast" subtitle="Chọn chiếc xe phù hợp với bạn">
        <div className="home-grid">
          {vehicles.slice(0, 6).map(v => <ProductCard key={v.id} car={v} />)}
        </div>
        <div className="home-center">
          <Link to="/vehicles" className="home-button">
            Xem tất cả xe
          </Link>
        </div>
      </Section>

      <Section title="Tin tức nổi bật" subtitle="Cập nhật hoạt động & ưu đãi">
        <div className="home-grid">
          {[1,2,3].map(i => (
            <article key={i} className="home-article">
              <div className="home-article-img"></div>
              <div className="home-article-body">
                <h4 className="home-article-title">Tiêu đề tin {i}</h4>
                <p className="home-article-desc">Mô tả ngắn gọn về tin tức nổi bật {i}...</p>
                <button className="home-article-btn">Đọc tiếp</button>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  )
}

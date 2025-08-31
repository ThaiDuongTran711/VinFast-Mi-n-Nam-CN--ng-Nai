import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <div className="footer-logo">VinFast</div>
          <p className="footer-sub">Bản dựng demo bằng React.</p>
        </div>
        <div>
          <div className="footer-title">Sản phẩm</div>
          <ul className="footer-list">
            <li><Link to="/vehicles">Ô tô điện</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-title">Tin tức</div>
          <ul className="footer-list">
            <li><Link to="/news">Báo chí</Link></li>
            <li><Link to="/news">Blog</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-title">Hỗ trợ</div>
          <ul className="footer-list">
            <li><Link to="/support">Bảo hành</Link></li>
            <li><Link to="/support">Câu hỏi thường gặp</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          © {new Date().getFullYear()} Demo. Không thuộc VinFast.
        </div>
      </div>
    </footer>
  )
}

import React from 'react'
import vehicles from '../data/vehicles'
import ProductCard from '../components/ProductCard'

export default function Vehicles() {
  return (
    <div className="container page-vehicles">
      <h1 className="page-title">Ô tô & xe điện VinFast</h1>
      <p className="page-subtitle mb-8">Danh mục sản phẩm demo dữ liệu tĩnh.</p>
      
      <div className="vehicles-grid">
        {vehicles.map(v => <ProductCard key={v.id} car={v} />)}
      </div>
    </div>
  )
}

import React from "react"
import Section from "../components/Section"
import ProductCard from "../components/ProductCard"
import { serviceVehicles, familyVehicles } from "../data/vehicles"
import Breadcrumb from "../components/Breadcrumb"

export default function Vehicles({ group }) {
  let title = "Tất cả sản phẩm"
  let subtitle = "Chọn chiếc xe phù hợp với bạn"
  let list = [...serviceVehicles, ...familyVehicles] // mặc định tất cả

  if (group === "service") {
    title = "Dòng xe dịch vụ"
    subtitle = "VinFast Green Series – giải pháp tối ưu cho kinh doanh"
    list = serviceVehicles
  }

  if (group === "family") {
    title = "Dòng xe cá nhân"
    subtitle = "VinFast VF Series – đồng hành cùng gia đình bạn"
    list = familyVehicles
  }

  return (
    <div className="vehicles-page">
      <Breadcrumb/>
      <Section title={title} subtitle={subtitle}>
        <div className="home-grid">
          {list.map((v) => (
            <ProductCard key={v.id} car={v} />
          ))}
        </div>
      </Section>
    </div>
  )
}

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { serviceVehicles, familyVehicles } from "../data/vehicles";
import "./VehicleDetail.css";
import CTAForm from "../components/CTAForm";
import Slider from "react-slick";

export default function VehicleDetail() {
  const { id } = useParams();
  const all = [...serviceVehicles, ...familyVehicles];
  const car = all.find((v) => v.id === id);

  if (!car) return <div className="not-found">Không tìm thấy xe</div>;

  const [showForm, setShowForm] = useState(false);

  // Nút mũi tên tùy chỉnh
  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-next" onClick={onClick}>
      ➤
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-prev" onClick={onClick}>
      ➤
    </div>
  );

  // Cấu hình slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="vehicle-detail-page">
      <div className="detail-main">
        <div className="detail-image">
          {car.gallery && car.gallery.length > 0 ? (
            <Slider {...settings}>
              {car.gallery.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={`${car.name} ${idx + 1}`} />
                </div>
              ))}
            </Slider>
          ) : (
            <img src={car.image} alt={car.name} />
          )}
        </div>

        <div className="detail-info">
          <h1>{car.name}</h1>
          <p className="detail-price">{car.price}</p>
          <p className="detail-desc">
            {car.description || "Xe điện hiện đại, hiệu suất cao"}
          </p>

          {/* Bảng thông số */}
          {car.specs && (
            <table className="detail-spec-table">
              <tbody>
                {Object.entries(car.specs).map(([key, value]) => (
                  <tr key={key}>
                    <td><strong>{key}</strong></td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Màu sắc */}
          {car.colors && car.colors.length > 0 && (
            <div className="detail-colors">
              Màu sắc:
              {car.colors.map((color) => (
                <span
                  key={color.name}
                  className="color-swatch"
                  title={color.name}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          )}

          <button onClick={() => setShowForm(true)} className="btn-reserve">
            Lái thử
          </button>
        </div>
      </div>

      {showForm && (
        <div className="reserve-form-modal">
          <div className="reserve-form">
            <CTAForm formType="laithu" />
            <button
              type="button"
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

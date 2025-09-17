import React, { useState } from "react";
import "./Chatbot.css";
import { serviceVehicles, familyVehicles } from "../data/vehicles"; // chỉnh path cho đúng

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Xin chào 👋! Mình là chatbot VinFast, bạn muốn tìm hiểu dòng xe nào?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // Gộp dữ liệu từ serviceVehicles + familyVehicles
    const allCars = [...serviceVehicles, ...familyVehicles];

    // Chuyển thành text ngắn gọn cho bot
    const carInfo = allCars
      .map(
        car =>
          `${car.name} - ${car.price} - Tầm hoạt động: ${car.range} - ${car.description}`
      )
      .join("\n");

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" + apiKey,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `
Bạn là chatbot tư vấn xe VinFast. 
Chỉ sử dụng dữ liệu dưới đây để tư vấn cho khách hàng, không được bịa thêm.

Danh sách xe VinFast:
${carInfo}

Nếu khách hỏi về hãng xe khác, hãy trả lời: "Xin lỗi, mình chỉ tư vấn về xe VinFast."

Khách: ${input}
                    `
                  }
                ]
              }
            ]
          }),
        }
      );

      const data = await response.json();
      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Xin lỗi, mình chưa hiểu được câu hỏi này 😢";

      setMessages([...newMessages, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Gemini API error:", error);
      setMessages([...newMessages, { sender: "bot", text: "⚠️ Có lỗi xảy ra khi gọi API." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Nút mở chat */}
      <button className="chat-toggle-btn" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* Khung chat */}
      {open && (
        <div className="chatbox">
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                {msg.sender === "bot" && <span className="avatar">🤖</span>}
                <div className="bubble">{msg.text}</div>
              </div>
            ))}
            {loading && (
              <div className="chat-message bot">
                <span className="avatar">🤖</span>
                <div className="bubble typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập tin nhắn..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Gửi</button>
          </div>
        </div>
      )}
    </>
  );
}

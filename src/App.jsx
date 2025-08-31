import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './router'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

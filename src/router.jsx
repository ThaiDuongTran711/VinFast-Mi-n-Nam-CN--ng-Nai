import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Vehicles = lazy(() => import('./pages/Vehicles'))
const News = lazy(() => import('./pages/News'))
const Support = lazy(() => import('./pages/Support'))
const About = lazy(() => import('./pages/About'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Đang tải...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/news" element={<News />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  )
}

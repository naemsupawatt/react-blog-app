import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import NotFound from './NotFound'
export default function Navbar() {
  return (
    <nav>
        <Link to="/" className="logo">
            <h3>Blog Application</h3>
        </Link>
        <Link to="/">หน้าแรก</Link>
        <Link to="/about">เกี่ยวกับ</Link>
        <Link to="/blogs">บทความทั้งหมด</Link>
    </nav>
  )
}

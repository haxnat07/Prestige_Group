'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

export default function Nav({ solid = false }) {
  const [menu, setMenu] = useState(false)
  return <nav className={`nav ${solid ? 'solid' : ''}`}>
    <Link href="/" className="logo"><Image src="/prestige-logo.png" alt="Prestige Development Group" width={1024} height={171} priority /></Link>
    <div className={`nav-links ${menu ? 'show' : ''}`}>
      <a href="/#about">About</a><a href="/#services">Services</a><a href="/#projects">Projects</a><a href="/#testimonials">Testimonials</a><a href="/#approach">Our approach</a>
      <Link href="/contact">Contact</Link>
      <Link href="/contact" className="nav-cta">Start a project <ArrowRight size={15}/></Link>
    </div>
    <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
  </nav>
}

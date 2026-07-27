'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Bot, Building2, Check, ChevronDown, Landmark, Menu, MessageCircle, Send, Sparkles, X } from 'lucide-react'

const prompts = [
  'What services do you offer?',
  'Tell me about your experience',
  'How can I start a project?'
]

const answers = {
  'What services do you offer?': 'We manage the full development lifecycle — site selection, planning, design, financing, entitlements, construction, and delivery.',
  'Tell me about your experience': 'PDG develops retail, hospitality, office, government, multifamily, and mixed-use projects nationwide, with an experienced in-house team.',
  'How can I start a project?': 'Share your project type, target market, and timeline. Our team will follow up to schedule a focused development consultation.'
}

function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi, I'm the PDG project assistant. How can I help bring your vision to life?" }
  ])
  const end = useRef(null)

  useEffect(() => end.current?.scrollIntoView({ behavior: 'smooth' }), [messages, typing])

  const send = (text) => {
    const value = text.trim()
    if (!value || typing) return
    setMessages(m => [...m, { type: 'user', text: value }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setMessages(m => [...m, { type: 'bot', text: answers[value] || "Thanks for reaching out. I can help with development services, project experience, or connecting you with our team for a consultation." }])
      setTyping(false)
    }, 900)
  }

  return <div className="chat-wrap">
    {open && <div className="chat-panel">
      <div className="chat-head">
        <div className="bot-mark"><Sparkles size={17} /></div>
        <div><strong>PDG Assistant</strong><span><i /> Online now</span></div>
        <button aria-label="Close chat" onClick={() => setOpen(false)}><X size={18}/></button>
      </div>
      <div className="chat-body">
        <div className="assistant-note"><Sparkles size={13}/> AI-powered project guidance</div>
        {messages.map((m, i) => <div className={`bubble ${m.type}`} key={i}>{m.type === 'bot' && <Bot size={14}/>}<span>{m.text}</span></div>)}
        {typing && <div className="bubble bot typing"><span/><span/><span/></div>}
        {messages.length === 1 && <div className="quick-prompts">{prompts.map(p => <button onClick={() => send(p)} key={p}>{p}<ArrowRight size={13}/></button>)}</div>}
        <div ref={end}/>
      </div>
      <form className="chat-input" onSubmit={e => {e.preventDefault(); send(input)}}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about your next project..."/>
        <button aria-label="Send"><Send size={17}/></button>
      </form>
      <small className="chat-disclaimer">Demo assistant • Responses are simulated</small>
    </div>}
    <button className="chat-button" onClick={() => setOpen(!open)} aria-label="Open AI assistant">
      {open ? <X/> : <MessageCircle/>}<span>{open ? 'Close' : 'Ask PDG'}</span>
      {!open && <b>1</b>}
    </button>
  </div>
}

export default function Home() {
  const [menu, setMenu] = useState(false)
  return <main>
    <nav className="nav">
      <a href="#top" className="logo"><Image src="/prestige-logo.png" alt="Prestige Development Group" width={1024} height={171} priority /></a>
      <div className={`nav-links ${menu ? 'show' : ''}`}>
        <a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#approach">Our approach</a>
        <a href="#contact" className="nav-cta">Start a project <ArrowRight size={15}/></a>
      </div>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
    </nav>

    <section className="hero" id="top">
      <div className="hero-bg"/>
      <div className="hero-content">
        <div className="eyebrow"><span/> Commercial real estate, redefined</div>
        <h1>We develop places<br/>built to <em>perform.</em></h1>
        <p>From first idea to final handoff, Prestige brings vision, capital, and execution together under one roof.</p>
        <div className="hero-actions"><a href="#contact" className="primary">Start your project <ArrowRight size={17}/></a><a href="#projects" className="text-link">Explore our work <span>↘</span></a></div>
      </div>
      <div className="hero-side"><span>01</span><div/><p>National reach<br/>Austin roots</p></div>
      <a className="scroll" href="#about"><span>Scroll to discover</span><ChevronDown/></a>
    </section>

    <section className="ticker"><span>STRATEGY</span><i/> <span>DEVELOPMENT</span><i/> <span>CAPITAL</span><i/> <span>CONSTRUCTION</span><i/> <span>DELIVERY</span></section>

    <section className="intro section" id="about">
      <div className="section-tag">01 — Who we are</div>
      <div className="intro-copy">
        <h2>One team. Every phase.<br/><em>Zero compromise.</em></h2>
        <div className="intro-body"><p>Prestige Development Group is a national commercial real estate developer headquartered in Austin, Texas.</p><p>We solve complex development challenges with an integrated team and a relentless commitment to quality, timing, and budget.</p><a href="#services">Discover the difference <ArrowRight size={15}/></a></div>
      </div>
      <div className="stats"><div><strong>20+</strong><span>Years of<br/>industry experience</span></div><div><strong>39%</strong><span>Average IRR of<br/>capital partners</span></div><div><strong>360°</strong><span>End-to-end<br/>project oversight</span></div><div><strong>US</strong><span>Nationwide<br/>development reach</span></div></div>
    </section>

    <section className="services section" id="services">
      <div className="services-head"><div><div className="section-tag light">02 — What we do</div><h2>Built around your<br/><em>ambition.</em></h2></div><p>Our integrated platform moves projects forward with speed, clarity, and accountability — from the earliest opportunity to opening day.</p></div>
      <div className="service-grid">
        <article><span>01</span><Landmark/><h3>Development</h3><p>Full-service commercial development, led from market strategy through construction and delivery.</p><a href="#contact">Explore service <ArrowRight size={14}/></a></article>
        <article><span>02</span><Building2/><h3>Capital</h3><p>Flexible financing solutions and trusted lender relationships to move the right opportunities forward.</p><a href="#contact">Explore service <ArrowRight size={14}/></a></article>
        <article><span>03</span><Check/><h3>Advisory</h3><p>Experienced guidance for site selection, entitlements, design, budgeting, and project execution.</p><a href="#contact">Explore service <ArrowRight size={14}/></a></article>
      </div>
    </section>

    <section className="projects section" id="projects">
      <div className="project-title"><div><div className="section-tag">03 — Selected work</div><h2>Places that move<br/>business <em>forward.</em></h2></div><a href="#contact">View all projects <ArrowRight size={15}/></a></div>
      <div className="project-grid">
        <article className="featured"><Image src="/images/retail-development-hd.png" fill sizes="(max-width: 800px) 100vw, 62vw" quality={92} alt="Contemporary ground-up retail development"/><div className="project-overlay"><span>Retail development</span><h3>Built for visibility.<br/>Designed for growth.</h3><p>Ground-up commercial development</p></div></article>
        <article><Image src="/images/develop.jpg" fill alt="MountainView Regional Medical Center"/><div className="project-overlay"><span>Healthcare</span><h3>Community-centered development.</h3><p>Medical & institutional</p></div></article>
      </div>
    </section>

    <section className="approach" id="approach">
      <Image src="/images/architecture.jpeg" fill alt="Design and planning workspace"/>
      <div className="approach-card"><div className="section-tag light">04 — Our approach</div><h2>From possibility<br/>to <em>place.</em></h2><p>Every successful project starts with a clear plan. Our team coordinates every discipline, decision, and dollar to protect your vision from concept to completion.</p><ul><li><span>01</span> Discover & strategize</li><li><span>02</span> Design & finance</li><li><span>03</span> Build & deliver</li></ul><a href="#contact" className="primary sand">How we work <ArrowRight size={16}/></a></div>
    </section>

    <section className="contact section" id="contact">
      <div className="section-tag">05 — Start a conversation</div>
      <div className="contact-main"><h2>Have a vision?<br/><em>Let's build it.</em></h2><div><p>Tell us where you want to go. We'll bring the strategy, resources, and experience to help you get there.</p><a href="mailto:info@pdgatx.com" className="contact-link">info@pdgatx.com <ArrowRight/></a><a href="tel:+15122435224" className="contact-phone">512 243 5224</a></div></div>
    </section>

    <footer><Image src="/prestige-logo.png" width={1024} height={171} alt="Prestige Development Group"/><div><span>12912 Hill Country Blvd, Bee Cave, TX 78738</span><span>© 2026 Prestige Development Group, LLC</span></div></footer>
    <ChatWidget/>
  </main>
}

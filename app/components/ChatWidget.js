'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Bot, MessageCircle, Send, Sparkles, X } from 'lucide-react'

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

export default function ChatWidget() {
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

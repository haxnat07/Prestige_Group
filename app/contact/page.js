import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'
import ContactForm from '../components/ContactForm'

export const metadata = {
  title: 'Contact | Prestige Development Group',
  description: 'Get in touch with Prestige Development Group to start your next commercial real estate project.',
}

export default function Contact() {
  return <main>
    <Nav solid/>

    <section className="contact-hero">
      <div className="section-tag light">Get in touch</div>
      <h1>Have a vision?<br/><em>Let's build it.</em></h1>
      <p>Tell us where you want to go. We'll bring the strategy, resources, and experience to help you get there.</p>
    </section>

    <section className="contact-details section">
      <div className="contact-layout">
        <ContactForm/>
        <div className="contact-detail-grid">
          <article><Mail/><h3>Email</h3><a href="mailto:info@pdgatx.com">info@pdgatx.com <ArrowRight size={13}/></a></article>
          <article><Phone/><h3>Phone</h3><a href="tel:+15122435224">512 243 5224 <ArrowRight size={13}/></a></article>
          <article><MapPin/><h3>Office</h3><span>12912 Hill Country Blvd,<br/>Bee Cave, TX 78738</span></article>
        </div>
      </div>
    </section>

    <Footer/>
    <ChatWidget/>
  </main>
}

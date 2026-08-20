import Image from 'next/image'
import { ArrowRight, Building2, Check, ChevronDown, Landmark } from 'lucide-react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

export default function Home() {
  return <main>
    <Nav/>

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

    <section className="testimonials section" id="testimonials">
      <div className="section-tag">04 — What they say about us</div>
      <h2>Trusted by partners<br/>who <em>build with us.</em></h2>
      <div className="testimonial-grid">
        <article>
          <Image src="/images/testimonials/matt-auclair.png" width={64} height={64} alt="Matt Auclair"/>
          <p>Our company Pride Signs Ltd. partnered with PDG on their new IHOP location in Beavercreek Ohio. It was truly a pleasure to work with Tiffany and her team on their exterior signage. From start to finish the project was a complete success and we are eager to get started on their next IHOP.</p>
          <strong>Matt Auclair</strong>
          <span>Pride Signs Ltd.</span>
        </article>
        <article>
          <Image src="/images/testimonials/john-andreini.png" width={64} height={64} alt="John Andreini"/>
          <p>Prestige Development Group simply gets it done. Over the past 7 years, PDG has overcome due diligence obstacles that many developers could not penetrate. If there is anyone that knows how to manage the complexities of a deal, it's Mike Dixson.</p>
          <strong>John Andreini</strong>
          <span>Partner at Capital Pacific</span>
        </article>
        <article>
          <Image src="/images/testimonials/steve-parsley.png" width={64} height={64} alt="Steve Parsley"/>
          <p>I have had the pleasure of handling the closing of several commercial transactions for Prestige Development Group over the past few years, I have found their team to be knowledgeable and efficient. Their projects are very high quality and typically located in high visible areas of our community.</p>
          <strong>Steve Parsley</strong>
          <span>Doña Ana Title Company</span>
        </article>
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

    <Footer/>
    <ChatWidget/>
  </main>
}

'use client'

import { ArrowRight } from 'lucide-react'

export default function ContactForm() {
  return <form className="contact-form" onSubmit={e => e.preventDefault()}>
    <h2>Send us a message</h2>
    <div className="form-row">
      <input type="text" name="name" placeholder="Full name*" required/>
      <input type="email" name="email" placeholder="Email address*" required/>
    </div>
    <div className="form-row">
      <input type="tel" name="phone" placeholder="Phone number"/>
      <input type="text" name="company" placeholder="Company"/>
    </div>
    <select name="projectType" defaultValue="">
      <option value="" disabled>Project type</option>
      <option value="retail">Retail</option>
      <option value="hospitality">Hospitality</option>
      <option value="office">Office</option>
      <option value="multifamily">Multifamily</option>
      <option value="mixed-use">Mixed-use</option>
      <option value="other">Other</option>
    </select>
    <textarea name="message" placeholder="Tell us about your project*" rows={6} required/>
    <button type="submit" className="primary">Send message <ArrowRight size={16}/></button>
  </form>
}

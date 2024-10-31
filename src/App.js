import React from 'react'
import { Helmet } from 'react-helmet' 
import './App.css'

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:title" content="Community Krizz" />
        <meta property="og:image"
          content="https://files.catbox.moe/09wbxp.jpg"/>
        <meta property="og:description"
          content="WhatsApp bot community, WhatsApp bot dev, Community WhatsApp bot, WhatsApp bot drv, wabot"/>
        <meta name="twitter:image:src"
          content="https://files.catbox.moe/09wbxp.jpg"/>
        <title>Community Wangsaf</title>
      </Helmet>
      
      <div className="container">
        <img alt="profile picture" className="profile-pic"
          src="https://files.catbox.moe/09wbxp.jpg"/>
        <div className="title">
          Krizz - Community <i className="fas fa-check-circle"></i>
        </div>
        
        <div className="subtitle">Beginner Team, Hwok Resingg Team</div>
        <div className="social-icons">
          <a href="https://instagram.com/@krsna_081">
            <i className="fab fa-instagram"></i>
          </a>
          
          <a href="https://wa.me/6281235807940?text=hi+krizz">
            <i className="far fa-comment-lines"></i>
          </a>
        </div>

        <Section title="Social Dev Link">
          <LinkItem href="https://www.youtube.com/@krsna_081" icon="fa-brands fa-youtube" text="Youtube"/>
          <LinkItem href="https://github.com/krsna081" icon="fa-brands fa-github" text="Github"/>
          <LinkItem href="https://tiktok.com/@krnsa_081" icon="fa-brands fa-tiktok" text="Tiktok"/>
        </Section>

        <Section title="Community - Group's">
          <LinkItem href="https://chat.whatsapp.com/Kvc5adketWeLBtaXdsHsvo" icon="fab fa-whatsapp" text="Kurai Wabot Groups"/>
          <LinkItem href="https://whatsapp.com/channel/0029VaOQ0f3BA1f7HHV9DV1J" icon="fab fa-whatsapp" text="Krizz Channels Community"/>
          <LinkItem href="https://hello.com" icon="fab fa-whatsapp" text="Gmn Team"/>
        </Section>
      </div>
    </div>
  )
}

const Section = ({ title, children }) => (
  <div className="section">
    <div className="section-title" style={{ fontFamily: 'Patrick Hand' }}>
      {title}
    </div>
    {children}
  </div>
)

const LinkItem = ({ href, icon, text }) => (
  <a href={href} className="link-item">
    <i className={icon}></i>
    <span>{text}</span>
  </a>
)

export default App

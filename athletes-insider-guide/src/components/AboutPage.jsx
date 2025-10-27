import { useEffect } from 'react'
import './AboutPage.css'
import alexProfile from '../assets/Images/Alex_Profile.jpg'
import rishiProfile from '../assets/Images/Rishi_Profile.jpg'

function AboutPage() {
  useEffect(() => {
    // Card carousel logic
    const cards = document.querySelectorAll('.card')
    let currentCard = 0

    const updateCards = () => {
      cards.forEach((card, index) => {
        card.classList.remove('card--left', 'card--left-far', 'card--center', 'card--right', 'card--right-far')
        
        const diff = (index - currentCard + cards.length) % cards.length
        
        if (diff === 0) {
          card.classList.add('card--center')
        } else if (diff === 1) {
          card.classList.add('card--right')
        } else if (diff === 2) {
          card.classList.add('card--right-far')
        } else if (diff === cards.length - 1) {
          card.classList.add('card--left')
        }
      })
    }

    const handleCardClick = (e) => {
      const clickedCard = e.currentTarget
      const cardIndex = parseInt(clickedCard.getAttribute('data-card'))
      
      if (cardIndex !== currentCard) {
        currentCard = cardIndex
        updateCards()
      }
    }

    // Add click listeners
    cards.forEach((card) => {
      card.addEventListener('click', handleCardClick)
    })

    // Initialize cards
    updateCards()

    // Cleanup
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('click', handleCardClick)
      })
    }
  }, [])

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About The Show</h1>
          <p className="hero-subtitle">
            Bridging the gap between sports science research and real-world athletic performance
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section mission-section">
        <div className="section-container">
          <h2>Our Mission</h2>
          <p>
            In today’s world, athletes are surrounded by countless sources of information on strength and conditioning, rehabilitation, sport psychology, and performance science. Unfortunately, it can be difficult to separate credible, evidence-based insights from misinformation. Too often, advice is presented as a one-size-fits-all solution, yet every athlete is unique, and what works for one may not work for another.
            <br />At The Athletes’ Insider Guide (TAIG), our mission is to provide athletes of all ages with scientifically grounded information that empowers them to better understand their own performance and development. We aim to help athletes, coaches, parents, and support staff make informed decisions by offering accurate, research-based resources.
            <br />Our goal is not only to share reliable information but also to encourage continued learning. We invite all visitors to explore our recommended readings and resources, created and curated by professionals in the field, to deepen their understanding and take control of their athletic journey.
          </p>
          <p>
            Whether you're a competitive athlete, weekend warrior, or fitness enthusiast, we believe 
            you deserve access to the same evidence-based strategies used by elite performers.
          </p>
        </div>
      </section>

      {/* What We Cover Section */}
      <section className="about-section topics-section">
        <div className="section-container">
          <h2>What We Cover</h2>
          <div className="topics-grid">
            <div className="topic-card">
              <div className="topic-icon">🏋️</div>
              <h3>Training Science</h3>
              <p>Evidence-based training methodologies, periodization, and program design</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">🍎</div>
              <h3>Nutrition</h3>
              <p>Sports nutrition, supplementation, and fueling strategies for performance</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">😴</div>
              <h3>Recovery</h3>
              <p>Sleep optimization, recovery protocols, and injury prevention</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">🧠</div>
              <h3>Mental Performance</h3>
              <p>Psychology, mindset, and mental strategies for competition</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">🔬</div>
              <h3>Research Deep-Dives</h3>
              <p>Breaking down the latest studies and their practical applications</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">💪</div>
              <h3>Expert Interviews</h3>
              <p>Conversations with leading researchers, coaches, and athletes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Cards Section */}
      <h1>Our Hosts</h1>
      <div className="cards">
        <div className="card" data-card="0">
          <div className="card__image">
            <img src={alexProfile} alt="Host 1" />
          </div>
          <div className="card__content">
            <h3>Alex Housley</h3>
            <p className="card__role">Lead Coach & Researcher</p>
            <p className="card__bio">My name is Alex Housley. I am currently undergoing my master's in sport and exercise psychology at Loughborough University. I obtained a first-class honors degree in sport and exercise science from York St. John University, where I played for i2i Soccer Academy. I grew up playing several sports, but eventually decided to focus on soccer. I have competed at the amateur and semi-pro levels in the UPSL and NPSL in the US. My interest in sports psychology began in my first year of university when I took a class that highlighted the growing need for mental skills coaching and psychological services for athletes and individuals of all ages. There is a stigma around sports psychology, but the main goal of sports and performance psychology is to help individuals develop the mental skills to enhance their overall performance in sport.</p>
          </div>
        </div>
        <div className="card" data-card="1">
          <div className="card__image">
            <img src="/host2.jpg" alt="Host 2" />
          </div>
          <div className="card__content">
            <h3>Hayden Habetz</h3>
            <p className="card__role">Performance Nutritionist</p>
            <p className="card__bio">Brief bio about this host and their expertise in nutrition.</p>
          </div>
        </div>
        <div className="card" data-card="2">
          <div className="card__image">
            <img src="/host3.jpg" alt="Host 3" />
          </div>
          <div className="card__content">
            <h3>Cole Worden</h3>
            <p className="card__role">Mental Performance Coach</p>
            <p className="card__bio">Brief bio about this host and their expertise in psychology.</p>
          </div>
        </div>
        <div className="card" data-card="3">
          <div className="card__image">
            <img src={rishiProfile} alt="Host 4" />
          </div>
          <div className="card__content">
            <h3>Rishi Srinivasan</h3>
            <p className="card__role">Strength & Conditioning Expert</p>
            <p className="card__bio">I’m a former soccer player who spent three years competing in Europe before choosing to channel my passion for sport into a long-term career. I hold a bachelor’s degree in Sports and Exercise Science and am currently pursuing my Doctorate in Physical Therapy. My goal is to combine my playing experience and academic background to help athletes recover from injuries, optimize performance, and stay injury-free.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to Level Up Your Training?</h2>
          <p>Join thousands of athletes who are training smarter with science-backed insights</p>
          <div className="cta-buttons">
            <a href="/episodes" className="cta-button primary">
              Listen to Episodes
            </a>
            <a href="/newsletter" className="cta-button secondary">
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
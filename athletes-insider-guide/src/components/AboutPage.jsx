import './AboutPage.css'

function AboutPage() {
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
            The Athlete's Insider Guide exists to demystify sports science and make cutting-edge 
            research accessible to everyone. We translate complex studies into actionable insights 
            that help athletes of all levels train smarter, recover better, and perform at their peak.
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

      {/* Host Section */}
      <section className="about-section host-section">
        <div className="section-container">
          <h2>Meet Your Host</h2>
          <div className="host-content">
            <div className="host-image">
              <img src="/host-photo.jpg" alt="Host" />
            </div>
            <div className="host-bio">
              <h3>Your Name</h3>
              <p className="host-title">Sports Science Enthusiast & Performance Coach</p>
              <p>
                With a background in exercise science and years of experience working with athletes 
                across multiple sports, I'm passionate about translating research into results. 
                My goal is to help you cut through the noise and focus on what actually works.
              </p>
              <p>
                When I'm not recording episodes or diving into the latest research, you can find me 
                training in the gym, competing in [your sport], or experimenting with new recovery 
                protocols on myself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to Level Up Your Training?</h2>
          <p>Join thousands of athletes who are training smarter with science-backed insights</p>
          <div className="cta-buttons">
            <a href="#episodes" className="cta-button primary">
              Listen to Episodes
            </a>
            <a href="#newsletter" className="cta-button secondary">
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
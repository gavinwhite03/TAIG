import { useEffect, useRef } from 'react'
import './HomePage.css'
import ticketImage from '../assets/ticket.svg'

function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      container.style.setProperty("--mouse-x", x)
      container.style.setProperty("--mouse-y", y)

      console.log(`X: ${x.toFixed(2)}%, Y: ${y.toFixed(2)}%`)
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <main className="homepage">
        <div className='heading'>
          <h1>From Lab to Locker Room: Your Ticket to the Truth Behind Performance</h1>
        </div>
          <div className="group" style={{ perspective: '1500px' }}>
            <div className="ticket-container" ref={containerRef}>
              <div className="holographic-overlay">
                <div className="bg-image"></div>
                <div className="gradient-overlay"></div>
                <div className="shine-overlay"></div>
                <div className="glow-effect"></div>
              </div>
              <div className="ticket-image">
                <img src={ticketImage} width="800" height="280" alt="Remix Jam 2025 Event Ticket" />
              </div>
            </div>
        </div>
      </main>

      <section className="about-section" id="about">
        <div className="about-container">
          <h2>About The Show</h2>
          <p>
            The Athlete's Insider Guide breaks down the science behind athletic performance 
            into practical, actionable insights. Each episode explores cutting-edge research, 
            expert interviews, and real-world applications to help you train smarter, not harder.
          </p>
          <p>
            Whether you're a competitive athlete, weekend warrior, or fitness enthusiast, 
            we translate complex sports science into strategies you can use today.
          </p>
          <a href="#episodes" className="episodes-button">
            Explore Episodes
          </a>
        </div>
      </section>
    </>
  )
}

export default HomePage
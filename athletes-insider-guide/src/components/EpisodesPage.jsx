import { useState } from 'react'
import './EpisodesPage.css'

function EpisodesPage() {
  // Replace these with your actual YouTube video IDs
  const episodes = [
    {
      id: 1,
      videoId: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
      title: 'Episode 1: Introduction to Sports Science',
      date: 'January 15, 2024',
      duration: '45:23',
      description: 'We kick off the podcast by exploring the fundamentals of sports science and how research translates to performance.',
      guests: 'Dr. Jane Smith'
    },
    {
      id: 2,
      videoId: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
      title: 'Episode 2: Nutrition for Peak Performance',
      date: 'January 22, 2024',
      duration: '52:10',
      description: 'Deep dive into evidence-based nutrition strategies for athletes of all levels.',
      guests: 'Dr. Mike Johnson'
    },
    {
      id: 3,
      videoId: 'zzJg_d4dlRo', // Replace with your YouTube video ID
      title: 'Episode 3: Recovery and Sleep Optimization',
      date: 'January 29, 2024',
      duration: '48:45',
      description: 'Learn how to maximize recovery through sleep protocols and active recovery techniques.',
      guests: 'Dr. Sarah Williams'
    },
    {
      id: 4,
      videoId: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
      title: 'Episode 4: Mental Performance Strategies',
      date: 'February 5, 2024',
      duration: '41:30',
      description: 'Exploring the psychology of competition and mental strategies used by elite athletes.',
      guests: 'Dr. Alex Chen'
    },
    {
      id: 5,
      videoId: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
      title: 'Episode 5: Strength Training Principles',
      date: 'February 12, 2024',
      duration: '55:20',
      description: 'Breaking down the science of strength training and periodization for optimal results.',
      guests: 'Coach Maria Rodriguez'
    }
  ]

  const [currentVideo, setCurrentVideo] = useState(episodes[0].videoId)
  const [activeEpisode, setActiveEpisode] = useState(episodes[0].id)

  const handleEpisodeClick = (videoId, episodeId) => {
    setCurrentVideo(videoId)
    setActiveEpisode(episodeId)
  }

  return (
    <div className="episodes-page">
      {/* Hero Section */}
      <section className="episodes-hero">
        <div className="episodes-hero-content">
          <h1>Episodes</h1>
          <p className="hero-subtitle">
            Watch and learn from our complete collection of episodes
          </p>
        </div>
      </section>

      {/* Player and Playlist Section */}
      <section className="player-section">
        <div className="player-container">
          {/* Video Player */}
          <div className="video-player">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${currentVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Playlist */}
          <div className="playlist">
            <h2>All Episodes</h2>
            <div className="playlist-items">
              {episodes.map((episode) => (
                <div
                  key={episode.id}
                  className={`playlist-item ${activeEpisode === episode.id ? 'active' : ''}`}
                  onClick={() => handleEpisodeClick(episode.videoId, episode.id)}
                >
                  <div className="playlist-item-thumbnail">
                    <img
                      src={`https://img.youtube.com/vi/${episode.videoId}/mqdefault.jpg`}
                      alt={episode.title}
                    />
                    <div className="playlist-item-duration">{episode.duration}</div>
                  </div>
                  <div className="playlist-item-info">
                    <h3>{episode.title}</h3>
                    <p className="playlist-item-date">{episode.date}</p>
                    <p className="playlist-item-guest">Guest: {episode.guests}</p>
                    <p className="playlist-item-description">{episode.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EpisodesPage
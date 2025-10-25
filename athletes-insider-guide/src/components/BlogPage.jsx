import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { client, urlFor } from '../sanityClient'
import './BlogPage.css'

function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'training', label: 'Training' },
    { value: 'nutrition', label: 'Nutrition' },
    { value: 'recovery', label: 'Recovery' },
    { value: 'mental', label: 'Mental Performance' },
    { value: 'research', label: 'Research' }
  ]

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "blogPost"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          author,
          mainImage,
          publishedAt,
          excerpt,
          categories
        }`
        
        const data = await client.fetch(query)
        setPosts(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.categories?.includes(selectedCategory))

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  if (loading) {
    return (
      <div className="blog-page">
        <div className="loading">Loading posts...</div>
      </div>
    )
  }

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>Blog</h1>
          <p className="hero-subtitle">
            In-depth articles, research breakdowns, and training insights
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="blog-filters">
        <div className="filters-container">
          {categories.map(category => (
            <button
              key={category.value}
              className={`filter-button ${selectedCategory === category.value ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="blog-container">
          {filteredPosts.length === 0 ? (
            <div className="no-posts">
              <p>No posts found in this category.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {filteredPosts.map(post => (
                <Link 
                  to={`/blog/${post.slug.current}`} 
                  key={post._id}
                  className="blog-card"
                >
                  <div className="blog-card-image">
                    {post.mainImage ? (
                      <img 
                        src={urlFor(post.mainImage).width(600).height(400).url()} 
                        alt={post.title}
                      />
                    ) : (
                      <div className="blog-card-placeholder">No Image</div>
                    )}
                  </div>
                  <div className="blog-card-content">
                    {post.categories && post.categories.length > 0 && (
                      <div className="blog-card-categories">
                        {post.categories.map(cat => (
                          <span key={cat} className="blog-card-category">
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2>{post.title}</h2>
                    <div className="blog-card-meta">
                      <span className="blog-card-author">{post.author}</span>
                      <span className="blog-card-date">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                    {post.excerpt && (
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                    )}
                    <span className="read-more">Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default BlogPage
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { client, urlFor } from '../sanityClient'
import { PortableText } from '@portabletext/react'
import './BlogPostPage.css'

function BlogPostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "blogPost" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          author,
          mainImage,
          publishedAt,
          excerpt,
          body,
          categories
        }`
        
        const data = await client.fetch(query, { slug })
        setPost(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching post:', error)
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const components = {
    types: {
      image: ({value}) => (
        <div className="post-image">
          <img 
            src={urlFor(value).width(800).url()} 
            alt={value.alt || 'Blog post image'} 
          />
        </div>
      )
    },
    block: {
      h1: ({children}) => <h1 className="post-h1">{children}</h1>,
      h2: ({children}) => <h2 className="post-h2">{children}</h2>,
      h3: ({children}) => <h3 className="post-h3">{children}</h3>,
      normal: ({children}) => <p className="post-paragraph">{children}</p>,
    },
    marks: {
      link: ({value, children}) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
        return (
          <a 
            href={value?.href} 
            target={target} 
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className="post-link"
          >
            {children}
          </a>
        )
      }
    }
  }

  if (loading) {
    return (
      <div className="blog-post-page">
        <div className="loading">Loading post...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="post-not-found">
          <h1>Post Not Found</h1>
          <Link to="/blog" className="back-link">← Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-post-page">
      <article className="blog-post">
        <Link to="/blog" className="back-link">← Back to Blog</Link>
        
        {/* Post Header */}
        <header className="post-header">
          {post.categories && post.categories.length > 0 && (
            <div className="post-categories">
              {post.categories.map(cat => (
                <span key={cat} className="post-category">{cat}</span>
              ))}
            </div>
          )}
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span className="post-author">By {post.author}</span>
            <span className="post-date">{formatDate(post.publishedAt)}</span>
          </div>
        </header>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="post-featured-image">
            <img 
              src={urlFor(post.mainImage).width(1200).url()} 
              alt={post.title}
            />
          </div>
        )}

        {/* Post Body */}
        <div className="post-body">
          <PortableText 
            value={post.body} 
            components={components}
          />
        </div>
      </article>
    </div>
  )
}

export default BlogPostPage
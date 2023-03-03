import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PostLists = () => {
  const posts = useSelector((state) => state.posts)

  const renderedPosts = posts.map((item) => {
    return (
      <article className="post-excerpt" key={item.id}>
        <h3>{item.title}</h3>
        <p className="post-content">{item.content.substring(0, 100)}</p>
        <Link to={`/posts/${item.id}`} className="button muted-button">
          View Post
        </Link>
      </article>
    )
  })

  return (
    <section className="posts-lists">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostLists

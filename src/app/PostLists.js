import { useSelector } from 'react-redux'

const PostLists = () => {
  const posts = useSelector((state) => state.posts)

  const renderedPosts = posts.map((item) => {
    return (
      <article className="post-excerpt" key={item.id}>
        <h3>{item.title}</h3>
        <p className="post-content">{item.content.substring(0, 100)}</p>
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

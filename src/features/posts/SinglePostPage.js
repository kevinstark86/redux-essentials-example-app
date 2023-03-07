import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectPostsById } from './postSlice'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButton'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) => selectPostsById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post Not Found!!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user} />
        <TimeAgo timeStamp={post.date} />
        <ReactionButtons post={post} />
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`}>Edit Post</Link>
      </article>
    </section>
  )
}

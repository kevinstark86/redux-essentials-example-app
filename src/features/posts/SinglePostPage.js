import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButton'
import { useGetSinglePostQuery } from '../api/apiSlice'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const {
    data: post,
    isFetching,
    isSuccess,
    isError,
  } = useGetSinglePostQuery(postId)

  let content

  const components = {
    loading: <Loading text="Loading..." />,
    error: <Error text="Post Not Found!!" />,
  }

  if (isError) {
    return <>{components['error']}</>
  }
  if (isFetching) {
    return <>{components['loading']}</>
  } else if (isSuccess) {
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
  return <section>{content}</section>
}

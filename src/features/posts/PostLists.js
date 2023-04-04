import React from 'react'
import { Spinner } from '../../components/Spinner'

import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButton'

import { useGetPostQuery } from '../api/apiSlice'

let PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <PostAuthor userId={post.user} />
      <TimeAgo timeStamp={post.date} />
      <ReactionButtons post={post} />
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  )
}

const PostLists = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostQuery()

  let content

  if (isLoading) {
    content = <Spinner text="Loading..." />
  } else if (isSuccess) {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))

    content = orderedPosts.map((post) => {
      return <PostExcerpt key={post.id} post={post} />
    })
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <section className="posts-lists">
      <h2>Posts</h2>
      {content}
    </section>
  )
}

export default PostLists

import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useGetSinglePostQuery, useEditPostMutation } from '../api/apiSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params
  const { data: post } = useGetSinglePostQuery(postId)
  const [updatePost] = useEditPostMutation()

  const [title, setTitle] = useState(post.title || null)
  const [content, setContent] = useState(post.content)

  const history = useHistory()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const onSavePostClicked = async () => {
    await updatePost({ id: postId, title, content })
    history.push(`/posts/${postId}`)
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}

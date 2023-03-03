import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
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
        <button type="button">Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm

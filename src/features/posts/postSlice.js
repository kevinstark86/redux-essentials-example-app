import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    id: '1',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    user: '',
    title: 'First Post!',
    content: 'Hello!',
  },
  {
    id: '2',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    user: '',
    title: 'Second Post!',
    content: 'More Content',
  },
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    /****** Refactored with prepare below ****/
    /* postAdded(state, action) {
      state.push(action.payload)
    }, */
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        }
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { postAdded, postUpdated } = postSlice.actions
export default postSlice.reducer

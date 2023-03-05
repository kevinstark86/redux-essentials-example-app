import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import AddPostForm from './features/posts/AddPostForm'
import PostLists from './features/posts/PostLists'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostsForm'

import { Navbar } from './app/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostLists />
              </>
            )}
          />

          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App

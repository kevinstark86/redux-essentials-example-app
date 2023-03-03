import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import AddPostForm from './features/posts/AddPostForm'
import PostLists from './app/PostLists'
import { SinglePostPage } from './features/posts/SinglePostPage'

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
          <Redirect to="/" />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App

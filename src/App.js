import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import { Provider } from 'react-redux';
import Posts from "./components/Posts.jsx";
import PostForm from "./components/PostForm.jsx";
import Counter from "./components/Count.jsx";
import Register from "./components/Register.jsx";
import store from "./store"




function App() {
  return (
    <Router>
      <Provider store={store}>
          <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>            
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/posts">
              <PostForm />
              <Posts />
            </Route>
            <Route exact path="/counter">
              <Counter />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            {/* <Route path="/">
              <Home />
            </Route> */}
          </Switch>
        </div>
      </Provider>
      </Router>
  );
}

export default App;

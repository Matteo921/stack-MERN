import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import SinglePost from './components/pages/SinglePost/SinglePostPage';
import AddPost from './components/pages/AddPost/AddPostPage';
class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact components={Home} />
          <Route path="/posts" exact components={Posts} />
          <Route path="/contact" exact components={Contact} />
          <Route path="/singlepost" exact components={SinglePost} />
          <Route path="/addpost" exact components={AddPost} />
          <Route components={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

};

export default App;
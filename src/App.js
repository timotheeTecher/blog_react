//Libraries
import React from 'react';
import './App.module.css';
import { Routes, Route, Switch } from 'react-router-dom';

//Components
import Layout from './HOC/Layout/Layout';
import Home from './Containers/Home/Home';
import Articles from './Containers/Articles/Articles';
import Article from './Containers/Articles/Article/Article';
import Contact from './Containers/Contact/Contact';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/articles" element={<Articles/>} />
            <Route path="/articles/article" element={<Article/>} />
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

//Libraries
import React from 'react';
import classes from './App.module.css';
import { Routes, Route } from 'react-router-dom';

//Components
import Layout from './HOC/Layout/Layout';
import Home from './Containers/Home/Home';
import Articles from './Containers/Articles/Articles';
import Contact from './Containers/Contact/Contact';

const App = () => {
  return (
    <div className={classes.App}>
      <Layout>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/articles" element={<Articles/>} />
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

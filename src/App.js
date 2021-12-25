//Libraries
import React from 'react';
import classes from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import routes from "./routes";

//Components
import Layout from './HOC/Layout/Layout';
import Home from './Containers/Home/Home';
import Articles from './Containers/Articles/Articles';
import Article from './Containers/Articles/Article/Article';
import Contact from './Containers/Contact/Contact';
import Add from "./Containers/Admin/Add/Add";

const App = () => {
  return (
    <div className={classes.App}>
      <Layout>
        <Routes>
            <Route path={routes.HOME} element={<Home/>} />
            <Route path={routes.ARTICLES} element={<Articles/>} />
            <Route path={routes.CONTACT} element={<Contact/>}>
              <Route path="email" element={<p>Email</p>}/>
              <Route path="telephone" element={<p>Téléphone</p>}/>            
            </Route>
            <Route path={routes.ARTICLES + "/:id"} element={<Article/>}/>
            <Route path={routes.ADD} element={<Add/>}/>
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

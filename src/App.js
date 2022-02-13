//Libraries
import React, { useState, useEffect } from 'react';
import classes from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import routes from "./config/routes";
import fire from "./config/firebase";

//Components
import Layout from './HOC/Layout/Layout';
import Home from './Containers/Home/Home';
import Articles from './Containers/Articles/Articles';
import Article from './Containers/Articles/Article/Article';
import Contact from './Containers/Contact/Contact';
import ManageArticle from './Containers/Admin/ManageArticle/ManageArticle';
import Authentification from './Containers/Security/Authentification/Authentification';

const App = () => {

  //State
  const [user, setUser] = useState("");

  //ComponentDidMount
  useEffect(() => {
    authListener();
  }, []);

  //Methods
  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  return (
    <div className={classes.App}>
      <Layout user={user}>
        <Routes>
            <Route path={routes.HOME} element={<Home/>} />
            <Route path={routes.ARTICLES} element={<Articles/>} />
            <Route path={routes.CONTACT} element={<Contact/>}>
              <Route path="email" element={<p>john.doe@gmail.com</p>}/>
              <Route path="telephone" element={<p>06 92 20 96 68</p>}/>            
            </Route>
            <Route path={routes.ARTICLES + "/:slug"} element={<Article user={user}/>}/>
            {user ? <Route path={routes.MANAGE_ARTICLE} element={<ManageArticle/>}/> : null}
            {!user ? <Route path={routes.AUTHENTIFICATION} element={<Authentification/>}/> : null}
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { 
    HomeScreen,
    AboutScreen, 
    PostScreen,
    ProjectScreen,
    SinglePostScreen,
    ContactScreen
  } from "../../screens/index";
  import { Navbar } from '../index'


export const Navigation = () => (
    <BrowserRouter>
      <Navbar />
      <Switch>
        < Route component={HomeScreen} exact path='/' />
        < Route component={AboutScreen} path='/about' />
        < Route component={SinglePostScreen} path='/post/:slug' />
        < Route component={PostScreen} path='/post' />
        < Route component={ProjectScreen} path='/project' />
        < Route component={ContactScreen} path='/contact' />

      </Switch>
    </BrowserRouter>
  );

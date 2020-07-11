/*

-import react everytime
-import components
-div className= is used link to css
-components used as like <Tweet />
-props added to components as like "name="heath"
-to use javascript inside of html....need {}


*/

import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav'
import {MovieProvider} from './MovieContext';
import AddMovie from './addMovie';


function App() {

  return (
    <MovieProvider>
      <div className="app">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;

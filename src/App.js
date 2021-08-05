import React from 'react';
import logo from './logo.svg';
import Header from "./pages/header";
import Navbar from "./pages/navbar";
import Homebanner from "./pages/homebanner";
import Aboutus from "./pages/about"
import Whatwedo from "./pages/whatwedo";
import AMBIC from "./pages/ambicmodel";
import Counting from "./pages/counting";
import ProductandServices from "./pages/product";
import Award from "./pages/award";
import Footor from "./pages/footor"

import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       <Navbar />
       <Homebanner />
       <Aboutus />
       <Whatwedo />
       <AMBIC />
       <Counting />
       <ProductandServices />
       <Award />
       <Footor />

      </header>
    </div>
  );
}

export default App;

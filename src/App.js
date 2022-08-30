// Importing frameworks and programs
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/App.css';
// import {Route, HashRouter as Router, Routes, HashRouter} from 'react-router-dom';
//Importing component 
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


//Connect to ApolloClient
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

//the code above line 22 seems to be correct


//These routes need to be created, this area is a work in progress
function App() {
  return (

      <ApolloProvider client={client}>
      <Router baseline="/">
            <Routes>
              {/* The route for about me/homepage  */}
              <Route
              path= "/portfolio2"
              element={<Home/>}
               />

              {/* The route for the portfolio section */}
              <Route 
              path= "/portfolio2/portfolio"
              element={<Portfolio/>}
               />

              {/* the path for the contact section */}
              <Route path="/portfolio2/contact"
              element={<Contact/>} />

            </Routes>

      </Router>

  
   </ApolloProvider> 
  
  );
}

export default App;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';



export default function Home () {               
    return (
        <div>
         
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Volkhov&display=swap" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Header />
            <About />
            <Footer />
        </div>
);
}
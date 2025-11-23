import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import '../scss/main.scss';
import DataScienceAssignment from "./components/DataScienceAssignment";


function App(){
    return(
        <>
           <Navbar/>
           <Hero/>
           <About/>
           <Services/>
           <DataScienceAssignment />
           <Projects/>
           {/* <Testimonials/> */}
           <Footer/>
        </>
   )
}
export default App;
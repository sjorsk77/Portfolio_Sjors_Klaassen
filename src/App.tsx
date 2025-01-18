import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {Home} from "./Pages/Home";
import {PageNotFound} from "./Pages/PageNotFound";
import {NavBar} from "./Components/NavBar";
import {Footer} from "./Components/Footer";
import {ThemeProvider} from "./Components/ThemeContext";
import {Contact} from "./Pages/Contact";
import {About} from "./Pages/About";

const App: React.FC = () => {
  return (
      <div className='flex px-0 md:px-20 flex-col min-h-screen bg-white dark:bg-gray-900 dark:text-white font-montserrat'>
          <ThemeProvider>
              <Router>
                  <NavBar />
                  <div className='flex-grow flex'>
                      <Routes>
                          <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/contact" element={<Contact/>} />
                          <Route path="*" element={<PageNotFound />} />
                      </Routes>
                  </div>
                  <Footer />
              </Router>
          </ThemeProvider>
      </div>
  );
}

export default App;

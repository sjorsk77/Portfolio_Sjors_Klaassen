import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { PageNotFound } from './Pages/PageNotFound';
import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';
import { ThemeProvider } from './Components/ThemeContext';
import { pages } from './Data/Pages';
import {ContactButton} from "./Components/Contact/ContactButton";
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

const App: React.FC = () => {


    return (
        <div className='flex px-5 md:px-20 flex-col min-h-screen bg-white dark:bg-gray-900 dark:text-white font-montserrat gap-y-10'>
            <ThemeProvider>
                <Router>
                    <NavBar />
                    <div className='flex-grow flex'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                {pages.map((page) => (
                                    <Route key={page.path} path={page.path} element={page.component} />
                                ))}
                            </Routes>
                        </Suspense>
                    </div>
                    <ContactButton />
                    <Footer />
                </Router>
            </ThemeProvider>
        </div>
    );
};

export default App;
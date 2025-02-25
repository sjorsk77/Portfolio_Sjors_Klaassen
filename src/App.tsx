import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';
import { ThemeProvider } from './Components/ThemeContext';
import { pages } from './Data/Pages';
import {ContactButton} from "./Components/Contact/ContactButton";
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

const App: React.FC = () => {


    return (
        <div>
        <div className='flex overflow-x-hidden justify-between px-5 md:px-20 flex-col min-h-screen bg-[#EEF2FF] dark:bg-gray-900 dark:text-white font-montserrat gap-y-10'>
            <ThemeProvider>
                <Router>
                    <NavBar />
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                {pages.map((page) => (
                                    <Route key={page.path} path={page.path} element={page.component} />
                                ))}
                            </Routes>
                        </Suspense>

                    <Footer />
                </Router>
            </ThemeProvider>
        </div>
            <ContactButton />
        </div>
    );
};

export default App;
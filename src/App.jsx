import React, { useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import CarouselSwiper from './components/CarouselSwiper';
import Services from './components/Services';
import Spacer from './components/Spacer';
import FeaturedCards from './components/FeaturedCards';
import './App.css';
import './custom.scss';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode';
  }, [theme]);

  return (
    <>
        <Header />
        <CarouselSwiper />
        <Spacer />
        <FeaturedCards />
        <Services />
    </>
  )
}

export default App;

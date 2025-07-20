import Header from '../components/Header'
import HeroSection from '../components/HeroSection';
import ForecastSection from '../components/ForecastSection';
import { useRef } from 'react';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {

    const forecastRef = useRef(null);

    return (
        <>
            <Header />
            <HeroSection forecastRef={forecastRef} />
            <ForecastSection forecastRef={forecastRef} />
            <ScrollToTop />
        </>
    )
}
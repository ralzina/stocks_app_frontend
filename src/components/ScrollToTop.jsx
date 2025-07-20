import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setShow(window.scrollY > window.innerHeight / 4);
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return show ? (
        <button
            onClick={scrollToTop}
            className="fixed bottom-10 right-15 z-50 w-12 h-12 rounded-full border-2 border-transparent hover:border-gray-700 transition duration-200 transform"
        >
            <span className="text-2xl text-gray-700">↑</span>
        </button>
    ) : null;
};

function HeroSection({ forecastRef }) {

    const handleScroll = () => {
        forecastRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="w-full h-screen bg-gray-100 relative px-4">
            <div className="h-full flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-6xl font-light leading-snug text-gray-700">
                Predict Smarter. Invest Brighter.
                </h1>
            </div>
            
    
            <button onClick={handleScroll} className=" w-12 h-12 rounded-full border-2 border-transparent hover:border-gray-700 transition duration-200 absolute left-1/2 bottom-30 transform -translate-x-1/2" aria-label="Scroll Down">
                <span className="text-2xl text-gray-700">↓</span>
            </button>
        </section>
    );
}

export default HeroSection;
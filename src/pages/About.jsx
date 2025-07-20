import Header from '../components/Header'
import { useRef } from 'react';
import ScrollToTop from '../components/ScrollToTop';

export default function About() {
    const scrollRef = useRef(null);

    const handleScroll = () => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Header />
            <section className="w-full h-screen bg-gray-100 relative px-4">
                <div className="h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-light leading-snug text-gray-700">
                        About
                    </h1>
                    <p className="text-center sm:text-lg text-gray-500 mt-4">
                            A quick overview of the motivation, process, challenges, and purpose.
                    </p>

                    <blockquote className="text-center text-base sm:text-lg italic text-gray-400 px-4 mt-15">
                        “Projects like these are how I turn curiosity into creation.”
                    </blockquote>
                </div>
                <button onClick={handleScroll} className=" w-12 h-12 rounded-full border-2 border-transparent hover:border-gray-700 transition duration-200 absolute left-1/2 bottom-30 transform -translate-x-1/2" aria-label="Scroll Down">
                    <span className="text-2xl text-gray-700">↓</span>
                </button>
            </section>


                    <section ref={scrollRef} className="bg-white mt-20 min-h-screen w-[100vw] px-10 sm:px-40 pb-30 pt-30">
                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-light text-gray-600 text-center">
                                Why I Chose This Project
                            </h2>
                            <p className="leading-relaxed text-gray-500 text-center">
                                I wanted to explore my interests in both software development and data science, and I used my curiosity for the intersection of finance and technology, particularly how machine learning can be applied to stock market predictions to create a project that predicted future stock data from any publicly traded company. This project allowed me to dive deep into data analysis and algorithm development.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-light text-gray-600 mt-15 text-center">
                                How I Built It
                            </h2>
                            <p className="leading-relaxed text-gray-500 text-center">
                                I built this project using a combination of Python for the backend that handles data processing and machine learning, and React for the frontend. 
                                The backend is powered by FastAPI, which gets data through yfinance and uses machine learning libraries to create models that predict stock prices.
                                The Time Series uses tensorflow, the Decision Tree uses scikit-learn, and the MonteCarlo Simulation uses numpy for normal distribution and random sampling.
                                <br></br><br></br>The frontend is a React application that fetches data from the backend and displays it in a user-friendly manner. I used Tailwind CSS for styling to ensure a responsive and modern design that adapts to different screen sizes.
                                I also used BrowserRouter to better handle the creation of pages and components for my application.
                                In the Contact Form, I used Emailjs to handle sending emails to myself when users submit their information.
                                <br></br><br></br>
                                I used AI to guide me through the creation of the project as there were many things that were new to me and needed help with understanding. I used it to help me understand how to use the libraries, how to structure the code, and how to debug issues that arose during development.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-light text-gray-600 mt-15 text-center">
                                Limitations
                            </h2>
                            <p className="leading-relaxed text-gray-500 text-center">
                                While the model provides insights based on historical data, it is important to note that stock market predictions are inherently uncertain. The model's accuracy can vary based on market conditions and external factors.
                                <br></br><br></br>This is also my first time ever working with Machine Learning including Time Series, Decision Trees, and MonteCarlo Simulations. I know that my individual research isn't enough to provide the best results, and I
                                must mention that the decision tree was the model that most poorly performed as it has very high accuracy but always predicts to Sell the stock. The other two models make more sense to me.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-light text-gray-600 mt-15 text-center">
                                Purpose and Future
                            </h2>
                            <p className="leading-relaxed text-gray-500 text-center">
                                The purpose of this project is to provide a tool for individuals interested in stock market analysis and predictions. In the future, I would like to formally learn each model as well as other features I could implement.
                                Having a quick way to not only look at stock data, but also to get predictions based on historical data through complex models would save a lot of time and effort when doing market research.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-light text-gray-600 mt-15 text-center">
                                More About Me
                            </h2>
                            <p className="leading-relaxed text-gray-500 text-center">
                                If you think this project was interesting and/or want to know more about my work, feel free to check out my portfolio website!
                            </p>
                            <div className="flex justify-center mt-5">
                                <a
                                    href="http://www.renealzina.me"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-3 py-1 rounded-md bg-transparent text-blue-800 hover:text-white hover:bg-blue-800 text-center transition duration-300"
                                >
                                    www.renealzina.me
                                </a>
                            </div>
                        </div>
                    </section>
            <ScrollToTop />
        </>
    )
}
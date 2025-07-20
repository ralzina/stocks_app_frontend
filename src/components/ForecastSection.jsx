import axios from 'axios';
import TimeSeriesLineChart from '../components/TimeSeriesLineChart';
import MonteCarloHistogram from '../components/MonteCarloHistogram';
import MonteCarloChart from '../components/MonteCarloChart';
import React, { useState } from 'react';

export default function ForecastSection({ forecastRef }){
    const [ticker, setTicker] = useState('');
    const [period, setPeriod] = useState('1y');
    const [days, setDays] = useState(30);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);
    const [fetchedTicker, setFetchedTicker] = useState('');

    const fetchStockData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get('https://stocks-app-backend-kjmc.onrender.com/stockdata', {
                params: { ticker, period, days}
            });
            setFetchedTicker(ticker);
            setResult(response.data);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch stock data.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <section ref={forecastRef} className="min-h-screen pt-30 px-4 sm:px-6 bg-white">
            <h1 className="text-3xl font-light text-gray-700 mb-8 ml-20">Stock Predictor</h1>

            <div className="flex flex-row sm:flex-col justify-center items-center gap-4 sm:gap-0 mr-20 sm:mr-0 ">
                <div className="flex flex-col sm:flex-row gap-0 sm:items-center items-center">
                    <p className="w-40 sm:w-28 h-10 flex items-center justify-end sm:justify-center text-sm">
                        Ticker
                    </p>
                    <p className="w-40 sm:w-28 h-10 flex items-center justify-end sm:justify-center text-sm">
                        Days
                    </p>
                    <p className="w-40 sm:w-28 h-10 flex items-center justify-end sm:justify-center text-sm">
                        History
                    </p>
                </div>    
                <div className="flex flex-col sm:flex-row gap-0 sm:items-start items-center">
                    <input
                        type="text"
                        placeholder="Ticker"
                        className="w-40 sm:w-28 h-10 border border-gray-700 text-center"
                        value={ticker}
                        onChange={(e) => setTicker(e.target.value.toUpperCase())}
                    />
                    <input
                        type="number"
                        placeholder="Days"
                        className="w-40 sm:w-28 h-10 border border-gray-700 text-center"
                        value={days}
                        onChange={(e) => setDays(Number(e.target.value))}
                    />
                    <input
                        type="text"
                        placeholder="Period"
                        className="w-40 sm:w-28 h-10 border border-gray-700 text-center"
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                    />
                </div>
            </div>            

            <button
                onClick={fetchStockData}
                disabled={loading || !ticker || !period}
                className="cursor-pointer block mx-auto w-auto px-6 py-2 rounded-md border border-transparent bg-gray-700 text-gray-100 hover:bg-gray-100 hover:text-gray-700 hover:border-gray-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-4">
                {loading ? 'Loading...' : 'Fetch Stock Data'}
            </button>

            {error && <p className="text-center text-red-500 mt-15">{error}</p>}

            {result && (
                <div className="mt-10 mx-20">
                    <h1 className="text-3xl font-light text-gray-700">Results for {fetchedTicker}</h1>

                    <h2 className="text-2xl font-light text-gray-700 mt-8">Time Series</h2>

                    <p className="font-light text-gray-700 mt-3">MAPE: {result.ts_mape?.toFixed(2)}%</p>
                    <div className="w-full flex justify-center items-center mt-5">
                        <TimeSeriesLineChart data={result.ts_forecast} />
                    </div>

                    <h2 className="text-2xl font-light text-gray-700 mt-8">MonteCarlo Simulations</h2>
                    <p className="font-light text-gray-700 mt-3">Histogram of simulated prices at day {days}</p>
                    <div className="w-full flex justify-center items-center mt-3">
                        <MonteCarloHistogram data={result.mc_histogram} />
                    </div>
                    <p className="font-light text-gray-700 mt-3">Mean MonteCarlo Forecast with 5th-95th Percentile Bands over {days} days</p>
                    <div className="w-full flex justify-center items-center mt-3">
                        <MonteCarloChart data={result.mc_simulations} />
                    </div>


                    <h2 className="text-2xl font-light text-gray-700 mt-8">Decision Tree</h2>

                    <p className="font-light text-gray-700 mt-3">Decision Tree Accuracy: {(100 * result.dt_accuracy).toFixed(2)}%</p>
                    <p className="font-light text-gray-700 mt-3 pb-20">Decision Tree Recommendation: {
                        result.dt_prediction === 1 ? 'Buy' :
                        result.dt_prediction === 0 ? 'Hold' :
                        result.dt_prediction === -1 ? 'Sell' :
                        'N/A'
                    }</p>
                </div>
            )}
        </section>
    )
}
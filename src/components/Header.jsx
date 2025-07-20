import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <header className="w-full fixed top-0 z-50 bg-white shadow-md px-6 py-4">
            <nav className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-light text-gray-700 hover:text-blue-800 transition-colors">
                    StockPredict
                </Link>
                <div className="space-x-4">
                    <Link to="/about" className="text-gray-700 hover:text-blue-800 transition-colors">
                        About
                    </Link>
                    <Link to="/contact" className="text-gray-700 hover:text-blue-800 transition-colors">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
};
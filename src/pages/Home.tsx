import { Link } from "react-router-dom";
import { FaLinkedin } from 'react-icons/fa';

function Home() {
    return (
        <>
            {/* Header */}
            <header className="bg-violet-50">
                <div className="container mx-auto flex justify-between items-center px-4 py-4">
                    <div>
                        <h1 className="text-teal-400 text-2xl font-bold">
                            GR<span className="text-amber-300">O</span>SARYLIST
                        </h1>
                    </div>
                    <nav>
                        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center">
                            <li className="hover:text-neutral-600 cursor-pointer">Home</li>
                            <li className="relative group cursor-pointer">
                                <span className="hover:text-neutral-600">Features</span>
                                <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                                    <li>
                                        <Link
                                            to="/catelog"
                                            className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                                        >
                                            Catelog
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link
                                    to="/login"
                                    className="border border-neutral-400 hover:border-neutral-600 rounded-xl px-4 py-1 text-xl hover:text-neutral-600"
                                >
                                    Log in
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Main Section */}
            <main className="bg-[url('/background.png')] bg-center bg-no-repeat bg-cover min-h-screen flex items-center">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 py-10">
                    {/* Text Block */}
                    <div className="max-w-xl text-center lg:text-left">
                        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
                            Simplify Your Shopping <br /> Routine
                        </h2>
                        <p className="text-base sm:text-lg">
                            Create your list once, reuse it forever. <br />
                            Access your groceries on any device, whenever you need them.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
                            <Link to='/register'>
                                <button className="bg-teal-400 hover:bg-teal-300 text-white font-medium rounded px-6 py-2 w-full sm:w-auto">
                                    Get Started Free
                                </button>
                            </Link>
                            <Link to='/register'>
                                <button className="bg-teal-400 hover:bg-teal-300 text-white font-medium rounded px-6 py-2 w-full sm:w-auto">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-violet-50">
                <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-center sm:text-left">
                        &copy; 2025 TindimaICTResources. <span>All rights reserved.</span> <span><Link to='/privacy' className="hover:text-blue-600">Terms and Privacy</Link></span>
                    </p>

                    <Link
                        to="https://www.linkedin.com/in/ndima-mhangwani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                    >
                        <FaLinkedin className="text-2xl" />
                    </Link>
                </div>
            </footer>
        </>
    );
}

export default Home;

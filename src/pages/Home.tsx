import { Link } from "react-router";
import {FaLinkedin} from 'react-icons/fa';

function Home() {
    return (

        <>
            <header>
                <div className="flex gap-10 h-10 bg-violet-50">
                    <div>
                        <ul>
                            <li className="text-teal-400 text-2xl">GR<span className="text-amber-300">O</span>SARYLIST</li>
                        </ul>
                    </div>
                    <div className="ml-350">
                        <ul className="flex gap-10  ">

                            <li className="hover:text-neutral-600 cursor-pointer">Home</li>
                            <li className="hover:text-neutral-600 cursor-pointer">Features</li>
                            <li className="border-1 hover:border-neutral-600 rounded-xl w-27 h-8"><Link to="/login" className="ml-5 text-xl hover:text-neutral-600">Log in</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            <main className="bg-[url('/background.png')] bg-cover bg-center h-screen">
                dgh
                <div className="flex mt-50 ml-50">
                    <div >
                        <h2 className="font-bold text-4xl ">Simplify Your Shopping <br /> Routine</h2>
                        <p className="">Create your list once, reuse it forever. <br />
                            Access your groceries on any device, whenever <br /> you need them.</p>
                    </div>
                    <div className="flex gap-10 mt-25 ml-150">
                        <div> <button className="bg-teal-400 hover:bg-teal-300 rounded w-35 h-10 cursor-pointer"><Link to='/register'>Get Started Free</Link></button></div>
                        <div><button className=" bg-teal-400 hover:bg-teal-300 rounded w-35 h-10 cursor-pointer"><Link to='/register'>Learn More</Link></button></div>
                    </div>
                </div>
            </main>
            <footer>
            <div className="flex gap-10 h-10 bg-violet-50">
                <div className="ml-200 flex">
                    <p>&copy; 2025 TindimaICTResources. <span className="">All right reserved.</span></p>
                    <p className="mt-1"><Link to='https://www.linkedin.com/in/ndima-mhangwani'><FaLinkedin className="text-blue-600 text-2xl"/></Link></p>
                </div>
            </div>
            </footer>
        </>
    );
}
export default Home;

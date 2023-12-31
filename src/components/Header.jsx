/* eslint-disable react/prop-types */
import logo from "../assets/logo.webp"
import smLogo from "../assets/logo-sm.webp"
import base from "../assets/base.png"
import Navbar from "./Navbar"
// import ToggleButton from "./ToggleButton"

const Header = ({ darkTheme, setDarkTheme }) => {
    return (
        <>
            <header className="bg-white w-full px-4 h-14 py-2.5 dark:bg-[#1b204b]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="mr-6 xl:w-40 w-8">
                            <a href="/">
                                <img src={logo} alt="Logo With Text" className="xl:block hidden" style={{ width: "160px" }} />
                                <img src={smLogo} alt="Mobile Logo" className="xl:hidden block" width={35} />
                            </a>
                        </div>
                        <div className="hidden lg:block">
                            <Navbar />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="mx-1 mr-2 hidden xl:block">
                            <a href="#" className="flex items-center">
                                <img src={smLogo} alt="Mobile Logo" width={24} />
                                <span className="text-base text-[#06f] ml-1 font-medium dark:text-white bg">$0.021</span>
                            </a>
                        </div>
                        <div className="mx-1 mr-2">
                            <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-normal w-10">
                                {!darkTheme ? (
                                    <span className="bg-slate-50 border text-yellow-500 px-3 py-2.5 rounded-1/2">
                                        <i className="fa-regular fa-sun"></i>
                                    </span>
                                ) : (
                                    <span className="bg-slate-700 border border-[#06f] text-[#06f] px-3 py-2 rounded-1/2">
                                        <i className="fa-regular fa-moon"></i>
                                    </span>
                                )}
                            </button>
                        </div>
                        <div className="bg-indigo-100 dark:bg-gray-900 rounded-md mx-1 mr-2">
                            <a href="#" className="flex items-center hover:opacity-60 sm:pr-1">
                                <img src={base} alt="Mobile Logo" width={32} />
                                <span className="text-[#06f] dark:text-white px-2 py-1 pr-3 font-medium md:block sm:hidden">Base</span>
                            </a>
                        </div>
                        <div className="mx-1">
                            <a href="#" className="bg-[#06f] h-8 inline-flex items-center text-white dark:text-[#0d111f] text-center px-4 rounded-md hover:opacity-75 font-semibold text-base" style={{ lineHeight: 1 }}>
                                <span className="lg:block md:block hidden"> Connect Wallet </span>
                                <span className="lg:hidden md:hidden block"> Connect </span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

import logo from "../assets/logo.webp"
import smLogo from "../assets/logo-sm.webp"
import base from "../assets/base.png"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <>
            <header className="bg-white w-full px-4 h-14 py-2.5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="mr-6">
                            <a href="/" className="flex">
                                <img src={logo} alt="Logo With Text" className="sm:hidden lg:block md:block" width={160} />
                                <img src={smLogo} alt="Mobile Logo" className="lg:hidden md:hidden sm:block" width={32} />
                            </a>
                        </div>
                        <Navbar />
                    </div>
                    <div className="flex items-center" style={{width:"360px"}}>
                        <div className="mx-1 mr-2">
                            <a href="#" className="flex items-center">
                                <img src={smLogo} alt="Mobile Logo" width={24} />
                                <span className="text-base text-[#06f] ml-1 font-medium">$0.021</span>
                            </a>
                        </div>
                        <div className="bg-indigo-100 rounded-md mx-1 mr-2">
                            <a href="#" className="flex items-center hover:opacity-60">
                                <img src={base} alt="Mobile Logo" width={32} />
                                <span className="text-[#06f] px-2 py-1 pr-3 font-medium">Base</span>
                            </a>
                        </div>
                        <div className="mx-1">
                            <a href="#" className="bg-[#06f] text-white text-center px-4 rounded-md hover:opacity-75 font-medium text-lg" style={{ paddingTop: "5px", paddingBottom: "5px" }}> Connect Wallet </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

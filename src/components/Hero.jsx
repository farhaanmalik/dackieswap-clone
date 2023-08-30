import banner from '../assets/bg_banner.jpg'
import base from '../assets/BASE_LOGO.webp'
import SocialLinks from './SocialLinks'

const Hero = () => {
    return (
        <>
            <div className="w-full h-full relative" >
                <div className="w-full overflow-hidden" style={{ height: "86vh" }}>
                    <img src={banner} style={{ width: "100%", }} alt="Bg-Banner" />
                </div>
                <div className="absolute bottom-0 left-0 z-10 w-full h-full">
                    <div className="hero">
                        <div className="max-w-6xl m-auto mb-8 ml-56">
                            <h1 className='text-7xl font-semibold'>
                                <span className='text-[#06f]'>Dackie</span>
                                <span className='text-[#06f]'>Swap</span>
                            </h1>
                            <h2 className='text-3xl mt-8 flex font-medium'>
                                <span>Swap and earn with the most trusted DEX on</span>
                                <span className='px-3'><img src={base} alt="Base Logo" /></span>
                                <span>BASE</span>
                            </h2>
                            <div className="flex items-center mt-8">
                                <SocialLinks />
                                <button>
                                    <a href='#' className='bg-[#ffe600] text-lg px-6 py-2 font-medium shadow-sm shadow-gray-800 hover:opacity-70 w-72' style={{ borderRadius: "16px" }}>Launch App <span className='ml-1'><i className="fa-solid fa-arrow-right"></i></span></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero

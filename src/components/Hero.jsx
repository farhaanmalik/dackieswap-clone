// import banner from '../assets/bg_banner.jpg'
import base from '../assets/BASE_LOGO.webp'
import SocialLinks from './SocialLinks'

const Hero = () => {
    return (
        <>
            <div className="w-full h-full relative" >
                <div className="banner">
                    <div className="absolute bottom-0 left-0 z-10 w-full h-full">
                        <div className="hero">
                            <div className="max-w-6xl m-auto mb-8 xl:ml-44 lg:ml-24 xsm:ml-0 xsm:px-6">
                                <div className='lg:text-7xl md:text-7xl text-5xl font-semibold'>
                                    <span className='text-[#06f]'>Dackie</span>
                                    <span className='text-[#06f]'>Swap</span>
                                </div>
                                <div className='sm:text-3xl xsm:text-2xl sm:mt-8 xsm:mt-4 flex flex-wrap font-semibold leading-8'>
                                    <span>Swap and earn with the most trusted DEX on</span>
                                    <span className='flex px-3 overflow-hidden'>
                                        <div className="w-10">
                                            <img src={base} alt="Base Logo" />
                                        </div>
                                        <span>BASE</span>
                                    </span>
                                </div>
                                <div className="sm:flex sm:items-center xsm:block mt-8">
                                    <SocialLinks />
                                    <button className='sm:mt-0 xsm:mt-10'>
                                        <a href='#' className='bg-[#ffe600] text-lg px-6 py-2 font-medium shadow-sm shadow-gray-800 hover:opacity-70 w-72' style={{ borderRadius: "16px" }}>Launch App <span className='ml-1'><i className="fa-solid fa-arrow-right"></i></span></a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero

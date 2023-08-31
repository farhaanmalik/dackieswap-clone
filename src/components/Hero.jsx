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
                            <div className="max-w-6xl m-auto mb-8 xl:ml-44 lg:ml-24 sm:ml-0 sm:px-6">
                                <div className='lg:text-7xl md:text-7xl text-5xl font-semibold'>
                                    <span className='text-[#06f]'>Dackie</span>
                                    <span className='text-[#06f]'>Swap</span>
                                </div>
                                <div className='md:text-3xl sm:text-2xl md:mt-8 sm:mt-4 flex flex-wrap font-semibold leading-8'>
                                    <span>Swap and earn with the most trusted DEX on</span>
                                    <span className='relative inline-block'>
                                        <div className='flex px-3'>
                                            <div className="w-10">
                                                <img src={base} alt="Base Logo" />
                                            </div>
                                            <span>BASE</span>
                                        </div>
                                    </span>
                                </div>
                                <div className="md:flex sm:items-center sm:block mt-8">
                                    <SocialLinks />
                                    <button className='md:mt-0 sm:mt-10'>
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

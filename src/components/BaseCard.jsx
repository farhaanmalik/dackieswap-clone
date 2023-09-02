import base from '../assets/BASE_LOGO.webp'
import dackie from '../assets/DACKIE_HIDDEN.png'

const BaseCard = () => {
    return (
        <>
            <div className="py-6 m-auto px-6" style={{ maxWidth: "1200px" }}>
                <div className="md:flex block">
                    <div className="md:w-6/12 w-full md:h-auto sm:h-96 relative overflow-hidden bg-white dark:bg-[#0c0f24] cursor-pointer md:mx-3 mx-0 p-6 shadow-[0px_0px_60px_0px_#0000001a] hover:shadow-[0px_0px_15px_0px_#0066ff92] transition-all duration-200 dark:hover:shadow-[0px_0px_15px_0px_#334155]" style={{ borderRadius: "16px" }}>
                        <div className='relative'>
                            <a href='#' className='flex flex-wrap items-center text-4xl font-semibold text-[#06f]'>
                                <span>#1 Native DEX</span>
                                <span className='px-2 flex items-center'>
                                    <div className="w-10">
                                    <img src={base} alt="Base Logo" width={30} />
                                    </div>
                                    <span>on BASE</span>
                                </span>
                                <span className='pl-4 text-xl'><i className="fa-solid fa-up-right-from-square"></i></span>
                            </a>
                            <p className='text-lg py-5 dark:text-white'>DackieSwap allows you to earn more rewards through Concentrated Liquidity Market Maker (CLMM).</p>
                        </div>
                        <div className='absolute top-0 left-0 right-0 my-0 m-auto' style={{ maxWidth: "380px", height:"400px", width: "100%" }}>
                            <img src={dackie} alt="Dackie" style={{ width: "100%", height:"430px" }} />
                        </div>
                        <div className="absolute bottom-5">
                            <a href='#' className='bg-[#ffe600] text-lg px-6 py-2 font-medium shadow-sm shadow-gray-800 hover:opacity-70' style={{ borderRadius: "16px" }}>Add Liquidity <span className='ml-1'><i className="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                    </div>
                    <div className="md:w-6/12 w-full md:mx-3 mx-0 md:mt-0 mt-6">
                        <div className="bg-white dark:bg-[#0c0f24] cursor-pointer p-6 dark:text-white mb-6 shadow-[0px_0px_60px_0px_#0000001a] hover:shadow-[0px_0px_15px_0px_#0066ff92] transition-all duration-200 dark:hover:shadow-[0px_0px_15px_0px_#334155]" style={{ borderRadius: "16px" }}>
                            <div className='flex items-center text-2xl font-semibold dark:text-white text-[#06f]'>
                                <span>Swap</span>
                                <span className='pl-4 text-base'><i className="fa-solid fa-up-right-from-square"></i></span>
                            </div>
                            <p className='text-lg pt-2'>Swap any token on BASE in seconds, just by connecting your wallet.</p>
                        </div>
                        <div className="bg-white dark:bg-[#0c0f24] cursor-pointer p-6 dark:text-white shadow-[0px_0px_60px_0px_#0000001a] hover:shadow-[0px_0px_15px_0px_#0066ff92] transition-all duration-200 dark:hover:shadow-[0px_0px_15px_0px_#334155]" style={{ borderRadius: "16px" }}>
                            <div className='flex items-center text-2xl font-semibold dark:text-white text-[#06f]'>
                                <span>DackiePad</span>
                                <span className='pl-4 text-base'><i className="fa-solid fa-up-right-from-square"></i></span>
                            </div>
                            <p className='text-lg pt-2'>Purchase the most potential gems on BASE.</p>
                        </div>
                        <div className="bg-white dark:bg-[#0c0f24] cursor-pointer p-6 dark:text-white mt-6 shadow-[0px_0px_60px_0px_#0000001a] hover:shadow-[0px_0px_15px_0px_#0066ff92] transition-all duration-200 dark:hover:shadow-[0px_0px_15px_0px_#334155]" style={{ borderRadius: "16px" }}>
                            <div className='flex items-center text-2xl font-semibold dark:text-white text-[#06f]'>
                                <span>NFT Pools</span>
                                <span className='pl-4 text-base'><i className="fa-solid fa-up-right-from-square"></i></span>
                            </div>
                            <p className='text-lg pt-2'>Stake your NFTs to earn exclusive rewards.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BaseCard

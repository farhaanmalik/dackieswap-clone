import base from '../assets/BASE_LOGO.webp'
import dackie from '../assets/DACKIE_HIDDEN.png'

const BaseCard = () => {
    return (
        <>
            <div className="py-6 m-auto" style={{ maxWidth: "1200px" }}>
                <div className="flex">
                    <div className="relative overflow-hidden bg-white cursor-pointer mx-3 p-6 shadow-[0px_0px_60px_0px_#0000001a] hover:shadow-[0px_0px_15px_0px_#0066ff92] transition-all duration-200" style={{ width: "50%", borderRadius: "16px" }}>
                        <div className='relative'>
                            <a href='#' className='flex items-center text-4xl font-semibold text-[#06f]'>
                                <span>#1 Native DEX</span>
                                <span className='px-2'><img src={base} alt="Base Logo" width={30} /></span>
                                <span>on BASE</span>
                            </a>
                            <p className='text-lg py-5'>DackieSwap allows you to earn more rewards through Concentrated Liquidity Market Maker (CLMM).</p>
                        </div>
                        <div className='absolute top-0 left-0 right-0 my-0 m-auto' style={{ maxWidth: "380px", maxHeight: "420px", width: "100%" }}>
                            <img src={dackie} alt="" style={{ width: "100%", maxHeight: "100%" }} />
                        </div>
                        <div className="absolute bottom-5 ">
                            <a href='#' className='bg-[#ffe600] text-lg px-6 py-2 font-medium shadow-sm shadow-gray-800 hover:opacity-70' style={{ borderRadius: "16px" }}>Add Liquidity <span className='ml-1'><i className="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                    </div>
                    <div className="mx-3" style={{ width: "50%" }}>
                        <div className="bg-white cursor-pointer p-6 mb-5 shadow-[0px_0px_60px_0px_#0000001a] hover:shadow-[0px_0px_15px_0px_#0066ff92] transition-all duration-200" style={{ borderRadius: "16px" }}>
                            <div className='flex items-center text-2xl font-semibold text-[#06f]'>
                                <span>Swap</span>
                            </div>
                            <p className='text-lg pt-2'>Swap any token on BASE in seconds, just by connecting your wallet.</p>
                        </div>
                        <div className="bg-white cursor-pointer p-6 shadow-[0px_0px_60px_0px_#0000001a] hover:shadow-[0px_0px_15px_0px_#0066ff92] transition-all duration-200" style={{ borderRadius: "16px" }}>
                            <div className='flex items-center text-2xl font-semibold text-[#06f]'>
                                <span>DackiePad</span>
                            </div>
                            <p className='text-lg pt-2'>Purchase the most potential gems on BASE.</p>
                        </div>
                        <div className="bg-white cursor-pointer p-6 mt-5 shadow-[0px_0px_60px_0px_#0000001a] hover:shadow-[0px_0px_15px_0px_#0066ff92] transition-all duration-200" style={{ borderRadius: "16px" }}>
                            <div className='flex items-center text-2xl font-semibold text-[#06f]'>
                                <span>NFT Pools</span>
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

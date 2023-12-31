import CountUp from 'react-countup';

const Countup = () => {
    return (
        <>
            <div className="mt-20 py-16 lg:pt-~28 pt-10 max-w-6xl m-auto px-5">
                <div className="flex lg:justify-around md:justify-around max-w-5xl m-auto flex-wrap justify-center dark:text-white">
                    <div className="flex flex-col items-center md:mt-5 sm:mt-12 mx-5 md:w-44 sm:w-full">
                        <div className="text-[#06f] dark:text-white font-semibold lg:text-5xl md:text-4xl text-3xl">
                            <span className='px-1'>$</span>
                            <CountUp end={365410144} />
                        </div>
                        <p className='pt-2 text-base'>Trade Volume</p>
                    </div>
                    <hr className='lg:h-10 md:h-6 dark:bg-white bg-[#06f] mt-7 w-px sm:w-0'/>
                    <div className="flex flex-col items-center md:mt-5 sm:mt-12 mx-5 md:w-40 sm:w-full">
                        <div className="text-[#06f] dark:text-white font-semibold lg:text-5xl md:text-4xl text-3xl">
                            <span className='px-1'>$</span>
                            <CountUp end={2071858} />
                        </div>
                        <p className='pt-2 text-base'>Total Value Locked</p>
                    </div>
                    <hr className='lg:h-10 md:h-6 dark:bg-white bg-[#06f] mt-7 w-px sm:w-0'/>
                    <div className="flex flex-col items-center md:mt-5 sm:mt-12 mx-5 md:w-36 sm:w-full">
                        <div className="text-[#06f] dark:text-white font-semibold lg:text-5xl md:text-4xl text-3xl">
                            <span className='px-1'>+</span>
                            <CountUp end={200000} />
                        </div>
                        <p className='pt-2 text-base'>Dackie Community</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Countup

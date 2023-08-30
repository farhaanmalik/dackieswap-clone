import CountUp from 'react-countup';

const Countup = () => {
    return (
        <>
            <div className="mt-20 py-20 pt-28 max-w-6xl m-auto">
                <div className="flex justify-around max-w-5xl m-auto">
                    <div className="flex flex-col items-center w-44">
                        <div className="text-[#06f] font-semibold text-5xl">
                            <span className='px-1'>$</span>
                            <CountUp end={365410144} />
                        </div>
                        <p className='pt-2 text-base'>Trade Volume</p>
                    </div>
                    <hr className='h-10 bg-[#06f] mt-2' style={{ width: "1px" }} />
                    <div className="flex flex-col items-center w-44">
                        <div className="text-[#06f] font-semibold text-5xl">
                            <span className='px-1'>$</span>
                            <CountUp end={2071858} />
                        </div>
                        <p className='pt-2 text-base'>Total Value Locked</p>
                    </div>
                    <hr className='h-10 bg-[#06f] mt-2' style={{ width: "1px" }} />
                    <div className="flex flex-col items-center w-44">
                        <div className="text-[#06f] font-semibold text-5xl">
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

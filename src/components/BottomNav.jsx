
const BottomNav = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full lg:hidden md:block" style={{zIndex: 99}}>
        <div className="w-full bg-white py-2 border border-gray-100">
          <nav>
            <ul className="flex items-center justify-around text-[#06f] font-normal text-xs">
              <li className="group">
                <a className="py-3 rounded-md" href="#">
                  Trade
                </a>
              </li>
              <li className="group">
                <a className="py-3 rounded-md" href="#">
                  Earn
                </a>
                <ul className="absolute bottom-12 left-1 bg-white z-50 text-lg px-3 w-11/12 border border-gray-200 py-1 overflow-hidden hidden group-hover:block transition-block duration-300" style={{ borderRadius: "10px" }}>
                  <li className="py-3 px-3"><a href="#" className="py-3 text-blue-600 w-full">Farms</a></li>
                  <li className="py-3 px-3"><a href="#" className="py-3 text-blue-600 w-full">Pools</a></li>
                  <li className="py-3 px-3"><a href="#" className="py-3 text-blue-600 w-full">NFT Pools</a></li>
                </ul>
              </li>
              <li><a className="py-3 rounded-md" href="#">DackiePad</a></li>
              <li className="group">
                <a className="py-3 rounded-md" href="#">
                  Bridges
                </a>
                <ul className="absolute bottom-12 right-0 bg-white z-50 text-lg px-3 w-11/12 border border-gray-200 py-1 overflow-hidden hidden group-hover:block transition-block duration-300" style={{ borderRadius: "16px" }}>
                  <li className="py-3 px-3 w-full">
                    <a href="#" className="flex justify-between text-blue-600 w-full">
                      <span>BASE Native Bridge</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                  <li className="py-3 px-3 w-full">
                    <a href="#" className="flex justify-between text-blue-600 w-full">
                      <span>Stargate Finance</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                  <li className="py-3 px-3 w-full">
                    <a href="#" className="flex justify-between text-blue-600 w-full">
                      <span>SquidRouter Bridge</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>

                  </li>
                  <li className="py-3 px-3 w-full">
                    <a href="#" className="flex justify-between text-blue-600 w-full">
                      <span>Orbitor Bridge</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                  <li className="py-3 px-3 w-full border-t border-grey-100"><a href="#" className="py-3 text-blue-600 w-full">Wormhole Bridge</a></li>
                </ul>
              </li>
              <li><a className="py-3 rounded-md" href="#">QuackPoints</a></li>
              <li className="group">
                <a className="py-3 rounded-md text-base" href="#">
                  <span><i className="fa-solid fa-ellipsis"></i></span>
                </a>
                <ul className="absolute bottom-12 right-0 bg-white z-50 text-lg px-3 w-11/12 border border-gray-200 py-1 overflow-hidden hidden group-hover:block transition-block duration-300" style={{ borderRadius: "16px" }}>
                  <li className="py-3 px-3 w-full border-b border-grey-100">
                    <a href="#" className="py-3 text-blue-600 w-full">
                      <span>Analytics</span>
                    </a>
                  </li>
                  <li className="py-3 px-3 w-full">
                    <a href="#" className="flex justify-between text-blue-600 w-full">
                      <span>Gecko Terminal</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                  <li className="py-3 px-3 w-full">
                    <a href="#" className="flex justify-between text-blue-600 w-full">
                      <span>DexScreener</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                  <li className="py-3 px-3 w-full">
                    <a href="#" className="flex justify-between text-blue-600 w-full">
                      <span>DefiLlama</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                  <li className="py-3 px-3 w-full">
                    <a href="#" className="flex justify-between text-blue-600 w-full">
                      <span>DeBank</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                  <li className="py-3 px-3 w-full border-t border-grey-100">
                    <a href="#" className="flex justify-between text-blue-600 w-full">
                      <span>Docs</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default BottomNav

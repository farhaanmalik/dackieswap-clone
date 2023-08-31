// import { Link } from "react-router-dom"
const Navbar = () => {

  return (
    <>
      <nav>
        <ul className="flex items-center text-[#06f] font-normal">
          <li className="relative group">
            <a className="py-3 px-4 rounded-md hover:bg-indigo-100" href="">
              Trade
            </a>
            <ul className="absolute top-8 bg-white z-50 w-72 border border-gray-200 py-1 overflow-hidden hidden group-hover:block" style={{ borderRadius: "10px", marginTop: 7 }}>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72"><a href="#" className="text-blue-600 w-full">Swap</a></li>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72"><a href="#" className="text-blue-600 w-full">Liquidity</a></li>
            </ul>
          </li>
          <li className="relative group">
            <a className="py-3 px-4 rounded-md hover:bg-indigo-100" href="">
              Earn
            </a>
            <ul className="absolute top-8 bg-white z-50 w-72 border border-gray-200 py-1 overflow-hidden hidden group-hover:block transition-block duration-300" style={{ borderRadius: "10px", marginTop: 7 }}>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72"><a href="#" className="py-3 text-blue-600 w-full">Farms</a></li>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72"><a href="#" className="py-3 text-blue-600 w-full">Pools</a></li>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72"><a href="#" className="py-3 text-blue-600 w-full">NFT Pools</a></li>
            </ul>
          </li>
          <li><a className="py-3 px-4 rounded-md hover:bg-indigo-100" href="">DackiePad</a></li>
          <li className="relative group">
            <a className="py-3 px-4 rounded-md hover:bg-indigo-100" href="">
              Bridges
            </a>
            <ul className="absolute top-8 bg-white z-50 w-72 border border-gray-200 py-1 overflow-hidden hidden group-hover:block transition-block duration-300" style={{ borderRadius: "16px", marginTop: 7 }}>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72">
                <a href="#" className="flex justify-between text-blue-600 w-full">
                  <span>BASE Native Bridge</span>
                  <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                </a>
              </li>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72">
                <a href="#" className="flex justify-between text-blue-600 w-full">
                  <span>Stargate Finance</span>
                  <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                </a>
              </li>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72">
                <a href="#" className="flex justify-between text-blue-600 w-full">
                  <span>SquidRouter Bridge</span>
                  <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                </a>

              </li>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72">
                <a href="#" className="flex justify-between text-blue-600 w-full">
                  <span>Orbitor Bridge</span>
                  <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                </a>
              </li>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72 border-t border-grey-100"><a href="#" className="py-3 text-blue-600 w-full">Wormhole Bridge</a></li>
            </ul>
          </li>
          <li><a className="py-3 px-4 rounded-md hover:bg-indigo-100" href="">QuackPoints</a></li>
          <li className="relative group">
            <a className="py-3 px-4 rounded-md hover:bg-indigo-100" href="">
              <span><i className="fa-solid fa-ellipsis"></i></span>
            </a>

            <ul className="absolute top-8 bg-white z-50 w-72 border border-gray-200 py-1 overflow-hidden hidden group-hover:block transition-block duration-300" style={{ borderRadius: "16px", marginTop: 7 }}>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72 border-b border-grey-100">
                <a href="#" className="py-3 text-blue-600 w-full">
                  <span>Analytics</span>
                </a>
              </li>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72">
                <a href="#" className="flex justify-between text-blue-600 w-full">
                  <span>Gecko Terminal</span>
                  <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                </a>
              </li>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72">
                <a href="#" className="flex justify-between text-blue-600 w-full">
                  <span>DexScreener</span>
                  <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                </a>
              </li>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72">
                <a href="#" className="flex justify-between text-blue-600 w-full">
                  <span>DefiLlama</span>
                  <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                </a>
              </li>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72">
                <a href="#" className="flex justify-between text-blue-600 w-full">
                  <span>DeBank</span>
                  <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                </a>
              </li>
              <li className="py-3 px-4 hover:bg-indigo-100 w-72 border-t border-grey-100">
                <a href="#" className="flex justify-between text-blue-600 w-full">
                  <span>Docs</span>
                  <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

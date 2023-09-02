
const BottomNav = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full lg:hidden md:block" style={{ zIndex: 99 }}>
        <div className="w-full pt-2 pb-1 bg-white border-t border-gray-300 dark:bg-[#1b204b] dark:border-slate-700">
          <nav>
            <ul className="flex items-center justify-evenly text-[#06f] dark:text-white font-normal" style={{fontSize: 11}}>
              <li className="group">
                <a className="flex items-center flex-col" href="#">
                  <svg viewBox="0 0 24 24" className="text-[#000] fill-[#000] shrink-0 dark:text-[#fff] dark:fill-[#fff] " width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M21.2628 15.8306C21.5556 16.1235 21.5556 16.5983 21.2628 16.8912L18.654 19.5H20.3789C20.7931 19.5 21.1289 19.8358 21.1289 20.25C21.1289 20.6642 20.7931 21 20.3789 21L16.8433 21C16.4291 21 16.0933 20.6642 16.0933 20.25V16.7145C16.0933 16.3002 16.4291 15.9645 16.8433 15.9645C17.2575 15.9645 17.5933 16.3002 17.5933 16.7145V18.4393L20.2021 15.8306C20.495 15.5377 20.9699 15.5377 21.2628 15.8306Z"></path><path d="M2.81293 7.78034C3.10583 8.07323 3.5807 8.07323 3.87359 7.78034L6.48235 5.17158L6.48235 6.89645C6.48235 7.31067 6.81814 7.64645 7.23235 7.64645C7.64656 7.64645 7.98235 7.31067 7.98235 6.89645L7.98235 3.36092C7.98235 3.16201 7.90333 2.97124 7.76268 2.83059C7.62203 2.68994 7.43126 2.61092 7.23235 2.61092L3.69682 2.61092C3.2826 2.61092 2.94682 2.9467 2.94682 3.36092C2.94682 3.77513 3.2826 4.11092 3.69682 4.11092H5.42169L2.81293 6.71968C2.52004 7.01257 2.52004 7.48744 2.81293 7.78034Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.46203 20.5622C8.66377 20.5827 8.86846 20.5932 9.07561 20.5932C12.3893 20.5932 15.0756 17.9069 15.0756 14.5932C18.3893 14.5932 21.0756 11.9069 21.0756 8.59315C21.0756 5.69362 19.0189 3.27448 16.2847 2.71504C15.9185 2.64011 15.5402 2.59853 15.153 2.59363C15.1272 2.5933 15.1014 2.59314 15.0755 2.59314C11.7618 2.59314 9.07549 5.27943 9.07549 8.59314C5.76179 8.59314 3.07549 11.2794 3.07549 14.5931C3.07549 17.5962 5.28172 20.0839 8.16175 20.524C8.26107 20.5392 8.36118 20.5519 8.46203 20.5622ZM5.07549 14.5931C5.07549 12.384 6.86636 10.5931 9.07549 10.5931C9.19246 10.5931 9.30806 10.5981 9.42214 10.6079C10.0255 12.3008 11.3678 13.6431 13.0607 14.2465C13.0705 14.3606 13.0755 14.4762 13.0755 14.5931C13.0755 16.8023 11.2846 18.5931 9.07549 18.5931C6.86636 18.5931 5.07549 16.8023 5.07549 14.5931ZM11.0755 8.59314C11.0755 6.384 12.8664 4.59314 15.0755 4.59314C17.2846 4.59314 19.0755 6.384 19.0755 8.59314C19.0755 10.8023 17.2846 12.5931 15.0755 12.5931C12.8664 12.5931 11.0755 10.8023 11.0755 8.59314Z"></path></svg>
                  <span>Trade</span>
                </a>
              </li>
              <li className="group">
                <a className="flex items-center flex-col" href="#">
                  <svg viewBox="0 0 24 24" className="text-[#000] fill-[#000] shrink-0 dark:text-[#fff] dark:fill-[#fff] " width="20px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.4063 19.9329C12.066 19.9329 12.6742 19.779 13.207 19.5106V21.6632C12.6449 21.8378 12.0415 21.9329 11.4063 21.9329H7.00792C2.52538 21.9329 -0.374267 17.1964 1.66429 13.2043L3.70684 9.20426C4.30576 8.03138 5.25922 7.11243 6.39803 6.55101L5.46396 4.68288C5.08785 3.93066 5.54693 3.02913 6.3765 2.89087L11.6153 2.01773C12.5647 1.8595 13.3292 2.78847 12.9912 3.68962L11.9333 6.51092C13.1087 7.06815 14.094 8.00302 14.7074 9.20426L16.6114 12.9329H14.3657L12.9261 10.1138C12.2427 8.77534 10.8666 7.93292 9.36372 7.93292H9.05047C7.54759 7.93292 6.17153 8.77534 5.48805 10.1138L3.4455 14.1138C2.08646 16.7753 4.01956 19.9329 7.00792 19.9329H11.4063ZM10.6623 4.20415L7.70695 4.69671L8.32504 5.93291H10.014L10.6623 4.20415Z"></path><path d="M14.707 13.9329C14.4309 13.9329 14.207 14.1568 14.207 14.4329V15.4329C14.207 15.7091 14.4309 15.9329 14.707 15.9329H20.707C20.9832 15.9329 21.207 15.7091 21.207 15.4329V14.4329C21.207 14.1568 20.9832 13.9329 20.707 13.9329H14.707Z"></path><path d="M15.207 17.4329C15.207 17.1568 15.4309 16.9329 15.707 16.9329H21.707C21.9832 16.9329 22.207 17.1568 22.207 17.4329V18.4329C22.207 18.7091 21.9832 18.9329 21.707 18.9329H15.707C15.4309 18.9329 15.207 18.7091 15.207 18.4329V17.4329Z"></path><path d="M14.707 19.9329C14.4309 19.9329 14.207 20.1568 14.207 20.4329V21.4329C14.207 21.7091 14.4309 21.9329 14.707 21.9329L20.707 21.9329C20.9832 21.9329 21.207 21.7091 21.207 21.4329V20.4329C21.207 20.1568 20.9832 19.9329 20.707 19.9329L14.707 19.9329Z"></path><path d="M9.9212 9.93292C9.9212 9.51871 9.58541 9.18292 9.1712 9.18292C8.75699 9.18292 8.4212 9.51871 8.4212 9.93292V10.2471C7.4372 10.4874 6.70692 11.3749 6.70692 12.4329C6.70692 13.6756 7.71427 14.6829 8.95691 14.6829H9.64423C10.0043 14.6829 10.3136 14.9388 10.381 15.2926C10.469 15.7548 10.1147 16.1829 9.64423 16.1829H8.89883C8.62969 16.1829 8.38118 16.0387 8.24765 15.805L8.1081 15.5608C7.90259 15.2012 7.44445 15.0762 7.08481 15.2817C6.72517 15.4872 6.60023 15.9454 6.80573 16.305L6.94528 16.5492C7.26526 17.1092 7.80531 17.4979 8.4212 17.6317V17.9329C8.4212 18.3471 8.75699 18.6829 9.1712 18.6829C9.58541 18.6829 9.9212 18.3471 9.9212 17.9329V17.6662C11.1913 17.5114 12.101 16.3061 11.8545 15.0119C11.6524 13.9507 10.7245 13.1829 9.64423 13.1829H8.95691C8.5427 13.1829 8.20692 12.8471 8.20692 12.4329C8.20692 12.0187 8.5427 11.6829 8.95691 11.6829H9.44357C9.71272 11.6829 9.96123 11.8271 10.0948 12.0608L10.2343 12.305C10.4398 12.6647 10.898 12.7896 11.2576 12.5841C11.6172 12.3786 11.7422 11.9205 11.5367 11.5608L11.3971 11.3166C11.0771 10.7566 10.5371 10.3679 9.9212 10.2341V9.93292Z"></path></svg>
                  <span>Earn</span>
                </a>
                <ul className="absolute bottom-12 left-0 bg-white z-50 px-3 w-11/12 dark:bg-[#1b204b] dark:border-slate-700 border border-gray-200 py-1 overflow-hidden text-base hidden group-hover:block transition-block duration-300" style={{ borderRadius: "16px", marginBottom:"2px"}}>
                  <li className="py-3 px-3"><a href="#e" className="py-3 text-blue-600 dark:text-white  w-full">Farms</a></li>
                  <li className="py-3 px-3"><a href="#" className="py-3 text-blue-600 dark:text-white w-full">Pools</a></li>
                  <li className="py-3 px-3"><a href="#" className="py-3 text-blue-600 dark:text-white w-full">NFT Pools</a></li>
                </ul>
              </li>
              <li>
                <a className="flex items-center flex-col" href="#">
                  <svg viewBox="0 0 24 24" className="text-[#000] fill-[#000] shrink-0 dark:text-[#fff] dark:fill-[#fff] " width="20px" xmlns="http://www.w3.org/2000/svg" ><path d="M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z"></path></svg>
                  <span>DackiePad</span>
                </a>
              </li>
              <li className="group">
                <a className="flex items-center flex-col" href="#">
                  <svg viewBox="0 0 16 16" className="text-[#000] fill-[#000] shrink-0 dark:text-[#fff] dark:fill-[#fff] " width="20px" xmlns="http://www.w3.org/2000/svg" ><path d="M11.3333 11.3388L8.66667 8.67212V6.55212C9.44 6.27212 10 5.53879 10 4.67212C10 3.56545 9.10667 2.67212 8 2.67212C6.89333 2.67212 6 3.56545 6 4.67212C6 5.53879 6.56 6.27212 7.33333 6.55212V8.67212L4.66667 11.3388H2V14.6721H5.33333V12.6388L8 9.83879L10.6667 12.6388V14.6721H14V11.3388H11.3333Z"></path></svg>
                  <span>Bridges</span>
                </a>
                <ul className="absolute bottom-12 right-0 bg-white z-50 text-base w-11/12 border border-gray-200 dark:bg-[#1b204b] dark:border-slate-700 py-1 overflow-hidden hidden group-hover:block transition-block duration-300" style={{ borderRadius: "16px", marginBottom:"2px"}}>
                  <li className="py-3 px-5 w-full">
                    <a href="#" className="flex justify-between text-blue-600 dark:text-white w-full">
                      <span>BASE Native Bridge</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                  <li className="py-3 px-5 w-full">
                    <a href="#" className="flex justify-between text-blue-600 dark:text-white w-full">
                      <span>Stargate Finance</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                  <li className="py-3 px-5 w-full">
                    <a href="#" className="flex justify-between text-blue-600 dark:text-white w-full">
                      <span>SquidRouter Bridge</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>

                  </li>
                  <li className="py-3 px-5 w-full">
                    <a href="#" className="flex justify-between text-blue-600 dark:text-white w-full">
                      <span>Orbitor Bridge</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                  <li className="py-3 px-5 w-full border-t border-grey-100 dark:border-slate-700"><a href="#" className="py-3 text-blue-600 dark:text-white w-full">Wormhole Bridge</a></li>
                </ul>
              </li>
              <li>
                <a className="flex items-center flex-col" href="#">
                  <svg viewBox="0 0 24 24" className="text-[#000] fill-[#000] shrink-0 dark:text-[#fff] dark:fill-[#fff] " width="20px" xmlns="http://www.w3.org/2000/svg" ><path d="M4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.5523 0.447715 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.5523 18 24 17.5523 24 17V16.43ZM16.24 13.65C15.07 13.13 13.63 12.75 12 12.75C10.37 12.75 8.93 13.14 7.76 13.65C6.68 14.13 6 15.21 6 16.39V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V16.39C18 15.21 17.32 14.13 16.24 13.65ZM8.07 16C8.16 15.77 8.2 15.61 8.98 15.31C9.95 14.93 10.97 14.75 12 14.75C13.03 14.75 14.05 14.93 15.02 15.31C15.79 15.61 15.83 15.77 15.93 16H8.07ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6Z"></path></svg>
                  <span>QuackPoints</span>
                </a>
              </li>
              <li className="group">
                <a className="text-base" href="#">
                  <span><i className="fa-solid fa-ellipsis"></i></span>
                </a>
                <ul className="absolute bottom-12 right-0 bg-white z-50 text-base w-11/12 border border-gray-200 dark:bg-[#1b204b] dark:border-slate-700 py-1 overflow-hidden hidden group-hover:block transition-block duration-300" style={{ borderRadius: "16px", marginBottom:"2px"}}>
                  <li className="py-3 px-5 w-full border-b border-grey-100 dark:border-slate-700">
                    <a href="#" className="py-3 text-blue-600 dark:text-white w-full">
                      <span>Analytics</span>
                    </a>
                  </li>
                  <li className="py-3 px-5 w-full">
                    <a href="#" className="flex justify-between text-blue-600 dark:text-white w-full">
                      <span>Gecko Terminal</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                  <li className="py-3 px-5 w-full">
                    <a href="#" className="flex justify-between text-blue-600 dark:text-white w-full">
                      <span>DexScreener</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                  <li className="py-3 px-5 w-full">
                    <a href="#" className="flex justify-between text-blue-600 dark:text-white w-full">
                      <span>DefiLlama</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                  <li className="py-3 px-5 w-full">
                    <a href="#" className="flex justify-between text-blue-600 dark:text-white w-full">
                      <span>DeBank</span>
                      <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    </a>
                  </li>
                  <li className="py-3 px-5 w-full border-t border-grey-100 dark:border-slate-700">
                    <a href="#" className="flex justify-between text-blue-600 dark:text-white w-full">
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

import { useState, useEffect } from 'react'

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goTopBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let heightToHidden = 250;

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    })

    return (
        <>
            {isVisible && (
                <div className="fixed bottom-28 md:right-20 sm:right-6 text-white dark:text-[#1b204b] px-4 py-2.5 bg-[#06f] cursor-pointer hover:opacity-70" style={{borderRadius:"15px"}} onClick={goTopBtn}>
                    <i className="fa-solid fa-arrow-up"></i>
                </div>
            )}
        </>
    )
}

export default ScrollTop

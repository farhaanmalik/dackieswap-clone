import SocialLinks from "./SocialLinks"
import dackieOfficial from "../assets/dackie_official.webp"
import dackie from "../assets/logo-sm.webp"

const Footer = () => {
    return (
        <>
            <div className="mt-24 lg:py-5 sm:pb-16">
                <div className="flex items-center justify-between px-4 flex-wrap">
                    <div>
                        <a href="#" className="flex items-center">
                            <img src={dackieOfficial} alt="dackieOfficial" width={45} />
                            <span className="ft-duck lg:block hidden capitalize text-4xl font-medium pl-4">dackie</span>
                        </a>
                    </div>
                    <SocialLinks />
                    <div>
                        <a href="#" className="flex items-center">
                            <img src={dackie} alt="dackie-sm" width={45} />
                            <span className="text-xl font-semibold lg:block hidden ml-4">DackieSwap</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

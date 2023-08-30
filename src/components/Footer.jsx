import SocialLinks from "./SocialLinks"
import dackieOfficial from "../assets/dackie_official.webp"
import dackie from "../assets/logo-sm.webp"

const Footer = () => {
    return (
        <>
            <div className="mt-10 py-5">
                <div className="flex items-center justify-between px-4">
                    <div>
                        <a href="#"><img src={dackieOfficial} alt="dackieOfficial" width={45} /></a>
                    </div>
                    <SocialLinks />
                    <div>
                        <a href="#" className="flex items-center">
                            <img src={dackie} alt="dackie-sm" width={45} />
                            <span className="text-xl font-semibold ml-4">DackieSwap</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

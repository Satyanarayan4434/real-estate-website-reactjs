import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineBehance } from "react-icons/ai";
import { MdOutlineCall } from "react-icons/md";
const LinksNavbar = () => {
    return (
        <div className="flex items-center justify-between px-10 py-3 bg-gray-800 text-white border-b-[0.5px] border-gray-300">
            <div className="flex items-center gap-3">
                <div><MdOutlineMail /></div>
                <h1>Email:example@gmail.com</h1>
            </div>
            <div className="flex items-center gap-6">
                <div><FaFacebookF /></div>
                <div><TiSocialDribbble /></div>
                <div><TiSocialLinkedin /></div>
                <div><AiOutlineBehance /></div>
                <div className="h-[2rem] w-[1px] bg-white"></div>
                <div className="flex items-center gap-3">
                    <div><MdOutlineCall /></div>
                    <a href="">123-4567 890</a>
                </div>
            </div>
        </div>
    );
}

export default LinksNavbar;

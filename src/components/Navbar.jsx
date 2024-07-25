import logo from "../assets/YashSharmaLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className = "mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt = "logo"/>
        </div>
        
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaGithub className="text-blue-800"/>
            <FaLinkedin className="text-blue-400"/>
            <SiLeetcode className="text-yellow-500"/>
            <SiCodingninjas className="text-orange-500"/>
            <SiCodeforces className="text-red-400"/>
            <SiCodechef className="text-red-500"/>
            <SiGeeksforgeeks className="text-green-500"/>
        </div>
    </nav>
  )
}

export default Navbar
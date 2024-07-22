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
            <FaGithub/>
            <FaLinkedin/>
            <SiLeetcode/>
            <SiCodingninjas/>
            <SiCodeforces/>
            <SiCodechef/>
            <SiGeeksforgeeks/>
        </div>
    </nav>
  )
}

export default Navbar
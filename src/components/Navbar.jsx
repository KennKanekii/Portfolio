import logo from "../assets/YashSharmaLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { IconSquareRoundedLetterY } from '@tabler/icons-react';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        
        <div className="flex flex-shrink-0 items-center">
            <Link to="#Home"><IconSquareRoundedLetterY size={45} color="#add8e6" stroke={1.5}/></Link>
            <div className="m-8 md:flex items-center justify-between gap-4 hidden">
              <Link className=" text-textColor text-lg font-mono hover:text-primaryColor hover:text-cyan-400" to="#About">About</Link>
              <Link className=" text-textColor text-lg font-mono hover:text-primaryColor hover:text-cyan-400" to="#Technologies">Skills</Link>
              <Link className=" text-textColor text-lg font-mono hover:text-primaryColor hover:text-cyan-400" to="#Experience">Experience</Link>
              <Link className=" text-textColor text-lg font-mono hover:text-primaryColor hover:text-cyan-400" to="#Projects">Projects</Link>
              <Link className=" text-textColor text-lg font-mono hover:text-primaryColor hover:text-cyan-400" to="#Contact">Contact</Link>
            </div>
            <button 
              className="mantine-focus-auto bs:!hidden !z-50 relative m_fea6bf1a mantine-Burger-root m_87cf2631 mantine-UnstyledButton-root" 
              type="button" 
              color="#64FFDA" 
              style={{ "--burger-color": "#64FFDA", "--burger-size": "var(--burger-size-md)" }} 
              data-size="md"
          >
              <div 
                className="m_d4fb9cad mantine-Burger-burger" 
                data-reduce-motion="true"
              >
              </div>
          </button>

        </div>
        
        
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://github.com/KennKanekii"><FaGithub className="text-blue-800"/></a>
            <a href="https://www.linkedin.com/in/yash-vardhan-sharma-0b9aab226/"><FaLinkedin className="text-blue-400"/></a>
            <a href="https://leetcode.com/u/kaneki_io/"><SiLeetcode className="text-yellow-500"/></a>
            <a href="https://www.naukri.com/code360/profile/fbb56e43-a790-4722-9958-4dc8240675e3"><SiCodingninjas className="text-orange-500"/></a>
            <a href="https://codeforces.com/profile/Kanekii_Zone"><SiCodeforces className="text-red-400"/></a>
            <a href="https://www.codechef.com/users/yashcodes15"><SiCodechef className="text-red-500"/></a>
            <a href="https://www.geeksforgeeks.org/user/yashrf8oi/"><SiGeeksforgeeks className="text-green-500"/></a>
        </div>
    </nav>
  )
}

export default Navbar
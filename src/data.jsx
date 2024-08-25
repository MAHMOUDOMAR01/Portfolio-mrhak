import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJsSquare,
  FaLinkedin,
  FaReact,
  FaNpm,
  FaFigma,
  FaMobile,
  FaWordpress,
  FaApple,
  FaNetworkWired,
  FaHackerNews,
  FaAppStoreIos,
  FaCreativeCommons,
  FaPython,
  FaHackerrank,
  FaHackerNewsSquare,
  FaCertificate,
  FaSitemap,
  FaAssistiveListeningSystems,
  FaLinux,
  FaSearch, // تأكد من إضافة هذا السطر
  FaBug,
  FaTools,
  FaLock,
  FaShieldAlt,
  FaExclamationTriangle,
  FaKey,
} from "react-icons/fa";
import { BiLogoJquery, BiLogoRedux, BiLogoGit } from "react-icons/bi";
import { GoCommandPalette } from "react-icons/go";
// import { TbMobiledata } from "react-icons/tb";

export const navPages = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Skills", link: "/skills" },
  { id: 3, name: "Projects", link: "/projects" },
  // { id: 4, name: "Certificates", link: "/certificates" },
  { id: 5, name: "About me", link: "/about_me" },
  { id: 6, name: "Contact", link: "/contact" },
];

export const social = [
  { id: 1, icon: <FaInstagram />, link: "https://www.instagram.com/mahmoud.omar0/" },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/mahmoud-omar-8889b62b4/",
  },
  { id: 3, icon: <FaGithub />, link: "https://github.com/MAHMOUDOMAR01" },
];

// البيانات المنظمة للمهارات
export const skills = [
  // Certifications
  {
    items: [
      { id: 1, icon: <FaNetworkWired />, text: "CCNA " },
      { id: 2, icon: <FaCertificate />, text: "CEH " },
      { id: 3, icon: <FaCertificate />, text: "OSCP " },
      { id: 3, icon: <FaCertificate />, text: "eJPT " },
      { id: 4, icon: <FaNetworkWired />, text: "CompTIA Security+ " },
      { id: 13, icon: <FaSearch />, text: "Digital Forensics " },
      { id: 14, icon: <FaBug />, text: "Malware Analysis " },
      { id: 15, icon: <FaTools />, text: "Penetration Testing Tools " },
      { id: 16, icon: <FaLock />, text: "Cryptography " },
      { id: 17, icon: <FaShieldAlt />, text: "Cybersecurity Risk Management " },
      { id: 18, icon: <FaExclamationTriangle />, text: "Vulnerability Assessment " },
      { id: 19, icon: <FaNetworkWired />, text: "Network Monitoring Tools " },
      { id: 20, icon: <FaKey />, text: "Penetration Testing " },
      { id: 5, icon: <FaPython />, text: "Python " },
      { id: 6, icon: <FaJsSquare />, text: "JavaScript (ES6) " },
      { id: 21, icon: <FaReact />, text: "React.js " },
      { id: 7, icon: <FaNetworkWired />, text: "Bash " },
      { id: 8, icon: <GoCommandPalette />, text: "Command Line " },
      { id: 9, icon: <FaLinux />, text: "Operating Systems " },
      { id: 10, icon: <BiLogoGit />, text: "Git " },
      { id: 11, icon: <FaGithub />, text: "GitHub " },
      { id: 12, icon: <FaMobile />, text: "PowerShell " },
      { id: 22, icon: <FaHackerrank />, text: "burp suite " },
      { id: 22, icon: <FaHackerrank />, text: "Hack The Box " },
      { id: 23, icon: <FaNetworkWired />, text: "VulnHub " },
      { id: 25, icon: <FaShieldAlt />, text: "OverTheWire " },
      { id: 26, icon: <FaTools />, text: "PentesterLab " },
      { id: 24, icon: <FaLock />, text: "TryHackMe " },
      
    ],
  },
];

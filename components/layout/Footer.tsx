
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FiGithub className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FiTwitter className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Modern Landing Page. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

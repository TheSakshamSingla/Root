import Link from 'next/link';
import { FaTelegram, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#333]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ffffff]">Root Things</h3>
            <p className="text-gray-400 mb-4">
              Your ultimate resource for Android rooting, custom mods, and advanced root user guides.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/Rootthings" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00e676] transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram size={24} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00e676] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00e676] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00e676] transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ffffff]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/rooting" className="text-gray-400 hover:text-[#00e676] transition-colors">
                  Rooting Guides
                </Link>
              </li>
              <li>
                <Link href="/modules" className="text-gray-400 hover:text-[#00e676] transition-colors">
                  Magisk Modules
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-[#00e676] transition-colors">
                  Advanced Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#00e676] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ffffff]">Join Our Community</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our Telegram channel for the latest updates, modules, and guides.
            </p>
            <a 
              href="https://t.me/Rootthings" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <FaTelegram className="mr-2" />
              Join @Rootthings
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#333] mt-8 pt-8 text-center text-gray-500">
          <p>© {currentYear} Root Things. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
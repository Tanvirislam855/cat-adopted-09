import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] mt-0 mb-0 relative z-10 ">
      <div className="pt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />
      <div className="absolute inset-0 -z-10 bg-gray-700 dark:bg-[#0a0a0b]" />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />
<div className="max-w-7xl mx-auto px-6 py-16 text-white">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <Image src="/cat-adoption.png" alt="logo" width={40} height={40} className="h-auto w-auto" />
                <h2 className="text-xl font-bold tracking-tight">CatAdopt</h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm font-bold">
               "Find your perfect feline companion. Connect with loving cats waiting for their forever homes through our seamless and secure adoption platform.
            </p>
            <p className="text-black text-sm py-10 font-bold">
  © 2026 Petadopted. Made with ❤️ for pet lovers. All rights reserved.
</p>
        </div>
        <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-bold">
                <li className="hover:text-white cursor-pointer transition">Home</li>
                <li className="hover:text-white cursor-pointer transition">All Pet</li>
                <li className="hover:text-white cursor-pointer transition">Login</li>
                <li className="hover:text-white cursor-pointer transition">Register</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-400">
                <li>📍 Dhaka, Bangladesh</li>
                <li>📞 +88017335454000</li>
                <li>📧 ajtanvir855@gmail.com</li>
            </ul>
            <div className="flex gap-4 pt-2 text-sm font-medium">
                <a href="#" className="hover:text-white transition">
        <FaFacebook />
    </a>
    <a href="#" className="hover:text-white transition">
        <FaTwitter />
    </a>
    <a href="#" className="hover:text-white transition">
        <FaInstagram />
    </a>
                
            </div>
        </div>

    </div>
</div>
    
    
  

        

        {/* Divider */}
         <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        
      
    </footer>
  );
};

export default Footer;
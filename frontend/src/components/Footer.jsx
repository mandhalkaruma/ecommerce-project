import React from 'react'
import { FaFacebookF, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo & description */}
          <div className="md:w-1/3">
            <div className="text-indigo-600 text-2xl font-bold mb-2">Logo</div>
            <p className="text-gray-400">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <AiOutlineTwitter size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Links sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-2/3">
            <div>
              <h3 className="font-semibold text-white mb-2">Solutions</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">Marketing</a></li>
                <li><a href="#" className="hover:text-white">Analytics</a></li>
                <li><a href="#" className="hover:text-white">Automation</a></li>
                <li><a href="#" className="hover:text-white">Commerce</a></li>
                <li><a href="#" className="hover:text-white">Insights</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Support</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">Submit ticket</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Guides</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Company</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Jobs</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Legal</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">Terms of service</a></li>
                <li><a href="#" className="hover:text-white">Privacy policy</a></li>
                <li><a href="#" className="hover:text-white">License</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        &copy; 2026 Your Company. All rights reserved.
      </div>
    </footer>
  )
}


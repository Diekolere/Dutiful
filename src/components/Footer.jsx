import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#532F82] text-white px-6 md:px-20 py-10 text-sm">
      {/* Top section with links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-[#63428E] pb-8">
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-[#B6B6E5]">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">FAQs</a></li>
              </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-[#B6B6E5]">
            <li><a href="#">Find services</a></li>
            <li><a href="#">Pricing & plans</a></li>
            <li><a href="#">List your business</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-[#B6B6E5]">
            <Link to="/home">Blog</Link>
            <li><a href="#">Affiliate program</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">More from Dutiful</h4>
          <ul className="space-y-2 text-[#B6B6E5]">
            <li><a href="#">Dutiful jobs</a></li>
          </ul>
        </div>
      </div>

      {/* Socials & app download */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
        <div className="flex items-center gap-4">
          <span>Follow us</span>
          <div className="flex gap-3 text-lg">
            <img src="/image/Group 1 (1).png" alt="Apple Store" className="w-6" />
            <img src="/image/Group 2 (1).png" alt="Play Store" className="w-6" />
            <img src="/image/Group 3.png" alt="Play Store" className="w-6" />
            <img src="/image/Group 4.png" alt="Play Store" className="w-6" />
            <img src="/image/Group 5.png" alt="Play Store" className="w-6" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span>Download the app</span>
          <div className="flex gap-2">
            <img src="/image/Group 2.png" alt="Apple Store" className="w-6" />
            <img src="/image/Group 1.png" alt="Play Store" className="w-6" />
          </div>
        </div>
      </div>

      {/* Bottom links */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-[#63428E] text-xs gap-2">
        <span className='text-base'>© 2022 Dutiful®</span>
        <div className="flex gap-4">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}


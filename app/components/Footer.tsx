import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0F1720] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-5 
            gap-10
            text-center 
            lg:text-left
          "
        >
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-gray-300 text-black font-bold text-xl px-6 py-4 inline-block rounded">
              LOGO
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h3 className="font-semibold mb-6">Lorem Ipsum</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-6">Lorem Ipsum</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-6">Lorem Ipsum</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold mb-6">Lorem Ipsum</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

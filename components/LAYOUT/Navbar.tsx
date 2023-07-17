import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-2 left-0 right-2 bg-[#fef9f4] bg opacity-95 p-4 ml-[20.5%] rounded-[30px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg"></div>
        <div className="space-x-4">
          <button className="rounded-lg p-3 border-2 border-orangee bg-orangee hover:bg-orange-500 text-lg">
                      Logout
</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

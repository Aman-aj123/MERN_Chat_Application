const Navbar = () => {
     return (
          <div className="opacity-90 w-full px-2 h-[45px] flex justify-between items-center bg-blue-950">
               <div className="logo cursor-pointer">
                    <h1 className="text-white tracking-wider">ChatVibe</h1>
               </div>
               <div className="user-profile flex items-center justify-center bg-green-500 w-[33px] h-[32px] cursor-pointer rounded-full hover:opacity-70 transition">
                    <span className="text-xl text-white">A</span>
               </div>
          </div>
     );
};

export default Navbar;
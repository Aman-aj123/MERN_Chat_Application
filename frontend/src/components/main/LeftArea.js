import { useNavigate } from "react-router-dom";

const LeftSidebar = () => {

     const navigate = useNavigate();

     return (
          <div className="w-[20%] min-w-[170px] h-full bg-blue-950 relative overflow-x-hidden">

               {/* Top header  */}
               <div className="left-side-header custom-bg h-[45px]">
                    <div className="searchBar items-center flex justify-between gap-1 px-2 w-full h-full">
                         <i className="fa-solid fa-magnifying-glass text-white text-xl cursor-pointer transition hover:text-blue-950"></i>
                         <input className="w-full h-full px-2  bg-transparent outline-none border-none text-white tracking-wider" type="text" placeholder="Search users.." />
                    </div>
               </div>

               {/* Users  */}
               <div className="Users-wrapper w-ful md:p-1 overflow-y-auto py-2">
                    <div className="users mb-1 p-1 cursor-pointer transition rounded-sm flex gap-1 items-center justify-start">
                         <div className="user-profile flex items-center justify-center bg-green-500 w-[39px] h-[38px] cursor-pointer rounded-full hover:opacity-70 transition">
                              <span className="text-xl text-white">A</span>
                         </div>
                         <div className="other-info ">
                              <h1 className="text-white leading-none hover:text-blue-900 cursor-pointer transition">developerAman</h1>
                              <h2 style={{ fontSize: '13px' }} className="leading-none font-semibold tracking-wide text-green-600">Online</h2>
                         </div>
                    </div>
                    <div className="users mb-1 p-1 cursor-pointer transition rounded-sm flex gap-1 items-center justify-start">
                         <div className="user-profile flex items-center justify-center bg-green-500 w-[39px] h-[38px] cursor-pointer rounded-full hover:opacity-70 transition">
                              <span className="text-xl text-white">A</span>
                         </div>
                         <div className="other-info ">
                              <h1 className="text-white leading-none hover:text-blue-900 cursor-pointer transition">developerAman</h1>
                              <h2 style={{ fontSize: '13px' }} className="leading-none font-semibold tracking-wide text-green-600">Online</h2>
                         </div>
                    </div>
                    <div className="users mb-1 p-1 cursor-pointer transition rounded-sm flex gap-1 items-center justify-start">
                         <div className="user-profile flex items-center justify-center bg-green-500 w-[39px] h-[38px] cursor-pointer rounded-full hover:opacity-70 transition">
                              <span className="text-xl text-white">A</span>
                         </div>
                         <div className="other-info ">
                              <h1 className="text-white leading-none hover:text-blue-900 cursor-pointer transition">developerAman</h1>
                              <h2 style={{ fontSize: '13px' }} className="leading-none font-semibold tracking-wide text-green-600">Online</h2>
                         </div>
                    </div>
                    <div className="users mb-1 p-1 cursor-pointer transition rounded-sm flex gap-1 items-center justify-start">
                         <div className="user-profile flex items-center justify-center bg-green-500 w-[39px] h-[38px] cursor-pointer rounded-full hover:opacity-70 transition">
                              <span className="text-xl text-white">A</span>
                         </div>
                         <div className="other-info ">
                              <h1 className="text-white leading-none hover:text-blue-900 cursor-pointer transition">developerAman</h1>
                              <h2 style={{ fontSize: '13px' }} className="leading-none font-semibold tracking-wide text-green-600">Online</h2>
                         </div>
                    </div>
                    <div className="users mb-1 p-1 cursor-pointer transition rounded-sm flex gap-1 items-center justify-start">
                         <div className="user-profile flex items-center justify-center bg-green-500 w-[39px] h-[38px] cursor-pointer rounded-full hover:opacity-70 transition">
                              <span className="text-xl text-white">A</span>
                         </div>
                         <div className="other-info ">
                              <h1 className="text-white leading-none hover:text-blue-900 cursor-pointer transition">developerAman</h1>
                              <h2 style={{ fontSize: '13px' }} className="leading-none font-semibold tracking-wide text-green-600">Online</h2>
                         </div>
                    </div>
               </div>

               {/* bottom menu  */}

               <div className="bottom-menu custom-bg  items-center px-2 w-full h-[45px] flex justify-between absolute bottom-0">
                    <i onClick={() => { navigate("/signup") }} className="fa-solid fa-user-plus  text-white text-xl cursor-pointer transition hover:text-blue-950"></i>
                    <i onClick={() => { navigate("/login") }} className="fa-solid fa-right-from-bracket text-white text-xl cursor-pointer transition hover:text-blue-950"></i>
               </div>
          </div>
     );
};

export default LeftSidebar;
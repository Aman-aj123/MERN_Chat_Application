import { Link } from "react-router-dom";

const Login = () => {
     return (
          <div className="Login container w-full h-screen flex justify-center items-center">
               <div className="border-2 border-gray-200 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="px-6 py-4">

                         <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome to 'ChatVibe'</h3>

                         <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Please Login to continue 'ChatVibe'</p>

                         <form>

                              <div className="w-full mt-4">
                                   <input required name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                              </div>

                              <div className="w-full mt-4">
                                   <input required name="password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
                              </div>



                              <div className="flex items-center justify-between mt-4">
                                   <button className="px-6 py-2 w-full h-[40px] text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Login
                                   </button>
                              </div>
                         </form>
                    </div>

                    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                         <span className="text-sm text-gray-600 dark:text-gray-200">don't have any Account ?  </span>

                         <Link to="/signup" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Signup here</Link>
                    </div>
               </div>
          </div>
     );
};

export default Login;
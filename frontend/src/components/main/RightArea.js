import Navbar from "./Navbar";

const MessageArea = () => {
     return (
          <div className="w-[80%] h-full">
               <Navbar />
               <div className="Main-Chat-Area flex justify-center items-end w-full custom-height">
                    <div className="Main-Chat-Wrapper py-2 w-full flex flex-col gap-1 px-5">
                         <div className="Chat-Items  w-full">
                              <div className="chat-items-wrapper py-1 px-2 w-[200px] right-message">
                                   <p className="chatMessage leading-5 text-white">This is one of the most chat application world and it is sending hi</p>
                                   <h1 className="chat-duration leading-normal font-semibold mt-1 text-sm text-white">2 minutes</h1>
                              </div>
                         </div>

                         <div className="Chat-Items   w-full">
                              <div className="chat-items-wrapper py-1 px-2 w-[200px] left-message">
                                   <p className="chatMessage leading-5 text-white">This is one of the most chat application world and it is sending hi</p>
                                   <h1 className="chat-duration leading-normal font-semibold mt-1 text-sm text-white">2 minutes</h1>
                              </div>
                         </div>
                         
                         {/* Message Bar  */}
                         <div className="messageBar w-full mt-2 flex justify-between items-center h-[60px] py-2 px-2 shadow-lg border-2 border-gray-500 rounded-lg overflow-x-hidden">
                              <textarea placeholder="Write your message..." className="w-full h-full outline-none"></textarea>
                              <button className="send-button font-semibold text-gray-900 h-full rounded-lg w-[80px] tracking-wide cursor-pointer transition hover:opacity-50">Send</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default MessageArea;
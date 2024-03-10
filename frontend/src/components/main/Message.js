import LeftArea from "./LeftArea";
import Navbar from "./Navbar";
import RightArea from "./RightArea";

const Message = () => {
     return (
          <div className="Main-Message-Wrapper h-[100vh]  w-full flex justify-center items-center">
               <div className="Message-container  h-screen w-[100%] mx-auto flex flex-col">
                    <div className="MessageWrapper rounded-sm flex justify-between w-full h-full overflow-y-auto">
                         <LeftArea />
                         <RightArea />
                    </div>
               </div>
          </div>
     );
}

export default Message;
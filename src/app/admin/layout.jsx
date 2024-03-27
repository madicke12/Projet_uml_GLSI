

import Navbar from "@/components/navbar";
import SideNav from "@/components/sidenav";
const layout = (props) => {
  return (
  
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden dark:bg-zinc-700">
      <div className="w-full md:flex-none md:w-64 hidden md:block ">
       <SideNav/>
      </div>
      <div className="w-full h-full bg-slate-100">
        <Navbar/>
        <div className="h-full  ">

          {props.children}      
          </div>
      </div>
    </div>
    
  );
};

export default layout;



import Navbar from "@/components/navbar";
import SideNav from "@/components/sidenav";
const layout = (props) => {
  return (
  
    <div className="flex h-screen border flex-col md:flex-row md:overflow-hidden bg-background ">
      <div className="w-full md:flex-none md:w-64 hidden border md:block ">
       <SideNav/>
      </div>
      <div className="w-full h-full bg-background border">
        <Navbar/>
        <div className="h-full  border">

          {props.children}      
          </div>
      </div>
    </div>
    
  );
};

export default layout;

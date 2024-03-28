

import {UserButton} from '@clerk/nextjs' 
import { ModeToggle } from './mode-toggle';
const Navbar = () => {
  return (
    <div className="w-full item-center p-3 mb-2 flex justify-end bg-background ">
     <div className="flex justify-between space-x-2 items-center">
     <UserButton />
     <ModeToggle/>
     </div>

    </div>
  );
};

export default Navbar;

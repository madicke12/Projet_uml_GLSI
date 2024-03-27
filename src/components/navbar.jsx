

import {UserButton} from '@clerk/nextjs' 
const Navbar = () => {
  return (
    <div className="w-full p-5 mb-2 flex justify-between bg-mainblueVar text-white">
      <h1>This is a Navbar</h1>
      <UserButton />

    </div>
  );
};

export default Navbar;

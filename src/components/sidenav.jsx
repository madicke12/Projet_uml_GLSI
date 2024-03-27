"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import CreerDossierDialog from "./creerDossierDialog";
import from ''

const navItem = [

    {
        name:"Rendez vous",
        link:"RV"
    },
    {
        name:"Planning",
        link:"Planning",
    },
]



const SideNav = () => {
  const pathName = usePathname();
  console.log(pathName);const Elements = navItem.map((item) => (
    <Link
      className={
        clsx("p-2 mb-2 w-full  rounded-tr-xl rounded-br-xl  text-slate-600 bg-slatee-50 hover:bg-slate-100",{
           "bg-slate-100" : pathName ==  `/admin/${item.link}`
        })
      }
      href={`/admin/${item.link}`}
      key={item}
    >
      {item.name}
    </Link>
  ));


  return (
    <div className="m-0  h-full">
      <div className="p-6 mb-2 bg-secondblueVar ">
        <h2>
          <span className="text-blue-500 font-bold">Hello</span>
          <span className="text-white">Doc</span>
        </h2>
      </div>
      <div className="flex mt-10 flex-col p-2">
        {Elements}
        <CreerDossierDialog/>
      </div>
    </div>
  );
};

export default SideNav;

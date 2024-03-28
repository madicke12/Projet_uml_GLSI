"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import CreerDossierDialog from "./creerDossierDialog";

const navItem = [

    {
        name:"Rendez vous",
        link:"RV"
    },
    {
        name:"Planning",
        link:"Planning",
    },
    {
        name:"Patient",
        link:"patient",
    },
    {
      name:"Creer Dossier",
      link:"Creer",
  },
]



const SideNav = () => {
  const pathName = usePathname();
  console.log(pathName);
  const Elements = navItem.map((item) => (
    <Link
      className={
        clsx("p-2 mb-2 w-full  rounded-tr-xl rounded-br-xl text-slate-200 ",{
           "bg-background" : pathName ==  `/admin/${item.link}`
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
      <div className="p-6 mb-2 bg-background ">
        <h2>
          <span className="text-blue-500 font-bold">Hello</span>
          <span className="text-white">Doc</span>
        </h2>
      </div>
      <div className="flex mt-10 flex-col p-2">
        {Elements}
        
      </div>
    </div>
  );
};

export default SideNav;

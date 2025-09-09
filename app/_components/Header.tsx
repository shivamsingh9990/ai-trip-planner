import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

const menuOptions = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Pricing",
    path: "/Pricing",
  },
  {
    name: "Contact us",
    path: "Contact-us",
  },
];

function Header() {
  return (
    <>
      {/*logo*/}

      <div className="flex justify-between items-center p-4 ">
        <div className="flex items-center gap-2">
          <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
          <h2 className="font-bold text-2xl">Ai Trip Planner</h2>
        </div>

        <div className="flex gap-8 items-center">
          {/*menu options*/}
         {menuOptions.map((menu) => (
  <Link
    key={menu.path}
    href={menu.path}
    className="text-lg hover:scale-105 transition-all hover:text-primary"
  >
    {menu.name}
  </Link>
))}


          
        
        </div>
       
          <Button>Get started </Button>
        
      </div>
      {/* get started button */}
    </>
  );
}

export default Header;

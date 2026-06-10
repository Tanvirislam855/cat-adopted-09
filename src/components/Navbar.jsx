"use client";
import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const {
 data : session,
} = authClient.useSession()
  const user = session?.user
console.log(user)



  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/cat-adoption.png"}
            alt="logo"
            loading="eager"
            width={100}
            height={100}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">CatAdopt</h3>
        </div>

        <ul className="flex  items-center gap-10  text-sm">
          <li>
            <Link href={"/"} className="flex items-center gap-2 px-4 py-2 bg-lime-700 text-lime-950 rounded-full font-bold text-shadow-black hover:bg-blue-100">Home</Link>
          </li>
          <li>
            <Link href={"/all-pets"} className="flex items-center gap-2 px-4 py-2 bg-lime-700 text-lime-950 rounded-full font-bold hover:bg-blue-100"> All Pets</Link>
          </li>
           <li>
            <Link href={"/my-request"}className="flex items-center gap-2 px-4 py-2 bg-lime-700 text-lime-950 rounded-full font-bold hover:bg-blue-100">My Request</Link>
          </li>
          <li>
            <Link href={"/add-pet"}className="flex items-center gap-2 px-4 py-2 bg-lime-700 text-lime-950 rounded-full font-bold hover:bg-blue-100">Add Pet</Link>
          </li> 
        </ul>

        <div className="flex justify-between gap-4">
        
            <ul className="flex items-center  text-sm gap-5">
              <li>
                <Link href={"/signup"} className="flex items-center gap-2 px-4 py-2 bg-amber-700 text-black rounded-full font-bold text-shadow-black hover:bg-blue-100">SignUp</Link>
              </li>
              <li>
                <Link href={"/signin"} className="flex items-center gap-2 px-4 py-2 bg-green-500 text-black rounded-full font-bold text-shadow-black hover:bg-blue-100">SignIn</Link>
              </li>
            </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
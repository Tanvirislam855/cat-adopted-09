
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://t4.ftcdn.net/jpg/09/83/98/09/360_F_983980918_Put4YfWMOydwJ7hJtjEjpUly9SIlLQ1M.jpg')]  w-full h-[60vh] bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-xl md:text-4xl font-bold mb-4 max-w-2xl -mt-20">
            Meet Your New Feline Soulmate
          </h1>
          <p className="text-lg md:text-l mb-6 max-w-xl text-gray-200">
            Skip the hassle and find verified, healthy cats ready for adoption. Transforming lives through the power of pet companionship.
          </p>

            <div className="flex gap-4">
             <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500 hover:bg-blue-600">
               Adopt Now
              </Button>
            </Link> 

             {/* <Link href="/pricing">
              <Button variant="outline" className="text-white">
                
              </Button> 
            </Link> */}
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Banner;
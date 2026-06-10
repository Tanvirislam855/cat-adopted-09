import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import Link from "next/link";
const allpetsCard = ({allpetsCard}) => {
    const {_id,imageUrl,location,gender,age,petName,adoptionfee} = allpetsCard
    return (
        <div className="border ">
            <Image
           alt={petName}
           src={imageUrl}
           height={400}
           width={400}
           unoptimized
            />
            <div className="p-2">
              
        <div className="flex items-center gap-1">
          <LuMapPin /> <span>{location}</span>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h2 className="text-xl font-bold">{petName}</h2>
            </div>
            <div className="flex gap-1 items-center">
             {age}
            </div>
          </div>
          </div>
          </div>
<Link href={`/all-pets/${_id}`}> 
  <button className="bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-700 transition">
    Adopt Now
  </button>
</Link>
        </div>
    );
};

export default allpetsCard;
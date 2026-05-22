import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa";
const allpetsCard = ({allpetsCard}) => {
    const {imageUrl,location,gender,age,petName,adoptionfee} = allpetsCard
    return (
        <div className="border">
            <Image
           alt={petName}
           src={imageUrl}
           height={400}
           width={400}
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
              <FaRegCalendar /> {age}
            </div>
          
          </div>
          </div>
          </div>

            
        </div>
    );
};

export default allpetsCard;
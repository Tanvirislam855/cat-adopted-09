import Image from "next/image";
import Banner from "../components/Banner";
import PetCareTips  from "../components/PetCareTips";
import WhyAdoptPage from "../components/WhyAdoptPage";
import SuccessStory from "../components/SuccessStory";

export default function Home() {
  return (
    <div>

      <Banner/>
      <WhyAdoptPage/>
      <PetCareTips/>
       <SuccessStory />


    </div>
  );
}
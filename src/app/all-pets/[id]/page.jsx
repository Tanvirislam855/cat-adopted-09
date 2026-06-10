import Image from "next/image";

const DetailsPage = async ({ params }) => {

  const { id } = await params;

  
  const res = await fetch(`http://127.0.0.1:8000/all-pets/${id}`, {
    cache: 'no-store'
  });
  
 
  if (!res.ok) {
    return <div className="text-white p-5 text-center"></div>;
  }

  const allpets = await res.json();

  
  if (!allpets) {
    return (
      <div className="text-white p-10 text-center bg-[#090514] min-h-screen">
        <h2 className="text-red-500 text-xl font-bold">Pet details not found!</h2>
        
      </div>
    );
  }

  
  const { imageUrl, Location, Gender, age, petName, adoptionfee } = allpets;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#110c1f] text-white rounded-2xl border border-[#211936] mt-10">
      
      
      <div className="relative w-full h-80 overflow-hidden rounded-xl mb-6">
        {imageUrl && (
          <Image 
            alt={petName || "Pet Image"} 
            src={imageUrl} 
            fill
            className="object-cover"
          />
        )}
      </div>

     
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">{petName}</h1>
        
        <hr className="border-[#211936]" />

        
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
          <p>
            <span className="font-semibold text-gray-500 block uppercase text-[10px] tracking-wider">Location</span>
            <span className="text-base">{Location || "Not Specified"}</span>
          </p>
          
          <p>
            <span className="font-semibold text-gray-500 block uppercase text-[10px] tracking-wider">Gender</span>
            <span className="text-base capitalize">{allpets.gender || allpets.ratio}</span>
          </p>

          <p>
            <span className="font-semibold text-gray-500 block uppercase text-[10px] tracking-wider">Age</span>
            <span className="text-base">{age} Years</span>
          </p>
        </div>

        <hr className="border-[#211936]" />

    
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="font-semibold text-gray-500 block uppercase text-[10px] tracking-wider">Adoption Fee</span>
            <span className="text-3xl font-black text-[#ec4899]">${adoptionfee || allpets["Adoption Fee"]}</span>
          </div>

          <button className="rounded-xl bg-linear-to-r from-[#8b5cf6] to-[#ec4899] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90">
            Proceed to Adopt
          </button>
        </div>

      </div>
    </div>
  );
};

export default DetailsPage;
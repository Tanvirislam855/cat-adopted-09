import React from 'react';
import AllPetsCard from '@/components/all-petsCard.jsx';
const AllPetsPage = async () => {
    const res = await fetch('http://localhost:8000/all-pets')
    const allPets = await res.json()
    console.log(allPets)

    return (
        <div>
            <h1>All Pets</h1>
            <div className='grid grid-cols-6 gap-5'>
                {
                    allPets.map(pet => <AllPetsCard key={pet._id} allpetsCard={pet} />)
                        
                }
            </div>
        </div>
        

        
    );
};

export default AllPetsPage;
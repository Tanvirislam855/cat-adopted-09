import React from 'react';
const AllPetsPage = async () => {
    const res = await fetch('http://localhost:8000/all-pets')
    const allPets = await res.json()
    console.log(allPets)

    return (
        <div>
            <h1>All Pets</h1>
            <div>
                {
                    allPets.map(allPets => <div key={allPets._id}>
                        {allPets.allPetsName} </div>)
                }
            </div>
        </div>
        

        
    );
};

export default AllPetsPage;
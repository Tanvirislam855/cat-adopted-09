import React from 'react';
import AllPetsCard from "./all-petsCard";
import { Button } from '@heroui/react';
import Link from 'next/link';


const Feature = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/feature`)
    const petadopt = await res.json()
    console.log(petadopt)
    return (
        <div className='mt-10 max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold'>Your Pet</h1>
            <div className='flex justify-end mb-4'>
             <Link href={'/all-pets'}>    <Button variant="outline" className={'rounded-3xl border-amber-950 border-2 text-amber-950'}>All Pets</Button></Link>
        </div>
            <div className='grid grid-cols-4 gap-5'>
                {petadopt.map(pet => <AllPetsCard key={pet._id} pet={pet}/>)}
            </div>
        </div>
    );
};

export default Feature;
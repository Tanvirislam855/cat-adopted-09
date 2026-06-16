import { auth } from '@/lib/auth';
import { TrashBin } from '@gravity-ui/icons';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { Button } from '@heroui/react';
import { BookingCancelAlert } from '@/components/BookingCancelAlert';

const MyRequestPage = async () => { 
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/book/${user?.id}`)
    const request = await res.json()
    // console.log(request)
    return (
        <div className='max-w-7xl mx-auto text-center'>
            <h1 className='text-3xl font-bold'>My Request</h1>
            <div>
               {
    request?.map(book => (
        <div key={book._id} className="border p-4 my-2 rounded">
            <Image 
                src={book.imageUrl} 
                alt={book.petName || "Pet Image"} 
                height={100} 
                width={100} 
            />
           <div>
            <h1>{book.petName}</h1>
            <p>
    {new Date(book.adoptedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })}
</p>
<BookingCancelAlert bookId ={book._id} />

   
           </div>
        </div>
    ))
}
            </div>
        </div>
    );
};

export default MyRequestPage;
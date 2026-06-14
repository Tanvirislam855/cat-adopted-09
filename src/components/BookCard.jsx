"use client"
import { Card } from '@heroui/react';
import React from 'react';
import { DateField } from '@heroui/react';
import { Label } from '@heroui/react';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';


const BookCard = ({allpets}) => {
    const {data : session } = authClient.useSession();
      const user = session?.user;
    const [adoptedDate,setAdoptedDate] = useState (null);
    // console.log(allpets)
    const {adoptionfee,_id,allpetsName,price,imageUrl,location} = allpets;
    const handleBook = async () => {
        const bookData = {
            userID: user?.id,
            userImage: user?.image,
            userName: user?.name,
            allpetsID: _id,
            allpetsName,price,imageUrl,location,adoptedDate:new Date(adoptedDate)

        }
        const res = await fetch('http://localhost:8000/book',{
            method: "POST",
            headers: {
                'content-type':"application/json"
            },
            body: JSON.stringify(bookData)
        })
        const result = await res.json();
        console.log(result)
        toast.success("Your Booking Successfully")

        

    }
    return (
        <div>
            <Card>
             
              <DateField onChange={setAdoptedDate} className="w-[256px]" name="date">
      <Label>Adopted Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
    <button onClick={handleBook} className={'w-full rounded-5xl bg-cyan-400'}>Adopt Now</button>
            </Card>
        </div>
    );
};

export default BookCard;
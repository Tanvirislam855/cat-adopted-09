"use client"
import React from 'react';
import { TextField,Label,Input,FieldError,Select,ListBox,TextArea,Button, Card } from '@heroui/react';


const AddPetPage= () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const petData =Object.fromEntries(formData.entries())
        console.log(petData)
      //   const completeData = {
      //   ...petData,
      //   ownerId: user.id, 
      //   ownerName: user.name, 
      //   ownerEmail: user.email,
      //   createdAt: new Date(),
      //   sotck: 'Available',
      // };
        const res = await fetch('http://localhost:8000/add-pet',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(petData)
        })
        const data = await res.json()
        console.log(data)
    }
    return (
        <div className='max-w-2xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md items-center'>
            Add Pet
            <form
                onSubmit={onSubmit}>

            <Card className="p-10 space-y-8">
                
             
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* pet Name */}
              <div className="md:col-span-2">
                <TextField name="petName" isRequired>
                  <Label className='font-bold text-green-900'>Pet Name</Label>
                  <Input placeholder="Enter pet name" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Species-Maping
              <TextField name="country" isRequired>
                <Label>Country</Label>
                <Input placeholder="Indonesia" className="rounded-2xl" />
                <FieldError />
              </TextField> */}

              {/* Species-Maping */}
              <div>
                <Select
                  name="species"
                  isRequired
                  className="w-full"
                  placeholder="Select species"
                >
                  <Label className='font-bold text-green-900'>species</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Mammals" textValue="Mammals">
                      Snake
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Birds" textValue="Birds">
                        Birds
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Fish" textValue="Fish">
                       Fish
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Amphibians" textValue="Amphibians">
                        Lion
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Invertebrates" textValue="Invertebrates">
                        Dog
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Rabbits" textValue="Rabbits">
                        Rabbits
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Breed */}
              <TextField name="breed" type="number" isRequired>
                <Label className='font-bold text-green-900'>Breed</Label>
                <Input
                  type="Enter breed (e.g. Biscut)"
                  placeholder="Enter breed (e.g. Biscut)"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Age */}
              <TextField name="age" isRequired>
                <Label className='font-bold text-green-800'>Age</Label>
                <Input
                  placeholder="5 month / 1 year"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Gender */}
              <div className="md:col-span-2">
                <TextField name="ratio" type="date" isRequired>
                  <Label className='font-bold text-green-900'>Gender</Label>
                  <Input type="gender" 
                  placeholder="male / female"
                  className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label className='font-bold text-green-900'>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/pet.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Health status */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label className='font-bold text-green-900'>Health Status</Label>
                  <TextArea
                    placeholder="Select health status"
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
              {/* Vaccination Status */}
              <div className="md:col-span-2">
                <TextField name="VaccinationStatus"  isRequired>
                  <Label className='font-bold text-green-900'>Vaccination Status</Label>
                  <Input type="text" 
                  placeholder=" select Vaccination Status "
                  className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>
              
              {/* Location */}
              <div className="md:col-span-2">
                <TextField name="Location"  isRequired>
                  <Label className='font-bold text-green-900'>Location</Label>
                  <Input type="text" 
                  placeholder=" Enter Location "
                  className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>
              {/* Adoption Fee */}
              <div className="md:col-span-2">
                <TextField name="Adoption Fee"  isRequired>
                  <Label className='font-bold text-green-900'>Adoption Fee</Label>
                  <Input type="number" 
                  placeholder=" Adoption Fee (ERUO) "
                  className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>
              <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label className="font-bold text-gray-700">Description</Label>
              <TextArea
                placeholder="write anything about the pet"
                className="rounded-3xl"
              />
              <FieldError />
            </TextField>
          </div>
        
              
              {/* Owner Email (Auto-filled) */}
              <div className="md:col-span-2">
                <TextField name="Owner Email (Auto-filled)"  isRequired>
                  <Label className='font-bold text-green-900'>Owner Email (Auto-filled)</Label>
                  <Input type="text" 
                  placeholder=" Enter your mail "
                  className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
              className=" rounded-4xl w-full bg-emerald-950 text-white hover:bg-amber-300">
            Add Pet
            </Button>
          
            </Card>
            </form>
        </div>
    );
};

export default AddPetPage
;
"use client";
import React from 'react';
 import {Check} from "@gravity-ui/icons";
 import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { Card } from '@heroui/react';
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { Separator } from '@heroui/react';
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData =new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries
      ());
    const {data,error} = await authClient.signUp.email(
      {
        email : user.email ,
        password : user.password,
        name : user.name ,
        image : user.image
      });
    if (data){
      redirect("/");
    }
    if (error){
       alert("Error");
    }
  };
  const handleGoogleSignin = async() => {
    await authClient.signIn.social({
        provider: "google"
    })

  }
  return (
    <div className='max-w-5xl mx-auto'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>Create Account</h1>
      </div>
      <Card className='border rounded-none justify-center items-center flex '>
        <Form onSubmit={onSubmit}
      className="flex w-96 flex-col gap-4"
      
      render={(props) => <form {...props} data-custom="foo" />}
     
    >
      <TextField
        isRequired
        name="name"
        type="text"
        
      >
        <Label>Name</Label>
        <Input placeholder="Enter Your Name" />
        <FieldError />
      </TextField>
      <TextField
        
        name="image"
        type="text"
        
      >
        <Label>Image</Label>
        <Input placeholder="Enter your image url" />
        <FieldError />
      </TextField>
      <TextField
        name="email"
        type="email"
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex justify-center gap-2">
        <Button className={'rounded-2xl'} type="submit">
         
          Create Account
        </Button>
        
      </div>
    </Form>
    <div className="flex justify-center items-center gap-3">
            <Separator/>
           <div className="whitespace-nowrap"> Or sign up with </div>
              <Separator/>
            </div>
        <div>
            <Button onClick={handleGoogleSignin} variant="outline" className={'w-full rounded-2xl'}><FcGoogle /> Sign in with Google</Button>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
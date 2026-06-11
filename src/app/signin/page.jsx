"use client";
import React from 'react';
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { Card, Separator,} from '@heroui/react';
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { FcGoogle } from 'react-icons/fc';


const SignInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData =new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries
      ());
    const {data,} = await authClient.signIn.email(
      {
        email : user.email ,
        password : user.password,
        
      });
      console.log({data,error})
    if (data){
      redirect("/");
    }
  };
  const handleGoogleSignin = async() => {
      await authClient.signIn.social({
          provider: "google"
      })
  
    };
  return (
    <div className='max-w-5xl mx-auto'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>Sign in</h1>
      </div>
      <Card className='border rounded-none justify-center items-center flex '>
        <Form onSubmit={onSubmit}
      className="flex w-96 flex-col gap-4"
      
      render={(props) => <form {...props} data-custom="foo" />}
     
    >
      
        
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
         
         Sign in
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

export default SignInPage;
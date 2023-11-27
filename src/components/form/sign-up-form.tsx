"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignUpSchema } from "@/lib/validation/sign-up-schema";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { TSignUpFormSchema } from "../../../types";



const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpFormSchema>({
    resolver: zodResolver(SignUpSchema),
  });

  const handleSignUp = async ({email, password}:TSignUpFormSchema)=>{}

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <div className="grid gap-2">
        <div className="grid gap-1 py-2">
          <Label className="mb-2" htmlFor="email">
            Email
          </Label>
          <Input
            className={cn({ "focus-visible:ring-red-500": errors.email })}
            placeholder="john@gmail.com"
            {...register("email")}
          />
        </div>

        <div className="grid gap-1 py-2">
          <Label className="mb-2" htmlFor="email">
            Password
          </Label>
          <Input
            type="password"
            className={cn({ "focus-visible:ring-red-500": errors.password })}
            placeholder="password"
          />
        </div>
        <Button>Sign Up</Button>
      </div>
    </form>
  );
};

export default SignUpForm;

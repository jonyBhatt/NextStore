import SignUpForm from "@/components/form/sign-up-form";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Link href="/" className="font-bold  text-xl font-Vina sm:text-4xl">
            Next<span className="text-primary">Store</span>
          </Link>
          <h1 className="font-bold text-4xl font-Inter">Create an account</h1>
          <Link
            href="/sign-in"
            className={buttonVariants({
              variant: "link",
              className: "text-blue-500 underline font-Inter gap-2",
            })}
          >
            Already have an account? Sign-In
            <ArrowRight className="w-4 h-4" />
          </Link>
              </div>
              <div className="grid gap-5">
                    <SignUpForm />
              </div>
      </div>
    </div>
  );
};

export default SignUpPage;

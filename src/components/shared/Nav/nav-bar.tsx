import Link from "next/link";

import NavItems from "./nav-items";
import MaxWidthWrapper from "@/components/max-w-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Cart from "./cart";

const Navbar = () => {
  const user = null;
  return (
    <div className="bg-white dark:bg-gradient-to-r  from-black to-[#130F40] sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white dark:bg-gradient-to-r  from-black to-[#130F40] ">
        <MaxWidthWrapper>
          <div className="border-b border-b-black">
            <div className="flex h-16 items-center">
              {/** ToDO: Mobile Nav */}
              <div className="ml-4 flex lg:ml-0 items-center">
                <Link
                  href="/"
                  className="font-bold  text-xl font-Vina sm:text-4xl"
                >
                  Next<span className="text-primary">Store</span>
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-center">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <>
                      <Link
                        href="/sign-in"
                        className={cn(buttonVariants(), "font-bold")}
                      >
                        Sign In
                      </Link>
                    </>
                  )}

                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? (
                    <></>
                  ) : (
                    <Link
                      href="/sign-up"
                      className={buttonVariants({
                        variant: "outline",
                        className: "font-bold",
                      })}
                    >
                      Sign Up
                    </Link>
                  )}
                  {user ? (
                    <>
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </>
                  ) : null}
                  {user ? null : (
                    <>
                      <div className="flex ml-6">
                        <span
                          className="h-6 w-px bg-gray-200"
                          aria-hidden="true"
                        />
                      </div>
                    </>
                  )}

                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;

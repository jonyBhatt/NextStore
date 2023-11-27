"use client";
import MaxWidthWrapper from "@/components/max-w-wrapper";
import { ModeToggle } from "@/components/mode-toogle";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const perks = [
    {
      name: "Instant Delivery",
      Icon: ArrowDownToLine,
      description:
        "Get your assets delivered to your email in minutes and download them right way",
    },
    {
      name: "Guaranteed Quality ",
      Icon: CheckCircle,
      description:
        "Every asset on our is verified by our team to ensure our highest quality standards.",
    },
    {
      name: "For the earth ",
      Icon: Leaf,
      description:
        "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
    },
  ];
  return (
    <>
      <MaxWidthWrapper className="relative font-Inter flex justify-center">
        <div className="py-20 flex flex-col max-w-3xl items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tight dark:text-white text-gray-800 sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-primary">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Next
            <span className="text-primary">Store.</span> Every asset on our
            platform is verified by our team to ensure our highest quality
            standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              {/* <Button size="lg">Browse Trending</Button> */}
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        {/** TODO: List products */}
      </MaxWidthWrapper>

      <section className="border-t border-t-secondary bg-secondary mt-6">
        <MaxWidthWrapper className="py-20">
          <motion.div
            initial={{
              y: "1000%",
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"
          >
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full dark:bg-primary bg-slate-400 text-primary-foreground">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900 dark:text-white">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </MaxWidthWrapper>
      </section>
      <div className="fixed bottom-4 left-4">
        <ModeToggle />
      </div>
    </>
  );
}

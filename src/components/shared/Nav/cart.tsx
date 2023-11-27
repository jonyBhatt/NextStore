"use client";

import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetTrigger,
  SheetDescription,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
const Cart = () => {
  const items = 2
  return (
    <Sheet>
      <SheetTrigger className="group flex items-center -ml-2">
        <ShoppingBag
          aria-hidden="true"
          className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-100 group-hover:text-slate-600"
        />
        <span className="ml-2 text-sm font-medium text-primary group-hover:text-gray-400 dark:group-hover:text-primary-foreground">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart(0)</SheetTitle>
        </SheetHeader>
        {items > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">Cart items</div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction</span>
                  <span>1</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
